export interface Certificate {
  id: string;
  src: string;
  thumbnail: string;
  width: number;
  height: number;
  title: { id: string; en: string };
  alt: { id: string; en: string };
}

function certificate(
  id: string,
  width: number,
  height: number,
  title: Certificate['title'],
  alt: Certificate['alt'],
): Certificate {
  return {
    id,
    src: `/certificates/optimized/${id}.webp`,
    thumbnail: `/certificates/thumbnails/${id}.webp`,
    width,
    height,
    title,
    alt,
  };
}

export const certificates: Certificate[] = [
  certificate('certificate-01', 1800, 1273,
    { id: 'Sertifikat Panitia', en: 'Committee Certificate' },
    { id: 'Sertifikat panitia bernuansa hijau dan emas atas nama Dery Wahyu Perdana', en: 'Green and gold committee certificate awarded to Dery Wahyu Perdana' }),
  certificate('certificate-02', 1800, 1273,
    { id: 'Sertifikat Apresiasi CROSS 26.04', en: 'CROSS 26.04 Appreciation Certificate' },
    { id: 'Sertifikat apresiasi CROSS 26.04 atas nama Dery Wahyu Perdana', en: 'CROSS 26.04 appreciation certificate awarded to Dery Wahyu Perdana' }),
  certificate('certificate-03', 841, 593,
    { id: 'Sertifikat Kegiatan 2024', en: '2024 Event Certificate' },
    { id: 'Sertifikat kegiatan dengan ilustrasi warna-warni atas nama Dery Wahyu Perdana', en: 'Colorful illustrated event certificate awarded to Dery Wahyu Perdana' }),
  certificate('certificate-04', 839, 592,
    { id: 'Sertifikat FES', en: 'FES Certificate' },
    { id: 'Sertifikat FES bernuansa biru atas nama Dery Wahyu Perdana', en: 'Blue FES certificate awarded to Dery Wahyu Perdana' }),
  certificate('certificate-05', 841, 590,
    { id: 'Sertifikat Pelatihan Kepemimpinan', en: 'Leadership Training Certificate' },
    { id: 'Sertifikat pelatihan kepemimpinan atas nama Dery Wahyu Perdana', en: 'Leadership training certificate awarded to Dery Wahyu Perdana' }),
  certificate('certificate-06', 841, 589,
    { id: 'Sertifikat Penghargaan', en: 'Achievement Certificate' },
    { id: 'Sertifikat penghargaan bernuansa emas atas nama Dery Wahyu Perdana', en: 'Gold achievement certificate awarded to Dery Wahyu Perdana' }),
  certificate('certificate-07', 841, 591,
    { id: 'Sertifikat Kegiatan FES', en: 'FES Event Certificate' },
    { id: 'Sertifikat kegiatan FES atas nama Dery Wahyu Perdana', en: 'FES event certificate awarded to Dery Wahyu Perdana' }),
  certificate('certificate-08', 840, 592,
    { id: 'Sertifikat Partisipasi', en: 'Participation Certificate' },
    { id: 'Sertifikat partisipasi bergaya minimalis atas nama Dery Wahyu Perdana', en: 'Minimalist participation certificate awarded to Dery Wahyu Perdana' }),
  certificate('certificate-09', 839, 599,
    { id: 'Sertifikat Universitas Teknologi Yogyakarta', en: 'Universitas Teknologi Yogyakarta Certificate' },
    { id: 'Sertifikat Universitas Teknologi Yogyakarta atas nama Dery Wahyu Perdana', en: 'Universitas Teknologi Yogyakarta certificate awarded to Dery Wahyu Perdana' }),
  certificate('certificate-10', 1125, 793,
    { id: 'Sertifikat Panitia 2026', en: '2026 Committee Certificate' },
    { id: 'Sertifikat panitia bernuansa ungu atas nama Dery Wahyu Perdana', en: 'Purple committee certificate awarded to Dery Wahyu Perdana' }),
  certificate('certificate-11', 1188, 843,
    { id: 'Sertifikat Kegiatan Organisasi', en: 'Organization Event Certificate' },
    { id: 'Sertifikat kegiatan organisasi bernuansa biru gelap atas nama Dery Wahyu Perdana', en: 'Dark blue organization event certificate awarded to Dery Wahyu Perdana' }),
  certificate('certificate-12', 1124, 794,
    { id: 'Sertifikat Kontribusi Organisasi', en: 'Organization Contribution Certificate' },
    { id: 'Sertifikat kontribusi organisasi bernuansa biru muda atas nama Dery Wahyu Perdana', en: 'Light blue organization contribution certificate awarded to Dery Wahyu Perdana' }),
  certificate('certificate-13', 1054, 746,
    { id: 'Sertifikat Editing Kreatif', en: 'Creative Editing Certificate' },
    { id: 'Sertifikat kegiatan editing kreatif bernuansa ungu atas nama Dery Wahyu Perdana', en: 'Purple creative editing event certificate awarded to Dery Wahyu Perdana' }),
  certificate('certificate-14', 1056, 740,
    { id: 'Sertifikat Kepanitiaan Organisasi', en: 'Organization Committee Certificate' },
    { id: 'Sertifikat kepanitiaan organisasi bernuansa ungu atas nama Dery Wahyu Perdana', en: 'Purple organization committee certificate awarded to Dery Wahyu Perdana' }),
  certificate('certificate-15', 1057, 747,
    { id: 'Sertifikat Kontribusi Kegiatan', en: 'Event Contribution Certificate' },
    { id: 'Sertifikat kontribusi kegiatan bernuansa biru gelap atas nama Dery Wahyu Perdana', en: 'Dark blue event contribution certificate awarded to Dery Wahyu Perdana' }),
];