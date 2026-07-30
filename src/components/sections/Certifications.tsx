'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Pause, Play } from 'lucide-react';
import { SectionHeading } from '@/components/ui';
import ImageLightbox from '@/components/ui/ImageLightbox';
import { certificates, type Certificate } from '@/data/certificates';
import styles from './Certifications.module.css';

export function Certifications() {
  const locale = useLocale();
  const t = useTranslations('certifications');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const getLocalized = (value: Certificate['title']) =>
    locale === 'id' ? value.id : value.en;

  return (
    <section className={styles.certifications}>
      <div className={`container ${styles.heading}`}>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} align="center" />
        <button
          type="button"
          className={styles.pauseButton}
          onClick={() => setIsPaused((paused) => !paused)}
          aria-pressed={isPaused}
          aria-label={isPaused ? t('resume_marquee') : t('pause_marquee')}
        >
          {isPaused ? (
            <Play aria-hidden="true" size={18} />
          ) : (
            <Pause aria-hidden="true" size={18} />
          )}
          <span>{isPaused ? t('resume') : t('pause')}</span>
        </button>
      </div>

      <div className={styles.marqueeContainer}>
        <div
          className={`${styles.marqueeTrack} ${isPaused ? styles.marqueeTrackPaused : ''}`}
        >
          <ul className={styles.marqueeGroup} aria-label={t('list_label')}>
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
                    <span className={styles.certInner}>
                      <Image
                        src={certificate.thumbnail}
                        alt={alt}
                        fill
                        sizes="(max-width: 640px) 280px, 340px"
                        quality={72}
                        className={styles.certImage}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <ul className={styles.marqueeGroup} aria-hidden="true" inert>
            {certificates.map((certificate) => (
              <li key={`duplicate-${certificate.id}`}>
                <div className={`${styles.certItem} ${styles.certItemDuplicate}`}>
                  <span className={styles.certInner}>
                    <Image
                      src={certificate.thumbnail}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 280px, 340px"
                      quality={72}
                      className={styles.certImage}
                    />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
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