'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  index?: number;
}

const statusLabels: Record<Project['status'], string> = {
  live: 'Live',
  development: 'In Development',
  completed: 'Completed',
};

const contextColors: Record<Project['context'], string> = {
  lomba: 'badgeLomba',
  freelance: 'badgeFreelance',
  tugas: 'badgeTugas',
  skripsi: 'badgeSkripsi',
};

export default function ProjectCard({ project, onClick, index = 0 }: ProjectCardProps) {
  const locale = useLocale();
  const descriptionText = locale === 'id' ? project.description.id : project.description.en;

  return (
    <motion.div
      className={styles.card}
      onClick={() => onClick(project)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -6 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(project);
        }
      }}
    >
      {/* Thumbnail */}
      <div className={styles.thumbnailWrapper}>
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.thumbnailImage}
          />
        ) : (
          <div className={styles.thumbnailPlaceholder}>
            <span className={styles.placeholderText}>{project.title[0]}</span>
          </div>
        )}

      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={`${styles.statusDot} ${styles[project.status]}`} title={statusLabels[project.status]} />
        </div>

        <p className={styles.description}>{descriptionText}</p>

        {/* Tech stack */}
        <div className={styles.techStack}>
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className={styles.techBadge}>
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className={styles.techBadge}>+{project.techStack.length - 4}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
