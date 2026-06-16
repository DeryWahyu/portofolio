'use client';

import {
  Code2,
  Layers,
  Wrench,
  Database,
  Globe,
  Palette,
  Server,
  Cpu,
  type LucideIcon,
} from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import styles from './SkillGroup.module.css';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layers,
  Wrench,
  Database,
  Globe,
  Palette,
  Server,
  Cpu,
};

interface SkillGroupProps {
  title: string;
  icon: string;
  items: string[];
  index?: number;
}

export default function SkillGroup({ title, icon, items, index = 0 }: SkillGroupProps) {
  const IconComponent = iconMap[icon] ?? Code2;

  return (
    <AnimateOnScroll variant="fadeUp" delay={index * 0.1}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <IconComponent size={22} />
          </div>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item} className={styles.item}>
              <span className={styles.itemBorder} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </AnimateOnScroll>
  );
}
