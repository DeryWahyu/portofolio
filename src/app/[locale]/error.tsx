'use client';

import { AlertTriangle, RefreshCw } from 'lucide-react';
import styles from './error.module.css';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <AlertTriangle size={40} />
        </div>
        <h2 className={styles.title}>Oops! Something went wrong</h2>
        <p className={styles.description}>
          An unexpected error occurred. Please try again or refresh the page.
        </p>
        <button onClick={() => reset()} className={styles.button}>
          <RefreshCw size={18} />
          <span>Try Again</span>
        </button>
      </div>
    </div>
  );
}
