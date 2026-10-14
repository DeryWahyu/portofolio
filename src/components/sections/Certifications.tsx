'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight, ArrowUpRight, Award } from 'lucide-react';
import { SectionHeading } from '@/components/ui';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { certificates, type Certificate } from '@/data/certificates';
import styles from './Certifications.module.css';

export function Certifications() {
  const locale = useLocale();
  const t = useTranslations('certifications');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const galleryRef = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState({ start: 0, visible: 1 });

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const updatePosition = () => {
      const firstCard = gallery.firstElementChild as HTMLElement | null;
      if (!firstCard) return;
      const gap = parseFloat(getComputedStyle(gallery).columnGap) || 0;
      const step = firstCard.getBoundingClientRect().width + gap;
      if (step <= 0) return;
      const visible = Math.max(1, Math.round((gallery.clientWidth + gap) / step));
      const start = Math.max(0, Math.min(certificates.length - visible, Math.round(gallery.scrollLeft / step)));
      setPosition((previous) => previous.start === start && previous.visible === visible ? previous : { start, visible });
    };

    const observer = new ResizeObserver(updatePosition);
    observer.observe(gallery);
    gallery.addEventListener('scroll', updatePosition, { passive: true });
    const frame = requestAnimationFrame(updatePosition);
    return () => {
      observer.disconnect();
      gallery.removeEventListener('scroll', updatePosition);
      cancelAnimationFrame(frame);
    };
  }, []);

  const moveGallery = (direction: -1 | 1) => {
    const gallery = galleryRef.current;
    const firstCard = gallery?.firstElementChild as HTMLElement | null;
    if (!gallery || !firstCard) return;
    const gap = parseFloat(getComputedStyle(gallery).columnGap) || 0;
    gallery.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap) * position.visible,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  const getLocalized = (value: Certificate['title']) =>
    locale === 'id' ? value.id : value.en;

  return (
    <section className={styles.certifications}>
      <div className="container">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} align="center" />

        <div className={styles.galleryToolbar}>
          <div className={styles.gallerySummary}>
            <span className={styles.summaryIcon}><Award size={22} aria-hidden="true" /></span>
            <div>
              <h3 className={styles.galleryTitle}>{t('gallery_title')}</h3>
              <p className={styles.galleryRange} aria-live="polite" aria-atomic="true">
                {t('gallery_range', { from: position.start + 1, to: Math.min(certificates.length, position.start + position.visible), total: certificates.length })}
              </p>
            </div>
          </div>
          <div className={styles.galleryControls}>
            <button type="button" className={styles.arrowButton} onClick={() => moveGallery(-1)} disabled={position.start === 0} aria-label={t('previous')} aria-controls="certificate-gallery">
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <button type="button" className={styles.arrowButton} onClick={() => moveGallery(1)} disabled={position.start + position.visible >= certificates.length} aria-label={t('next')} aria-controls="certificate-gallery">
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul ref={galleryRef} id="certificate-gallery" className={styles.gallery} aria-label={t('list_label')}>
          {certificates.map((certificate) => {
            const title = getLocalized(certificate.title);
            const alt = getLocalized(certificate.alt);

            return (
              <li key={certificate.id}>
                <button
                  type="button"
                  className={styles.certItem}
                  onClick={() => setSelectedCertificate(certificate)}
                  aria-label={`${t('open_certificate')}: ${title}`}
                >
                  <span className={styles.certPreview}>
                    <Image
                      src={certificate.thumbnail}
                      alt={alt}
                      fill
                      sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) 45vw, 400px"
                      quality={72}
                      className={styles.certImage}
                    />
                  </span>
                  <span className={styles.certContent}>
                    <span className={styles.certMeta}>
                      <span className={styles.certBadge}><Award size={14} aria-hidden="true" />{t('document_label')}</span>
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </span>
                    <span className={styles.certTitle}>{title}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <p className={styles.galleryHint}>{t('gallery_hint')}</p>
      </div>

      {selectedCertificate && (
        <ImageLightbox
          isOpen
          onClose={() => setSelectedCertificate(null)}
          src={selectedCertificate.src}
          alt={getLocalized(selectedCertificate.alt)}
          title={getLocalized(selectedCertificate.title)}
          closeLabel={t('close_lightbox')}
          loadingLabel={t('loading_certificate')}
          width={selectedCertificate.width}
          height={selectedCertificate.height}
        />
      )}
    </section>
  );
}
