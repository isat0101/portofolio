import type { Language } from "./portfolio";

export type CaseSection = {
  id: string;
  title: string;
  navTitle?: { id: string; en: string };
  intro: string;
  details: string[];
  artifact: string;
  caption: string;
  relation?: string;
  document?: string;
  evidence?: { title: string; document: string; caption?: string }[];
  galleryId?: string;
  artifactStats?: { value: string; label: string }[];
};

export type CaseStudyOutcome = {
  icon: "leaf" | "forum" | "rating" | "inventory" | "transactions" | "document";
  title: string;
  description: string;
};

export type CaseStudyBackgroundItem = {
  icon: "folder" | "questions" | "rating" | "inventory" | "document";
  title: string;
  description: string;
};

export type CaseStudyContent = {
  contextTitle: string;
  context: string;
  backgroundItems?: CaseStudyBackgroundItem[];
  sectionGroupTitle?: { id: string; en: string };
  roleTitle: string;
  responsibilities: string[];
  metrics: { value: string; label: string }[];
  focus: string[];
  sections: CaseSection[];
  outcomeTitle: string;
  outcome: string;
  outcomes?: CaseStudyOutcome[];
  disclosure?: string;
};

const kageoId: CaseStudyContent = {
  contextTitle: "Latar Belakang",
  context: "Rancangan sistem pengelolaan koleksi, lokasi penyimpanan, dan peminjaman untuk Museum Geologi Bandung.",
  backgroundItems: [
    { icon: "inventory", title: "Data Koleksi", description: "Pencatatan koleksi tersebar pada dokumen fisik dan spreadsheet." },
    { icon: "folder", title: "Lokasi Penyimpanan", description: "Hubungan koleksi dengan lokasi penyimpanan perlu dicatat secara terstruktur." },
    { icon: "document", title: "Peminjaman Koleksi", description: "Peminjaman dan pengembalian membutuhkan status serta arsip transaksi yang jelas." },
  ],
  roleTitle: "Role dan tanggung jawab pengguna",
  responsibilities: [
    "Kepala Museum — meninjau persetujuan akun dan peminjaman koleksi, serta melihat laporan.",
    "Staff — mengelola data koleksi, memproses peminjaman, dan menyiapkan laporan.",
    "Admin — mengelola akun user, role, dan permission dalam rancangan sistem.",
    "Peminjam — mendaftar akun dan mengajukan peminjaman koleksi untuk keperluan penelitian.",
    "Masyarakat — mengakses informasi dasar koleksi melalui katalog publik.",
  ],
  metrics: [
    { value: "3", label: "Business processes" },
    { value: "17", label: "Data entities" },
    { value: "30+", label: "High-fidelity prototypes" },
  ],
  focus: [],
  sectionGroupTitle: { id: "Proses Pengerjaan", en: "Project Process" },
  sections: [
    {
      id: "analisis-kebutuhan",
      title: "Analisis Kebutuhan",
      intro: "Saya menelaah prosedur dan formulir bersama tim, lalu memetakan pendataan koleksi, peminjaman, serta pengembalian dalam BPMN.",
      details: ["Memetakan proses pendataan koleksi, peminjaman, dan pengembalian dalam BPMN As-Is.", "Meninjau prosedur dan formulir yang digunakan bersama tim."],
      artifact: "BPMN As-Is — pendataan koleksi",
      caption: "Alur pendataan dan pengelolaan informasi koleksi geologi oleh staf museum.",
      document: "/projects/kageo-source/assets/evidence/kageo-bpmn-2.webp",
      galleryId: "kageo-stage-1",
    },
    {
      id: "perancangan-data",
      title: "Perancangan Data",
      intro: "Saya menyusun DFD, ERD, CDM, dan PDM untuk menghubungkan 17 entitas koleksi, klasifikasi, penyimpanan, serta peminjaman.",
      details: ["Menyusun diagram konteks, DFD Level 1, dan DFD Level 2.", "Merancang ERD, CDM, dan PDM untuk 17 entitas data."],
      artifact: "Conceptual Data Model KAGEO",
      caption: "Model konseptual 17 entitas KAGEO beserta hubungan antarentitas.",
      document: "/projects/kageo-source/assets/evidence/kageo-cdm.webp",
      galleryId: "kageo-stage-2",
    },
    {
      id: "perancangan-antarmuka",
      title: "Perancangan Antarmuka",
      intro: "Saya berkontribusi menyusun wireframe dan high-fidelity prototype di Figma untuk memvisualisasikan alur kerja pengguna.",
      details: ["Menyusun low-fidelity wireframe untuk menu dan alur sistem.", "Berkontribusi membuat lebih dari 30 high-fidelity prototype untuk katalog publik, staf, admin, dan Kepala Museum."],
      artifact: "Low-fidelity wireframe",
      caption: "Sketsa penempatan menu dan informasi sebelum pembuatan prototype digital KAGEO.",
      document: "/projects/kageo-source/assets/kageo-sketsa.webp",
      galleryId: "kageo-stage-3",
    },
    {
      id: "review-pengguna",
      title: "Review Pengguna",
      intro: "Saya meninjau rancangan melalui diskusi dan FGD bersama staf museum, lalu menggunakan masukan pengguna untuk menyempurnakannya.",
      details: ["Membahas alur rancangan bersama staf Museum Geologi Bandung.", "Menggunakan masukan dari FGD untuk menyempurnakan rancangan."],
      artifact: "Diskusi & validasi rancangan",
      caption: "Dokumentasi kegiatan diskusi dan validasi rancangan KAGEO bersama tim museum.",
      document: "/projects/kageo-source/assets/kageo-fgd.webp",
      evidence: [
        { title: "Diskusi formal bersama tim museum", document: "/projects/kageo-source/assets/evidence/kageo-collaboration-formal.png" },
        { title: "Kolaborasi tim KAGEO", document: "/projects/kageo-source/assets/evidence/kageo-collaboration-team.png" },
      ],
    },
    {
      id: "dokumentasi-sistem",
      title: "Dokumentasi Sistem",
      intro: "Saya berkontribusi menyusun spesifikasi fungsi, model data, dan traceability matrix sebagai acuan pengembangan berikutnya.",
      details: ["Menyusun spesifikasi fungsi dan dokumentasi model data.", "Merencanakan 28 kasus uji dan menghubungkan kebutuhan dengan butir pengujian."],
      artifact: "Requirements traceability & test planning",
      caption: "Pemetaan kebutuhan ke butir pengujian sebagai acuan validasi rancangan KAGEO.",
      document: "/projects/kageo-source/assets/artifacts/kageo-traceability.webp",
      galleryId: "kageo-stage-5",
    },
  ],
  outcomeTitle: "Hasil Proyek",
  outcomes: [
    { icon: "inventory", title: "Data Koleksi Terhubung", description: "Rancangan menghubungkan koleksi, klasifikasi, lokasi, dan transaksi peminjaman." },
    { icon: "leaf", title: "Prototipe Interaktif", description: "Proyek tim menghasilkan 30+ high-fidelity prototype untuk alur layanan museum." },
    { icon: "document", title: "Spesifikasi Sistem", description: "Kebutuhan dan model sistem terdokumentasi sebagai acuan pengembangan." },
  ],
  outcome: "Rancangan pengelolaan koleksi, lokasi penyimpanan, dan peminjaman untuk Museum Geologi Bandung.",
};

