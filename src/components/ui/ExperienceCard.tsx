'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Award } from 'lucide-react';
import type { Experience } from '@/data/experiences';
import AnimateOnScroll from './AnimateOnScroll';
import ImageLightbox from './ImageLightbox';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

export default function ExperienceCard({ experience, index = 0 }: ExperienceCardProps) {
  const locale = useLocale();
  const t = useTranslations('experience');
  const [showCertificate, setShowCertificate] = useState(false);

  const typeLabel = experience.type === 'magang' ? t('type_magang') : t('type_organisasi');
  const roleText = locale === 'id' ? experience.role.id : experience.role.en;
  const descriptionText = experience.description
    ? (locale === 'id' ? experience.description.id : experience.description.en)
    : '';
  const certificateLabel = t('view_certificate');
  const certificateAlt = experience.certificate
    ? (locale === 'id' ? experience.certificate.alt.id : experience.certificate.alt.en)
    : '';

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
              {descriptionText && <p className={styles.description}>{descriptionText}</p>}
            </div>

            {experience.certificate && (
              <div className={styles.certificateSection}>
                <button
                  type="button"
                  className={styles.certButton}
                  onClick={() => setShowCertificate(true)}
                  aria-label={`${certificateLabel}: ${experience.organization}`}
                >
                  <span className={styles.certPreview}>
                    <Image
                      src={experience.certificate.thumbnail}
                      alt={certificateAlt}
                      fill
                      sizes="(max-width: 640px) calc(100vw - 80px), 240px"
                      quality={72}
                      className={styles.certImage}
                    />
                    <span className={styles.certOverlayHint} aria-hidden="true">
                      <Award size={20} />
                      <span>{certificateLabel}</span>
                    </span>
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </AnimateOnScroll>

      {experience.certificate && showCertificate && (
        <ImageLightbox
          isOpen
          onClose={() => setShowCertificate(false)}
          src={experience.certificate.src}
          alt={certificateAlt}
          title={`${certificateLabel} — ${experience.organization}`}
          closeLabel={t('close_certificate')}
          loadingLabel={t('loading_certificate')}
          width={experience.certificate.width}
          height={experience.certificate.height}
        />
      )}
    </>
  );
}