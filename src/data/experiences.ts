export interface Experience {
  organization: string;
  role: { id: string; en: string };
  period: string;
  type: 'organisasi' | 'magang';
  description?: { id: string; en: string };
  certificate?: string; // path to certificate image in /public, e.g. '/certificates/umkm-hebat.jpg'
}

export const experiences: Experience[] = [
  {
    organization: 'UMKM Hebat',
    role: {
      id: 'Video Editor & Web LMS',
      en: 'Video Editor & Web LMS',
    },
    period: 'Juni 2025 – Oktober 2025',
    type: 'magang',
    description: {
      id: 'Magang berbayar sebagai video editor dan pengembang web LMS. Bertanggung jawab dalam produksi konten video edukatif serta pengembangan platform Learning Management System untuk mendukung digitalisasi UMKM.',
      en: 'Paid internship as a video editor and web LMS developer. Responsible for producing educational video content and developing a Learning Management System platform to support MSME digitalization.',
    },
    certificate: '/proyek/INTERN UMKM HEBAT.png',
  },
  {
    organization: 'Fakultas Sains & Teknologi UTY',
    role: {
      id: 'Koordinator PDD Event Kunjungan Industri',
      en: 'PDD Coordinator for Industrial Visit Event',
    },
    period: 'November 2024 – Juli 2025',
    type: 'organisasi',
    description: {
      id: 'Mengkoordinasi pelaksanaan event kunjungan industri tingkat fakultas, mulai dari perencanaan, komunikasi dengan mitra industri, hingga eksekusi acara untuk mahasiswa Fakultas Sains & Teknologi.',
      en: 'Coordinated the execution of faculty-level industrial visit events, from planning and industry partner communication to event execution for students of the Faculty of Science & Technology.',
    },
    certificate: '/proyek/Dery Wahyu Perdana - Koor PDD.png',
  },
  {
    organization: 'HIMATIKA (Himpunan Mahasiswa Informatika)',
    role: {
      id: 'Admin & Video Editor',
      en: 'Admin & Video Editor',
    },
    period: 'September 2024 – Sekarang',
    type: 'organisasi',
    description: {
      id: 'Mengelola konten administratif dan produksi video untuk himpunan mahasiswa informatika. Menciptakan konten visual yang menarik untuk meningkatkan engagement dan branding organisasi.',
      en: 'Managing administrative content and video production for the informatics student association. Creating engaging visual content to enhance organizational engagement and branding.',
    },
    certificate: '/proyek/Kominfo-Video Editor.png',
  },
  {
    organization: 'IKMI (Ikatan Mahasiswa Islam UTY)',
    role: {
      id: 'Graphic Designer & Video Editor',
      en: 'Graphic Designer & Video Editor',
    },
    period: 'September 2024 – September 2025',
    type: 'organisasi',
    description: {
      id: 'Bertanggung jawab dalam pembuatan desain grafis dan editing video untuk kebutuhan publikasi dan event organisasi keislaman kampus.',
      en: 'Responsible for creating graphic designs and editing videos for publication and event needs of the campus Islamic student organization.',
    },
    certificate: '/proyek/Ikmi.png',
  },
  {
    organization: 'Sewucomp',
    role: {
      id: 'Graphic Designer, Animator, & Video Editor',
      en: 'Graphic Designer, Animator, & Video Editor',
    },
    period: 'Januari 2022 – Mei 2022',
    type: 'magang',
    description: {
      id: 'Program magang di bidang desain grafis, animasi, dan editing video. Berkontribusi dalam pembuatan berbagai aset visual dan konten multimedia untuk kebutuhan klien perusahaan.',
      en: 'Internship program in graphic design, animation, and video editing. Contributed to creating various visual assets and multimedia content for the company\'s client needs.',
    },
    certificate: '/proyek/SewuComp.jpg',
  },
];
