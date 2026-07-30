import { FileQuestion, Home } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import styles from './not-found.module.css';

export default async function NotFound() {
  const t = await getTranslations('notFound');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <div className={styles.iconWrapper}>
          <FileQuestion size={40} />
        </div>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.description}>{t('description')}</p>
        <Link href="/" className={styles.button}>
          <Home size={18} />
          <span>{t('backHome')}</span>
        </Link>
      </div>
    </div>
  );
}
