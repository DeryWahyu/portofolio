'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Mail } from 'lucide-react';
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
  const locale = useLocale();

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
            <p className={styles.text}>
              {locale === 'id'
                ? 'Punya pertanyaan atau ingin bekerjasama dalam proyek baru? Silakan kirimkan pesan melalui form atau hubungi saya langsung via media sosial di bawah ini. Saya akan berusaha membalas secepat mungkin!'
                : "Have a question or want to collaborate on a new project? Please drop a message through the form or reach out directly via my social media links below. I'll get back to you as soon as possible!"}
            </p>

            <h3 className={styles.connectTitle}>{t('or_connect')}</h3>

            <div className={styles.socials}>
              {socials.map((social) => {
                const IconComponent = iconMap[social.icon] || Mail;
                const cleanDisplayUrl = social.url.startsWith('mailto:')
                  ? social.url.replace('mailto:', '')
                  : social.url;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className={styles.socialItem}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.iconWrapper}>
                      <IconComponent size={20} />
                    </div>
                    <div className={styles.socialDetails}>
                      <span className={styles.socialName}>{social.name}</span>
                      <span className={styles.socialUrl}>
                        {cleanDisplayUrl === '#' ? 'derywahyuperdana' : cleanDisplayUrl}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form Column */}
          <div className={styles.formColumn}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
