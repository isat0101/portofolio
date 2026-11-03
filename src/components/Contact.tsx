import { useState } from "react";
import { ArrowDownToLine, ArrowUpRight, Copy, Github, Linkedin, Mail, Phone } from "lucide-react";
import type { Language } from "../data/portfolio";
import { profile, ui } from "../data/portfolio";
import { SectionHeading } from "./common";

export function Contact({ language }: { language: Language }) {
  const text = ui[language];
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:" + profile.email;
    }
  };

  return (
    <>
      <section className="cv-section" id="cv">
        <div className="page-shell cv-panel reveal">
          <div>
            <span className="eyebrow">{language === "id" ? "DOKUMEN" : "DOCUMENT"}</span>
            <h2>{language === "id" ? "Unduh CV" : "Download CV"}</h2>
            <p>{language === "id" ? "Riwayat pendidikan, pengalaman, dan kompetensi untuk posisi yang dituju." : "Education, experience, and qualifications for your review."}</p>
          </div>
          <a className="button button-primary" href={profile.cv} download><ArrowDownToLine size={16} />{language === "id" ? "Unduh CV" : "Download CV"}</a>
        </div>
      </section>
      <section className="section-block contact-section" id="kontak">
        <div className="page-shell">
          <SectionHeading id="kontak-heading" eyebrow={language === "id" ? "KONTAK" : "CONTACT"} title={language === "id" ? "Hubungi Saya" : "Get in Touch"} description={text.contactText} />
          <div className="contact-grid">
            <a className="contact-card reveal" href={"mailto:" + profile.email}>
              <Mail size={19} /><span>{text.email}</span><strong>{profile.email}</strong><ArrowUpRight size={15} className="contact-arrow" />
            </a>
            <a className="contact-card reveal" href={profile.whatsapp} target="_blank" rel="noreferrer">
              <Phone size={19} /><span>{text.whatsappLabel}</span><strong>{profile.phone}</strong><ArrowUpRight size={15} className="contact-arrow" />
            </a>
            <a className="contact-card reveal" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={19} /><span>{text.linkedinLabel}</span><strong>{profile.name}</strong><ArrowUpRight size={15} className="contact-arrow" />
            </a>
            <a className="contact-card reveal" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={19} /><span>{text.githubLabel}</span><strong>github.com/isat0101</strong><ArrowUpRight size={15} className="contact-arrow" />
            </a>

          </div>
          <button className="contact-copy" type="button" onClick={copyEmail}><Copy size={15} />{copied ? (language === "id" ? "Alamat email tersalin" : "Email copied") : (language === "id" ? "Salin alamat email" : "Copy email address")}</button>
        </div>
      </section>
    </>
  );
}

