'use client';

import { useEffect, useState, useCallback } from 'react';

export function useActiveSection(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>('');

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset;

    // Check if we are at the bottom of the page
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10
    ) {
      setActiveSection(sectionIds[sectionIds.length - 1]);
      return;
    }

    for (const sectionId of sectionIds) {
      const element = document.getElementById(sectionId);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  }, [sectionIds, offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Call once initially (deferred to avoid set-state-in-effect)
    const raf = requestAnimationFrame(handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(raf);
    };
  }, [handleScroll]);

  return activeSection;
}
