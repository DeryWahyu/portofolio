'use client';

import type { ComponentType, MouseEvent, PointerEvent } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '@/components/icons';
import { socials } from '@/data/socials';
import styles from './Hero.module.css';

const iconMap: Record<string, ComponentType<{ size?: number }>> = {
  Github: GitHubIcon,
  Linkedin: LinkedInIcon,
  Instagram: InstagramIcon,
  Mail,
};

const spring = { stiffness: 140, damping: 28, mass: 0.7 };
const disciplines = ['Web Development', 'Software Development', 'UI/UX Design', 'Video Editor'];

export function Hero() {
  const t = useTranslations('hero');
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const photoX = useSpring(pointerX, spring);
  const photoY = useSpring(pointerY, spring);

  const movePhoto = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== 'mouse' ||
        !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 10);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 10);
  };

  const resetPhoto = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const section = document.querySelector(event.currentTarget.hash);
    if (!section) return;

    event.preventDefault();
    const offset = (document.getElementById('main-navbar')?.offsetHeight ?? 72) + 12;
    window.scrollTo({
      top: Math.max(0, section.getBoundingClientRect().top + window.scrollY - offset),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });

    const heading = section.querySelector('h2');
    if (heading) {
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    }
  };

  return (
    <section className={styles.hero} aria-labelledby="hero-name">
      <div className={`${styles.container} container`}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.greeting}>
              <span className={styles.greetingLine} aria-hidden="true" />
              {t('greeting')}
            </p>

            <h1 className={styles.name} id="hero-name">
              <span>Dery Wahyu</span>{' '}
              <span className={styles.surname}>Perdana<span className={styles.nameDot}>.</span></span>
            </h1>

            <p className={styles.headline}>{t('headline')}</p>
            <p className={styles.subtitle}>{t('subtitle')}</p>

            <div className={styles.actions}>
              <a href="#projects" className={styles.projectLink} onClick={scrollToSection}>
                {t('cta_projects')}
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
              <a
                href="/cv/CV DERY - Hardvard Style.pdf"
                download="CV_Dery_Wahyu_Perdana.pdf"
                className={styles.cvLink}
              >
                <Download size={17} aria-hidden="true" />
                <span>{t('cta_cv')}</span>
              </a>
            </div>

            <div className={styles.socials}>
              <span className={styles.socialLabel}>{t('social_label')}</span>
              <div className={styles.socialLinks}>
                {socials.map((social) => {
                  const Icon = iconMap[social.icon] || Mail;
                  const external = social.url.startsWith('https://');
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className={styles.socialLink}
                      aria-label={social.name}
                      title={social.name}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                    >
                      <span aria-hidden="true"><Icon size={19} /></span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.portrait}>
            <div className={styles.photoComposition}>
              <div className={styles.portraitBackdrop} aria-hidden="true">
                <span className={styles.orbit} />
                <span className={styles.orbitInner} />
                <span className={styles.orbitDot} />
                <span className={styles.cornerMark} />
                <span className={`${styles.cornerMark} ${styles.cornerMarkBottom}`} />
              </div>

              <figure className={styles.photoCard}>
                <div
                  className={styles.photoWindow}
                  onPointerMove={movePhoto}
                  onPointerLeave={resetPhoto}
                  onPointerCancel={resetPhoto}
                >
                  <motion.div
                    className={styles.photoMotion}
                    style={{ x: reducedMotion ? 0 : photoX, y: reducedMotion ? 0 : photoY }}
                  >
                    <Image
                      src="/Dery.png"
                      alt="Dery Wahyu Perdana"
                      fill
                      sizes="(max-width: 479px) 86vw, (max-width: 759px) 400px, (max-width: 1099px) 36vw, 384px"
                      className={styles.photo}
                      priority
                    />
                  </motion.div>
                </div>
                <figcaption className={styles.photoCaption}>
                  <span className={styles.captionMark} aria-hidden="true" />
                  <div>
                    <p className={styles.captionTitle}>{t('portrait_title')}</p>
                    <p className={styles.captionSubtitle}>Universitas Teknologi Yogyakarta</p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.marqueeViewport}>
            <div className={styles.marqueeTrack}>
              <ul className={styles.disciplines} aria-label={t('focus_label')} lang="en">
                {disciplines.map((discipline) => <li key={discipline}>{discipline}</li>)}
              </ul>
              <ul className={`${styles.disciplines} ${styles.marqueeCopy}`} aria-hidden="true">
                {disciplines.map((discipline) => <li key={discipline}>{discipline}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
