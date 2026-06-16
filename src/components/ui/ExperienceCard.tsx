'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { X, Award } from 'lucide-react';
import type { Experience } from '@/data/experiences';
import AnimateOnScroll from './AnimateOnScroll';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

export default function ExperienceCard({ experience, index = 0 }: ExperienceCardProps) {
  const locale = useLocale();
  const t = useTranslations('experience');
  const [showCert, setShowCert] = useState(false);

  const typeLabel = experience.type === 'magang' ? t('type_magang') : t('type_organisasi');
  const roleText = locale === 'id' ? experience.role.id : experience.role.en;
  const descriptionText = experience.description
    ? (locale === 'id' ? experience.description.id : experience.description.en)
    : '';
  const certLabel = locale === 'id' ? 'Lihat Sertifikat' : 'View Certificate';

  return (
    <>
      <AnimateOnScroll variant="fadeUp" delay={index * 0.1}>
        <div className={`${styles.card} ${styles[experience.type]}`}>
          <div className={styles.cardContent}>
            <div className={styles.textContent}>
              <div className={styles.header}>
                <h3 className={styles.organization}>{experience.organization}</h3>
                <span className={`${styles.typeBadge} ${styles[`badge_${experience.type}`]}`}>
                  {typeLabel}
                </span>
              </div>
              <p className={styles.role}>{roleText}</p>
              <span className={styles.period}>{experience.period}</span>
              {descriptionText && (
                <p className={styles.description}>{descriptionText}</p>
              )}
            </div>

            {/* Certificate preview */}
            {experience.certificate && (
              <div className={styles.certificateSection}>
                <button
                  className={styles.certButton}
                  onClick={() => setShowCert(true)}
                  aria-label={certLabel}
                >
                  <div className={styles.certPreview}>
                    <Image
                      src={experience.certificate}
                      alt={`${experience.organization} certificate`}
                      fill
                      sizes="(max-width: 640px) 100vw, 240px"
                      style={{ objectFit: 'cover' }}
                      className={styles.certImage}
                      unoptimized
                    />
                    <div className={styles.certOverlayHint}>
                      <Award size={20} />
                      <span>{certLabel}</span>
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Lightbox modal */}
      {experience.certificate && showCert && (
        <div className={styles.lightbox} onClick={() => setShowCert(false)}>
          <button
            className={styles.lightboxClose}
            onClick={() => setShowCert(false)}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={experience.certificate}
              alt={`${experience.organization} certificate`}
              width={900}
              height={640}
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
              className={styles.lightboxImage}
              unoptimized
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
