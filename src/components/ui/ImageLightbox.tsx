'use client';

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X } from 'lucide-react';
import styles from './ImageLightbox.module.css';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  title: string;
  closeLabel: string;
  loadingLabel: string;
  width: number;
  height: number;
}

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  src,
  alt,
  title,
  closeLabel,
  loadingLabel,
  width,
  height,
}: ImageLightboxProps) {
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const titleId = `lightbox-title-${src.replace(/[^a-zA-Z0-9]/g, '-')}`;

  const close = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;

    returnFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.classList.add('modal-open');

    if (!dialog.open) {
      dialog.showModal();
    }

    const frame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      window.cancelAnimationFrame(frame);
      if (dialog.open) dialog.close();
      document.body.classList.remove('modal-open');

      const returnFocus = returnFocusRef.current;
      if (returnFocus && document.contains(returnFocus)) {
        returnFocus.focus();
      }
    };
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== 'Tab') return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusableElements = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    if (focusableElements.length === 0) return;

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  if (!mounted) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.panel}>
        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.closeButton}
          onClick={close}
          aria-label={closeLabel}
        >
          <X aria-hidden="true" size={24} />
        </button>
        <div className={styles.imageFrame}>
          {!imageLoaded && (
            <div className={styles.loading} role="status">
              {loadingLabel}
            </div>
          )}
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 960px) calc(100vw - 32px), 900px"
            quality={82}
            className={`${styles.image} ${imageLoaded ? '' : styles.imagePending}`}
            onLoad={() => setImageLoaded(true)}
            priority
          />
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
