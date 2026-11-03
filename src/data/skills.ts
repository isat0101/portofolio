import type { Language } from "./portfolio";

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: Record<Language, SkillGroup[]> = {
  id: [
    { title: "Requirements & Business Analysis", items: ["Requirements Elicitation", "Functional & Non-Functional Requirements", "Business Rules", "BPMN", "SRS", "Requirements Prioritization"] },
    { title: "System Modeling & Data Design", items: ["Use Case", "Activity, SSD, Sequence", "Class Diagram", "DFD", "ERD, CDM, PDM", "Data Dictionary"] },
    { title: "Stakeholder & Documentation", items: ["Interviews & Discussion", "Requirements Validation", "Wireframe", "High-Fidelity Prototype", "Requirements Traceability"] },
    { title: "Web Development", items: ["PHP", "Laravel", "MySQL", "REST API", "HTML", "CSS", "JavaScript"] },
    { title: "Software Quality Assurance", items: ["Black Box Testing", "Boundary Value Analysis", "Test Case Design", "Functional Testing", "Software Documentation"] },
    { title: "Tools", items: ["Figma", "Bizagi Modeler", "SAP PowerDesigner", "Draw.io", "Microsoft Office", "Git", "GitHub"] },
  ],
  en: [
    { title: "Requirements & Business Analysis", items: ["Requirements Elicitation", "Functional & Non-Functional Requirements", "Business Rules", "BPMN", "SRS", "Requirements Prioritization"] },
    { title: "System Modeling & Data Design", items: ["Use Case", "Activity, SSD, Sequence", "Class Diagram", "DFD", "ERD, CDM, PDM", "Data Dictionary"] },
    { title: "Stakeholder & Documentation", items: ["Interviews & Discussion", "Requirements Validation", "Wireframe", "High-Fidelity Prototype", "Requirements Traceability"] },
    { title: "Web Development", items: ["PHP", "Laravel", "MySQL", "REST API", "HTML", "CSS", "JavaScript"] },
    { title: "Software Quality Assurance", items: ["Black Box Testing", "Boundary Value Analysis", "Test Case Design", "Functional Testing", "Software Documentation"] },
    { title: "Tools", items: ["Figma", "Bizagi Modeler", "SAP PowerDesigner", "Draw.io", "Microsoft Office", "Git", "GitHub"] },
  ],
};

export type Achievement = { title: string; organization: string; period?: string; description: string };

export const achievements: Record<Language, Achievement[]> = {
  id: [
    {
      title: "Lulus dengan Predikat Cum Laude",
      organization: "D3 Manajemen Informatika · ULBI",
      description: "Meraih predikat Dengan Pujian (Cum Laude) dengan Indeks Prestasi Kumulatif (IPK) 3,81 pada Program Studi D3 Manajemen Informatika, sebagai bentuk pencapaian akademik atas penyelesaian studi dengan hasil yang sangat memuaskan dan memenuhi kriteria kelulusan terbaik.",
    },
    {
      title: "Divisi Publikasi, Dokumentasi, dan Desain",
      organization: "HMMI ULBI",
      period: "Maret 2025 – Maret 2026",
      description: "Menjabat sebagai kepala divisi, membuat konten publikasi, dan mendokumentasikan kegiatan organisasi.",
    },
    {
      title: "Kontribusi Proyek KAGEO",
      organization: "Museum Geologi Bandung",
      period: "Juli 2024 – Desember 2024",
      description: "Berperan sebagai System Analyst dan UI/UX Designer; menyusun kebutuhan untuk 1.000+ koleksi, 10+ wireframe, 30+ prototipe Figma, dan dokumentasi teknis.",
    },
  ],
  en: [
    {
      title: "Graduated with Cum Laude Honors",
      organization: "D3 Informatics Management · ULBI",
      description: "Graduated with honors (Cum Laude) with a cumulative GPA of 3.81 in the D3 Informatics Management program, recognizing excellent academic performance and fulfillment of the highest graduation criteria.",
    },
    {
      title: "Publication, Documentation, and Design Division",
      organization: "HMMI ULBI",
      period: "March 2025 – March 2026",
      description: "Served as division head, created publication content, and documented organizational events.",
    },
    {
      title: "KAGEO Project Contribution",
      organization: "Bandung Geological Museum",
      period: "July 2024 – December 2024",
      description: "Contributed as System Analyst and UI/UX Designer, defining requirements for 1,000+ collections, creating 10+ wireframes and 30+ Figma prototypes, and preparing technical documentation.",
    },
  ],
};
export type Certificate = { title: string; issuer: string; year: string; description: string; document?: string; image?: string };

