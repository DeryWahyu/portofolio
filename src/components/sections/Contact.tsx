'use client';

import { useTranslations } from 'next-intl';
import { ArrowUpRight, Code2, Film, Mail, MessageSquareText, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '@/components/icons';
import { SectionHeading, ContactForm } from '@/components/ui';
import { socials } from '@/data/socials';
import styles from './Contact.module.css';

// Dynamic icon mapping helper
const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Github: GitHubIcon,
  Linkedin: LinkedInIcon,
  Instagram: InstagramIcon,
  Mail: Mail,
};

export function Contact() {
  const t = useTranslations('contact');

  return (
    <section className={styles.contact}>
      <div className="container">
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
        />

        <div className={styles.grid}>
          {/* Info & Social Column */}
          <div className={styles.infoColumn}>
            <div className={styles.panelHeader}>
              <span className={styles.panelIcon}><MessageSquareText size={24} aria-hidden="true" /></span>
              <h3 className={styles.panelTitle}>{t('intro_title')}</h3>
            </div>
            <p className={styles.text}>{t('intro_description')}</p>

            <div className={styles.focusAreas}>
              <span><Code2 size={15} aria-hidden="true" />{t('focus_web')}</span>
              <span><Film size={15} aria-hidden="true" />{t('focus_video')}</span>
            </div>

            <h3 className={styles.connectTitle}>{t('or_connect')}</h3>

            <div className={styles.socials}>
              {socials.map((social) => {
                const IconComponent = iconMap[social.icon] || Mail;
                const isEmail = social.url.startsWith('mailto:');
                const handle = isEmail
                  ? social.url.replace('mailto:', '')
                  : (new URL(social.url).pathname.split('/').filter(Boolean).at(-1) ?? social.name);

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className={styles.socialItem}
                    target={isEmail ? undefined : '_blank'}
                    rel={isEmail ? undefined : 'noopener noreferrer'}
                  >
                    <div className={styles.iconWrapper} aria-hidden="true">
                      <IconComponent size={20} />
                    </div>
                    <div className={styles.socialDetails}>
                      <span className={styles.socialName}>{social.name}</span>
                      <span className={styles.socialUrl}>
                        {isEmail
                          ? <>{handle.split('@')[0]}@<wbr />{handle.split('@')[1]}</>
                          : social.name === 'LinkedIn' ? handle : `@${handle}`}
                      </span>
                    </div>
                    <ArrowUpRight size={18} className={styles.socialArrow} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form Column */}
          <div className={styles.formColumn}>
            <div className={styles.panelHeader}>
              <span className={styles.panelIcon}><Send size={23} aria-hidden="true" /></span>
              <h3 className={styles.panelTitle}>{t('form_title')}</h3>
            </div>
            <p className={styles.formDescription}>{t('form_description')}</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
