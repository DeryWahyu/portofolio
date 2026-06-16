'use client';

import AnimateOnScroll from './AnimateOnScroll';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  year: string;
  title: string;
  institution: string;
  isLast?: boolean;
  index?: number;
}

export default function TimelineItem({
  year,
  title,
  institution,
  isLast = false,
  index = 0,
}: TimelineItemProps) {
  return (
    <AnimateOnScroll
      variant={index % 2 === 0 ? 'slideLeft' : 'slideRight'}
      delay={index * 0.15}
      className={`${styles.item} ${isLast ? styles.isLast : ''} ${index % 2 !== 0 ? styles.alternate : ''}`}
    >
      <div className={styles.line}>
        <span className={styles.dot} />
        {!isLast && <span className={styles.connector} />}
      </div>
      <div className={styles.card}>
        <span className={styles.year}>{year}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.institution}>{institution}</p>
      </div>
    </AnimateOnScroll>
  );
}
