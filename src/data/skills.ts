export interface SkillGroup {
  title: { id: string; en: string };
  icon: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: {
      id: 'Bahasa Pemrograman',
      en: 'Programming Languages',
    },
    icon: 'Code2',
    items: ['PHP', 'Go', 'JavaScript', 'Python', 'Dart'],
  },
  {
    title: {
      id: 'Framework & Library',
      en: 'Frameworks & Libraries',
    },
    icon: 'Layers',
    items: ['Laravel', 'Next.js', 'React', 'Flutter', 'Tailwind CSS', 'Express.js'],
  },
  {
    title: {
      id: 'Tools & Software',
      en: 'Tools & Software',
    },
    icon: 'Wrench',
    items: [
      'Figma',
      'Antigravity',
      'Visual Studio Code',
      'Premiere Pro',
      'After Effects',
      'Git',
      'Docker',
    ],
  },
  {
    title: {
      id: 'Database & Lainnya',
      en: 'Database & Others',
    },
    icon: 'Database',
    items: ['MySQL', 'DevOps', 'Firebase', 'Supabase', 'Cloudinary'],
  },
];
