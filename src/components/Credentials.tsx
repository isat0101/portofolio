import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Award, BadgeCheck, Eye, ListChecks, Minus, Plus } from "lucide-react";
import type { Language } from "../data/portfolio";
import { achievements, certificates, type Certificate } from "../data/skills";
import { ui } from "../data/portfolio";
import { SectionHeading } from "./common";

export function Achievements({ language }: { language: Language }) {
  const text = ui[language];
  return (
    <section className="section-block" id="pencapaian">
      <div className="page-shell">
        <SectionHeading
          id="pencapaian-heading"
          eyebrow={language === "id" ? "PENCAPAIAN" : "ACHIEVEMENTS"}
          title={text.achievementsTitle}
        />
        <div className="achievement-grid">
          {achievements[language].map((item) => (
            <article className="achievement-card reveal" key={item.title}>
              <div className="achievement-mark"><Award size={20} /></div>
              <span className="small-label">{item.period ? item.period + " · " : ""}{item.organization}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications({
  language,
  onLanguageChange,
}: {
  language: Language;
  onLanguageChange: (language: Language) => void;
}) {
  const text = ui[language];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [zoom, setZoom] = useState(100);
  const items = showAll ? certificates[language] : certificates[language].slice(0, 3);
  const selected = selectedIndex === null ? null : certificates[language][selectedIndex];

  const closeViewer = () => setSelectedIndex(null);
  const openViewer = (index: number) => {
    setZoom(100);
    setSelectedIndex(index);
  };

  const moveViewer = (direction: -1 | 1) => {
    setSelectedIndex((current) => current === null ? null : Math.min(certificates[language].length - 1, Math.max(0, current + direction)));
    setZoom(100);
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") moveViewer(-1);
      if (event.key === "ArrowRight") moveViewer(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex, language]);

  const openOriginal = (certificate: Certificate) => certificate.document || certificate.image || "#";

  return (
    <section className="section-block section-tinted" id="sertifikasi">
      <div className="page-shell">
        <SectionHeading
          id="sertifikasi-heading"
          eyebrow={language === "id" ? "KREDENSIAL" : "CREDENTIALS"}
          title={text.certificatesTitle}
        />
        <div className="certificate-grid">
          {items.map((certificate, index) => (
            <article className={(index === 0 ? "certificate-card featured-certificate" : "certificate-card") + " reveal" + (showAll && index >= 3 ? " is-visible" : "")} key={certificate.title}>
              <div
                className="certificate-art"
                role="button"
                tabIndex={0}
                onClick={() => openViewer(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openViewer(index);
                  }
                }}
                aria-label={(language === "id" ? "Pratinjau " : "Preview ") + certificate.title}
              >
                {certificate.image ? (
                  <img src={certificate.image} alt={certificate.title} loading="lazy" />
                ) : certificate.document ? (
                  <iframe title={certificate.title} src={certificate.document + "#toolbar=0&navpanes=0&view=Fit"} tabIndex={-1} />
                ) : (
                  <div className="certificate-paper"><Award size={25} /><span>{language === "id" ? "DOKUMEN SERTIFIKAT" : "CERTIFICATE DOCUMENT"}</span><small>{text.certificateUnavailable}</small></div>
                )}
                <span className="preview-label">{language === "id" ? "Pratinjau ↗" : "Preview ↗"}</span>
              </div>
              <div className="certificate-info">
                <div className="certificate-top">
                  <span className="certificate-number">{index === 0 ? (language === "id" ? "Sertifikasi Kompetensi" : "Competency Certification") : (language === "id" ? "Sertifikasi & Pelatihan" : "Certification & Training")}</span>
                  <BadgeCheck size={18} />
                </div>
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
                <span className="certificate-year">{certificate.year}</span>
                <div className="certificate-actions">
                  <button type="button" className="text-link" onClick={() => openViewer(index)}>{language === "id" ? "Lihat kredensial" : "View credential"}<Eye size={14} /></button>
                  <a className="certificate-file-link" href={openOriginal(certificate)} target="_blank" rel="noreferrer">
                    {certificate.document ? (language === "id" ? "Buka PDF" : "Open PDF") : (language === "id" ? "Buka gambar" : "Open image")}<ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        {certificates[language].length > 3 && (
          <button className="all-certificates" type="button" onClick={() => setShowAll((value) => !value)}>
            <ListChecks size={16} />
            {showAll ? (language === "id" ? "Tampilkan lebih sedikit" : "Show fewer") : (language === "id" ? "Lihat semua " + certificates[language].length + " kredensial & pelatihan" : "View all " + certificates[language].length + " credentials & training")}
          </button>
        )}

      </div>

      {selected && selectedIndex !== null && (
        <div className="certificate-viewer-backdrop" onMouseDown={(event) => event.target === event.currentTarget && closeViewer()}>
          <section className="certificate-viewer" role="dialog" aria-modal="true" aria-label={selected.title}>
            <header className="certificate-viewer-header">
              <div>
                <span className="eyebrow">{language === "id" ? "BUKTI PADA BAGIAN INI" : "EVIDENCE IN THIS SECTION"}</span>
                <h2>{selected.title}</h2>
              </div>
              <div className="certificate-viewer-header-actions">
                <button type="button" className={language === "id" ? "viewer-language is-active" : "viewer-language"} onClick={() => onLanguageChange("id")}>ID</button>
                <button type="button" className={language === "en" ? "viewer-language is-active" : "viewer-language"} onClick={() => onLanguageChange("en")}>EN</button>
                <button type="button" className="viewer-close" onClick={closeViewer}>{language === "id" ? "Tutup" : "Close"} <span aria-hidden="true">×</span></button>
              </div>
            </header>

            <div className="certificate-viewer-toolbar">
              <div className="viewer-zoom-controls">
                <button type="button" aria-label={language === "id" ? "Perkecil" : "Zoom out"} onClick={() => setZoom((value) => Math.max(50, value - 10))}><Minus size={14} /></button>
                <span>{zoom}%</span>
                <button type="button" aria-label={language === "id" ? "Perbesar" : "Zoom in"} onClick={() => setZoom((value) => Math.min(150, value + 10))}><Plus size={14} /></button>
                <button type="button" onClick={() => setZoom(85)}>{language === "id" ? "Paskan" : "Fit"}</button>
                <button type="button" onClick={() => setZoom(115)}>{language === "id" ? "Lebar layar" : "Page width"}</button>
              </div>
              <a href={openOriginal(selected)} target="_blank" rel="noreferrer">{language === "id" ? "File asli" : "Original file"}<ArrowUpRight size={14} /></a>
            </div>

            <div className="certificate-viewer-body">
              <div className="certificate-viewer-canvas">
                <div
                  className={selected.image ? "certificate-viewer-document is-image" : "certificate-viewer-document"}
                  style={{ transform: "scale(" + zoom / 100 + ")" }}
                >
                  {selected.image ? (
                    <img src={selected.image} alt={selected.title} />
                  ) : selected.document ? (
                    <iframe title={selected.title} src={selected.document + "#toolbar=0&navpanes=0&view=Fit"} />
                  ) : (
                    <div className="certificate-paper"><Award size={28} /><span>{language === "id" ? "DOKUMEN SERTIFIKAT" : "CERTIFICATE DOCUMENT"}</span><small>{text.certificateUnavailable}</small></div>
                  )}
                </div>
              </div>
              <aside className="certificate-viewer-description">
                <span className="small-label">{language === "id" ? "DESKRIPSI" : "DESCRIPTION"}</span>
                <p>{selected.description}</p>
                <dl>
                  <div><dt>{language === "id" ? "Penerbit" : "Issuer"}</dt><dd>{selected.issuer}</dd></div>
                  <div><dt>{language === "id" ? "Tanggal" : "Date"}</dt><dd>{selected.year}</dd></div>
                </dl>
                <p className="viewer-hint">{language === "id" ? "Gunakan kontrol zoom untuk membaca dokumen. File asli tetap tersedia melalui tautan di atas." : "Use the zoom controls to read the document. The original file is available from the link above."}</p>
              </aside>
            </div>

            <footer className="certificate-viewer-footer">
              <button type="button" onClick={() => moveViewer(-1)} disabled={selectedIndex === 0}><ArrowLeft size={15} />{language === "id" ? "Bukti sebelumnya" : "Previous evidence"}</button>
              <span>{selectedIndex + 1} / {certificates[language].length}</span>
              <button type="button" onClick={() => moveViewer(1)} disabled={selectedIndex === certificates[language].length - 1}>{language === "id" ? "Bukti berikutnya" : "Next evidence"}<ArrowRight size={15} /></button>
            </footer>
          </section>
        </div>
      )}
    </section>
  );
}
