import type { Language } from "./portfolio";

export type Experience = {
  period: string;
  role: string;
  organization: string;
  location: string;
  bullets: string[];
};

export const experiences: Record<Language, Experience[]> = {
  id: [
    {
      period: "Juli 2024–Desember 2024",
      role: "System Analyst & UI Designer · Magang",
      organization: "Museum Geologi Bandung · Badan Geologi, Kementerian ESDM",
      location: "Bandung, Jawa Barat",
      bullets: [
        "Memetakan pendataan koleksi, peminjaman, dan pengembalian dengan BPMN setelah menelaah prosedur dan formulir bersama tim.",
        "Menyusun DFD, ERD, CDM, dan PDM untuk 17 entitas koleksi, klasifikasi, penyimpanan, dan peminjaman.",
        "Berkontribusi pada wireframe dan 30+ high-fidelity prototype serta review rancangan melalui diskusi dan FGD staf museum.",
        "Menyiapkan spesifikasi fungsi, model data, traceability matrix, dan rencana 28 kasus uji.",
      ],
    },
    {
      period: "Mar 2026 – Mei 2026",
      role: "System Analyst & Web Development",
      organization: "Dinas Perkebunan Provinsi Jawa Barat",
      location: "Bandung, Jawa Barat",
      bullets: [
        "Mengembangkan SIKOMAN, sistem informasi edukasi komoditas tanaman berbasis web.",
        "Membangun fitur komoditas, jenis, varietas, konten edukasi, forum diskusi, rating, dan pencarian menggunakan PHP, Laravel, dan MySQL.",
        "Menganalisis kebutuhan dengan PIECES, Kano, Five Whys, BPMN, dan UML; mengintegrasikan REST API serta melakukan Black Box Testing.",
      ],
    },
    {
      period: "Jun 2023 – Agu 2023",
      role: "Staf Gudang · Freelance",
      organization: "PT Primarindo Asia Infrastructure Tbk.",
      location: "Bandung, Jawa Barat",
      bullets: [
        "Menata dan men-display produk sepatu di rak berdasarkan kategori, serta melakukan picking barang sesuai pesanan.",
        "Melakukan packing sesuai SOP dan memeriksa kesesuaian jenis, ukuran, serta jumlah barang dengan dokumen sebelum pengiriman.",
      ],
    },
  ],
  en: [
    {
      period: "July–December 2024",
      role: "System Analyst & UI Designer · Internship",
      organization: "Bandung Geological Museum · Geological Agency, Ministry of Energy and Mineral Resources",
      location: "Bandung, West Java",
      bullets: [
        "Mapped collection registration, loans, and returns with BPMN after reviewing procedures and forms with the team.",
        "Prepared DFD, ERD, CDM, and PDM models for 17 collection, classification, storage, and loan entities.",
        "Contributed wireframes and 30+ high-fidelity prototypes, then reviewed the design with museum staff in discussions and an FGD.",
        "Prepared functional specifications, a data model, a traceability matrix, and a plan for 28 test cases.",
      ],
    },
    {
      period: "Mar 2026 – May 2026",
      role: "System Analyst & Web Development",
      organization: "West Java Provincial Plantation Agency",
      location: "Bandung, West Java",
      bullets: [
        "Developed SIKOMAN, a web-based plant commodity education information system.",
        "Built commodity, type, variety, educational content, discussion forum, rating, and search features using PHP, Laravel, and MySQL.",
        "Analyzed requirements with PIECES, Kano, Five Whys, BPMN, and UML; integrated a REST API and performed Black Box Testing.",
      ],
    },
    {
      period: "Jun 2023 – Aug 2023",
      role: "Warehouse Staff · Freelance",
      organization: "PT Primarindo Asia Infrastructure Tbk.",
      location: "Bandung, West Java",
      bullets: [
        "Organized and displayed footwear on shelves by category and picked products according to orders.",
        "Packed products according to SOP and checked item type, size, and quantity against documents before shipping.",
      ],
    },
  ],
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  logo: string;
  logoAlt: string;
  cover: string;
  kind: string;
  period: string;
  role: string;
  organization: string;
  summary: string;
  problem: string;
  contributions: string[];
  skills: string[];
  tools: string[];
  outcome: string;
  coverImages?: string[];
  organizationLogo?: string;
  videoUrl?: string;
};

