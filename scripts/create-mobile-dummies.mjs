import sharp from 'sharp';

// 1. Ruang-Tenang Mobile (Mental Health Companion)
const ruangTenangSvg = `
<svg width="400" height="860" viewBox="0 0 400 860" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <!-- Phone Background -->
  <rect width="400" height="860" fill="#f0f7ff"/>

  <!-- Status Bar -->
  <text x="28" y="32" font-size="13" font-weight="600" fill="#1e293b">09:41</text>
  <circle cx="330" cy="28" r="3" fill="#1e293b"/>
  <rect x="340" y="23" width="16" height="10" rx="3" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <rect x="342" y="25" width="10" height="6" rx="1.5" fill="#1e293b"/>

  <!-- Top App Bar -->
  <g transform="translate(24, 60)">
    <text x="0" y="20" font-size="13" font-weight="500" fill="#64748b" letter-spacing="0.5">SELAMAT PAGI</text>
    <text x="0" y="44" font-size="22" font-weight="800" fill="#0f172a">Ruang-Tenang</text>
    <circle cx="320" cy="30" r="18" fill="#e0f2fe"/>
    <text x="320" y="36" font-size="16" text-anchor="middle">🧘</text>
  </g>

  <!-- Mood Check-in Card -->
  <g transform="translate(24, 135)">
    <rect width="352" height="150" rx="20" fill="#ffffff" filter="drop-shadow(0 4px 12px rgba(37,99,235,0.08))"/>
    <text x="20" y="32" font-size="15" font-weight="700" fill="#0f172a">Bagaimana perasaanmu hari ini?</text>
    <text x="20" y="52" font-size="12" fill="#64748b">Luapkan perasaanmu tanpa ragu</text>
    
    <!-- Mood emojis -->
    <g transform="translate(16, 75)">
      <circle cx="28" cy="28" r="24" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="28" y="35" font-size="20" text-anchor="middle">😊</text>
      <text x="28" y="62" font-size="10" font-weight="600" fill="#2563eb" text-anchor="middle">Senang</text>

      <circle cx="94" cy="28" r="24" fill="#f8fafc"/>
      <text x="94" y="35" font-size="20" text-anchor="middle">😌</text>
      <text x="94" y="62" font-size="10" fill="#64748b" text-anchor="middle">Tenang</text>

      <circle cx="160" cy="28" r="24" fill="#f8fafc"/>
      <text x="160" y="35" font-size="20" text-anchor="middle">😔</text>
      <text x="160" y="62" font-size="10" fill="#64748b" text-anchor="middle">Cemas</text>

      <circle cx="226" cy="28" r="24" fill="#f8fafc"/>
      <text x="226" y="35" font-size="20" text-anchor="middle">😴</text>
      <text x="226" y="62" font-size="10" fill="#64748b" text-anchor="middle">Lelah</text>

      <circle cx="292" cy="28" r="24" fill="#f8fafc"/>
      <text x="292" y="35" font-size="20" text-anchor="middle">🌧️</text>
      <text x="292" y="62" font-size="10" fill="#64748b" text-anchor="middle">Sedih</text>
    </g>
  </g>

  <!-- AI Companion Chat Banner -->
  <g transform="translate(24, 310)">
    <rect width="352" height="110" rx="20" fill="url(#aiGradient)" filter="drop-shadow(0 6px 16px rgba(29,78,216,0.18))"/>
    <text x="24" y="34" font-size="16" font-weight="800" fill="#ffffff">Teman Bicara AI</text>
    <text x="24" y="56" font-size="12" fill="#bfdbfe">Siap mendengarkan ceritamu 24/7</text>
    
    <rect x="24" y="70" width="120" height="28" rx="14" fill="#ffffff"/>
    <text x="84" y="88" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">Mulai Chat →</text>
    
    <circle cx="305" cy="55" r="32" fill="rgba(255,255,255,0.15)"/>
    <text x="305" y="65" font-size="30" text-anchor="middle">🤖</text>
  </g>

  <!-- Daily Program Section -->
  <g transform="translate(24, 445)">
    <text x="0" y="20" font-size="16" font-weight="800" fill="#0f172a">Program Relaksasi</text>
    <text x="352" y="20" font-size="12" font-weight="600" fill="#2563eb" text-anchor="end">Lihat Semua</text>

    <!-- Card 1 -->
    <g transform="translate(0, 36)">
      <rect width="352" height="84" rx="16" fill="#ffffff" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.04))"/>
      <rect x="14" y="14" width="56" height="56" rx="12" fill="#dbeafe"/>
      <text x="42" y="48" font-size="24" text-anchor="middle">🌬️</text>
      <text x="84" y="36" font-size="14" font-weight="700" fill="#0f172a">Pernapasan 4-7-8</text>
      <text x="84" y="56" font-size="12" fill="#64748b">5 Menit • Menurunkan stres</text>
      <rect x="290" y="28" width="46" height="28" rx="8" fill="#eff6ff"/>
      <text x="313" y="46" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">Play</text>
    </g>

    <!-- Card 2 -->
    <g transform="translate(0, 134)">
      <rect width="352" height="84" rx="16" fill="#ffffff" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.04))"/>
      <rect x="14" y="14" width="56" height="56" rx="12" fill="#e0f2fe"/>
      <text x="42" y="48" font-size="24" text-anchor="middle">🌙</text>
      <text x="84" y="36" font-size="14" font-weight="700" fill="#0f172a">Suara Hujan &amp; Gelombang</text>
      <text x="84" y="56" font-size="12" fill="#64748b">15 Menit • Pengantar tidur pulas</text>
      <rect x="290" y="28" width="46" height="28" rx="8" fill="#eff6ff"/>
      <text x="313" y="46" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">Play</text>
    </g>

    <!-- Card 3 -->
    <g transform="translate(0, 232)">
      <rect width="352" height="84" rx="16" fill="#ffffff" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.04))"/>
      <rect x="14" y="14" width="56" height="56" rx="12" fill="#ecfeff"/>
      <text x="42" y="48" font-size="24" text-anchor="middle">📖</text>
      <text x="84" y="36" font-size="14" font-weight="700" fill="#0f172a">Jurnal Syukur Harian</text>
      <text x="84" y="56" font-size="12" fill="#64748b">Tuliskan 3 hal positif hari ini</text>
      <rect x="290" y="28" width="46" height="28" rx="8" fill="#eff6ff"/>
      <text x="313" y="46" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">Tulis</text>
    </g>
  </g>

  <!-- Bottom Nav -->
  <g transform="translate(0, 786)">
    <rect width="400" height="74" fill="#ffffff" filter="drop-shadow(0 -4px 12px rgba(0,0,0,0.05))"/>
    <g transform="translate(50, 24)">
      <text x="0" y="0" font-size="18" text-anchor="middle">🏠</text>
      <text x="0" y="16" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">Beranda</text>
    </g>
    <g transform="translate(150, 24)">
      <text x="0" y="0" font-size="18" text-anchor="middle">💬</text>
      <text x="0" y="16" font-size="10" font-weight="500" fill="#94a3b8" text-anchor="middle">Konseling</text>
    </g>
    <g transform="translate(250, 24)">
      <text x="0" y="0" font-size="18" text-anchor="middle">📊</text>
      <text x="0" y="16" font-size="10" font-weight="500" fill="#94a3b8" text-anchor="middle">Analisis</text>
    </g>
    <g transform="translate(350, 24)">
      <text x="0" y="0" font-size="18" text-anchor="middle">👤</text>
      <text x="0" y="16" font-size="10" font-weight="500" fill="#94a3b8" text-anchor="middle">Profil</text>
    </g>
  </g>

  <defs>
    <linearGradient id="aiGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1d4ed8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>
</svg>
`;

