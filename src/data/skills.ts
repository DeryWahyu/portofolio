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
    items: ['Laravel', 'Next.js', 'React.js', 'Flutter', 'Tailwind CSS'],
  },
  {
    title: {
      id: 'Tools & Software',
      en: 'Tools & Software',
    },
    icon: 'Wrench',
    items: [
      'Figma',
      'Visual Studio Code',
      'Adobe Premiere Pro',
      'Adobe After Effects',
      'Capcut',
    ],
  },
  {
    title: {
      id: 'Database & Lainnya',
      en: 'Database & Others',
    },
    icon: 'Database',
    items: ['MySQL', 'Firebase', 'Supabase', 'Cloudinary', 'Docker','Git'],
  },
];