const sikomanId: CaseStudyContent = {
  contextTitle: "Latar Belakang",
  backgroundItems: [
    { icon: "folder", title: "Informasi Komoditas Tersebar", description: "Informasi komoditas dan varietas tersebar di media sosial sehingga masyarakat sulit menemukan rujukan terpadu." },
    { icon: "questions", title: "Pertanyaan Tidak Terdokumentasi", description: "Pertanyaan dan pelayanan belum tercatat terpusat, sehingga riwayat interaksi sulit ditelusuri." },
    { icon: "rating", title: "Interaksi Belum Terorganisir", description: "Diskusi pengguna dan evaluasi minat melalui rating belum terkelola dalam satu sistem." },
  ],
  context: "Informasi komoditas, jenis, dan varietas masih tersebar melalui media sosial. Akibatnya, masyarakat sulit menemukan informasi, pertanyaan tidak terdokumentasi dengan baik, dan interaksi serta evaluasi minat pengguna belum terorganisir dalam satu sistem.",
  roleTitle: "Role dan peran pengguna",
  responsibilities: [
    "Admin — mengelola data pengguna, komoditas, jenis, varietas, produk olahan, forum diskusi, dan laporan.",
    "Operator — mengelola forum diskusi.",
    "Member — melihat informasi lengkap berupa gambar, teks, audio, dan video; mengikuti forum dan memberi rating.",
    "Guest — melihat informasi dasar berupa gambar dan teks; mendaftar akun untuk mendapatkan akses penuh.",
    "API — aktor eksternal untuk sinkronisasi data informasi komoditas.",
  ],
  metrics: [],
  focus: ["Informasi komoditas", "Edukasi", "Forum diskusi", "Rating"],
  sectionGroupTitle: { id: "Analisis & Perancangan", en: "Analysis & Design" },
  sections: [
    {
      id: "analisis-sikoman",
      title: "Analisis Kebutuhan",
      intro: "Saya mengidentifikasi masalah, menelaah kondisi proses yang berjalan, dan menyusun prioritas kebutuhan pengguna.",
      details: ["Rantai Nilai Porter", "Five Whys pada penyampaian informasi, pertanyaan, dan evaluasi materi", "PIECES: enam aspek; rata-rata 1,88 (Tidak Puas) dari 40 responden", "Kano: klasifikasi kebutuhan untuk tujuh fitur"],
      artifact: "Diagram Ishikawa",
      caption: "Diagram Ishikawa dari laporan merangkum akar masalah penyampaian informasi edukasi komoditas yang belum optimal.",
      relation: "Informasi tersebar di media sosial, pertanyaan tidak terdokumentasi terpusat, serta diskusi dan penilaian belum terorganisir. Temuan ini menjadi dasar rancangan sistem informasi yang terpusat dengan forum dan rating.",
      document: "/projects/sikoman-ishikawa.png",
      evidence: [
        { title: "Rantai Nilai Porter SIKOMAN", document: "/projects/sikoman-porter.png", caption: "Pemetaan aktivitas utama dan pendukung proses penyampaian informasi. Sumber: Laporan TA, Gambar IV.1, hlm. IV-1." },
        { title: "Five Whys — Penyampaian Informasi", document: "/projects/sikoman-five-whys-information.png", caption: "Akar masalah: belum ada sistem informasi edukasi yang terpusat dan terstruktur. Sumber: Laporan TA, Gambar IV.8, hlm. IV-17." },
        { title: "Five Whys — Pengajuan dan Pelayanan Pertanyaan", document: "/projects/sikoman-five-whys-questions.png", caption: "Akar masalah: belum ada media diskusi terpusat untuk menampung pertanyaan dan jawaban. Sumber: Laporan TA, Gambar IV.9, hlm. IV-18." },
        { title: "Five Whys — Evaluasi Materi Edukasi", document: "/projects/sikoman-five-whys-rating.png", caption: "Akar masalah: belum ada fitur rating untuk mengukur minat terhadap materi edukasi. Sumber: Laporan TA, Gambar IV.10, hlm. IV-19." },
        { title: "Tabel Analisis PIECES", document: "/projects/sikoman-pieces-table.svg", caption: "Ringkasan enam aspek PIECES dan masalah pada proses berjalan. Sumber: Laporan TA, Tabel IV.8, hlm. IV-28–29." },
        { title: "Tabel Hasil Kuesioner Kano", document: "/projects/sikoman-kano-results.svg", caption: "Klasifikasi hasil kuesioner untuk tujuh kebutuhan fitur. Sumber: Laporan TA, Tabel V.2, hlm. V-4." },
      ],
    },
    {
      id: "pemodelan-proses",
      title: "Pemodelan Proses Bisnis",
      intro: "Saya memetakan proses As-Is dan menyusun BPMN To-Be untuk Penyampaian Informasi, Pengajuan Pertanyaan, dan Pelayanan Pertanyaan.",
      details: [
        "BPMN As-Is — Penyampaian Informasi, Pengajuan Pertanyaan, dan Pelayanan Pertanyaan.",
        "BPMN To-Be — Penyampaian Informasi.",
        "BPMN To-Be — Pengajuan dan Pelayanan Pertanyaan.",
        "Evaluasi Materi — Rating.",
        "Business rules — Guest mengakses informasi dasar; Member mengakses seluruh materi, mengikuti forum, dan memberi rating; Admin mengelola data komoditas; Operator mengelola forum.",
      ],
      artifact: "BPMN To-Be — Penyampaian Informasi",
      caption: "Alur usulan penyampaian informasi komoditas kepada pengguna.",
      relation: "Pada proses As-Is, informasi tersebar dan pertanyaan belum terdokumentasi terpusat. Alur To-Be menempatkan penyampaian informasi dan interaksi pengguna dalam SIKOMAN, dengan forum untuk pertanyaan serta rating untuk evaluasi materi.",
      document: "/projects/sikoman-to-be-informasi.png",
      evidence: [
        { title: "BPMN As-Is — Penyampaian Informasi", document: "/projects/sikoman-as-is-informasi.png", caption: "Alur penyampaian informasi pada proses yang berjalan." },
        { title: "BPMN As-Is — Pengajuan Pertanyaan", document: "/projects/sikoman-as-is-pengajuan-pertanyaan.png", caption: "Alur pengajuan pertanyaan pada proses yang berjalan." },
        { title: "BPMN As-Is — Pelayanan Pertanyaan", document: "/projects/sikoman-as-is-pelayanan-pertanyaan.png", caption: "Alur pelayanan pertanyaan pada proses yang berjalan." },
        { title: "BPMN To-Be — Penyampaian Informasi", document: "/projects/sikoman-to-be-informasi.png", caption: "Alur usulan penyampaian informasi komoditas kepada pengguna." },
        { title: "BPMN To-Be — Pengajuan dan Pelayanan Pertanyaan", document: "/projects/sikoman-to-be-pengajuan-pelayanan-pertanyaan.png", caption: "Alur usulan pengajuan dan pelayanan pertanyaan melalui sistem." },
        { title: "BPMN To-Be — Evaluasi dan Rating", document: "/projects/sikoman-to-be-evaluasi-rating.png", caption: "Alur evaluasi materi melalui rating pengguna." },
      ],
    },
    {
      id: "perancangan-sistem-sikoman",
      title: "Perancangan Sistem",
      intro: "Saya menyusun 9 use case, memetakan akses untuk 4 role pengguna, serta merancang UML dan 7 entitas data pada class diagram sebagai spesifikasi pengembangan.",
      details: [
        "SRS",
        "Use Case & UML - 9 use case; akses 4 role pengguna (Admin, Operator, Member, Guest) dan 1 aktor eksternal (API).",
        "Activity Diagram - 10 diagram aktivitas.",
        "Sequence Diagram - 8 diagram interaksi.",
        "Data model - 7 entitas pada class diagram.",
      ],
      artifact: "Class Diagram SIKOMAN - 7 Entitas",
      caption: "Class diagram memuat entitas User, Komoditas, Jenis Komoditas, Varietas, Produk Olahan, Forum Diskusi, dan Rating.",
      relation: "Cakupan fungsi dan akses role menjadi acuan diagram interaksi, struktur data, dan rancangan layar.",
      document: "/projects/sikoman-class-diagram.png",
      galleryId: "sikoman-design",
      evidence: [
        { title: "Use Case Diagram SIKOMAN - 9 Use Case", document: "/projects/sikoman-use-case.png", caption: "Diagram ini memetakan sembilan use case dan aktor yang berinteraksi dengan SIKOMAN." },
      ],
    },
    {
      id: "implementasi-sikoman",
      title: "Implementasi Aplikasi",
      intro: "Saya mengimplementasikan SIKOMAN sebagai aplikasi web berbasis Laravel 13, PHP, dan MySQL untuk menyampaikan informasi edukasi komoditas tanaman.",
      details: ["Informasi komoditas untuk Guest dan Member.", "Pengelolaan komoditas, jenis dan varietas, produk olahan, serta pengguna.", "Forum diskusi, rating, dan laporan."],
      artifact: "Antarmuka Halaman Komoditas Guest",
      caption: "Halaman utama Guest menyajikan daftar komoditas tanaman SIKOMAN.",
      relation: "Halaman Guest dan Member menyajikan informasi komoditas, sementara fitur pengelolaan data, forum, rating, dan laporan menerjemahkan kebutuhan sistem ke alur aplikasi.",
      document: "/projects/sikoman-ui-commodities-guest.png",
      galleryId: "sikoman-implementation",
    },
    {
      id: "pengujian-sikoman",
      title: "Pengujian Sistem",
      intro: "Saya menguji SIKOMAN dengan Black Box Testing dan Boundary Value Analysis pada 9 case dan 27 skenario.",
      details: ["Case pengujian mencakup Daftar Akun, Login, Komoditas, Jenis, Varietas, Produk Olahan, User, Forum, dan Filter Laporan.", "27 bukti skenario tercatat dengan kode PDHUPL-1.a sampai PDHUPL-9.d.", "Seluruh skenario pada laporan berstatus diterima."],
      artifact: "PDHUPL-1.a - Pengujian Daftar Akun",
      caption: "Satu bukti pengujian pendaftaran akun. 26 bukti skenario lainnya tersedia di galeri.",
      relation: "Setiap skenario membandingkan hasil aktual dengan hasil yang diharapkan berdasarkan kebutuhan fungsional.",
      document: "/projects/sikoman-test-scenario-1a.png",
      galleryId: "sikoman-testing",
    },
  ],
  outcomeTitle: "Hasil Proyek",
  outcomes: [
    { icon: "leaf", title: "Informasi Komoditas", description: "Informasi tanaman disajikan terstruktur untuk membantu pengguna mengenal komoditas." },
    { icon: "forum", title: "Forum Diskusi", description: "Forum memberi ruang bagi pengguna untuk bertukar pertanyaan dan informasi seputar komoditas." },
    { icon: "rating", title: "Rating Komoditas", description: "Rating menjadi masukan untuk melihat minat pengguna pada komoditas tanaman." },
  ],
  outcome: "SIKOMAN menyatukan edukasi komoditas tanaman dan interaksi masyarakat melalui informasi terstruktur, forum diskusi, serta rating untuk membantu evaluasi minat pengguna.",
};
const sipaktId: CaseStudyContent = {
  contextTitle: "Latar Belakang",
  backgroundItems: [
    { icon: "folder", title: "Pencatatan Semi-Manual", description: "Pencatatan, pengolahan, dan pengorganisasian data gudang belum sepenuhnya terkomputerisasi; laporan menyebut baru proses penjualan yang sudah memakai sistem komputer." },
    { icon: "inventory", title: "Selisih Data Stok", description: "Perhitungan stok dapat berbeda antara hasil pemeriksaan fisik dan catatan di media kertas, sehingga rawan terjadi kesalahan." },
    { icon: "document", title: "Dokumen Rentan Hilang", description: "Berkas dan laporan kertas dapat hilang atau rusak, sehingga pelacakan serta evaluasi inventaris dan transaksi menjadi sulit." },
  ],
  context: "Analisis pada Laporan Proyek 2 mencatat bahwa pencatatan pergudangan PT Primarindo Asia Infrastructure Tbk. masih menggunakan media kertas dan belum terintegrasi, sehingga data sulit direkap, kurang akurat, dan tidak terorganisir. SIPAKT dirancang untuk membantu pencatatan dan transaksi gudang Tomkins.",
  roleTitle: "Kontribusi dan peran pengguna",
  responsibilities: [
    "Saya berperan sebagai System Analyst & Web Developer untuk analisis, perancangan, dan implementasi SIPAKT.",
    "Admin — staf Gudang Online dan supervisor dengan seluruh hak akses.",
    "Petugas — staf pelaksana yang dapat melihat data barang dan mengakses pengelolaan barang keluar.",
  ],
  metrics: [
    { value: "8", label: "Fungsi utama" },
    { value: "2", label: "Peran pengguna" },
    { value: "10", label: "Entitas data" },
    { value: "48/48", label: "Skenario uji diterima" },
  ],
  focus: ["Data barang", "Pemesanan", "Barang masuk & keluar", "Gudang & ekspedisi", "Ekspor PDF"],
  sectionGroupTitle: { id: "Analisis & Perancangan", en: "Analysis & Design" },
  sections: [
    {
      id: "analisis-sipakt",
      title: "Analisis Kebutuhan",
      intro: "Laporan Proyek 2 mencatat pengolahan data gudang masih semi-manual: pencatatan, pengolahan, dan pengorganisasian belum sepenuhnya terkomputerisasi. Berkas kertas dapat hilang atau rusak, sementara selisih antara catatan dan stok fisik menyulitkan pengendalian barang.",
      details: [
        "Alur BPMN melibatkan Staf Gudang Online, Supervisor, Staf Gudang Jadi, dan Staf Pelaksana. Batasan akses aplikasi mencakup Staf Gudang Online, Supervisor sebagai admin, dan Staf Pelaksana.",
        "Pelaporan berbasis kertas menyulitkan pelacakan dan evaluasi data inventaris maupun transaksi.",
        "Laporan mengusulkan aplikasi pergudangan untuk membantu pengelolaan pengguna, pengadaan, penerimaan, pengeluaran, dan stok barang.",
      ],
      artifact: "Diagram Ishikawa SIPAKT",
      caption: "Gambar III.17 — Diagram Ishikawa pada Laporan Proyek 2; masalah utama yang ditunjukkan ialah hambatan dalam proses operasi pergudangan.",
      relation: "Temuan analisis menjadi dasar kebutuhan aplikasi pergudangan yang mendukung pencatatan dan transaksi secara lebih teratur.",
      document: "/projects/sipakt-ishikawa.png",
    },
    {
      id: "pemodelan-sipakt",
      title: "Pemodelan Proses Bisnis",
      intro: "Laporan Proyek 2 memodelkan proses As-Is pergudangan PT Primarindo Asia Infrastructure Tbk. dengan empat diagram BPMN: pengadaan, penerimaan, pengeluaran, dan pelaporan.",
      details: [
        "Pengadaan — Staf Gudang Online mengecek stok dan, bila perlu, menyerahkan daftar pengadaan kepada Supervisor untuk diperiksa dan divalidasi. Setelah itu, barang diminta secara verbal kepada Staf Gudang Jadi.",
        "Penerimaan — barang yang dikirim Staf Gudang Jadi dicatat dan diperiksa jumlah, kondisi, serta spesifikasinya. Ketidaksesuaian dicatat; data barang masuk kemudian dimintakan validasi Supervisor.",
        "Pengeluaran — Staf Pelaksana meminta barang secara langsung. Staf Gudang Online mengecek stok, menyiapkan barang yang tersedia, mencatat pengeluaran, lalu meminta validasi Supervisor.",
        "Pelaporan — Staf Gudang Online merekap dan menyusun laporan pengadaan, penerimaan, serta pengeluaran untuk diperiksa Supervisor. Laporan yang tidak sesuai dikembalikan untuk diperbaiki.",
      ],
      artifact: "BPMN Pengadaan Barang — As-Is",
      caption: "Gambar III.13 pada Laporan Proyek 2 menggambarkan alur pengadaan barang yang sedang berjalan.",
      relation: "Keempat model merekam pemeriksaan dan pencatatan manual serta validasi dokumen oleh Supervisor pada alur yang berjalan.",
      document: "/projects/sipakt-bpmn-procurement.png",
      evidence: [
        { title: "BPMN Penerimaan Barang — As-Is", document: "/projects/sipakt-bpmn-receiving.png", caption: "Gambar III.14 pada Laporan Proyek 2." },
        { title: "BPMN Pengeluaran Barang — As-Is", document: "/projects/sipakt-bpmn-issuing.png", caption: "Gambar III.15 pada Laporan Proyek 2." },
        { title: "BPMN Pelaporan — As-Is", document: "/projects/sipakt-bpmn-reporting.png", caption: "Gambar III.16 pada Laporan Proyek 2." },
      ],
    },
    {
      id: "perancangan-sipakt",
      title: "Perancangan Sistem",
      intro: "DPL mendokumentasikan use case, activity diagram, sequence diagram, dan class diagram SIPAKT. Seluruh diagram tersedia di galeri agar rangkaian proses tetap ringkas untuk ditinjau.",
      details: [
        "Delapan fungsi sistem: Login, Data Barang, Pemesanan, Ekspedisi, Gudang, Barang Masuk, Barang Keluar, dan User.",
        "17 diagram pendukung: satu use case, delapan activity diagram, dan delapan sequence diagram.",
        "Class diagram merangkum 10 kelas utama; Admin memiliki akses penuh, sementara Petugas dapat melihat data barang dan mengelola barang keluar.",
      ],
      artifact: "Class Diagram SIPAKT",
      caption: "Gambar 4.9 pada DPL. Dokumen menyebut struktur kelas ini sebagai Conceptual Class Diagram.",
      relation: "Rancangan DPL merinci struktur dan interaksi sistem untuk menanggapi proses serta masalah yang diidentifikasi pada Laporan Proyek 2.",
      document: "/projects/sipakt-class-diagram.jpg",
      galleryId: "sipakt-design",
      evidence: [{ title: "Use Case Diagram SIPAKT", document: "/projects/sipakt-use-case.jpg", caption: "Contoh diagram tambahan; Gambar 2.1 pada DPL. Seluruh diagram perancangan dapat dibuka di galeri." }],
    },
    {
      id: "implementasi-sipakt",
      title: "Implementasi Aplikasi",
      intro: "DPL mendokumentasikan aplikasi web SIPAKT dengan PHP, framework CodeIgniter 3, dan MySQL. Visual Studio Code tercatat sebagai editor pengembangan.",
      details: [
        "DPL memuat 19 antarmuka implementasi pada Gambar 5.1–5.19, dari login dan dashboard hingga formulir data serta transaksi.",
        "Data barang dan sejumlah transaksi dapat diekspor sebagai PDF.",
      ],
      artifact: "Dashboard Admin SIPAKT",
      caption: "Tampilan dashboard Admin pada Gambar 5.2 DPL. Seluruh 19 antarmuka tersedia di galeri implementasi.",
      relation: "Layar implementasi menerapkan fungsi dan pembagian akses pada dokumen kebutuhan sistem.",
      document: "/projects/sipakt-cover.png",
      galleryId: "sipakt-implementation",
    },
    {
      id: "pengujian-sipakt",
      title: "Pengujian Sistem",
      intro: "DPL mencatat pengujian Black Box terhadap delapan fungsi. Seluruh 48 skenario pada tabel pengujian memiliki kesimpulan “Diterima”.",
      details: [
        "Kasus uji mencakup input kosong, data tidak valid dan valid, pembaruan, penghapusan, detail transaksi, serta ekspor PDF.",
        "Jadwal pengujian pada dokumen: 1 Juli 2025.",
      ],
      artifact: "Tabel Pengujian Use Case Login — DPL",
      caption: "Tabel 6.2 pada DPL. Delapan tabel pengujian yang mencakup 48 skenario tersedia di galeri.",
      relation: "Tabel DPL mencatat masukan, keluaran yang diharapkan dan didapat, serta kesimpulan pengujian tiap fungsi.",
      document: "/projects/sipakt-test-table-6-2-login.svg",
      galleryId: "sipakt-testing",
      artifactStats: [
        { value: "48/48", label: "Skenario diterima" },
        { value: "Black Box", label: "Metode pengujian" },
      ],
    },
  ],
  outcomeTitle: "Hasil Proyek",
  outcomes: [
    { icon: "inventory", title: "Aplikasi Web Pergudangan", description: "SIPAKT mengelola data barang, pemesanan, ekspedisi, gudang, barang masuk dan keluar, serta pengguna." },
    { icon: "transactions", title: "Transaksi dan Ekspor PDF", description: "Data barang dan sejumlah catatan transaksi dapat dilihat dan diekspor dalam format PDF." },
    { icon: "rating", title: "Pengujian Fungsional", description: "DPL mencatat 48 dari 48 skenario Black Box pada delapan fungsi dengan kesimpulan diterima." },
  ],
  outcome: "SIPAKT menyatukan pengelolaan master barang, pemesanan, barang masuk dan keluar, gudang, ekspedisi, serta user dalam aplikasi web. DPL mencatat ekspor PDF untuk data terkait dan 48 skenario Black Box yang diterima.",
};