export const projects: Record<Language, Project[]> = {
  id: [
    {
      number: "01",
      slug: "sikoman",
      title: "SIKOMAN",
      cover: "/projects/sikoman-cover.png",
      coverImages: ["/projects/sikoman-ui-commodities-guest.png", "/projects/sikoman-ui-manage-commodities.png", "/projects/sikoman-ui-forum.png"], 
      logo: "/projects/disbun-logo.jpg",
      logoAlt: "Logo Dinas Perkebunan Provinsi Jawa Barat", 
      kind: "Proyek Akhir / Proyek Magang",
      period: "Mar 2026 – Mei 2026",
      role: "System Analyst & Web Developer",
      organization: "Dinas Perkebunan Provinsi Jawa Barat",
      summary: "Sistem Informasi Komoditas Tanaman Berbasis Web",
      problem: "Informasi komoditas masih tersebar di media sosial, sulit ditelusuri, dan belum memiliki forum serta evaluasi pengguna yang terorganisir.",
      contributions: [
        "Menganalisis kebutuhan dan memodelkan sistem menggunakan PIECES, Kano, Five Whys, BPMN, dan UML.",
        "Mengembangkan fitur komoditas, jenis, varietas, konten edukasi, pencarian, forum diskusi, dan rating.",
        "Membangun aplikasi web dengan PHP, Laravel, dan MySQL, mengintegrasikan REST API, serta melakukan Black Box Testing.",
      ],
      skills: ["Requirements Analysis", "System Analysis", "Web Development", "REST API", "Black Box Testing"],
      tools: ["PHP", "Laravel", "MySQL", "Figma", "Enterprise Architect", "Bizagi Modeler", "Microsoft Word", "Microsoft Excel", "Draw.io", "Selenium"],
      outcome: "Sistem informasi edukasi komoditas tanaman berbasis web.",
    },
    {
      number: "02",
      slug: "sipakt",
      title: "SIPAKT",
      cover: "/projects/sipakt-cover.png",
      coverImages: ["/projects/sipakt-impl-5-2-dashboard-admin.png", "/projects/sipakt-impl-5-3-items-admin.png", "/projects/sipakt-impl-5-6-orders-admin.png"], 
      logo: "/projects/primarindo-logo.webp",
      logoAlt: "Logo PT Primarindo Asia Infrastructure Tbk.", 
      kind: "Proyek Akademik",
      period: "Februari – Juli 2025",
      role: "System Analyst & Web Developer",
      organization: "PT Primarindo Asia Infrastructure Tbk.",
      summary: "Sistem Informasi Pergudangan Alas Kaki Tomkins",
      problem: "Laporan Proyek 2 mencatat pencatatan gudang masih berbasis kertas dan belum terintegrasi, sehingga data sulit direkap dan mudah rusak atau hilang.",
      contributions: [
        "Menganalisis proses bisnis dan masalah pencatatan gudang dari laporan proyek.",
        "Memodelkan proses As-Is untuk pengadaan, penerimaan, pengeluaran, dan pelaporan dengan BPMN.",
        "Merancang dan mengimplementasikan SIPAKT berdasarkan DPL menggunakan PHP, CodeIgniter 3, dan MySQL.",
      ],
      skills: ["System Analysis", "Requirements Analysis", "Web Development", "Black Box Testing"],
      tools: ["PHP", "CodeIgniter 3", "MySQL", "Visual Studio Code", "Bizagi Modeler", "Sparx Enterprise Architect", "Draw.io", "Microsoft Word", "Microsoft Excel"],
      outcome: "Aplikasi pergudangan berbasis web dengan 8 fungsi utama; 48 skenario uji pada DPL berstatus diterima.",
    },
    {
      number: "03",
      slug: "kageo",
      title: "KAGEO",
      cover: "/projects/kageo-source/assets/evidence/kageo-prototype-32.webp",
      coverImages: ["/projects/kageo-source/assets/evidence/kageo-prototype-32-preview.webp", "/projects/kageo-source/assets/evidence/kageo-prototype-25-preview.webp", "/projects/kageo-source/assets/evidence/kageo-prototype-30-preview.webp"],
      logo: "/projects/kageo-source/assets/logos/kageo.webp",
      logoAlt: "Logo KAGEO",
      organizationLogo: "/projects/kageo-source/assets/logos/museum-geologi.webp",
      videoUrl: "https://youtu.be/ttZ7PpkSZu8",
      kind: "Magang",
      period: "Juli–Desember 2024",
      role: "System Analyst & UI Designer",
      organization: "Museum Geologi Bandung",
      summary: "Perancangan Sistem Informasi Pengelolaan Koleksi Benda Geologi",
      problem: "Data koleksi dan peminjaman tersebar dalam catatan fisik dan spreadsheet; hasil proyek berupa rancangan dan prototipe.",
      contributions: [
        "Menelaah prosedur dan formulir bersama tim, lalu memetakan pendataan koleksi, peminjaman, serta pengembalian dalam BPMN.",
        "Menyusun DFD, ERD, CDM, dan PDM yang menghubungkan 17 entitas koleksi, klasifikasi, penyimpanan, serta peminjaman.",
        "Berkontribusi menyusun wireframe dan 30+ high-fidelity prototype, lalu meninjau rancangan melalui diskusi dan FGD bersama staf museum.",
        "Menyusun spesifikasi fungsi, model data, traceability matrix, dan rencana 28 kasus uji sebagai acuan pengembangan berikutnya.",
      ],
      skills: ["BPMN", "DFD, ERD, CDM & PDM", "Figma Prototyping", "FGD & Traceability"],
      tools: ["Bizagi Modeler", "SAP PowerDesigner", "Figma", "Draw.io", "Microsoft Visio", "Microsoft Office"],
      outcome: "Rancangan yang menghubungkan koleksi, klasifikasi, lokasi, dan transaksi peminjaman; dilengkapi prototipe interaktif serta spesifikasi sistem.",
    },
  ],
  en: [
    {
      number: "01",
      slug: "sikoman",
      title: "SIKOMAN",
      cover: "/projects/sikoman-cover.png",
      coverImages: ["/projects/sikoman-ui-commodities-guest.png", "/projects/sikoman-ui-manage-commodities.png", "/projects/sikoman-ui-forum.png"],
      logo: "/projects/disbun-logo.jpg",
      logoAlt: "West Java Provincial Plantation Agency logo",
      kind: "Final Project / Internship Project",
      period: "Mar 2026 – May 2026",
      role: "System Analyst & Web Developer",
      organization: "West Java Provincial Plantation Agency",
      summary: "Web-Based Plant Commodity Information System",
      problem: "Commodity information is scattered across social media, difficult to find, and lacks organized discussion and user feedback.",
      contributions: [
        "Analyzed requirements and modeled the system using PIECES, Kano, Five Whys, BPMN, and UML.",
        "Developed commodity, type, variety, educational content, search, discussion forum, and rating features.",
        "Built the web application with PHP, Laravel, and MySQL, integrated a REST API, and performed Black Box Testing.",
      ],
      skills: ["Requirements Analysis", "System Analysis", "Web Development", "REST API", "Black Box Testing"],
      tools: ["PHP", "Laravel", "MySQL", "Figma", "Enterprise Architect", "Bizagi Modeler", "Microsoft Word", "Microsoft Excel", "Draw.io", "Selenium"],
      outcome: "A web-based plant commodity education information system.",
    },
    {
      number: "02",
      slug: "sipakt",
      title: "SIPAKT",
      cover: "/projects/sipakt-cover.png",
      coverImages: ["/projects/sipakt-impl-5-2-dashboard-admin.png", "/projects/sipakt-impl-5-3-items-admin.png", "/projects/sipakt-impl-5-6-orders-admin.png"],
      logo: "/projects/primarindo-logo.webp",
      logoAlt: "PT Primarindo Asia Infrastructure Tbk. logo",
      kind: "Academic Project",
      period: "February – July 2025",
      role: "System Analyst & Web Developer",
      organization: "PT Primarindo Asia Infrastructure Tbk.",
      summary: "Tomkins Footwear Warehouse Information System",
      problem: "The Proyek 2 report finds that warehouse records are paper-based and disconnected, making them difficult to compile and vulnerable to damage or loss.",
      contributions: [
        "Analyzed warehouse business processes and record-keeping issues from the project report.",
        "Modeled the As-Is procurement, receiving, issuing, and reporting processes using BPMN.",
        "Designed and implemented SIPAKT from the DPL using PHP, CodeIgniter 3, and MySQL.",
      ],
      skills: ["System Analysis", "Requirements Analysis", "Web Development", "Black Box Testing"],
      tools: ["PHP", "CodeIgniter 3", "MySQL", "Visual Studio Code", "Bizagi Modeler", "Sparx Enterprise Architect", "Draw.io", "Microsoft Word", "Microsoft Excel"],
      outcome: "A web-based warehouse application with 8 main functions; the DPL records 48 accepted test scenarios.",
    },
    {
      number: "03",
      slug: "kageo",
      title: "KAGEO",
      cover: "/projects/kageo-source/assets/evidence/kageo-prototype-32.webp",
      coverImages: ["/projects/kageo-source/assets/evidence/kageo-prototype-32-preview.webp", "/projects/kageo-source/assets/evidence/kageo-prototype-25-preview.webp", "/projects/kageo-source/assets/evidence/kageo-prototype-30-preview.webp"],
      logo: "/projects/kageo-source/assets/logos/kageo.webp",
      logoAlt: "KAGEO logo",
      organizationLogo: "/projects/kageo-source/assets/logos/museum-geologi.webp",
      videoUrl: "https://youtu.be/ttZ7PpkSZu8",
      kind: "Internship",
      period: "July–December 2024",
      role: "System Analyst & UI Designer",
      organization: "Bandung Geological Museum",
      summary: "Geological Collection Management Design",
      problem: "A system design for managing collections, storage locations, and loans at Bandung Geological Museum.",
      contributions: [
        "Reviewed procedures and forms with the team, then mapped collection registration, loans, and returns in BPMN.",
        "Prepared DFD, ERD, CDM, and PDM models connecting 17 collection, classification, storage, and loan entities.",
        "Contributed wireframes and 30+ high-fidelity prototypes, then reviewed the design in discussions and an FGD with museum staff.",
        "Prepared functional specifications, a data model, traceability matrix, and a plan for 28 test cases as references for future development.",
      ],
      skills: ["BPMN", "DFD, ERD, CDM & PDM", "Figma Prototyping", "FGD & Traceability"],
      tools: ["Bizagi Modeler", "SAP PowerDesigner", "Figma", "Draw.io", "Microsoft Visio", "Microsoft Office"],
      outcome: "A design connecting collections, classifications, locations, and loan transactions, supported by interactive prototypes and system specifications.",
    },
  ],
};
