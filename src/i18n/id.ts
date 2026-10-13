import type { Dictionary } from './types';

const id: Dictionary = {
  locale: 'id',

  meta: {
    title: 'STS — Sawangsulna Teknologi Studio | Solusi Pembelajaran Digital',
    description:
      'Studio pembelajaran dan teknologi sejak 2021: strategi pembelajaran, implementasi LMS, pengembangan platform pembelajaran khusus untuk pembelajar dewasa di lembaga dan korporasi, desain instruksional, evaluasi, serta adopsi AI yang bertanggung jawab.',
    ogImage: '/og-id.png',
    ogImageAlt: 'STS. Sawangsulna Teknologi Studio — Designing Learning. Enabling Growth.',
  },

  a11y: {
    skipToContent: 'Langsung ke konten utama',
    primaryNav: 'Navigasi utama',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
    languageSwitch: 'Pilih bahasa',
    switchToLanguage: 'Baca halaman ini dalam bahasa Inggris',
    opensInNewTab: '(membuka tab baru)',
    home: 'STS. beranda',
  },

  nav: {
    about: 'Tentang',
    expertise: 'Keahlian',
    platform: 'Platform',
    approach: 'Pendekatan',
    ai: 'AI & Pembelajaran',
    work: 'Karya',
    contact: 'Kontak',
  },

  hero: {
    eyebrow: 'SAINS PEMBELAJARAN · DESAIN · TEKNOLOGI',
    titleLines: ['Pembelajaran Lebih Bermakna.', 'Teknologi Lebih Tepat Guna.'],
    support:
      'Kami membantu organisasi merancang pengalaman belajar dan sistem pembelajaran digital yang mendukung pengembangan kompetensi, dengan pendekatan ilmiah dan pemanfaatan AI yang bertanggung jawab.',
    primaryCta: 'Jelajahi Layanan',
    secondaryCta: 'Diskusikan Kebutuhan Anda',
    figureCaption: 'Dari kebutuhan belajar, ke desain, ke teknologi, ke evaluasi.',
    pillars: ['Sains Pembelajaran', 'Desain Pengalaman', 'AI & Teknologi'],
  },

  about: {
    eyebrow: 'Tentang STS',
    title: 'Berawal dari Kebutuhan Belajar, Bukan Teknologi',
    lead: 'Sejak 2021, PT Sawangsulna Teknologi Studio berfokus membantu lembaga pendidikan, korporasi, dan organisasi merancang pengalaman pembelajaran, mengembangkan sistem pembelajaran digital internal, dan mendampingi implementasi teknologi pembelajaran yang relevan.',
    body: [
      'Kami menghubungkan ilmu pembelajaran, desain pengalaman, dan teknologi—termasuk AI yang bertanggung jawab—untuk mendukung peningkatan kompetensi dan kapasitas organisasi.',
      'Setiap pekerjaan kami mulai dengan memahami siapa yang belajar, apa yang perlu mereka kuasai, dan bagaimana pembelajaran itu akan dipakai dalam pekerjaan. Teknologi dipilih setelahnya, sesuai kebutuhan dan kesiapan organisasi.',
    ],
    factsLabel: 'Sekilas',
    legalLabel: 'Legalitas (AHU)',
    facts: [
      { label: 'Berdiri', value: '2021' },
      { label: 'Fokus', value: 'Sistem dan pengalaman pembelajaran' },
      { label: 'Badan usaha', value: 'PT Sawangsulna Teknologi Studio' },
    ],
    principlesTitle: 'Prinsip kerja',
    principles: [
      {
        title: 'Masalah belajar lebih dulu',
        text: 'Kami mendiagnosis tujuan, peserta, dan konteks kerja sebelum membicarakan platform atau fitur.',
      },
      {
        title: 'Desain berbasis bukti',
        text: 'Metode dipilih karena sesuai tujuan dan didukung bukti, bukan karena sedang tren.',
      },
      {
        title: 'Teknologi secukupnya',
        text: 'Kami merekomendasikan solusi yang dapat dioperasikan dan dirawat oleh tim Anda sendiri.',
      },
      {
        title: 'Terukur dan jujur',
        text: 'Hasil dievaluasi dengan indikator yang disepakati, dan keterbatasan disampaikan secara terbuka.',
      },
    ],
  },

  challenges: {
    eyebrow: 'Tantangan',
    title: 'Platform Saja Tidak Cukup',
    lead: 'Banyak organisasi sudah berinvestasi pada LMS atau konten digital, tetapi dampaknya terhadap kompetensi belum terlihat. Pola yang paling sering kami temui:',
    items: [
      {
        title: 'LMS yang pasif',
        text: 'Platform hanya menjadi tempat menyimpan materi dan mencatat kelulusan, bukan ruang untuk berlatih dan menerima umpan balik.',
      },
      {
        title: 'Pembelajaran yang terfragmentasi',
        text: 'Pelatihan, materi, dan penilaian tersebar di banyak kanal tanpa alur belajar yang jelas bagi peserta.',
      },
      {
        title: 'Keselarasan yang lemah',
        text: 'Tujuan program, aktivitas belajar, dan penilaian tidak saling terhubung dengan kompetensi yang dibutuhkan pekerjaan.',
      },
      {
        title: 'Evaluasi yang terbatas',
        text: 'Yang diukur hanya kehadiran dan penyelesaian, sementara penerapan di tempat kerja tidak pernah diketahui.',
      },
      {
        title: 'Adopsi AI yang belum jelas arah',
        text: 'Tim ingin memanfaatkan AI, tetapi belum memiliki kasus penggunaan, batasan, dan tata kelola yang disepakati.',
      },
    ],
    closing:
      'Masalah-masalah ini jarang selesai hanya dengan mengganti platform. Yang dibutuhkan adalah desain pembelajaran, sistem, dan cara kerja yang saling mendukung.',
  },

  expertise: {
    eyebrow: 'Layanan',
    title: 'Keahlian Kami',
    lead: 'Lima area layanan yang dapat dikerjakan terpisah atau sebagai satu program terpadu, disesuaikan dengan tahap dan kapasitas organisasi Anda.',
    labels: {
      problem: 'Masalah yang ditangani',
      interventions: 'Yang kami kerjakan',
      deliverables: 'Keluaran',
      outcome: 'Hasil yang dituju',
    },
    services: [
      {
        id: 'service-strategy',
        code: '01',
        icon: 'compass',
        title: 'Strategi & Konsultasi Pembelajaran',
        summary: 'Memetakan kebutuhan dan menyusun arah pengembangan pembelajaran organisasi.',
        problem:
          'Program pelatihan berjalan, tetapi belum jelas kompetensi apa yang dibangun dan bagaimana semuanya saling terhubung.',
        interventions: [
          'Analisis kebutuhan belajar',
          'Pemetaan kompetensi',
          'Strategi pembelajaran',
          'Audit ekosistem pembelajaran',
          'Peta jalan transformasi',
        ],
        deliverables: [
          'Laporan diagnostik',
          'Peta jalan pembelajaran',
          'Peta kompetensi',
          'Rekomendasi arsitektur',
        ],
        outcome:
          'Prioritas pengembangan yang jelas dan dapat dipertanggungjawabkan kepada pimpinan.',
      },
      {
        id: 'service-lms',
        code: '02',
        icon: 'layers',
        title: 'Pengembangan & Implementasi LMS',
        summary: 'Memilih, menyiapkan, dan mengoperasikan sistem pembelajaran digital internal.',
        problem:
          'Organisasi perlu platform pembelajaran yang benar-benar dipakai, terintegrasi, dan dapat dikelola tim internal.',
        interventions: [
          'Evaluasi dan pemilihan platform',
          'Implementasi dan konfigurasi',
          'Pengembangan kustom bila memang diperlukan',
          'Migrasi dan integrasi data',
          'Tata kelola dan pendampingan adopsi',
        ],
        deliverables: [
          'Cetak biru solusi',
          'LMS yang telah dikonfigurasi atau dibangun',
          'Daftar periksa migrasi',
          'Rencana pendampingan pengguna',
        ],
        outcome: 'Platform yang sesuai kebutuhan, diadopsi pengguna, dan berkelanjutan dikelola.',
      },
      {
        id: 'service-design',
        code: '03',
        icon: 'pen-tool',
        title: 'Desain Instruksional & Pengalaman Belajar',
        summary: 'Merancang kurikulum, alur, dan materi belajar yang mendorong penerapan.',
        problem:
          'Materi sudah tersedia, tetapi peserta kesulitan memahami, mempraktikkan, dan menerapkannya di pekerjaan.',
        interventions: [
          'Kurikulum dan jalur pembelajaran',
          'Pembelajaran bauran (blended learning)',
          'Pembelajaran berbasis kasus',
          'Konten interaktif',
          'Asesmen autentik dan keselarasan konstruktif',
        ],
        deliverables: [
          'Cetak biru desain pembelajaran',
          'Peta perjalanan belajar',
          'Prototipe kursus atau modul',
          'Rubrik evaluasi',
        ],
        outcome:
          'Pengalaman belajar yang relevan, terstruktur, dan mendukung transfer ke pekerjaan.',
      },
      {
        id: 'service-evaluation',
        code: '04',
        icon: 'chart-line',
        title: 'Analitik & Evaluasi Pembelajaran',
        summary: 'Mengukur apa yang benar-benar berubah setelah program berjalan.',
        problem:
          'Data penyelesaian dan kehadiran tersedia, tetapi belum menjawab apakah program berdampak.',
        interventions: [
          'Penyusunan indikator kinerja pembelajaran',
          'Dasbor, bila menjadi bagian lingkup kerja',
          'Analisis penyelesaian dan keterlibatan',
          'Asesmen kompetensi',
          'Evaluasi transfer pembelajaran',
        ],
        deliverables: ['Kerangka evaluasi', 'Spesifikasi pengukuran', 'Temuan dan rekomendasi'],
        outcome: 'Keputusan program yang didasarkan pada bukti, bukan asumsi.',
      },
      {
        id: 'service-ai',
        code: '05',
        icon: 'sparkles',
        title: 'Pendampingan AI untuk Pembelajaran',
        summary: 'Membantu tim mengadopsi AI secara aman, terarah, dan bermanfaat.',
        problem:
          'Ada minat besar pada AI, tetapi belum ada kesiapan, batasan, maupun kasus penggunaan yang disepakati.',
        interventions: [
          'Literasi AI untuk staf dan pendidik',
          'Proses desain pembelajaran berbantuan AI',
          'Konsep asisten atau tutor AI, sesuai kapasitas yang tersedia',
          'Asesmen kesiapan AI',
          'Tata kelola dan pengawasan manusia',
        ],
        deliverables: [
          'Peta jalan adopsi AI',
          'Rencana pelatihan staf',
          'Daftar periksa tata kelola',
          'Prototipe terbatas bila sesuai',
        ],
        outcome: 'Pemanfaatan AI yang realistis, terkendali, dan tetap diawasi manusia.',
      },
    ],
    boundaryNote:
      'Lingkup, metode, dan keluaran setiap proyek disepakati bersama di awal. Kami tidak mengklaim kemitraan resmi dengan vendor LMS mana pun.',
  },

  platform: {
    eyebrow: 'Platform Khusus',
    title: 'Platform Belajar yang Dirancang untuk Pembelajar Dewasa',
    lead: 'Selain mengimplementasikan LMS yang sudah ada, kami mengembangkan platform pembelajaran khusus untuk kebutuhan internal lembaga dan korporasi—dibangun di sekitar cara orang dewasa belajar di tempat kerja, bukan di sekitar daftar fitur.',
    body: [
      'Pembelajar dewasa membawa pengalaman, tanggung jawab, dan waktu yang terbatas. Mereka belajar paling baik ketika materi langsung relevan dengan pekerjaan, ketika diberi ruang untuk menentukan jalur, dan ketika ada kesempatan untuk berlatih lalu merefleksikan hasilnya.',
      'Karena itu setiap platform kami rancang bersama organisasi: alur belajar, istilah, peran, dan data mengikuti konteks kerja Anda, sehingga terasa sebagai bagian dari cara kerja sehari-hari—bukan sistem tambahan yang harus dipelajari lagi.',
    ],
    valuesTitle: 'Nilai yang kami tanamkan di setiap platform',
    values: [
      {
        title: 'Relevan dengan pekerjaan',
        text: 'Konten dan aktivitas terhubung langsung dengan tugas, peran, dan masalah nyata di organisasi.',
      },
      {
        title: 'Menghargai pengalaman',
        text: 'Peserta dapat melewati yang sudah dikuasai dan berfokus pada yang benar-benar mereka butuhkan.',
      },
      {
        title: 'Mandiri namun terarah',
        text: 'Jalur belajar yang fleksibel dengan panduan jelas, sesuai kesiapan masing-masing peserta.',
      },
      {
        title: 'Praktik dan refleksi',
        text: 'Studi kasus, simulasi, dan refleksi terstruktur mendorong penerapan di tempat kerja.',
      },
      {
        title: 'Ringkas dan mudah diakses',
        text: 'Dapat dipakai di sela pekerjaan, dari berbagai perangkat, dengan memperhatikan aksesibilitas.',
      },
      {
        title: 'Data milik organisasi',
        text: 'Data pembelajaran dikelola sesuai kebijakan organisasi dan dipakai untuk memperbaiki program.',
      },
    ],
    capabilitiesTitle: 'Komponen yang dapat dikembangkan sesuai kebutuhan',
    capabilities: [
      'Jalur belajar berbasis peran dan kompetensi',
      'Ruang praktik, studi kasus, dan refleksi',
      'Asesmen autentik dan umpan balik',
      'Program kohort dan pendampingan fasilitator',
      'Dasbor perkembangan untuk peserta dan pengelola',
      'Integrasi dengan sistem internal, bila diperlukan',
    ],
    note: 'Kami menyarankan pengembangan khusus hanya bila platform yang tersedia tidak memadai. Lingkup, fitur, dan tahapan pengembangan disepakati bersama di awal proyek.',
  },

  approach: {
    eyebrow: 'Metodologi',
    title: 'Cara Kami Bekerja',
    lead: 'Enam tahap yang bergerak dari masalah belajar ke desain, teknologi, implementasi, lalu evaluasi. Kedalaman tiap tahap menyesuaikan lingkup proyek.',
    stagesLabel: 'Tahapan kerja',
    outputLabel: 'Keluaran',
    stages: [
      {
        title: 'Temukan',
        text: 'Memahami konteks organisasi, peserta, kendala, dan sistem yang sudah berjalan melalui wawancara, observasi, dan telaah data.',
        output: 'Ringkasan diagnostik',
      },
      {
        title: 'Rumuskan',
        text: 'Menyepakati tujuan belajar, kompetensi sasaran, dan indikator keberhasilan bersama para pemangku kepentingan.',
        output: 'Tujuan dan indikator',
      },
      {
        title: 'Rancang',
        text: 'Menyusun arsitektur pembelajaran: alur, aktivitas, asesmen, serta peran teknologi yang tepat.',
        output: 'Cetak biru desain',
      },
      {
        title: 'Bangun',
        text: 'Mengembangkan prototipe, konten, dan konfigurasi sistem, lalu mengujinya bersama pengguna sebelum diperluas.',
        output: 'Prototipe teruji',
      },
      {
        title: 'Terapkan',
        text: 'Mendampingi peluncuran, menyiapkan fasilitator dan admin, serta membangun kebiasaan penggunaan.',
        output: 'Rencana pendampingan',
      },
      {
        title: 'Evaluasi',
        text: 'Mengukur hasil terhadap indikator yang disepakati dan menyusun perbaikan untuk siklus berikutnya.',
        output: 'Temuan dan rekomendasi',
      },
    ],
    toolbox: {
      title: 'Kotak alat sains pembelajaran',
      lead: 'Kerangka yang kami pertimbangkan saat merancang. Masing-masing dipakai secara selektif, sesuai tujuan dan konteks.',
      columns: {
        framework: 'Kerangka',
        use: 'Penggunaan dalam proyek',
        guardrail: 'Batasan',
      },
      frameworks: [
        {
          name: 'Andragogi',
          use: 'Relevansi, pengalaman peserta, dan konteks praktis.',
          guardrail: 'Bukan aturan universal untuk semua pembelajar dewasa.',
        },
        {
          name: 'Pembelajaran Transformatif',
          use: 'Refleksi, menguji asumsi, dan perubahan perspektif.',
          guardrail: 'Memerlukan fasilitasi dan konteks yang sesuai.',
        },
        {
          name: 'Heutagogi',
          use: 'Kemandirian peserta dan jalur belajar yang ditentukan sendiri.',
          guardrail: 'Butuh dukungan dan kesiapan peserta.',
        },
        {
          name: 'Teori Beban Kognitif',
          use: 'Segmentasi, contoh yang dikerjakan, dan pengurangan beban yang tidak perlu.',
          guardrail: 'Seimbangkan dengan kompleksitas yang produktif.',
        },
        {
          name: 'Pembelajaran Mendalam / Bermakna',
          use: 'Pemahaman konseptual dan transfer ke situasi baru.',
          guardrail: 'Berbeda dengan istilah deep learning pada AI.',
        },
        {
          name: 'Latihan Mengingat & Pengulangan Berjarak',
          use: 'Latihan terstruktur dan daya ingat jangka panjang.',
          guardrail: 'Jarak dan umpan balik disesuaikan dengan kebutuhan peserta.',
        },
        {
          name: 'Pembelajaran Eksperiensial',
          use: 'Praktik, simulasi, dan masalah autentik.',
          guardrail: 'Refleksi dan transfer tetap esensial.',
        },
        {
          name: 'Universal Design for Learning',
          use: 'Beragam cara keterlibatan, representasi, serta aksi dan ekspresi.',
          guardrail: 'Aksesibilitas dan capaian tetap menjadi kunci.',
        },
      ],
      note: 'Kerangka-kerangka ini tidak memiliki tingkat validasi yang sama, tidak saling menggantikan, dan tidak semuanya dipakai di setiap proyek. Kami memilih metode yang selaras dengan bukti berdasarkan tujuan, peserta, kendala, dan rencana evaluasi.',
    },
  },

  ai: {
    eyebrow: 'AI & Pembelajaran',
    title: 'Pembelajaran di Era AI',
    lead: 'AI dapat mempercepat pekerjaan desain dan memperkaya pengalaman belajar, tetapi tidak menggantikan pendidik, fasilitator, maupun praktik instruksional yang baik. Kami memosisikannya sebagai alat bantu yang dipilih dengan hati-hati.',
    useCasesTitle: 'Contoh pemanfaatan yang kami dampingi',
    useCases: [
      {
        title: 'Sintesis kebutuhan belajar',
        text: 'Membantu merangkum hasil wawancara, survei, dan dokumen sebagai bahan analisis.',
      },
      {
        title: 'Draf jalur pembelajaran',
        text: 'Menyusun draf awal alur dan urutan modul untuk ditinjau perancang.',
      },
      {
        title: 'Ide konten dan skenario',
        text: 'Mengembangkan variasi kasus, skenario, dan latihan yang kontekstual.',
      },
      {
        title: 'Desain umpan balik formatif',
        text: 'Merancang pola umpan balik yang membantu peserta memperbaiki pemahaman.',
      },
      {
        title: 'Asisten belajar kontekstual',
        text: 'Mengonsep asisten yang menjawab berdasarkan materi resmi organisasi.',
      },
      {
        title: 'Literasi dan tata kelola AI',
        text: 'Melatih staf menggunakan AI secara efektif dan menyusun aturan penggunaannya.',
      },
    ],
    guardrailsTitle: 'Batasan yang selalu kami terapkan',
    guardrails: [
      {
        title: 'Persetujuan manusia',
        text: 'Setiap keluaran AI ditinjau dan disetujui oleh orang yang bertanggung jawab sebelum dipakai.',
      },
      {
        title: 'Perlindungan data',
        text: 'Data organisasi dan data pribadi tidak dimasukkan ke layanan AI tanpa dasar dan pengamanan yang jelas.',
      },
      {
        title: 'Akurasi dan sumber',
        text: 'Risiko halusinasi, bias, dan hak cipta dievaluasi; jawaban dikaitkan dengan sumber yang dapat diperiksa.',
      },
      {
        title: 'Transparansi dan biaya',
        text: 'Penggunaan AI disampaikan secara terbuka, termasuk retensi data, biaya, dan dampaknya.',
      },
      {
        title: 'Keputusan berisiko tinggi',
        text: 'Kami tidak mengotomatiskan keputusan penting tentang peserta tanpa tata kelola yang memadai.',
      },
    ],
    conditionalNote:
      'Kasus penggunaan di atas adalah kapabilitas bersyarat. Kelayakannya ditentukan per proyek melalui uji coba terbatas, bukan dijanjikan siap produksi sejak awal.',
    terminology: {
      title: 'Catatan istilah',
      text: '“Pembelajaran mendalam” dalam pendidikan berarti pemahaman konseptual yang dapat ditransfer. Istilah ini berbeda dari “deep learning” pada AI, yaitu teknik jaringan saraf tiruan.',
    },
  },

  industries: {
    eyebrow: 'Sektor',
    title: 'Organisasi yang Kami Dukung',
    lead: 'Kebutuhan belajar setiap sektor berbeda. Kami menyesuaikan pendekatan dengan budaya, regulasi, dan kapasitas masing-masing.',
    items: [
      {
        icon: 'graduation-cap',
        title: 'Pendidikan',
        text: 'Sekolah, perguruan tinggi, dan lembaga pendidikan yang mengembangkan kurikulum dan pembelajaran digital.',
        examples: [
          'Implementasi LMS',
          'Desain mata kuliah daring',
          'Pengembangan kapasitas pengajar',
        ],
      },
      {
        icon: 'landmark',
        title: 'Korporasi & Perusahaan',
        text: 'Tim HR dan L&D yang membangun onboarding, pengembangan kompetensi, dan akademi internal.',
        examples: ['Program onboarding', 'Akademi korporat', 'Evaluasi dampak pelatihan'],
      },
      {
        icon: 'users',
        title: 'Penyedia Pelatihan',
        text: 'Lembaga pelatihan dan sertifikasi yang menjalankan program berbasis kohort dan tersebar.',
        examples: ['Program kohort', 'Jalur sertifikasi', 'Kesiapan fasilitator'],
      },
      {
        icon: 'scale',
        title: 'Nirlaba & Institusi',
        text: 'Organisasi nirlaba dan institusi yang memperkuat kapasitas staf, mitra, atau komunitas.',
        examples: ['Pelatihan terdistribusi', 'Penguatan kapasitas', 'Materi yang mudah diakses'],
      },
    ],
  },

  work: {
    eyebrow: 'Portofolio',
    title: 'Pekerjaan Pilihan',
    lead: 'Contoh pekerjaan yang telah disetujui untuk dipublikasikan oleh klien kami.',
    labels: { client: 'Klien', sector: 'Sektor', year: 'Tahun', scope: 'Lingkup' },
    // Tambahkan hanya studi kasus yang terverifikasi dan memiliki izin tertulis klien.
    cases: [],
  },

  contact: {
    eyebrow: 'Kontak',
    title: 'Mari Rancang Pembelajaran yang Lebih Baik',
    lead: 'Ceritakan tantangan pembelajaran di organisasi Anda. Kami akan membalas untuk menjadwalkan diskusi awal.',
    emailCta: 'Kirim Email',
    whatsappCta: 'Hubungi via WhatsApp',
    emailSubject: 'Konsultasi STS — Kebutuhan Pembelajaran',
    whatsappMessage:
      'Halo STS, saya tertarik berkonsultasi mengenai kebutuhan pembelajaran di organisasi kami. (Sumber: situs web)',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    companyLabel: 'Perusahaan',
    prepTitle: 'Agar diskusi awal lebih efektif, sertakan:',
    prepItems: [
      'Nama organisasi dan peran Anda',
      'Peserta yang ingin dikembangkan',
      'Tantangan atau tujuan utama',
      'Platform yang sudah digunakan, jika ada',
      'Perkiraan waktu yang Anda harapkan',
    ],
    pendingNote:
      'Kontak resmi sedang dalam proses persetujuan. Tautan email dan WhatsApp akan ditampilkan setelah disetujui.',
  },

  footer: {
    tagline: 'Designing Learning. Enabling Growth.',
    navTitle: 'Navigasi',
    contactTitle: 'Kontak',
    legalTitle: 'Legal',
    ahuLabel: 'Legalitas (AHU)',
    rights: 'Hak cipta dilindungi.',
    privacyNote:
      'Situs ini tidak menggunakan formulir, cookie pelacak, maupun analitik. Tautan kontak membuka aplikasi milik Anda sendiri.',
    backToTop: 'Kembali ke atas',
  },

  notFound: {
    title: 'Halaman tidak ditemukan',
    text: 'Alamat yang Anda buka tidak tersedia atau sudah dipindahkan.',
    cta: 'Kembali ke beranda',
  },
};

export default id;