const kageoEn: CaseStudyContent = {
  contextTitle: "Background",
  context: "A system design for managing collections, storage locations, and loans at Bandung Geological Museum.",
  backgroundItems: [
    { icon: "inventory", title: "Collection Data", description: "Collection records are spread across physical documents and spreadsheets." },
    { icon: "folder", title: "Storage Locations", description: "The relationship between each collection and its storage location needs to be recorded systematically." },
    { icon: "document", title: "Collection Loans", description: "Loans and returns require clear statuses and transaction records." },
  ],
  roleTitle: "User roles and responsibilities",
  responsibilities: [
    "Museum Head — reviews account and collection loan approvals, and views reports.",
    "Staff — manages collection data, processes loans, and prepares reports.",
    "Admin — manages user accounts, roles, and permissions in the system design.",
    "Borrower — registers an account and requests collection loans for research.",
    "Public — accesses basic collection information through the public catalog.",
  ],
  metrics: [
    { value: "3", label: "Business processes" },
    { value: "17", label: "Data entities" },
    { value: "30+", label: "High-fidelity prototypes" },
  ],
  focus: [],
  sectionGroupTitle: { id: "Proses Pengerjaan", en: "Project Process" },
  sections: [
    {
      id: "analisis-kebutuhan",
      title: "Requirements Analysis",
      intro: "I reviewed procedures and forms with the team, then mapped collection registration, loans, and returns in BPMN.",
      details: ["Mapped collection registration, loan, and return processes in As-Is BPMN.", "Reviewed the procedures and forms used with the team."],
      artifact: "As-Is BPMN — collection registration",
      caption: "The workflow museum staff use to register and manage geological collection information.",
      document: "/projects/kageo-source/assets/evidence/kageo-bpmn-2.webp",
      galleryId: "kageo-stage-1",
    },
    {
      id: "perancangan-data",
      title: "Data Design",
      intro: "I prepared DFD, ERD, CDM, and PDM models connecting 17 collection, classification, storage, and loan entities.",
      details: ["Prepared a context diagram, Level 1 DFD, and Level 2 DFDs.", "Designed the ERD, CDM, and PDM for 17 data entities."],
      artifact: "KAGEO Conceptual Data Model",
      caption: "The conceptual model of KAGEO's 17 entities and their relationships.",
      document: "/projects/kageo-source/assets/evidence/kageo-cdm.webp",
      galleryId: "kageo-stage-2",
    },
    {
      id: "perancangan-antarmuka",
      title: "Interface Design",
      intro: "I contributed wireframes and high-fidelity Figma prototypes to visualize user workflows.",
      details: ["Prepared low-fidelity wireframes for the system menu and workflows.", "Contributed to more than 30 high-fidelity prototypes for the public catalog, staff, admin, and Museum Head."],
      artifact: "Low-fidelity wireframe",
      caption: "A sketch of menu and information placement before creating the KAGEO digital prototype.",
      document: "/projects/kageo-source/assets/kageo-sketsa.webp",
      galleryId: "kageo-stage-3",
    },
    {
      id: "review-pengguna",
      title: "User Review",
      intro: "I reviewed the design in discussions and an FGD with museum staff, then used their feedback to refine it.",
      details: ["Discussed the workflows with Bandung Geological Museum staff.", "Used feedback from the FGD to refine the design."],
      artifact: "Design discussion and validation",
      caption: "Documentation of the KAGEO design discussion and validation with the museum team.",
      document: "/projects/kageo-source/assets/kageo-fgd.webp",
      evidence: [
        { title: "Formal discussion with the museum team", document: "/projects/kageo-source/assets/evidence/kageo-collaboration-formal.png" },
        { title: "KAGEO team collaboration", document: "/projects/kageo-source/assets/evidence/kageo-collaboration-team.png" },
      ],
    },
    {
      id: "dokumentasi-sistem",
      title: "System Documentation",
      intro: "I contributed functional specifications, a data model, and a traceability matrix as references for future development.",
      details: ["Prepared functional specifications and data model documentation.", "Planned 28 test cases and linked requirements to test items."],
      artifact: "Requirements traceability and test planning",
      caption: "Mapping requirements to test items to support KAGEO design validation.",
      document: "/projects/kageo-source/assets/artifacts/kageo-traceability.webp",
      galleryId: "kageo-stage-5",
    },
  ],
  outcomeTitle: "Project Outcome",
  outcomes: [
    { icon: "inventory", title: "Connected Collection Data", description: "The design connects collections, classifications, locations, and loan transactions." },
    { icon: "leaf", title: "Interactive Prototypes", description: "The team produced 30+ high-fidelity prototypes for museum service workflows." },
    { icon: "document", title: "System Specifications", description: "Requirements and system models were documented as references for future development." },
  ],
  outcome: "A design for collection, storage location, and loan management at Bandung Geological Museum.",
};

