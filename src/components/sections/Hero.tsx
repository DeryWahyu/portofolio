'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Mail, Terminal, Download } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '@/components/icons';
import { Button } from '@/components/ui';
import { socials } from '@/data/socials';
import styles from './Hero.module.css';

// Dynamic icon mapping helper
const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Github: GitHubIcon,
  Linkedin: LinkedInIcon,
  Instagram: InstagramIcon,
  Mail: Mail,
};

export function Hero() {
  const t = useTranslations('hero');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.hero}>
      {/* Glow effects in the background */}
      <div className={styles.bgBlob1} />
      <div className={styles.bgBlob2} />

      <div className={`${styles.container} container`}>
        {/* Left Content Column */}
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className={styles.greeting} variants={itemVariants}>
            {t('greeting')}
          </motion.span>

          <motion.h1 className={styles.name} variants={itemVariants}>
            Dery Wahyu Perdana
          </motion.h1>

          <motion.h2 className={styles.headline} variants={itemVariants}>
            Backend Developer &amp; Video Editor
          </motion.h2>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            {t('subtitle')}
          </motion.p>

          <motion.div className={styles.actions} variants={itemVariants}>
            <Button
              variant="primary"
              size="lg"
              onClick={handleScrollToProjects}
            >
              {t('cta_projects')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/files/cv.pdf"
              icon={<Download size={18} />}
            >
              {t('cta_cv')}
            </Button>
          </motion.div>

          <motion.div className={styles.socials} variants={itemVariants}>
            {socials.map((social) => {
              const IconComponent = iconMap[social.icon] || Mail;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className={styles.socialLink}
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Graphic/Avatar Column */}
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <div className={styles.photoFrame}>
            <div className={styles.photoPlaceholder} style={{ overflow: 'hidden' }}>
              <Image 
                src="/Dery.png" 
                alt="Dery Wahyu Perdana" 
                width={400} 
                height={400} 
                style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '100%', borderRadius: 'inherit' }} 
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
