'use client';

import { useLocale, useTranslations } from 'next-intl';
import { SectionHeading, SkillGroup } from '@/components/ui';
import { skillGroups } from '@/data/skills';
import styles from './Skills.module.css';

export function Skills() {
  const t = useTranslations('skills');
  const locale = useLocale();

  return (
    <section className={styles.skills}>
      <div className="container">
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
        />

        <div className={styles.grid}>
          {skillGroups.map((group, idx) => {
            const groupTitle = locale === 'id' ? group.title.id : group.title.en;
            const groupDescription = locale === 'id' ? group.description.id : group.description.en;
            return (
              <SkillGroup
                key={group.id}
                title={groupTitle}
                description={groupDescription}
                icon={group.icon}
                items={group.items}
                index={idx}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
