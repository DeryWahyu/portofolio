export type ProjectCategory = 'web' | 'mobile' | 'video';
export type ProjectContext = 'lomba' | 'freelance' | 'tugas' | 'skripsi';

export interface Project {
  slug: string;
  title: string;
  description: { id: string; en: string };
  techStack: string[];
  category: ProjectCategory[];
  context: ProjectContext;
  status: 'live' | 'development' | 'completed';
  links: {
    demo?: string;
    github?: string;
    apk?: string;
    youtube?: string;
    instagram?: string;
  };
  thumbnail: string;
}

export const projects: Project[] = [
  {
    slug: 'trinistay',
    title: 'TriniStay',
    description: {
      id: 'Sistem pencarian penginapan di daerah Trini dengan fitur pencarian teman sekamar (roommate). Memudahkan pengguna menemukan hunian yang nyaman sekaligus partner tinggal yang kompatibel melalui algoritma pencocokan cerdas.',
      en: 'An accommodation search platform in the Trini area featuring a smart roommate matching system. Helps users find comfortable housing while connecting them with compatible living partners through an intelligent matching algorithm.',
    },
    techStack: ['Laravel', 'Tailwind CSS', 'MySQL'],
    category: ['web'],
    context: 'tugas',
    status: 'completed',
    links: {
      github: '#',
    },
    thumbnail: '/proyek/trinistay.png',
  },
  {
    slug: 'ruang-tenang',
    title: 'Ruang-Tenang',
    description: {
      id: 'Aplikasi web kesehatan mental berbasis chatbot AI dengan sistem gamifikasi. Menyediakan ruang aman bagi pengguna untuk berkonsultasi seputar kesehatan mental, dilengkapi fitur gamifikasi untuk mendorong kebiasaan positif secara konsisten.',
      en: 'An AI-powered mental health web application featuring an intelligent chatbot and gamification system. Provides a safe space for users to consult about mental health, equipped with gamification features to encourage consistent positive habits.',
    },
    techStack: ['Golang', 'Next.js', 'PostgreSQL', 'Google Gemini AI'],
    category: ['web'],
    context: 'lomba',
    status: 'live',
    links: {
      demo: 'https://ruang-tenang.site',
      github: '#',
    },
    thumbnail: '/proyek/ruang-tenang.png',
  },
  {
    slug: 'cikscoffee',
    title: 'Cikscoffee',
    description: {
      id: 'Sistem manajemen operasional dan transaksi penjualan (POS) terintegrasi berbasis web dan mobile. Solusi all-in-one untuk pengelolaan bisnis kedai kopi mulai dari inventaris, kasir, hingga laporan keuangan real-time.',
      en: 'An integrated web and mobile-based point-of-sale (POS) and operational management system. An all-in-one solution for coffee shop business management, from inventory and cashier operations to real-time financial reporting.',
    },
    techStack: ['Laravel', 'Tailwind CSS', 'Flutter', 'MySQL', 'Firebase'],
    category: ['web', 'mobile'],
    context: 'skripsi',
    status: 'development',
    links: {
      demo: 'https://cikscoffee.my.id',
      github: '#',
    },
    thumbnail: '/proyek/cikscoffee.png',
  },
  {
    slug: 'video-aftermovie-makrab',
    title: 'Aftermovie Makrab HIMATIKA 2024',
    description: {
      id: 'Dokumentasi video resmi (aftermovie) untuk acara Malam Keakraban (Makrab) HIMATIKA 2024. Menangkap momen-momen kebersamaan dan keseruan peserta dengan gaya penyuntingan yang dinamis dan emosional.',
      en: 'Official aftermovie documentation for the HIMATIKA 2024 Familiarity Night (Makrab) event. Captures moments of togetherness and excitement of the participants with a dynamic and emotional editing style.',
    },
    techStack: ['Premiere Pro', 'After Effects'],
    category: ['video'],
    context: 'freelance',
    status: 'completed',
    links: {
      youtube: 'https://youtu.be/WBxKad9PSUI?si=-WTGYgPWMSvolYhC',
    },
    thumbnail: '/proyek/YT-AfterMovie-Makrab.png',
  },
  {
    slug: 'video-company-profile-oracle',
    title: 'Company Profile Kabinet Oracle HIMATIKA',
    description: {
      id: 'Video profil pengenalan Kabinet Oracle HIMATIKA. Menampilkan visi, misi, serta perkenalan setiap divisi kepengurusan dengan transisi yang profesional dan penyampaian visual yang informatif.',
      en: 'Introduction profile video for the Oracle Cabinet of HIMATIKA. Showcases the vision, mission, and introduction of each management division with professional transitions and informative visual delivery.',
    },
    techStack: ['Premiere Pro', 'After Effects'],
    category: ['video'],
    context: 'freelance',
    status: 'completed',
    links: {
      youtube: 'https://youtu.be/_plQNjF9c-I?si=VX3TgAaoDX7Y98r7',
    },
    thumbnail: '/proyek/YT-Company Profil_Oracle.png',
  },
  {
    slug: 'video-podcast-perempuan',
    title: 'Podcast Perempuan di Dunia Teknologi',
    description: {
      id: 'Penyuntingan video untuk episode podcast yang membahas peran dan tantangan perempuan di industri teknologi. Fokus pada kejernihan audio, pergantian angle kamera yang mulus (multicam), dan penambahan elemen visual interaktif.',
      en: 'Video editing for a podcast episode discussing the roles and challenges of women in the tech industry. Focused on audio clarity, smooth multicam angle switching, and the addition of interactive visual elements.',
    },
    techStack: ['Premiere Pro', 'Audition'],
    category: ['video'],
    context: 'freelance',
    status: 'completed',
    links: {
      youtube: 'https://youtu.be/-wNNG6Z7sZY?si=lQBQWMM9w_RkRgED',
    },
    thumbnail: '/proyek/YT-Podcast.png',
  },
];
