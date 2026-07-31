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
                  Sebagai mahasiswa Informatika semester 7, saya mengembangkan kemampuan{' '}
                  <span className={styles.highlightText}>Fullstack Development</span> secara menyeluruh,
                  mulai dari merancang antarmuka hingga membangun backend dan mengelola data. Di luar
                  koding, saya juga aktif sebagai{' '}
                  <span className={styles.highlightText}>videografer &amp; video editor</span>, yang
                  memperkuat kreativitas, storytelling, dan perhatian saya terhadap detail visual.
                </>
              ) : (
                <>
                  As a seventh-semester Informatics student, I develop end-to-end{' '}
                  <span className={styles.highlightText}>Fullstack Development</span> skills, from
                  designing interfaces to building backends and managing data. Outside of coding, I am
                  also active as a{' '}
                  <span className={styles.highlightText}>videographer &amp; video editor</span>, which
                  strengthens my creativity, storytelling, and attention to visual detail.
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
