'use client';

import { useLocale, useTranslations } from 'next-intl';
import { GraduationCap } from 'lucide-react';
import { SectionHeading, TimelineItem } from '@/components/ui';
import styles from './About.module.css';

export function About() {
  const t = useTranslations('about');
  const locale = useLocale();

  // Localized education timeline data
  const educationTimeline = locale === 'id'
    ? [
        {
          year: '2023 – Sekarang',
          title: 'S1 Informatika',
          institution: 'Universitas Teknologi Yogyakarta',
        },
        {
          year: '2020 – 2023',
          title: 'SMK Jurusan Multimedia',
          institution: 'SMK Negeri 1 Gading Rejo',
        },
      ]
    : [
        {
          year: '2023 – Present',
          title: 'B.S. in Informatics',
          institution: 'Yogyakarta University of Technology',
        },
        {
          year: '2020 – 2023',
          title: 'Vocational High School (Multimedia)',
          institution: 'SMK Negeri 1 Gading Rejo',
        },
      ];

  return (
    <section className={styles.about}>
      <div className="container">
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
        />

        <div className={styles.grid}>
          {/* Bio Column */}
          <div className={styles.bioColumn}>
            <p className={styles.bioText}>
              {t('bio')}
            </p>
            <p className={styles.bioText}>
              {locale === 'id' ? (
                <>
                  Sebagai mahasiswa Informatika semester 6, saya memfokuskan diri pada bidang{' '}
                  <span className={styles.highlightText}>Backend Development</span>, namun memiliki kemampuan
                  yang solid dalam <span className={styles.highlightText}>Frontend Development (Fullstack)</span>.
                  Selain koding, saya juga aktif berkarya sebagai seorang{' '}
                  <span className={styles.highlightText}>videografer &amp; video editor</span> profesional,
                  yang melatih kreativitas dan perhatian saya terhadap detail visual.
                </>
              ) : (
                <>
                  As a 6th-semester Informatics student, I focus on{' '}
                  <span className={styles.highlightText}>Backend Development</span>, while maintaining solid skills
                  in <span className={styles.highlightText}>Frontend Development (Fullstack)</span>.
                  Outside of coding, I am also active as a professional{' '}
                  <span className={styles.highlightText}>videographer &amp; video editor</span>,
                  which trains my creativity and attention to visual detail.
                </>
              )}
            </p>
          </div>

          {/* Education Timeline Column */}
          <div className={styles.timelineColumn}>
            <h3 className={styles.timelineTitle}>
              <GraduationCap className={styles.timelineIcon} size={24} />
              <span>{t('education_title')}</span>
            </h3>

            <div className={styles.timelineContainer}>
              {educationTimeline.map((edu, idx) => (
                <TimelineItem
                  key={idx}
                  year={edu.year}
                  title={edu.title}
                  institution={edu.institution}
                  isLast={idx === educationTimeline.length - 1}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
