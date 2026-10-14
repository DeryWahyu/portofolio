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
  screenshots?: string[];
}

export const projects: Project[] = [
  // ==================== WEB PROJECTS ====================
  {
    slug: 'satu-platform',
    title: 'SATU Platform',
    description: {
      id: 'Platform aktivitas talenta universitas yang dirancang untuk membuka peluang dan memberikan panggung berharga bagi mahasiswa bertalenta yang introvert atau pemalu agar karya dan potensinya dapat terwadahi dan dikenal luas.',
      en: 'A university talent activity platform designed to open opportunities and empower introverted or quiet students, helping their latent talents and creative work gain visibility and recognition.',
    },
    techStack: ['Laravel', 'Tailwind CSS', 'MySQL'],
    category: ['web'],
    context: 'lomba',
    status: 'development',
    links: {
      github: 'https://github.com/Alfian57/satu-platform',
    },
    thumbnail: '/proyek/SATU-Platform-Web/SATU-Platform.png',
    orientation: 'landscape',
  },
  {
    slug: 'gamblock-ai-web',
    title: 'Gamblock-AI Web',
    description: {
      id: 'Sistem pemblokiran dan pemantauan judi online berbasis on-device AI. Dilengkapi dashboard analitik pemulihan, mekanisme pattern interrupt, serta social accountability protocol untuk pendampingan berkala.',
      en: 'A web monitoring and intervention platform for online gambling prevention powered by on-device AI. Features recovery analytics dashboards, pattern interrupt mechanisms, and social accountability protocols.',
    },
    techStack: ['Golang', 'Next.js', 'PostgreSQL'],
    category: ['web'],
    context: 'lomba',
    status: 'development',
    links: {
      github: 'https://github.com/Gamblock-AI/Gamblock-AI-Website',
    },
    thumbnail: '/proyek/Gamblock-AI-Web/Gamblock-AI-Web.jpeg',
    orientation: 'landscape',
  },
  {
    slug: 'ruang-tenang',
    title: 'Ruang-Tenang Web',
    description: {
      id: 'Aplikasi web kesehatan mental berbasis chatbot AI dengan sistem gamifikasi. Menyediakan ruang aman bagi pengguna untuk berkonsultasi seputar kesehatan mental dan membangun kebiasaan positif secara konsisten.',
      en: 'An AI-powered mental health web application featuring an intelligent chatbot and gamification system to encourage consistent positive habits.',
    },
    techStack: ['Golang', 'Next.js', 'PostgreSQL', 'Google Gemini AI'],
    category: ['web'],
    context: 'lomba',
    status: 'development',
    links: {
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
      github: 'https://github.com/DeryWahyu/ciks_coffee_web',
    },
    thumbnail: '/proyek/cikscoffee.png',
    orientation: 'landscape',
  },
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

  // ==================== MOBILE PROJECTS ====================
  {
    slug: 'cikscoffee-mobile',
    title: 'Ciks Coffee Mobile',
    description: {
      id: 'Sistem mobile self-ordering kedai kopi yang memungkinkan pelanggan memesan menu langsung dari ponsel, memantau antrean pesanan secara real-time, serta mengecek ketersediaan tempat duduk secara langsung.',
      en: 'A mobile self-ordering coffee shop application enabling customers to place orders from their phones, monitor order status in real-time, and check live table availability.',
    },
    techStack: ['Flutter', 'Firebase', 'Cloudflare'],
    category: ['mobile'],
    context: 'skripsi',
    status: 'development',
    links: {
      github: 'https://github.com/DeryWahyu/ciks_coffee_mobile',
    },
    thumbnail: '/proyek/Cikscoffee-Mobile/Menu-CiksCoffee.jpeg',
    orientation: 'portrait',
    screenshots: [
      '/proyek/Cikscoffee-Mobile/SplashScreen-CiksCoffee.jpeg',
      '/proyek/Cikscoffee-Mobile/Menu-CiksCoffee.jpeg',
      '/proyek/Cikscoffee-Mobile/Login-CiksCoffee.jpeg',
    ],
  },
  {
    slug: 'gamblock-ai-mobile',
    title: 'Gamblock-AI Mobile',
    description: {
      id: 'Aplikasi mobile pelindung berbasis on-device AI untuk mendeteksi paparan konten judi online secara real-time, dilengkapi mekanisme pattern interrupt dan social accountability protocol untuk mencegah kekambuhan (relapse).',
      en: 'A privacy-preserving mobile application running on-device AI to detect online gambling triggers in real-time, featuring pattern interrupt mechanisms and social accountability protocols.',
    },
    techStack: ['Flutter', 'Rule-Based AI', 'LLM', 'Firebase'],
    category: ['mobile'],
    context: 'lomba',
    status: 'development',
    links: {
      github: 'https://github.com/Gamblock-AI/Gamblock-AI-Apps',
    },
    thumbnail: '/proyek/Gamblock-AI-Mobile/Beranda-Gamblock-AI.jpeg',
    orientation: 'portrait',
    screenshots: [
      '/proyek/Gamblock-AI-Mobile/SplashScreen-Gamblock-AI.jpeg',
      '/proyek/Gamblock-AI-Mobile/Beranda-Gamblock-AI.jpeg',
      '/proyek/Gamblock-AI-Mobile/Login-Gamblock-AI.jpeg',
    ],
  },
  {
    slug: 'medsync-mobile',
    title: 'MedSync',
    description: {
      id: 'Aplikasi asisten kesehatan mobile untuk pengingat jadwal minum obat rutin (pill reminder), pencatatan riwayat medis pribadi, serta modul edukasi kesehatan interaktif bagi pasien dan keluarga.',
      en: 'An integrated mobile health companion providing smart medication scheduling reminders, personal health record logging, and interactive medical education modules.',
    },
    techStack: ['Flutter', 'Supabase'],
    category: ['mobile'],
    context: 'tugas',
    status: 'completed',
    links: {
      github: 'https://github.com/AlderaTech/MedSync',
    },
    thumbnail: '/proyek/MedSync-Mobile/Beranda-MedSync.jpeg',
    orientation: 'portrait',
    screenshots: [
      '/proyek/MedSync-Mobile/SplashScreen-MedSync.jpeg',
      '/proyek/MedSync-Mobile/Beranda-MedSync.jpeg',
      '/proyek/MedSync-Mobile/Login-MedSync.jpeg',
    ],
  },
  {
    slug: 'ruang-tenang-mobile',
    title: 'Ruang-Tenang Mobile',
    description: {
      id: 'Aplikasi pendamping kesehatan mental mobile berbasis AI dengan chatbot empati, pelacak suasana hati (mood tracker) harian, serta sistem gamifikasi kebiasaan positif untuk mendukung pemulihan emosional.',
      en: 'An AI-powered mobile mental health companion featuring an empathetic chatbot, daily mood tracking, and positive habit gamification to foster emotional well-being.',
    },
    techStack: ['Flutter', 'Firebase', 'LLM'],
    category: ['mobile'],
    context: 'lomba',
    status: 'development',
    links: {
      github: 'https://github.com/DeryWahyu/ruang-tenang-api-main',
    },
    thumbnail: '/proyek/Ruang-Tenang-Mobile/Beranda-Ruang-Tenang.png',
    orientation: 'portrait',
    screenshots: [
      '/proyek/Ruang-Tenang-Mobile/SplashScreen-Ruang-Tenang.jpeg',
      '/proyek/Ruang-Tenang-Mobile/Beranda-Ruang-Tenang.png',
      '/proyek/Ruang-Tenang-Mobile/Login-Ruang-Tenang.jpeg',
    ],
  },

  // ==================== VIDEO PROJECTS ====================
  {
    slug: 'video-prototipe-gamblock-ai',
    title: 'Prototipe Sistem Gamblock-AI',
    description: {
      id: 'Video demonstrasi alur sistem Gamblock-AI: mengisahkan skenario nyata mahasiswa yang terjerat judi online hingga aksesnya terblokir otomatis oleh on-device AI, pengujian sistem, serta pesan dan testimoni dari para pengguna.',
      en: 'A prototype walkthrough video for Gamblock-AI: depicting a student intervened by on-device AI gambling blocking, comprehensive system testing, and authentic user testimonials.',
    },
    techStack: ['Premiere Pro', 'After Effects'],
    category: ['video'],
    context: 'lomba',
    status: 'completed',
    links: {
      youtube: 'https://youtu.be/GOvhdJBdJrc',
    },
    thumbnail: '/proyek/Luaran Prototipe Gamblock-AI.png',
    orientation: 'landscape',
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
    orientation: 'landscape',
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
    orientation: 'landscape',
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
    orientation: 'landscape',
  },
];
