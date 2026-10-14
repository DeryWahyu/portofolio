import sharp from 'sharp';

const berandaSvg = `
<svg width="400" height="860" viewBox="0 0 400 860" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <!-- Phone Background -->
  <rect width="400" height="860" fill="#fff7f7"/>

  <!-- Status Bar -->
  <text x="28" y="32" font-size="13" font-weight="600" fill="#1e293b">00:24</text>
  <rect x="150" y="10" width="100" height="26" rx="13" fill="#000000"/>
  <circle cx="330" cy="28" r="3" fill="#1e293b"/>
  <rect x="340" y="23" width="16" height="10" rx="3" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <rect x="342" y="25" width="10" height="6" rx="1.5" fill="#1e293b"/>

  <!-- Top App Bar -->
  <g transform="translate(24, 60)">
    <circle cx="20" cy="20" r="16" fill="#fee2e2"/>
    <text x="20" y="26" font-size="16" text-anchor="middle">✨</text>
    <text x="46" y="26" font-size="18" font-weight="800" fill="#0f172a">Ruang-Tenang</text>
    <circle cx="328" cy="20" r="18" fill="#ffffff" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.06))"/>
    <text x="328" y="26" font-size="15" text-anchor="middle">🔔</text>
  </g>

  <!-- Mascot Greeting Banner -->
  <g transform="translate(24, 115)">
    <rect width="352" height="135" rx="22" fill="#ffffff" filter="drop-shadow(0 4px 16px rgba(244,63,94,0.1))"/>
    <text x="22" y="36" font-size="17" font-weight="800" fill="#0f172a">Hai, Dery! 🌸</text>
    <text x="22" y="58" font-size="12" fill="#64748b" width="180">Aku di sini siap menemanimu bercerita kapan saja.</text>
    
    <rect x="22" y="80" width="130" height="32" rx="16" fill="#ef4444"/>
    <text x="87" y="101" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">Bicara Sekarang →</text>

    <!-- Mascot illustration placeholder -->
    <circle cx="295" cy="65" r="42" fill="#fecdd3"/>
    <text x="295" y="78" font-size="44" text-anchor="middle">🐰</text>
  </g>

  <!-- Mood Check-in -->
  <g transform="translate(24, 275)">
    <text x="0" y="18" font-size="16" font-weight="800" fill="#0f172a">Check-in Suasana Hati</text>
    <rect y="32" width="352" height="90" rx="18" fill="#ffffff" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.04))"/>
    
    <g transform="translate(18, 48)">
      <circle cx="28" cy="22" r="22" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
      <text x="28" y="28" font-size="18" text-anchor="middle">🥰</text>
      <text x="28" y="52" font-size="10" font-weight="700" fill="#ef4444" text-anchor="middle">Nyaman</text>

      <circle cx="94" cy="22" r="22" fill="#f8fafc"/>
      <text x="94" y="28" font-size="18" text-anchor="middle">😊</text>
      <text x="94" y="52" font-size="10" fill="#64748b" text-anchor="middle">Ceria</text>

      <circle cx="160" cy="22" r="22" fill="#f8fafc"/>
      <text x="160" y="28" font-size="18" text-anchor="middle">😐</text>
      <text x="160" y="52" font-size="10" fill="#64748b" text-anchor="middle">Biasa</text>

      <circle cx="226" cy="22" r="22" fill="#f8fafc"/>
      <text x="226" y="28" font-size="18" text-anchor="middle">😔</text>
      <text x="226" y="52" font-size="10" fill="#64748b" text-anchor="middle">Cemas</text>

      <circle cx="292" cy="22" r="22" fill="#f8fafc"/>
      <text x="292" y="28" font-size="18" text-anchor="middle">😴</text>
      <text x="292" y="52" font-size="10" fill="#64748b" text-anchor="middle">Lelah</text>
    </g>
  </g>

  <!-- AI Counseling & Feature Cards -->
  <g transform="translate(24, 425)">
    <text x="0" y="18" font-size="16" font-weight="800" fill="#0f172a">Aktivitas Pemulihan</text>

    <!-- Card 1 -->
    <g transform="translate(0, 32)">
      <rect width="352" height="92" rx="18" fill="#ffffff" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.04))"/>
      <rect x="14" y="14" width="64" height="64" rx="14" fill="#fee2e2"/>
      <text x="46" y="52" font-size="28" text-anchor="middle">💬</text>
      <text x="92" y="38" font-size="14" font-weight="800" fill="#0f172a">Sesi Curhat AI</text>
      <text x="92" y="58" font-size="11" fill="#64748b">Percakapan rahasia &amp; tanpa penilaian</text>
      <rect x="286" y="30" width="52" height="30" rx="10" fill="#fef2f2"/>
      <text x="312" y="50" font-size="11" font-weight="700" fill="#ef4444" text-anchor="middle">Mulai</text>
    </g>

    <!-- Card 2 -->
    <g transform="translate(0, 138)">
      <rect width="352" height="92" rx="18" fill="#ffffff" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.04))"/>
      <rect x="14" y="14" width="64" height="64" rx="14" fill="#ffedd5"/>
      <text x="46" y="52" font-size="28" text-anchor="middle">🧘‍♀️</text>
      <text x="92" y="38" font-size="14" font-weight="800" fill="#0f172a">Meditasi Suara Alam</text>
      <text x="92" y="58" font-size="11" fill="#64748b">10 Menit relaksasi gelombang theta</text>
      <rect x="286" y="30" width="52" height="30" rx="10" fill="#fff7ed"/>
      <text x="312" y="50" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">Putar</text>
    </g>

    <!-- Card 3 -->
    <g transform="translate(0, 244)">
      <rect width="352" height="92" rx="18" fill="#ffffff" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.04))"/>
      <rect x="14" y="14" width="64" height="64" rx="14" fill="#ecfeff"/>
      <text x="46" y="52" font-size="28" text-anchor="middle">🎯</text>
      <text x="92" y="38" font-size="14" font-weight="800" fill="#0f172a">Tantangan Kebaikan</text>
      <text x="92" y="58" font-size="11" fill="#64748b">1 langkah kecil positif setiap hari</text>
      <rect x="286" y="30" width="52" height="30" rx="10" fill="#ecfeff"/>
      <text x="312" y="50" font-size="11" font-weight="700" fill="#0891b2" text-anchor="middle">Ikuti</text>
    </g>
  </g>

  <!-- Bottom Nav -->
  <g transform="translate(0, 786)">
    <rect width="400" height="74" fill="#ffffff" filter="drop-shadow(0 -4px 12px rgba(0,0,0,0.05))"/>
    <g transform="translate(50, 24)">
      <text x="0" y="0" font-size="18" text-anchor="middle">🏠</text>
      <text x="0" y="16" font-size="10" font-weight="700" fill="#ef4444" text-anchor="middle">Beranda</text>
    </g>
    <g transform="translate(150, 24)">
      <text x="0" y="0" font-size="18" text-anchor="middle">💬</text>
      <text x="0" y="16" font-size="10" font-weight="500" fill="#94a3b8" text-anchor="middle">Teman AI</text>
    </g>
    <g transform="translate(250, 24)">
      <text x="0" y="0" font-size="18" text-anchor="middle">📊</text>
      <text x="0" y="16" font-size="10" font-weight="500" fill="#94a3b8" text-anchor="middle">Jurnal</text>
    </g>
    <g transform="translate(350, 24)">
      <text x="0" y="0" font-size="18" text-anchor="middle">👤</text>
      <text x="0" y="16" font-size="10" font-weight="500" fill="#94a3b8" text-anchor="middle">Profil</text>
    </g>
  </g>
</svg>
`;

async function run() {
  await sharp(Buffer.from(berandaSvg)).png().toFile('public/proyek/Ruang-Tenang-Mobile/Beranda-Ruang-Tenang.png');
  console.log('Created Beranda-Ruang-Tenang.png');
}

run();
