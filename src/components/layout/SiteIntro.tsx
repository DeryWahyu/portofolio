'use client';

import { useEffect, useState, type ReactNode } from 'react';
import styles from './SiteIntro.module.css';

const MAX_WAIT = 3200;
const EXIT_DURATION = 320;

export function SiteIntro({ children, label }: { children: ReactNode; label: string }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'leaving' | 'finished'>('loading');

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const minDuration = reducedMotion ? 450 : 1100;
    const portrait = document.querySelector<HTMLImageElement>('#hero img');
    const startedAt = performance.now();
    let portraitReady = !portrait;
    let frame = 0;
    let holdTimer = 0;
    let exitTimer = 0;

    if (portrait) {
      void portrait.decode().catch(() => {}).finally(() => { portraitReady = true; });
    }

    const advance = (now: number) => {
      const elapsed = Math.max(0, now - startedAt);

      if (elapsed >= MAX_WAIT || (portraitReady && elapsed >= minDuration)) {
        setProgress(100);
        holdTimer = window.setTimeout(() => {
          setPhase('leaving');
          exitTimer = window.setTimeout(() => setPhase('finished'), reducedMotion ? 0 : EXIT_DURATION);
        }, 120);
        return;
      }

      const fraction = Math.min(elapsed / minDuration, 1);
      setProgress(Math.floor(96 * (1 - (1 - fraction) ** 1.6)));
      frame = requestAnimationFrame(advance);
    };

    frame = requestAnimationFrame(advance);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(holdTimer);
      window.clearTimeout(exitTimer);
    };
  }, []);

  return (
    <>
      {phase !== 'finished' && (
        <div className={styles.overlay} data-phase={phase} aria-hidden={phase === 'leaving' || undefined}>
          <div className={styles.counter} role="progressbar" aria-label={label} aria-valuenow={progress}>
            <div className={styles.percentage} aria-hidden="true">
              {progress}<span className={styles.percentSign}>%</span>
            </div>
            <div className={styles.progressDetails} aria-hidden="true">
              <div className={styles.track}>
                <div className={styles.fill} style={{ transform: `scaleX(${progress / 100})` }} />
              </div>
              <p className={styles.label}>{label}</p>
            </div>
          </div>
        </div>
      )}
      <div className={styles.site}>{children}</div>
    </>
  );
}
