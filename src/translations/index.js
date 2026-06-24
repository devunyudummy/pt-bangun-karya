export const translations = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang Kami',
      vision: 'Visi & Misi',
      services: 'Layanan',
      portfolio: 'Portofolio',
      partners: 'Mitra',
      contact: 'Kontak',
    },

    hero: {
      eyebrow: 'Perusahaan Konstruksi Terpercaya',
      line1: 'MEMBANGUN',
      line2: 'MASA DEPAN',
      line3: 'BERSAMA KAMI',
      sub: 'PT. Bangun Karya adalah mitra konstruksi profesional yang menghadirkan kualitas terbaik dalam setiap proyek — dari fondasi hingga puncak gedung.',
      cta: 'Lihat Portofolio',
      ctaSecondary: 'Hubungi Kami',
      scroll: 'Scroll ke bawah',
      badge: 'Tahun Pengalaman',
    },

    stats: [
      { value: 20, suffix: '+', label: 'Tahun Pengalaman' },
      { value: 350, suffix: '+', label: 'Proyek Selesai' },
      { value: 80, suffix: '+', label: 'Klien Puas' },
      { value: 15, suffix: '', label: 'Penghargaan Nasional' },
    ],

    about: {
      eyebrow: 'Tentang Kami',
      heading: 'Fondasi Kuat, Karya Nyata',
      p1: 'PT. Bangun Karya didirikan pada tahun 2004 dengan visi menjadi perusahaan konstruksi terdepan di Indonesia. Selama lebih dari dua dekade, kami telah membangun kepercayaan melalui kualitas kerja yang konsisten dan integritas yang tak tergoyahkan.',
      p2: 'Dengan tim insinyur berpengalaman dan penerapan teknologi konstruksi mutakhir, kami siap mewujudkan setiap visi klien menjadi karya yang kokoh, estetis, dan berkelanjutan.',
      highlights: [
        { label: 'ISO 9001:2015 Tersertifikasi', desc: 'Standar manajemen mutu internasional' },
        { label: 'Tim Ahli Bersertifikat', desc: '200+ tenaga profesional aktif' },
        { label: 'On-Time Delivery', desc: '97% proyek selesai tepat jadwal' },
      ],
      imagePlaceholder: 'FOTO KANTOR / PROYEK',
    },

    vision: {
      eyebrow: 'Visi & Misi',
      visionLabel: 'Visi',
      visionText:
        'Menjadi perusahaan konstruksi terdepan dan terpercaya di Asia Tenggara yang menghadirkan solusi bangunan berkualitas tinggi, berkelanjutan, dan berdampak positif bagi masyarakat.',
      missionLabel: 'Misi',
      missions: [
        'Menghadirkan proyek konstruksi dengan kualitas terbaik yang melampaui ekspektasi klien.',
        'Menerapkan teknologi dan inovasi terkini untuk efisiensi dan ketepatan pelaksanaan.',
        'Membangun hubungan jangka panjang berdasarkan kepercayaan, transparansi, dan integritas.',
        'Mengutamakan keselamatan kerja dan kelestarian lingkungan di setiap proyek.',
        'Mengembangkan sumber daya manusia yang kompeten dan berdedikasi tinggi.',
      ],
      valuesLabel: 'Nilai Inti',
      values: [
        { icon: '◆', label: 'Kualitas',    desc: 'Standar tertinggi di setiap pekerjaan' },
        { icon: '◆', label: 'Integritas',  desc: 'Jujur dan transparan dalam semua hal' },
        { icon: '◆', label: 'Inovasi',     desc: 'Selalu mencari cara yang lebih baik' },
        { icon: '◆', label: 'Keselamatan', desc: 'Zero accident adalah prioritas utama' },
      ],
    },

    services: {
      eyebrow: 'Layanan Kami',
      heading: 'Apa yang Dapat\nKami Kerjakan',
      sub: 'Kami menyediakan layanan konstruksi menyeluruh untuk berbagai skala proyek — dari pekerjaan kecil hingga mega proyek nasional.',
      items: [
        { icon: '🏢', title: 'Konstruksi Gedung',       desc: 'Gedung komersial, perkantoran, apartemen, hotel, dan fasilitas publik dengan standar konstruksi kelas dunia.', tags: ['High-Rise', 'Mixed-Use', 'Fasilitas Publik'] },
        { icon: '🛣️', title: 'Infrastruktur & Sipil',   desc: 'Jalan raya, jembatan, terowongan, dan infrastruktur transportasi yang kokoh dan tahan lama.', tags: ['Jalan Raya', 'Jembatan', 'Drainase'] },
        { icon: '🏭', title: 'Gedung Industri',          desc: 'Pabrik, gudang, fasilitas manufaktur, dan kawasan industri dengan desain fungsional dan efisien.', tags: ['Pabrik', 'Gudang', 'Kawasan Industri'] },
        { icon: '🏡', title: 'Perumahan & Residensial',  desc: 'Perumahan tapak, vila, townhouse, dan kompleks residensial berkualitas tinggi untuk berbagai segmen pasar.', tags: ['Perumahan', 'Vila', 'Townhouse'] },
        { icon: '⚙️', title: 'MEP',                      desc: 'Instalasi sistem mekanikal, elektrikal, dan plumbing terintegrasi untuk memastikan bangunan berfungsi optimal.', tags: ['Elektrikal', 'Plumbing', 'HVAC'] },
        { icon: '🔨', title: 'Renovasi & Retrofitting',  desc: 'Renovasi dan peremajaan bangunan eksisting dengan mempertahankan integritas struktur asli.', tags: ['Renovasi', 'Retrofit', 'Pemugaran'] },
        { icon: '📐', title: 'Manajemen Proyek',         desc: 'Layanan manajemen proyek menyeluruh: perencanaan, pengadaan, pengawasan, hingga serah terima.', tags: ['Planning', 'Pengawasan', 'Quality Control'] },
        { icon: '📋', title: 'Konsultasi Konstruksi',    desc: 'Konsultasi teknis, studi kelayakan, analisis risiko, dan value engineering untuk proyek Anda.', tags: ['Feasibility Study', 'Value Engineering', 'Risk'] },
      ],
    },

    portfolio: {
      eyebrow: 'Portofolio',
      heading: 'Proyek-Proyek\nUnggulan Kami',
      sub: 'Berikut sebagian proyek yang telah kami selesaikan dengan standar kualitas tertinggi.',
      filters: { all: 'Semua', commercial: 'Komersial', infrastructure: 'Infrastruktur', industrial: 'Industri', residential: 'Residensial' },
      items: [
        { title: 'BKM Tower',                category: 'commercial',     location: 'Jakarta Selatan', year: '2023', desc: '32 lantai gedung perkantoran premium dengan sertifikasi green building GBCI.' },
        { title: 'Jembatan Citarum',         category: 'infrastructure', location: 'Jawa Barat',      year: '2022', desc: 'Jembatan 1,2 km dengan kapasitas beban 80 ton, menghubungkan dua kabupaten.' },
        { title: 'Kawasan Industri Bekasi II',category: 'industrial',    location: 'Bekasi',           year: '2022', desc: 'Pengembangan 45 hektar kawasan industri dengan 12 unit pabrik siap huni.' },
        { title: 'Green Valley Residence',   category: 'residential',    location: 'Bandung',          year: '2021', desc: '280 unit rumah tapak eco-friendly dengan fasilitas lengkap dan RTH 40%.' },
        { title: 'Archipelago Resort & Spa', category: 'commercial',     location: 'Bali',             year: '2021', desc: 'Resort hotel bintang 5 dengan 200 kamar, 3 restoran, dan fasilitas MICE.' },
        { title: 'Flyover Cikarang',         category: 'infrastructure', location: 'Bekasi',           year: '2020', desc: 'Flyover 800 m untuk mengurai kemacetan di koridor industri utama.' },
      ],
    },

    partners: {
      eyebrow: 'Mitra & Klien',
      heading: 'Dipercaya Perusahaan\nTerkemuka',
      sub: 'Kami telah menjalin kemitraan strategis dengan berbagai perusahaan nasional dan multinasional selama lebih dari dua dekade.',
      logos: [
        'PT. Semen Indonesia', 'PT. Waskita Karya', 'PT. Wijaya Karya',
        'Archipelago Hotels', 'PT. Astra Property', 'PT. Jasa Marga',
        'PT. Adhi Karya', 'Ciputra Group', 'PT. PP (Persero)',
        'PT. Hutama Karya', 'Agung Podomoro', 'PT. Summarecon',
      ],
    },

    testimonials: {
      eyebrow: 'Testimoni',
      heading: 'Apa Kata Klien Kami',
      items: [
        { quote: 'PT. Bangun Karya menyelesaikan proyek gedung kantor kami tepat waktu dan sesuai anggaran. Kualitas konstruksinya luar biasa — tim mereka sangat profesional dan responsif terhadap setiap perubahan.', name: 'Budi Santoso', role: 'CEO, PT. Maju Bersama' },
        { quote: 'Standar keselamatan yang diterapkan sangat ketat dan hasilnya melampaui ekspektasi kami. Renovasi pabrik kami selesai 2 minggu lebih cepat dari jadwal tanpa mengorbankan kualitas sedikit pun.', name: 'Siti Rahayu', role: 'Direktur Operasional, PT. Industri Jaya' },
        { quote: 'Tim Bangun Karya memberikan solusi kreatif untuk setiap tantangan teknis. Komunikasi mereka transparan dan laporan progress selalu on-point. Kami tidak ragu untuk bekerja sama lagi.', name: 'Ahmad Fauzi', role: 'Project Director, Archipelago Hotels' },
      ],
    },

    contact: {
      eyebrow: 'Hubungi Kami',
      heading: 'Mari Membangun\nBersama',
      sub: 'Punya proyek dalam pikiran? Ceritakan kepada kami dan tim kami siap mendiskusikan solusi terbaik untuk Anda.',
      address: 'Jl. Konstruksi Raya No. 123\nJakarta Selatan 12345, Indonesia',
      phone: '+62 21 1234 5678',
      email: 'info@bangunkarya.co.id',
      hours: 'Senin – Jumat: 08.00 – 17.00 WIB',
      form: {
        name: 'Nama Lengkap',
        email: 'Alamat Email',
        phone: 'Nomor Telepon (opsional)',
        subject: 'Jenis Proyek / Subjek',
        message: 'Ceritakan tentang proyek Anda…',
        submit: 'Kirim Pesan',
        success: '✓ Pesan berhasil dikirim! Tim kami akan menghubungi Anda dalam 1×24 jam.',
      },
    },

    footer: {
      tagline: 'Membangun Kepercayaan,\nMewujudkan Impian.',
      quickLinks: 'Tautan Cepat',
      servicesTitle: 'Layanan',
      contactTitle: 'Kontak',
      serviceLinks: ['Konstruksi Gedung', 'Infrastruktur & Sipil', 'Gedung Industri', 'Renovasi & Retrofitting', 'Manajemen Proyek'],
      copyright: '© 2024 PT. Bangun Karya. Seluruh hak cipta dilindungi.',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan',
    },
  },

  /* ─── ENGLISH ─── */
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      vision: 'Vision & Mission',
      services: 'Services',
      portfolio: 'Portfolio',
      partners: 'Partners',
      contact: 'Contact',
    },

    hero: {
      eyebrow: 'Trusted Construction Company',
      line1: 'BUILDING',
      line2: 'THE FUTURE',
      line3: 'TOGETHER',
      sub: 'PT. Bangun Karya is a professional construction partner delivering the highest quality on every project — from foundation to final finish.',
      cta: 'View Portfolio',
      ctaSecondary: 'Contact Us',
      scroll: 'Scroll down',
      badge: 'Years of Experience',
    },

    stats: [
      { value: 20, suffix: '+', label: 'Years of Experience' },
      { value: 350, suffix: '+', label: 'Projects Completed' },
      { value: 80, suffix: '+', label: 'Satisfied Clients' },
      { value: 15, suffix: '', label: 'National Awards' },
    ],

    about: {
      eyebrow: 'About Us',
      heading: 'Strong Foundation, Real Results',
      p1: 'PT. Bangun Karya was founded in 2004 with a vision to become Indonesia\'s leading construction company. For over two decades, we have earned trust through consistent quality and unwavering integrity.',
      p2: 'With a seasoned engineering team and cutting-edge construction technology, we turn every client\'s vision into a solid, aesthetic, and sustainable reality.',
      highlights: [
        { label: 'ISO 9001:2015 Certified', desc: 'International quality management standard' },
        { label: 'Certified Expert Team', desc: '200+ active professionals' },
        { label: 'On-Time Delivery', desc: '97% of projects on schedule' },
      ],
      imagePlaceholder: 'OFFICE / PROJECT PHOTO',
    },

    vision: {
      eyebrow: 'Vision & Mission',
      visionLabel: 'Vision',
      visionText:
        'To be the leading and most trusted construction company in Southeast Asia, delivering high-quality, sustainable building solutions with a lasting positive impact on society.',
      missionLabel: 'Mission',
      missions: [
        'Deliver construction projects with the highest quality that exceeds client expectations.',
        'Apply the latest technology and innovation for efficiency and execution precision.',
        'Build long-term relationships based on trust, transparency, and integrity.',
        'Prioritize workplace safety and environmental sustainability in every project.',
        'Develop competent, highly dedicated people across all levels of the organization.',
      ],
      valuesLabel: 'Core Values',
      values: [
        { icon: '◆', label: 'Quality',    desc: 'Highest standards in every task' },
        { icon: '◆', label: 'Integrity',  desc: 'Honest and transparent in all things' },
        { icon: '◆', label: 'Innovation', desc: 'Always finding a better way' },
        { icon: '◆', label: 'Safety',     desc: 'Zero accident — always our top priority' },
      ],
    },

    services: {
      eyebrow: 'Our Services',
      heading: 'What We Can\nDo For You',
      sub: 'We provide comprehensive construction services across all project scales — from local builds to large-scale national projects.',
      items: [
        { icon: '🏢', title: 'Building Construction',    desc: 'Commercial buildings, offices, apartments, hotels, and public facilities built to world-class standards.', tags: ['High-Rise', 'Mixed-Use', 'Public Facilities'] },
        { icon: '🛣️', title: 'Infrastructure & Civil',   desc: 'Highways, bridges, tunnels, and transportation infrastructure built for durability and long-term performance.', tags: ['Highways', 'Bridges', 'Drainage'] },
        { icon: '🏭', title: 'Industrial Buildings',     desc: 'Factories, warehouses, manufacturing facilities, and industrial estates with functional and efficient design.', tags: ['Factories', 'Warehouses', 'Industrial Estates'] },
        { icon: '🏡', title: 'Housing & Residential',   desc: 'High-quality landed houses, villas, townhouses, and residential complexes for every market segment.', tags: ['Housing', 'Villas', 'Townhouses'] },
        { icon: '⚙️', title: 'MEP Systems',              desc: 'Integrated mechanical, electrical, and plumbing installations ensuring optimal building performance.', tags: ['Electrical', 'Plumbing', 'HVAC'] },
        { icon: '🔨', title: 'Renovation & Retrofitting',desc: 'Renovation and revitalization of existing buildings while preserving structural integrity.', tags: ['Renovation', 'Retrofit', 'Restoration'] },
        { icon: '📐', title: 'Project Management',       desc: 'End-to-end project management: planning, procurement, supervision, and handover.', tags: ['Planning', 'Supervision', 'Quality Control'] },
        { icon: '📋', title: 'Construction Consulting',  desc: 'Technical consulting, feasibility studies, risk analysis, and value engineering for your project.', tags: ['Feasibility Study', 'Value Engineering', 'Risk'] },
      ],
    },

    portfolio: {
      eyebrow: 'Portfolio',
      heading: 'Our Featured\nProjects',
      sub: 'A selection of projects completed to the highest standards of quality and craftsmanship.',
      filters: { all: 'All', commercial: 'Commercial', infrastructure: 'Infrastructure', industrial: 'Industrial', residential: 'Residential' },
      items: [
        { title: 'BKM Tower',                  category: 'commercial',     location: 'South Jakarta', year: '2023', desc: '32-floor premium office building with GBCI green building certification.' },
        { title: 'Citarum Bridge',              category: 'infrastructure', location: 'West Java',      year: '2022', desc: '1.2 km bridge with 80-ton load capacity connecting two regencies.' },
        { title: 'Bekasi Industrial Estate II', category: 'industrial',    location: 'Bekasi',          year: '2022', desc: 'Development of a 45-hectare industrial zone with 12 ready-to-occupy factory units.' },
        { title: 'Green Valley Residence',      category: 'residential',   location: 'Bandung',         year: '2021', desc: '280 eco-friendly landed houses with complete facilities and 40% green space.' },
        { title: 'Archipelago Resort & Spa',    category: 'commercial',    location: 'Bali',            year: '2021', desc: '5-star resort with 200 rooms, 3 restaurants, and full MICE facilities.' },
        { title: 'Cikarang Flyover',            category: 'infrastructure', location: 'Bekasi',         year: '2020', desc: '800m flyover alleviating congestion in the main industrial corridor.' },
      ],
    },

    partners: {
      eyebrow: 'Partners & Clients',
      heading: 'Trusted by Leading\nCompanies',
      sub: 'We have built strategic partnerships with national and multinational companies across Indonesia for over two decades.',
      logos: [
        'PT. Semen Indonesia', 'PT. Waskita Karya', 'PT. Wijaya Karya',
        'Archipelago Hotels', 'PT. Astra Property', 'PT. Jasa Marga',
        'PT. Adhi Karya', 'Ciputra Group', 'PT. PP (Persero)',
        'PT. Hutama Karya', 'Agung Podomoro', 'PT. Summarecon',
      ],
    },

    testimonials: {
      eyebrow: 'Testimonials',
      heading: 'What Our Clients Say',
      items: [
        { quote: 'PT. Bangun Karya delivered our office building on time and within budget. The construction quality was outstanding — their team was professional and responsive to every change request.', name: 'Budi Santoso', role: 'CEO, PT. Maju Bersama' },
        { quote: 'Safety standards were rigorously applied and results exceeded our expectations. Our factory renovation was completed two weeks ahead of schedule without compromising quality at all.', name: 'Siti Rahayu', role: 'COO, PT. Industri Jaya' },
        { quote: 'The Bangun Karya team delivered creative solutions for every technical challenge. Their communication is transparent and progress reports always on point. We\'d partner with them again without hesitation.', name: 'Ahmad Fauzi', role: 'Project Director, Archipelago Hotels' },
      ],
    },

    contact: {
      eyebrow: 'Contact Us',
      heading: "Let's Build\nTogether",
      sub: "Have a project in mind? Tell us about it and our team will reach out with the best solution for you.",
      address: 'Jl. Konstruksi Raya No. 123\nSouth Jakarta 12345, Indonesia',
      phone: '+62 21 1234 5678',
      email: 'info@bangunkarya.co.id',
      hours: 'Monday – Friday: 08:00 – 17:00 WIB',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number (optional)',
        subject: 'Project Type / Subject',
        message: 'Tell us about your project…',
        submit: 'Send Message',
        success: '✓ Message sent! Our team will contact you within 24 hours.',
      },
    },

    footer: {
      tagline: 'Building Trust,\nRealizing Dreams.',
      quickLinks: 'Quick Links',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      serviceLinks: ['Building Construction', 'Infrastructure & Civil', 'Industrial Buildings', 'Renovation & Retrofitting', 'Project Management'],
      copyright: '© 2024 PT. Bangun Karya. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
    },
  },
}
