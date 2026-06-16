'use client';

import { useEffect, useCallback, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { X, ExternalLink, Download, Play } from 'lucide-react';
import { GitHubIcon, InstagramIcon } from '@/components/icons';
import type { Project } from '@/data/projects';
import Button from './Button';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// contextColors dihapus karena tidak digunakan

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.92, y: 20 },
};

// SSR-safe mounted check using useSyncExternalStore
function subscribe() {
  return () => {};
}

function getSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const t = useTranslations('projects');
  const locale = useLocale();
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleEscape]);

  if (!mounted) return null;

  const descriptionText = project
    ? (locale === 'id' ? project.description.id : project.description.en)
    : '';

  const watchVideoText = locale === 'id' ? 'Tonton Video' : 'Watch Video';

  return createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className={styles.overlay}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
          >
            {/* Close Button */}
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label={t('modal_close')}
            >
              <X size={20} />
            </button>

            {/* Thumbnail */}
            <div className={styles.thumbnailWrapper}>
              {project.thumbnail ? (
                <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '260px' }}>
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="700px"
                    style={{ objectFit: 'cover' }}
                    className={styles.thumbnailImage}
                    priority
                    unoptimized // using unoptimized for ease of local assets without next dev warning
                  />
                </div>
              ) : (
                <div className={styles.thumbnailPlaceholder}>
                  <span className={styles.placeholderText}>{project.title[0]}</span>
                </div>
              )}
            </div>

            {/* Scrollable Content */}
            <div className={styles.body}>
              {/* Title + Badges */}
              <div className={styles.titleRow}>
                <h2 className={styles.title}>{project.title}</h2>
                <div className={styles.badges}>

                  <span className={`${styles.statusBadge} ${styles[project.status]}`}>
                    <span className={styles.statusDot} />
                    {t(`status_${project.status}`)}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className={styles.description}>{descriptionText}</p>

              {/* Tech Stack */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  {project.category.includes('video') ? 'TOOLS/SOFTWARE' : t('tech_stack')}
                </h3>
                <div className={styles.techList}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              {(project.links.demo || project.links.github || project.links.apk || project.links.youtube || project.links.instagram) && (
                <div className={styles.actions}>
                  {project.links.demo && (
                    <Button
                      variant="primary"
                      size="sm"
                      href={project.links.demo}
                      icon={<ExternalLink size={16} />}
                    >
                      {t('live_demo')}
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={project.links.github}
                      icon={<GitHubIcon size={16} />}
                    >
                      {t('source_code')}
                    </Button>
                  )}
                  {project.links.apk && (
                    <Button
                      variant="secondary"
                      size="sm"
                      href={project.links.apk}
                      icon={<Download size={16} />}
                    >
                      {t('download_apk')}
                    </Button>
                  )}
                  {project.links.youtube && (
                    <Button
                      variant="primary"
                      size="sm"
                      href={project.links.youtube}
                      icon={<Play size={16} />}
                      className={styles.youtubeBtn}
                    >
                      {watchVideoText}
                    </Button>
                  )}
                  {project.links.instagram && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={project.links.instagram}
                      icon={<InstagramIcon size={16} />}
                    >
                      Instagram
                    </Button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
