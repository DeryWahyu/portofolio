'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, ArrowUpRight, Award, BriefcaseBusiness, FolderCode, House, Languages, Layers, Menu, Send, UserRound, X } from 'lucide-react';
import { useRouter, usePathname } from '@/i18n/routing';
import { useActiveSection } from '@/hooks/useActiveSection';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { id: 'hero', icon: House },
  { id: 'about', icon: UserRound },
  { id: 'projects', icon: FolderCode },
  { id: 'skills', icon: Layers },
  { id: 'experience', icon: BriefcaseBusiness },
  { id: 'certifications', icon: Award },
  { id: 'contact', icon: Send },
];
const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);

  const activeSection = useActiveSection(SECTION_IDS);
  const languageLabel = t('switch_language', { language: locale === 'id' ? 'English' : 'Bahasa Indonesia' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const dialog = menuRef.current;
    if (!isOpen || !dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (!dialog.open) dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const handleResize = () => {
      if (desktop.matches) setIsOpen(false);
    };
    desktop.addEventListener('change', handleResize);
    return () => desktop.removeEventListener('change', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  const toggleLanguage = () => {
    closeMenu();
    const nextLocale = locale === 'id' ? 'en' : 'id';
    router.replace(pathname, { locale: nextLocale });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      const offset = (document.getElementById('main-navbar')?.offsetHeight ?? 72) + 12;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
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
          <span className={styles.brandMark} aria-hidden="true">DW</span>
          <span className={styles.brandName}>Dery Wahyu <span className={styles.brandSurname}>Perdana</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.navLinks} aria-label={t('menu_title')}>
          {NAV_ITEMS.map(({ id: item }) => {
            const isActive = activeSection === item;
            return (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => scrollToSection(e, item)}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                aria-current={isActive ? 'location' : undefined}
              >
                {t(item)}
              </a>
            );
          })}
        </nav>

        <div className={styles.controls}>
          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            className={`${styles.toggleBtn} ${styles.langBtn}`}
            aria-label={languageLabel}
            title={languageLabel}
          >
            <Languages size={17} aria-hidden="true" />
            <span>{locale === 'id' ? 'en' : 'id'}</span>
          </button>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label={isOpen ? t('close_menu') : t('open_menu')}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-haspopup="dialog"
          >
            {isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <dialog
        ref={menuRef}
        id="mobile-navigation"
        className={styles.mobileMenu}
        aria-labelledby="mobile-navigation-title"
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClick={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.target === event.currentTarget &&
              (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) {
            closeMenu();
          }
        }}
      >
        <div className={styles.mobileMenuHeader}>
          <div>
            <h2 id="mobile-navigation-title" className={styles.mobileMenuTitle}>{t('menu_title')}</h2>
            <p className={styles.mobileMenuSubtitle}>{t('menu_subtitle')}</p>
          </div>
          <button type="button" className={styles.closeMenuButton} onClick={closeMenu} aria-label={t('close_menu')} autoFocus>
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <nav className={styles.mobileNav} aria-label={t('menu_title')}>
          {NAV_ITEMS.map(({ id: item, icon: Icon }) => {
            const isActive = activeSection === item;
            return (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => scrollToSection(e, item)}
                className={`${styles.mobileMenuLink} ${isActive ? styles.active : ''} ${item === 'contact' ? styles.mobileContact : ''}`}
                aria-current={isActive ? 'location' : undefined}
              >
                <span className={styles.mobileLinkIcon}><Icon size={20} aria-hidden="true" /></span>
                <span>{t(item)}</span>
                {item === 'contact' && <ArrowUpRight size={18} aria-hidden="true" />}
              </a>
            );
          })}
        </nav>
        <button type="button" className={styles.mobileLanguage} onClick={toggleLanguage} aria-label={languageLabel}>
          <Languages size={18} aria-hidden="true" />
          <span>{t('language')}</span>
          <span className={styles.languageCode}>{locale === 'id' ? 'EN' : 'ID'}</span>
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </dialog>
    </header>
  );
}
