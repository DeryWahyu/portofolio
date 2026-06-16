'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import { SectionHeading } from '@/components/ui';
import styles from './Certifications.module.css';

const certificates = [
  '35-DERY WAHYU PERDANA.png',
  'Dery Wahyu Perdana - CROSS.png',
  'Screenshot 2024-06-20 173515.png',
  'Screenshot 2024-06-20 173538.png',
  'Screenshot 2024-06-20 173621.png',
  'Screenshot 2024-06-20 173644.png',
  'Screenshot 2024-06-20 173706.png',
  'Screenshot 2024-06-20 173839.png',
  'Screenshot 2024-06-20 173902.png',
  'Screenshot 2026-01-28 230759.png',
  'Screenshot 2026-01-28 232331.png',
  'Screenshot 2026-01-28 232415.png',
  'Screenshot 2026-06-16 122210.png',
  'Screenshot 2026-06-16 122243.png',
  'Screenshot 2026-06-16 122300.png'
];

export function Certifications() {
  const t = useTranslations('certifications');
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section className={styles.certifications}>
      <div className="container" style={{ marginBottom: '2.5rem' }}>
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
        />
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {/* Render 2 kali untuk infinite scroll effect */}
          {[...certificates, ...certificates].map((cert, index) => (
            <div 
              key={index} 
              className={styles.certItem}
              onClick={() => setSelectedCert(cert)}
            >
              <div className={styles.certInner}>
                <Image 
                  src={`/certificates/${cert}`}
                  alt="Certificate"
                  fill
                  sizes="(max-width: 640px) 260px, 320px"
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div className={styles.lightbox} onClick={() => setSelectedCert(null)}>
          <button
            className={styles.lightboxClose}
            onClick={() => setSelectedCert(null)}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/certificates/${selectedCert}`}
              alt="Certificate full view"
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
    </section>
  );
}
