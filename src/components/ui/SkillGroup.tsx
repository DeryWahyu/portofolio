'use client';

import Image from 'next/image';
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
import type { SkillItem } from '@/data/skills';
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
  description: string;
  icon: string;
  items: SkillItem[];
  index?: number;
}

export default function SkillGroup({ title, description, icon, items, index = 0 }: SkillGroupProps) {
  const IconComponent = iconMap[icon] ?? Code2;

  return (
    <AnimateOnScroll variant="fadeUp" delay={index * 0.1} className={styles.group}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <IconComponent size={24} aria-hidden="true" />
          </div>
          <div className={styles.heading}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.name} className={styles.item}>
              <Image
                src={`/icons/skills/${item.icon}.svg`}
                alt=""
                aria-hidden="true"
                width={36}
                height={36}
                unoptimized
                className={styles.techLogo}
              />
              <span className={styles.itemName}>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimateOnScroll>
  );
}
