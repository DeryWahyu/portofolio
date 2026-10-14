export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  id: string;
  title: { id: string; en: string };
  description: { id: string; en: string };
  icon: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: {
      id: 'Bahasa Pemrograman',
      en: 'Programming Languages',
    },
    description: {
      id: 'Fondasi untuk membangun aplikasi web dan mobile.',
      en: 'The foundations of my web and mobile applications.',
    },
    icon: 'Code2',
    items: [
      { name: 'PHP', icon: 'php' },
      { name: 'Go', icon: 'go' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
      { name: 'Dart', icon: 'dart' },
    ],
  },
  {
    id: 'frameworks',
    title: {
      id: 'Framework & Library',
      en: 'Frameworks & Libraries',
    },
    description: {
      id: 'Dari antarmuka hingga sistem di balik aplikasi.',
      en: 'From the interface to the systems behind it.',
    },
    icon: 'Layers',
    items: [
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'React.js', icon: 'react' },
      { name: 'Flutter', icon: 'flutter' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    id: 'tools',
    title: {
      id: 'Tools & Software',
      en: 'Tools & Software',
    },
    description: {
      id: 'Desain antarmuka, coding, dan produksi video.',
      en: 'My toolkit for design, coding, and video production.',
    },
    icon: 'Wrench',
    items: [
      { name: 'Figma', icon: 'figma' },
      { name: 'Visual Studio Code', icon: 'vscode' },
      { name: 'Adobe Premiere Pro', icon: 'premierepro' },
      { name: 'Adobe After Effects', icon: 'aftereffects' },
      { name: 'CapCut', icon: 'capcut' },
    ],
  },
  {
    id: 'platforms',
    title: {
      id: 'Database & Lainnya',
      en: 'Database & Others',
    },
    description: {
      id: 'Data, layanan cloud, dan workflow pengembangan.',
      en: 'Data, cloud services, and development workflows.',
    },
    icon: 'Database',
    items: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Cloudinary', icon: 'cloudinary' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Git', icon: 'git' },
    ],
  },
];
