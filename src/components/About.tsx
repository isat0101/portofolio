import { CheckSquare, ChevronDown, GraduationCap } from "lucide-react";
import type { Language } from "../data/portfolio";
import { courses, profile, ui } from "../data/portfolio";

export function About({ language }: { language: Language }) {
  const text = ui[language];
  const capabilities = language === "id"
    ? ["Requirements Analysis & Documentation", "Business Process Modeling & UML", "UI Design & Database Design", "Web Development & Functional Testing"]
    : ["Requirements Analysis & Documentation", "Business Process Modeling & UML", "UI Design & Database Design", "Web Development & Functional Testing"];

  return (
    <section className="section-block about-section" id="tentang">
      <div className="page-shell wide-shell about-layout">
        <div className="about-main reveal" id="tentang-heading">
          <span className="eyebrow">PROFIL</span>
          <h2>{text.aboutTitle}</h2>
          <p>{language === "id"
            ? "Lulusan D3 Manajemen Informatika Universitas Logistik dan Bisnis Internasional (ULBI) dengan IPK 3.81/4.00."
            : "Graduate in Informatics Management from Universitas Logistik dan Bisnis Internasional (ULBI), with a 3.81/4.00 GPA."}</p>
          <p>{language === "id"
            ? "Berpengalaman magang di Museum Geologi Bandung dan Dinas Perkebunan Provinsi Jawa Barat dalam analisis kebutuhan, proses bisnis, perancangan sistem, UI/UX, dan pengembangan web."
            : "Internship experience at Bandung Geological Museum and the West Java Provincial Plantation Agency in requirements analysis, business processes, system design, UI/UX, and web development."}</p>
          <div className="stat-grid">
            <div><strong>3.81</strong><span>IPK · 4.00</span></div>
            <div><strong>2</strong><span>{language === "id" ? "Pengalaman magang" : "Internships"}</span></div>
            <div><strong>3</strong><span>{language === "id" ? "Proyek utama" : "Main projects"}</span></div>
          </div>
          <details className="education-details">
            <summary><span><GraduationCap size={18} />{language === "id" ? "Pendidikan & mata kuliah relevan" : "Education & relevant courses"}</span><ChevronDown size={17} /></summary>
            <div className="education-detail-content">
              <strong>{language === "id" ? "D3 Manajemen Informatika · ULBI" : "Associate Degree in Informatics Management · ULBI"}</strong>
              <span>{profile.studyPeriod}</span>
              <small>{language === "id" ? "Lulus 31 Agustus 2026 dengan predikat Dengan Pujian." : "Graduated on 31 August 2026 with Cum Laude honors."}</small>
              <ul>{courses[language].map((course) => <li key={course}>{course}</li>)}</ul>
            </div>
          </details>
        </div>
        <aside className="competency-panel reveal">
          <span className="eyebrow">{language === "id" ? "KOMPETENSI UTAMA" : "CORE COMPETENCIES"}</span>
          <h3>{language === "id" ? "Fokus kemampuan" : "Areas of focus"}</h3>
          <ul>
            {capabilities.map((item) => <li key={item}><CheckSquare size={19} />{item}</li>)}
          </ul>
          <div className="organization-marks" aria-label={language === "id" ? "Mitra magang dan pendidikan" : "Internship and education organizations"}>
            <img src="/projects/disbun-logo.jpg" alt="Dinas Perkebunan Provinsi Jawa Barat" /><img src="/organizations/museum-geologi.png" alt="Museum Geologi Bandung" /><img src="/organizations/ulbi-mark.jpg" alt="Universitas Logistik dan Bisnis Internasional" />
          </div>
        </aside>
      </div>
    </section>
  );
}


