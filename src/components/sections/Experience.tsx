'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { SectionHeading, ExperienceCard } from '@/components/ui';
import { experiences, type Experience as ExperienceData } from '@/data/experiences';
import styles from './Experience.module.css';

export function Experience() {
  const t = useTranslations('experience');
  const [activeFilter, setActiveFilter] = useState<'all' | ExperienceData['type']>('all');
  const filters = [
    { key: 'all' as const, label: t('filter_all'), count: experiences.length },
    { key: 'magang' as const, label: t('type_magang'), count: experiences.filter((item) => item.type === 'magang').length },
    { key: 'organisasi' as const, label: t('type_organisasi'), count: experiences.filter((item) => item.type === 'organisasi').length },
  ];
  const filteredExperiences = experiences.filter((item) => activeFilter === 'all' || item.type === activeFilter);

  return (
    <section className={styles.experience}>
      <div className="container">
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
        />

        <div className={styles.filters} role="group" aria-label={t('filter_label')}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className={`${styles.filterButton} ${activeFilter === filter.key ? styles.filterActive : ''}`}
              aria-pressed={activeFilter === filter.key}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
              <span className={styles.filterCount}>{filter.count}</span>
            </button>
          ))}
        </div>

        <ol className={styles.list} aria-label={t('list_label')}>
          {filteredExperiences.map((exp, idx) => (
            <li key={exp.organization} className={styles.timelineItem}>
              <ExperienceCard experience={exp} index={idx} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
