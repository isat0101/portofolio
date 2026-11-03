import { ArrowUpRight, Building2 } from "lucide-react";
import type { Language } from "../data/portfolio";
import { experiences } from "../data/experience-projects";

const companyMarks: Record<string, { src: string; alt: string }> = {
  "West Java Provincial Plantation Agency": { src: "/projects/disbun-logo.jpg", alt: "West Java Provincial Plantation Agency" },
  "Dinas Perkebunan Provinsi Jawa Barat": { src: "/projects/disbun-logo.jpg", alt: "Dinas Perkebunan Provinsi Jawa Barat" },
  "Bandung Geological Museum · Geological Agency, Ministry of Energy and Mineral Resources": { src: "/organizations/museum-geologi.png", alt: "Bandung Geological Museum" },
  "Museum Geologi Bandung · Badan Geologi, Kementerian ESDM": { src: "/organizations/museum-geologi.png", alt: "Museum Geologi Bandung" },
  "PT Primarindo Asia Infrastructure Tbk.": { src: "/projects/primarindo-logo.webp", alt: "PT Primarindo Asia Infrastructure Tbk." },
};

export function Experience({ language }: { language: Language }) {
  const sorted = [...experiences[language]].sort((a, b) => Number(b.period.match(/\d{4}/)?.[0]) - Number(a.period.match(/\d{4}/)?.[0]));
  return (
    <section className="section-block section-tinted experience-section" id="pengalaman">
      <div className="page-shell wide-shell">
        <div className="experience-heading" id="pengalaman-heading">
          <span className="eyebrow">{language === "id" ? "PENGALAMAN" : "EXPERIENCE"}</span>
          <h2>{language === "id" ? "Pengalaman Kerja" : "Work Experience"}</h2>
        </div>
        <div className="experience-list">
          {sorted.map((item) => {
            const showWorkLink = item.organization.includes("Museum Geologi") || item.organization.includes("Geological Museum") || item.organization.includes("Plantation Agency") || item.organization.includes("Perkebunan");
            const companyMark = companyMarks[item.organization];
            return (
              <article className="experience-row reveal" key={item.organization}>
                <div className="experience-period"><strong>{item.period}</strong><span>{item.role.includes("Freelance") ? "Freelance" : language === "id" ? "Magang" : "Internship"}</span></div>
                <div className="experience-company-mark">{companyMark ? <img src={companyMark.src} alt={companyMark.alt} /> : <Building2 size={20} />}</div>
                <div className="experience-detail">
                  <h3>{item.role}</h3>
                  <strong className="experience-company">{item.organization}</strong>
                  <span className="experience-location">{item.location}</span>
                  <p>{item.bullets.slice(0, 2).join(" ")}</p>
                  {showWorkLink && <a className="text-link" href="#proyek-heading">{language === "id" ? "Lihat hasil pekerjaan" : "View related work"}<ArrowUpRight size={15} /></a>}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}



