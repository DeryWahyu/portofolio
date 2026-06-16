'use client';

import { useTranslations } from 'next-intl';
import { Heart } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <p className={styles.copyright}>
          {t('copyright', { year: currentYear })}
        </p>
        <p className={styles.credits}>
          <span>{t('made_with')}</span>
          <Heart size={16} fill="currentColor" className={styles.heart} />
          <span>Next.js & TypeScript</span>
        </p>
      </div>
    </footer>
  );
}
