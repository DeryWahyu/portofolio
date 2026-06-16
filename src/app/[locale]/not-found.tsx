import { FileQuestion, Home } from 'lucide-react';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <div className={styles.iconWrapper}>
          <FileQuestion size={40} />
        </div>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.description}>
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className={styles.button}>
          <Home size={18} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
