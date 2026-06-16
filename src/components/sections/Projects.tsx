'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading, ProjectCard, ProjectModal } from '@/components/ui';
import { projects, Project, ProjectCategory } from '@/data/projects';
import styles from './Projects.module.css';

type FilterCategory = 'all' | ProjectCategory;

export function Projects() {
  const t = useTranslations('projects');
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleFilterChange = (filter: FilterCategory) => {
    setActiveFilter(filter);
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category.includes(activeFilter as ProjectCategory);
  });

  const filterTabs: { key: FilterCategory; label: string }[] = [
    { key: 'all', label: t('filter_all') },
    { key: 'web', label: t('filter_web') },
    { key: 'mobile', label: t('filter_mobile') },
    { key: 'video', label: t('filter_video') },
  ];

  return (
    <section className={styles.projects}>
      <div className="container">
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
        />

        {/* Filter Navigation */}
        <div className={styles.filters}>
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleFilterChange(tab.key)}
                className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                style={{ height: '100%' }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                  index={idx}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
