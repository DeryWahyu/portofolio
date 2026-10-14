'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowUpRight, Award, BriefcaseBusiness, Building2, CalendarDays, UsersRound } from 'lucide-react';
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
  const TypeIcon = experience.type === 'magang' ? BriefcaseBusiness : UsersRound;
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
      <AnimateOnScroll variant="fadeUp" delay={index * 0.1} className={`${styles.entry} ${styles[experience.type]}`}>
        <span className={styles.timelineMarker} aria-hidden="true">
          <TypeIcon size={22} />
        </span>
        <article className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.textContent}>
              <div className={styles.header}>
                <span className={styles.typeBadge}>
                  <TypeIcon size={14} aria-hidden="true" />
                  {typeLabel}
                </span>
                <span className={styles.period}>
                  <CalendarDays size={15} aria-hidden="true" />
                  <span>{experience.period}</span>
                </span>
              </div>
              <h3 className={styles.role}>{roleText}</h3>
              <p className={styles.organization}>
                <Building2 size={16} aria-hidden="true" />
                <span>{experience.organization}</span>
              </p>
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
                      sizes="(max-width: 640px) calc(100vw - 120px), 220px"
                      quality={72}
                      className={styles.certImage}
                    />
                  </span>
                  <span className={styles.certFooter}>
                    <Award size={16} aria-hidden="true" />
                    <span>{certificateLabel}</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </button>
              </div>
            )}
          </div>
        </article>
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
