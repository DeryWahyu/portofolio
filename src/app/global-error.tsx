'use client';

import styles from './GlobalError.module.css';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.iconWrapper}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h1 className={styles.title}>Terjadi Kesalahan</h1>
            <p className={styles.description}>
              Maaf, terjadi kesalahan yang tidak terduga. Silakan coba lagi.
            </p>
            <button onClick={() => reset()} className={styles.button}>
              Coba Lagi
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
