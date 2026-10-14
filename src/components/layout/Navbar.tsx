'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Languages } from 'lucide-react';
import { useRouter, usePathname } from '@/i18n/routing';
import { useActiveSection } from '@/hooks/useActiveSection';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  'hero',
  'about',
  'projects',
  'skills',
  'experience',
  'certifications',
  'contact',
];

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useActiveSection(NAV_ITEMS);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleLanguage = () => {
    const nextLocale = locale === 'id' ? 'en' : 'id';
    router.replace(pathname, { locale: nextLocale });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar + some padding
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
    <header
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      id="main-navbar"
    >
      <div className={`${styles.container} container`}>
        <a href="#hero" className={styles.logo} onClick={(e) => scrollToSection(e, 'hero')}>
          Dery Wahyu Perdana
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.navLinks}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item;
            return (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => scrollToSection(e, item)}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                {t(item)}
              </a>
            );
          })}
        </nav>

        <div className={styles.controls}>
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={`${styles.toggleBtn} ${styles.langBtn}`}
            aria-label="Toggle language"
            title="Switch Language"
          >
            <Languages size={18} style={{ marginRight: '2px' }} />
            <span>{locale === 'id' ? 'en' : 'id'}</span>
          </button>

          {/* Hamburger Menu Button */}
          <button
            className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item;
            return (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => scrollToSection(e, item)}
                className={`${styles.mobileMenuLink} ${isActive ? styles.active : ''}`}
              >
                {t(item)}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