export const certificates: Record<Language, Certificate[]> = {
  id: [
    { title: "System Analyst", issuer: "LSP ULBI · BNSP", year: "29 Oktober 2026 · Berlaku 3 tahun", description: "Sertifikat Analis Sistem atas nama Satria Eka Raharjo, diterbitkan 29 Oktober 2026 oleh LSP ULBI atas nama BNSP. Berlaku 3 tahun. PDF lengkap memuat transkrip 14 unit kompetensi.", document: "/certificates/system-analyst-bnsp.pdf" },
    { title: "Surat Keterangan Magang", issuer: "Dinas Perkebunan Provinsi Jawa Barat", year: "18 Agustus 2026", description: "Keterangan telah melaksanakan magang di Dinas Perkebunan Provinsi Jawa Barat pada Maret–Mei 2026.", image: "/certificates/dinas-perkebunan-internship.jpg" },
    { title: "SAP BC400 · Introduction to the ABAP Workbench", issuer: "SAP University Partnership Program", year: "21 Juli 2025", description: "Pelatihan Introduction to the ABAP Workbench, diterbitkan 21 Juli 2025.", document: "/certificates/sap-bc400.pdf" },
    { title: "SAP01 · SAP Overview", issuer: "SAP University Partnership Program", year: "10 Februari 2025", description: "Pelatihan pengenalan SAP Overview, diterbitkan 10 Februari 2025.", document: "/certificates/sap01.pdf" },
    { title: "Magang Matching Fund 2024", issuer: "Museum Geologi Bandung · Program Matching Fund", year: "6 Januari 2025", description: "Menyelesaikan kewajiban Magang Matching Fund Tahun 2024 di Museum Geologi Bandung selama enam bulan, periode Juli–Desember 2024.", image: "/certificates/matching-fund-internship.jpg" },
    { title: "Sertifikat Kompetensi Multimedia · KKNI Level II", issuer: "BNSP · LSP SMKN 4 Garut", year: "2023", description: "Sertifikat kompetensi bidang Multimedia dengan kualifikasi KKNI Level II.", image: "/certificates/multimedia-bnsp.jpg" },
  ],
  en: [
    { title: "System Analyst", issuer: "LSP ULBI · BNSP", year: "29 October 2026 · Valid for 3 years", description: "System Analyst certificate issued to Satria Eka Raharjo on 29 October 2026 by LSP ULBI on behalf of BNSP. Valid for 3 years. The complete PDF includes a transcript of 14 competency units.", document: "/certificates/system-analyst-bnsp.pdf" },
    { title: "Internship Letter", issuer: "West Java Provincial Plantation Office", year: "18 August 2026", description: "Confirmation of an internship at the West Java Provincial Plantation Office from March to May 2026.", image: "/certificates/dinas-perkebunan-internship.jpg" },
    { title: "SAP BC400 · Introduction to the ABAP Workbench", issuer: "SAP University Partnership Program", year: "21 July 2025", description: "Introduction to the ABAP Workbench training, issued on 21 July 2025.", document: "/certificates/sap-bc400.pdf" },
    { title: "SAP01 · SAP Overview", issuer: "SAP University Partnership Program", year: "10 February 2025", description: "Introductory SAP Overview training, issued on 10 February 2025.", document: "/certificates/sap01.pdf" },
    { title: "Matching Fund Internship 2024", issuer: "Bandung Geological Museum · Matching Fund Program", year: "6 January 2025", description: "Completed the 2024 Matching Fund internship at the Bandung Geological Museum for six months, from July to December 2024.", image: "/certificates/matching-fund-internship.jpg" },
    { title: "Multimedia Competency Certificate · KKNI Level II", issuer: "BNSP · LSP SMKN 4 Garut", year: "2023", description: "Multimedia competency certificate at KKNI Level II.", image: "/certificates/multimedia-bnsp.jpg" },
  ],
};
export const tools = [
  { name: "Figma", label: "FG" },
  { name: "Bizagi Modeler", label: "BZ" },
  { name: "SAP PowerDesigner", label: "SAP" },
  { name: "Git / GitHub", label: "GH" },
  { name: "Microsoft Office", label: "MS" },
];

