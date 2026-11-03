import { ArrowDown, ArrowUpRight, Award } from "lucide-react";
import type { Language } from "../data/portfolio";
import { profile, ui } from "../data/portfolio";

export function Hero({ language }: { language: Language }) {
  const text = ui[language];
  return (
    <section className="hero-section page-shell wide-shell" id="beranda">
      <div className="hero-copy reveal">
        <span className="eyebrow hero-eyebrow">{text.kicker}</span>
        <p className="hero-degree">{language === "id" ? "Lulusan D3 Manajemen Informatika" : "Graduate in Informatics Management"}</p>
        <h1>Satria Eka<br />Raharjo</h1>
        <p className="hero-role">{profile.title}</p>
        <a className="hero-certificate" href="#sertifikasi-heading" aria-label={language === "id" ? "Lihat bagian sertifikasi" : "Go to certifications section"}>
          <img src="/certificates/bnsp-logo.png" alt="Badan Nasional Sertifikasi Profesi" className="bnsp-mark" />
          <span className="certificate-copy">
            <strong>{language === "id" ? "System Analyst · Tersertifikasi BNSP" : "System Analyst · BNSP Certified"}</strong>
            <small>{language === "id" ? "LSP ULBI - BNSP" : "Professional competency certification"}</small>
          </span>
          <Award size={17} className="certificate-award" />
        </a>
        <p className="hero-description">
          {language === "id"
            ? "Pengalaman magang dan proyek akademik dalam analisis kebutuhan, pemodelan proses bisnis, perancangan sistem, UI/UX, dan pengembangan aplikasi web."
            : "Internship and academic project experience in requirements analysis, business process modeling, system design, UI/UX, and web application development."}
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#proyek-heading">{text.explore}<ArrowDown size={15} /></a>
          <a className="button button-secondary" href={profile.cv} target="_blank" rel="noreferrer">{text.viewCv}<ArrowUpRight size={15} /></a>
        </div>
      </div>

      <div className="hero-visual reveal">
        <div className="portrait-frame">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} className="profile-image" />
          ) : (
            <div className="portrait-placeholder" role="img" aria-label={text.profilePhoto}>
              <div className="portrait-shape"><span>SR</span></div>
              <span className="portrait-placeholder-caption">{language === "id" ? "Foto profil" : "Profile photo"}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

