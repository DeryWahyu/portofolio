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
  orientation?: 'landscape' | 'portrait';
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
      github: 'https://github.com/DeryWahyu/triniStay',
    },
    thumbnail: '/proyek/trinistay.png',
    orientation: 'landscape',
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
      github: 'https://github.com/DeryWahyu/ruang-tenang-api-main',
    },
    thumbnail: '/proyek/ruang-tenang.png',
    orientation: 'landscape',
  },
  {
    slug: 'cikscoffee',
    title: 'Ciks Coffee Web',
    description: {
      id: 'Sistem web manajemen operasional dan transaksi penjualan (POS) terintegrasi untuk bisnis kedai kopi Ciks Coffee, mulai dari manajemen inventaris, kasir, hingga laporan analitik keuangan.',
      en: 'An integrated web-based POS and operational management system for Ciks Coffee business, from inventory and cashier workflows to financial analytics.',
    },
    techStack: ['Laravel', 'Tailwind CSS', 'MySQL', 'Firebase'],
    category: ['web'],
    context: 'skripsi',
    status: 'development',
    links: {
      demo: 'https://cikscoffee.my.id',
      github: 'https://github.com/DeryWahyu/ciks_coffee_web',
    },
    thumbnail: '/proyek/cikscoffee.png',
    orientation: 'landscape',
  },
  {
    slug: 'cikscoffee-mobile',
    title: 'Ciks Coffee Mobile',
    description: {
      id: 'Aplikasi kasir (POS) dan self-ordering kopi berbasis Flutter untuk barista dan pelanggan Ciks Coffee. Terintegrasi cloud untuk transaksi instan dan pencetakan struk digital.',
      en: 'A Flutter-based POS and self-ordering coffee application for Ciks Coffee baristas and customers. Cloud-connected for instant orders and digital receipts.',
    },
    techStack: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    category: ['mobile'],
    context: 'skripsi',
    status: 'development',
    links: {
      apk: 'https://cikscoffee.my.id',
      github: 'https://github.com/DeryWahyu/ciks_coffee_web',
    },
    thumbnail: '/proyek/Mobile-Cikscoffee.jpeg',
    orientation: 'portrait',
  },
  {
    slug: 'ruang-tenang-mobile',
    title: 'Ruang-Tenang Mobile',
    description: {
      id: 'Aplikasi pendamping kesehatan mental mobile dengan fitur mood tracker harian, konseling AI 24/7 dengan chatbot empati, serta panduan meditasi dan pernapasan.',
      en: 'A mobile mental health companion app featuring daily mood tracking, 24/7 empathetic AI counseling, and guided breathing meditation sessions.',
    },
    techStack: ['React Native', 'TypeScript', 'Gemini AI', 'Tailwind'],
    category: ['mobile'],
    context: 'lomba',
    status: 'completed',
    links: {
      demo: 'https://ruang-tenang.site',
      github: 'https://github.com/DeryWahyu/ruang-tenang-api-main',
    },
    thumbnail: '/proyek/mobile-ruang-tenang.png',
    orientation: 'portrait',
  },
  {
    slug: 'trinistay-mobile',
    title: 'TriniStay Mobile',
    description: {
      id: 'Aplikasi mobile pencari kos dan teman sekamar di Trini. Dilengkapi algoritma kecocokan gaya hidup, eksplorasi peta kos interaktif, dan chat langsung antar pencari kos.',
      en: 'A mobile boarding house and roommate finder in Trini. Features lifestyle compatibility matching, interactive map exploration, and direct in-app chat.',
    },
    techStack: ['Flutter', 'Dart', 'Google Maps API', 'Supabase'],
    category: ['mobile'],
    context: 'tugas',
    status: 'completed',
    links: {
      github: 'https://github.com/DeryWahyu/triniStay',
    },
    thumbnail: '/proyek/mobile-trinistay.png',
    orientation: 'portrait',
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
