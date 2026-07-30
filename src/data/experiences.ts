export interface CertificateImage {
  src: string;
  thumbnail: string;
  width: number;
  height: number;
  alt: { id: string; en: string };
}

export interface Experience {
  organization: string;
  role: { id: string; en: string };
  period: string;
  type: 'organisasi' | 'magang';
  description?: { id: string; en: string };
  certificate?: CertificateImage;
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
    certificate: {
      src: '/experience/optimized/umkm-hebat.webp',
      thumbnail: '/experience/thumbnails/umkm-hebat.webp',
      width: 1243,
      height: 878,
      alt: {
        id: 'Sertifikat magang UMKM Hebat atas nama Dery Wahyu Perdana',
        en: 'UMKM Hebat internship certificate awarded to Dery Wahyu Perdana',
      },
    },
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
    certificate: {
      src: '/experience/optimized/koordinator-pdd.webp',
      thumbnail: '/experience/thumbnails/koordinator-pdd.webp',
      width: 1800,
      height: 1273,
      alt: {
        id: 'Sertifikat Koordinator PDD Fakultas Sains dan Teknologi UTY atas nama Dery Wahyu Perdana',
        en: 'PDD Coordinator certificate from the Faculty of Science and Technology UTY awarded to Dery Wahyu Perdana',
      },
    },
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
    certificate: {
      src: '/experience/optimized/himatika-video-editor.webp',
      thumbnail: '/experience/thumbnails/himatika-video-editor.webp',
      width: 1122,
      height: 793,
      alt: {
        id: 'Sertifikat Admin dan Video Editor HIMATIKA atas nama Dery Wahyu Perdana',
        en: 'HIMATIKA Admin and Video Editor certificate awarded to Dery Wahyu Perdana',
      },
    },
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
    certificate: {
      src: '/experience/optimized/ikmi-designer.webp',
      thumbnail: '/experience/thumbnails/ikmi-designer.webp',
      width: 1800,
      height: 1273,
      alt: {
        id: 'Sertifikat Graphic Designer dan Video Editor IKMI atas nama Dery Wahyu Perdana',
        en: 'IKMI Graphic Designer and Video Editor certificate awarded to Dery Wahyu Perdana',
      },
    },
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
    certificate: {
      src: '/experience/optimized/sewucomp-internship.webp',
      thumbnail: '/experience/thumbnails/sewucomp-internship.webp',
      width: 1280,
      height: 913,
      alt: {
        id: 'Sertifikat magang desain grafis, animasi, dan video editor Sewucomp atas nama Dery Wahyu Perdana',
        en: 'Sewucomp graphic design, animation, and video editing internship certificate awarded to Dery Wahyu Perdana',
      },
    },
  },
];