// 2. TriniStay Mobile (Boarding &amp; Roommate App)
const triniStaySvg = `
<svg width="400" height="860" viewBox="0 0 400 860" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <!-- Phone Background -->
  <rect width="400" height="860" fill="#f8fafc"/>

  <!-- Status Bar -->
  <text x="28" y="32" font-size="13" font-weight="600" fill="#1e293b">09:41</text>
  <circle cx="330" cy="28" r="3" fill="#1e293b"/>
  <rect x="340" y="23" width="16" height="10" rx="3" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <rect x="342" y="25" width="10" height="6" rx="1.5" fill="#1e293b"/>

  <!-- Top Location Bar -->
  <g transform="translate(24, 60)">
    <text x="0" y="16" font-size="11" font-weight="600" fill="#2563eb" letter-spacing="0.5">LOKASI SEKARANG</text>
    <text x="0" y="38" font-size="18" font-weight="800" fill="#0f172a">Trini, Sleman, DIY 📍</text>
    <circle cx="328" cy="26" r="18" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="328" y="32" font-size="15" text-anchor="middle">🔔</text>
  </g>

  <!-- Search Input -->
  <g transform="translate(24, 120)">
    <rect width="352" height="48" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.03))"/>
    <text x="20" y="29" font-size="15">🔍</text>
    <text x="48" y="29" font-size="13" fill="#94a3b8">Cari kos atau roommate ideal...</text>
    <rect x="296" y="8" width="46" height="32" rx="16" fill="#1d4ed8"/>
    <text x="319" y="28" font-size="12" fill="#ffffff" text-anchor="middle">Filter</text>
  </g>

  <!-- Featured Roommate Match Card -->
  <g transform="translate(24, 185)">
    <rect width="352" height="185" rx="20" fill="#ffffff" filter="drop-shadow(0 4px 16px rgba(37,99,235,0.08))"/>
    
    <!-- Top badge -->
    <rect x="18" y="18" width="112" height="24" rx="12" fill="#eff6ff"/>
    <text x="74" y="34" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">✨ 96% Match</text>

    <!-- User row -->
    <g transform="translate(18, 52)">
      <circle cx="28" cy="28" r="28" fill="#bfdbfe"/>
      <text x="28" y="36" font-size="24" text-anchor="middle">👨‍💻</text>
      
      <text x="68" y="24" font-size="15" font-weight="800" fill="#0f172a">Dimas Prasetyo</text>
      <text x="68" y="42" font-size="12" fill="#64748b">Mahasiswa Informatika • 21 Thn</text>
    </g>

    <!-- Tags -->
    <g transform="translate(18, 122)">
      <rect x="0" y="0" width="80" height="24" rx="8" fill="#f1f5f9"/>
      <text x="40" y="16" font-size="11" fill="#475569" text-anchor="middle">Non-Smoker</text>

      <rect x="88" y="0" width="76" height="24" rx="8" fill="#f1f5f9"/>
      <text x="126" y="16" font-size="11" fill="#475569" text-anchor="middle">Suka Tenang</text>

      <rect x="172" y="0" width="82" height="24" rx="8" fill="#f1f5f9"/>
      <text x="213" y="16" font-size="11" fill="#475569" text-anchor="middle">Early Bird</text>
    </g>

    <!-- Chat Button -->
    <g transform="translate(18, 154)">
      <rect width="316" height="20" rx="10" fill="#f8fafc"/>
      <text x="158" y="14" font-size="11" font-weight="600" fill="#2563eb" text-anchor="middle">Lihat Profil &amp; Ajak Ngobrol →</text>
    </g>
  </g>

  <!-- Recommended Kos Nearby -->
  <g transform="translate(24, 395)">
    <text x="0" y="20" font-size="16" font-weight="800" fill="#0f172a">Rekomendasi Kos Sekitar</text>
    <text x="352" y="20" font-size="12" font-weight="600" fill="#2563eb" text-anchor="end">Peta 🗺️</text>

    <!-- Kos Card 1 -->
    <g transform="translate(0, 36)">
      <rect width="352" height="155" rx="18" fill="#ffffff" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.04))"/>
      
      <!-- Fake image area -->
      <rect x="12" y="12" width="130" height="131" rx="14" fill="#0284c7"/>
      <text x="77" y="75" font-size="34" text-anchor="middle">🏠</text>
      <rect x="18" y="18" width="56" height="20" rx="6" fill="rgba(0,0,0,0.4)"/>
      <text x="46" y="32" font-size="10" font-weight="600" fill="#ffffff" text-anchor="middle">Putra</text>

      <!-- Details -->
      <g transform="translate(154, 24)">
        <text x="0" y="14" font-size="15" font-weight="800" fill="#0f172a">Kost Trini Indah</text>
        <text x="0" y="32" font-size="11" fill="#64748b">Trini Gg. Melati No. 4</text>
        <text x="0" y="52" font-size="11" fill="#0284c7" font-weight="600">⚡ AC • WiFi 100Mbps • KM Dalam</text>
        
        <text x="0" y="86" font-size="11" fill="#94a3b8">Mulai dari</text>
        <text x="0" y="106" font-size="16" font-weight="800" fill="#1d4ed8">Rp 950.000<tspan font-size="11" font-weight="400" fill="#64748b">/bln</tspan></text>
      </g>
    </g>

    <!-- Kos Card 2 -->
    <g transform="translate(0, 205)">
      <rect width="352" height="155" rx="18" fill="#ffffff" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.04))"/>
      
      <!-- Fake image area -->
      <rect x="12" y="12" width="130" height="131" rx="14" fill="#1e40af"/>
      <text x="77" y="75" font-size="34" text-anchor="middle">🏡</text>
      <rect x="18" y="18" width="56" height="20" rx="6" fill="rgba(0,0,0,0.4)"/>
      <text x="46" y="32" font-size="10" font-weight="600" fill="#ffffff" text-anchor="middle">Campur</text>

      <!-- Details -->
      <g transform="translate(154, 24)">
        <text x="0" y="14" font-size="15" font-weight="800" fill="#0f172a">Omah Trini Asri</text>
        <text x="0" y="32" font-size="11" fill="#64748b">Jl. Ringroad Utara, Trini</text>
        <text x="0" y="52" font-size="11" fill="#0284c7" font-weight="600">⚡ Parkir Luas • Dapur • Keamanan</text>
        
        <text x="0" y="86" font-size="11" fill="#94a3b8">Mulai dari</text>
        <text x="0" y="106" font-size="16" font-weight="800" fill="#1d4ed8">Rp 800.000<tspan font-size="11" font-weight="400" fill="#64748b">/bln</tspan></text>
      </g>
    </g>
  </g>

  <!-- Bottom Nav -->
  <g transform="translate(0, 786)">
    <rect width="400" height="74" fill="#ffffff" filter="drop-shadow(0 -4px 12px rgba(0,0,0,0.05))"/>
    <g transform="translate(50, 24)">
      <text x="0" y="0" font-size="18" text-anchor="middle">🔍</text>
      <text x="0" y="16" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">Jelajah</text>
    </g>
    <g transform="translate(150, 24)">
      <text x="0" y="0" font-size="18" text-anchor="middle">👥</text>
      <text x="0" y="16" font-size="10" font-weight="500" fill="#94a3b8" text-anchor="middle">Roommate</text>
    </g>
    <g transform="translate(250, 24)">
      <text x="0" y="0" font-size="18" text-anchor="middle">❤️</text>
      <text x="0" y="16" font-size="10" font-weight="500" fill="#94a3b8" text-anchor="middle">Favorit</text>
    </g>
    <g transform="translate(350, 24)">
      <text x="0" y="0" font-size="18" text-anchor="middle">💬</text>
      <text x="0" y="16" font-size="10" font-weight="500" fill="#94a3b8" text-anchor="middle">Pesan</text>
    </g>
  </g>
</svg>
`;

async function run() {
  await sharp(Buffer.from(ruangTenangSvg)).png().toFile('public/proyek/mobile-ruang-tenang.png');
  console.log('Created public/proyek/mobile-ruang-tenang.png');
  await sharp(Buffer.from(triniStaySvg)).png().toFile('public/proyek/mobile-trinistay.png');
  console.log('Created public/proyek/mobile-trinistay.png');
}

run();