const sikomanEn: CaseStudyContent = {
  contextTitle: "Background",
  backgroundItems: [
    { icon: "folder", title: "Scattered Commodity Information", description: "Commodity and variety information is spread across social media, making it difficult to find in one place." },
    { icon: "questions", title: "Questions Are Not Documented", description: "User questions and responses are not recorded centrally, making interaction history difficult to follow." },
    { icon: "rating", title: "Interaction Is Not Organized", description: "Discussion and rating based feedback are not managed in one system." },
  ],
  context: "Information about commodities, plant types, and varieties is scattered across social media. As a result, people have difficulty finding information, questions are not properly documented, and user discussion and feedback are not organized in one system.",
  roleTitle: "User roles and responsibilities",
  responsibilities: [
    "Admin — manages users, commodities, types, varieties, processed products, the discussion forum, and reports.",
    "Operator — manages the discussion forum.",
    "Member — views full image, text, audio, and video materials, joins the forum, and rates content.",
    "Guest — views basic image and text information; registration is required for full access.",
    "API — an external actor used to synchronize commodity information data.",
  ],
  metrics: [],
  focus: ["Commodity information", "Education", "Discussion forum", "Ratings"],
  sectionGroupTitle: { id: "Analisis & Perancangan", en: "Analysis & Design" },
  sections: [
    {
      id: "analisis-sikoman",
      title: "Requirements Analysis",
      intro: "I identified the problems, reviewed the existing process, and prioritized user needs.",
      details: ["Porter Value Chain", "Five Whys for information delivery, questions, and content evaluation", "PIECES: six dimensions; 1.88 average (Dissatisfied) from 40 respondents", "Kano: requirement categories for seven features"],
      artifact: "Ishikawa Diagram",
      caption: "The Ishikawa diagram from the report summarizes the root causes behind the ineffective delivery of commodity education information.",
      relation: "Information is scattered across social media, questions are not centrally documented, and discussion and ratings are not organized. These findings informed a centralized system design with a discussion forum and ratings.",
      document: "/projects/sikoman-ishikawa.png",
      evidence: [
        { title: "SIKOMAN Porter Value Chain", document: "/projects/sikoman-porter.png", caption: "Mapping of primary and supporting activities in information delivery. Source: Final report, Figure IV.1, p. IV-1." },
        { title: "Five Whys — Information Delivery", document: "/projects/sikoman-five-whys-information.png", caption: "Root cause: no centralized, structured educational information system. Source: Final report, Figure IV.8, p. IV-17." },
        { title: "Five Whys — Questions and Service", document: "/projects/sikoman-five-whys-questions.png", caption: "Root cause: no central discussion space for questions and answers. Source: Final report, Figure IV.9, p. IV-18." },
        { title: "Five Whys — Content Evaluation", document: "/projects/sikoman-five-whys-rating.png", caption: "Root cause: no rating feature to measure interest in educational content. Source: Final report, Figure IV.10, p. IV-19." },
        { title: "PIECES Analysis Table", document: "/projects/sikoman-pieces-table.svg", caption: "Summary of six PIECES dimensions and existing process issues. Source: Final report, Table IV.8, pp. IV-28–29." },
        { title: "Kano Questionnaire Results", document: "/projects/sikoman-kano-results.svg", caption: "Questionnaire classifications for seven feature requirements. Source: Final report, Table V.2, p. V-4." },
      ],
    },
    {
      id: "pemodelan-proses",
      title: "Business Process Modeling",
      intro: "I mapped the As-Is processes and prepared To-Be BPMN models for Information Delivery, Question Submission, and Question Service.",
      details: [
        "BPMN As-Is — Information Delivery, Question Submission, and Question Service.",
        "BPMN To-Be — Information Delivery.",
        "BPMN To-Be — Question Submission and Service.",
        "Material Evaluation — Ratings.",
        "Business rules — Guests access basic information; Members access all materials, join the forum, and rate content; Admin manages commodity data; Operators manage the forum.",
      ],
      artifact: "BPMN To-Be — Information Delivery",
      caption: "The proposed flow for delivering commodity information to users.",
      relation: "In the As-Is process, information is scattered and questions are not centrally documented. The To-Be flow brings information delivery and user interaction into SIKOMAN, with a forum for questions and ratings for content evaluation.",
      document: "/projects/sikoman-to-be-informasi.png",
      evidence: [
        { title: "BPMN As-Is — Information Delivery", document: "/projects/sikoman-as-is-informasi.png", caption: "Information delivery in the existing process." },
        { title: "BPMN As-Is — Question Submission", document: "/projects/sikoman-as-is-pengajuan-pertanyaan.png", caption: "Question submission in the existing process." },
        { title: "BPMN As-Is — Question Service", document: "/projects/sikoman-as-is-pelayanan-pertanyaan.png", caption: "Question service in the existing process." },
        { title: "BPMN To-Be — Information Delivery", document: "/projects/sikoman-to-be-informasi.png", caption: "The proposed flow for delivering commodity information to users." },
        { title: "BPMN To-Be — Question Submission and Service", document: "/projects/sikoman-to-be-pengajuan-pelayanan-pertanyaan.png", caption: "The proposed system flow for submitting and answering questions." },
        { title: "BPMN To-Be — Evaluation and Ratings", document: "/projects/sikoman-to-be-evaluasi-rating.png", caption: "The proposed flow for evaluating materials through user ratings." },
      ],
    },
    {
      id: "perancangan-sistem-sikoman",
      title: "System Design",
      intro: "I defined 9 use cases, mapped access for 4 user roles, and designed the UML and 7 data entities in the class diagram as development specifications.",
      details: [
        "SRS",
        "Use Case & UML - 9 use cases; access for 4 user roles (Admin, Operator, Member, Guest) and 1 external actor (API).",
        "Activity diagrams - 10 activity flows.",
        "Sequence diagrams - 8 interaction flows.",
        "Data model - 7 entities in the class diagram.",
      ],
      artifact: "SIKOMAN Class Diagram - 7 Entities",
      caption: "The class diagram contains User, Commodity, Commodity Type, Variety, Processed Product, Discussion Forum, and Rating entities.",
      relation: "Functional scope and role access inform the interaction diagrams, data structure, and screen designs.",
      document: "/projects/sikoman-class-diagram.png",
      galleryId: "sikoman-design",
      evidence: [
        { title: "SIKOMAN Use Case Diagram - 9 Use Cases", document: "/projects/sikoman-use-case.png", caption: "The diagram maps nine use cases and the actors that interact with SIKOMAN." },
      ],
    },
    {
      id: "implementasi-sikoman",
      title: "Application Implementation",
      intro: "I implemented SIKOMAN as a web application built with Laravel 13, PHP, and MySQL to deliver educational information about plant commodities.",
      details: ["Commodity information for Guest and Member users.", "Management of commodities, types and varieties, processed products, and users.", "Discussion forums, ratings, and reports."],
      artifact: "Guest Commodity List Interface",
      caption: "The Guest home page presents the SIKOMAN plant commodity list.",
      relation: "Guest and Member pages present commodity information, while data management, forums, ratings, and reports translate system requirements into application workflows.",
      document: "/projects/sikoman-ui-commodities-guest.png",
      galleryId: "sikoman-implementation",
    },
    {
      id: "pengujian-sikoman",
      title: "System Testing",
      intro: "I tested SIKOMAN with Black Box Testing and Boundary Value Analysis across 9 test cases and 27 scenarios.",
      details: ["Test cases cover Account Registration, Login, Commodities, Types, Varieties, Processed Products, Users, Forum, and Report Filters.", "The report documents 27 scenario proofs, identified from PDHUPL-1.a through PDHUPL-9.d.", "All scenarios in the report were accepted."],
      artifact: "PDHUPL-1.a - Account Registration Test",
      caption: "One account registration test proof. The other 26 scenario proofs are in the gallery.",
      relation: "Each scenario compares actual results with expected results against the functional requirements.",
      document: "/projects/sikoman-test-scenario-1a.png",
      galleryId: "sikoman-testing",
    },
  ],
  outcomeTitle: "Project Outcome",
  outcomes: [
    { icon: "leaf", title: "Commodity Information", description: "Structured plant information helps users learn about different commodities." },
    { icon: "forum", title: "Discussion Forum", description: "The forum gives users a place to ask questions and share information about commodities." },
    { icon: "rating", title: "Commodity Ratings", description: "Ratings provide feedback that helps indicate user interest in plant commodities." },
  ],
  outcome: "SIKOMAN brings plant commodity education and public interaction together through structured information, a discussion forum, and ratings that help evaluate user interest.",
};
const sipaktEn: CaseStudyContent = {
  ...sipaktId,
  contextTitle: "Background",
  backgroundItems: [
    { icon: "folder", title: "Semi-Manual Records", description: "Warehouse records, processing, and organization were not fully computerized; the report notes that only sales already used a computer system." },
    { icon: "inventory", title: "Stock Record Discrepancies", description: "Stock counts could differ between physical checks and paper records, creating a risk of errors." },
    { icon: "document", title: "Paper Documents at Risk", description: "Paper files and reports could be lost or damaged, making inventory and transaction tracking and evaluation difficult." },
  ],
  context: "The Proyek 2 report finds that PT Primarindo Asia Infrastructure Tbk.'s warehouse still relies on paper records and disconnected processes, making records difficult to compile, inaccurate, and poorly organized. SIPAKT was proposed to support Tomkins warehouse records and transactions.",
  roleTitle: "Contribution and user roles",
  responsibilities: [
    "I worked as System Analyst & Web Developer across SIPAKT analysis, design, and implementation.",
    "Admin — warehouse staff and supervisors with full access.",
    "Staff — operational staff who can view item data and manage outgoing goods.",
  ],
  metrics: [
    { value: "8", label: "Main functions" },
    { value: "2", label: "User roles" },
    { value: "10", label: "Data entities" },
    { value: "48/48", label: "Tests accepted" },
  ],
  focus: ["Item data", "Orders", "Incoming & outgoing goods", "Warehouses & shipping", "PDF exports"],
  sections: [
    { id: "analisis-sipakt", title: "Requirements Analysis", intro: "The Proyek 2 report describes warehouse data handling as semi-manual: records, processing, and organization were not fully computerized. Paper records could be lost or damaged, and differences between written records and physical stock made inventory control difficult.", details: ["The BPMN flows involve Online Warehouse Staff, the Supervisor, Finished Goods Warehouse Staff, and Operations Staff. Application access is limited to Online Warehouse Staff, the Supervisor as Admin, and Operations Staff.", "Paper-based reports made inventory and transaction tracking and evaluation difficult.", "The report proposes a warehouse application to support user, procurement, receiving, issuing, and stock management."], artifact: "SIPAKT Ishikawa Diagram", caption: "Figure III.17 — the Ishikawa diagram in the Proyek 2 report. Its stated effect is disruption to warehouse operations.", relation: "The analysis findings establish the need for more accurate, computer-based warehouse records and transactions.", document: "/projects/sipakt-ishikawa.png" },
    { id: "pemodelan-sipakt", title: "Business Process Modeling", intro: "The Proyek 2 report models the existing warehouse processes at PT Primarindo Asia Infrastructure Tbk. as four As-Is BPMN diagrams: procurement, receiving, issuing, and reporting.", details: ["Procurement — Online Warehouse Staff check stock and, when needed, submit a procurement list for the Supervisor to review and validate. They then request goods verbally from Finished Goods Warehouse Staff.", "Receiving — goods sent by Finished Goods Warehouse Staff are recorded and checked for quantity, condition, and specifications. Discrepancies are recorded, and the goods-in record is submitted to the Supervisor for validation.", "Issuing — Operations Staff request goods directly. Online Warehouse Staff check stock, prepare available goods, record the issue, and submit it to the Supervisor for validation.", "Reporting — Online Warehouse Staff compile procurement, receiving, and issuing reports for Supervisor review. Reports that need correction are returned to staff."], artifact: "As-Is BPMN — Procurement", caption: "Figure III.13 in the Proyek 2 report shows the existing procurement flow.", relation: "The four models record manual checks and documentation, with the Supervisor validating the records in the existing process.", document: "/projects/sipakt-bpmn-procurement.png", evidence: [{ title: "As-Is BPMN — Receiving", document: "/projects/sipakt-bpmn-receiving.png", caption: "Figure III.14 in the Proyek 2 report." }, { title: "As-Is BPMN — Issuing", document: "/projects/sipakt-bpmn-issuing.png", caption: "Figure III.15 in the Proyek 2 report." }, { title: "As-Is BPMN — Reporting", document: "/projects/sipakt-bpmn-reporting.png", caption: "Figure III.16 in the Proyek 2 report." }] },
    { id: "perancangan-sipakt", title: "System Design", intro: "The DPL documents SIPAKT through a use case diagram, activity diagrams, sequence diagrams, and a class diagram. The full set is available in the gallery to keep the case study concise.", details: ["Eight system functions: Login, Item Data, Orders, Shipping, Warehouse, Incoming Goods, Outgoing Goods, and Users.", "The DPL includes 17 supporting diagrams: one use case, eight activity diagrams, and eight sequence diagrams.", "The class diagram summarizes 10 main classes; Admin has full access, while Staff can view item data and manage outgoing goods."], artifact: "SIPAKT Class Diagram", caption: "Figure 4.9 in the DPL. The document describes this class structure as a Conceptual Class Diagram.", relation: "The DPL specifies SIPAKT's functions, interactions, and classes in response to processes and issues identified in the Proyek 2 report.", document: "/projects/sipakt-class-diagram.jpg", galleryId: "sipakt-design", evidence: [{ title: "SIPAKT Use Case Diagram", document: "/projects/sipakt-use-case.jpg", caption: "An example supporting diagram; DPL Figure 2.1. The full design set is available in the gallery." }] },
    { id: "implementasi-sipakt", title: "Application Implementation", intro: "The DPL documents SIPAKT as a web application built with PHP, CodeIgniter 3, and MySQL. Visual Studio Code is listed as the development editor.", details: ["The DPL contains 19 implementation screens, from login and Admin dashboards to item, order, warehouse, goods-in, goods-out, and user forms.", "Item data and several transaction records can be exported as PDF."], artifact: "SIPAKT Admin Dashboard", caption: "The Admin dashboard shown in Figure 5.2 of the DPL. All 19 interface screens are available in the implementation gallery.", relation: "The implementation screens show the system functions and access roles documented in the DPL.", document: "/projects/sipakt-cover.png", galleryId: "sipakt-implementation" },
    { id: "pengujian-sipakt", title: "System Testing", intro: "The DPL records Black Box testing for eight functions. All 48 scenarios in the test tables have the conclusion “Accepted”.", details: ["Test cases cover empty, invalid, and valid inputs, updates, deletions, transaction details, and PDF exports.", "The test schedule listed in the document is July 1, 2025."], artifact: "Login Use Case Test Table — DPL", caption: "DPL Table 6.2. All eight test tables covering 48 scenarios are available in the gallery.", relation: "The DPL tables record inputs, expected and actual outputs, and the test conclusion for each function.", document: "/projects/sipakt-test-table-6-2-login.svg", galleryId: "sipakt-testing", artifactStats: [{ value: "48/48", label: "Scenarios accepted" }, { value: "Black Box", label: "Test method" }] },
  ],
  outcomeTitle: "Project Outcome",
  outcomes: [
    { icon: "inventory", title: "Warehouse Web Application", description: "SIPAKT manages item data, orders, shipping, warehouses, incoming and outgoing goods, and users." },
    { icon: "transactions", title: "Transactions and PDF Exports", description: "Item data and selected transaction records can be viewed and exported as PDF files." },
    { icon: "rating", title: "Functional Testing", description: "The DPL records all 48 Black Box scenarios across eight functions as accepted." },
  ],
  outcome: "SIPAKT brings item records, orders, incoming and outgoing goods, warehouses, shipping, and user management together in a web application. The DPL records PDF exports and 48 accepted Black Box scenarios.",
};

export const caseStudies: Record<Language, Record<string, CaseStudyContent>> = {
  id: { kageo: kageoId, sikoman: sikomanId, sipakt: sipaktId },
  en: { kageo: kageoEn, sikoman: sikomanEn, sipakt: sipaktEn },
};


