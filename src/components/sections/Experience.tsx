'use client';

import { useTranslations } from 'next-intl';
import { SectionHeading, ExperienceCard } from '@/components/ui';
import { experiences } from '@/data/experiences';
import styles from './Experience.module.css';

export function Experience() {
  const t = useTranslations('experience');

  return (
    <section className={styles.experience}>
      <div className="container">
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
        />

        <div className={styles.list}>
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={`${exp.organization}-${idx}`}
              experience={exp}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
