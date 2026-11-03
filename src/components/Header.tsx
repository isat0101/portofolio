import { useState, type MouseEvent } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import type { Language } from "../data/portfolio";
import { profile, ui } from "../data/portfolio";

type Props = {
  language: Language;
  onLanguageChange: (language: Language) => void;
  activeSection: string;
  isProjectPage?: boolean;
};

export function Header({ language, onLanguageChange, activeSection, isProjectPage = false }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const text = ui[language];
  const links = [
    { id: "tentang", anchor: "tentang-heading", label: text.about },
    { id: "pengalaman", anchor: "pengalaman-heading", label: text.experience },
    { id: "proyek", anchor: "proyek-heading", label: text.projects },
    { id: "skills", anchor: "skills-heading", label: text.skills },
    { id: "pencapaian", anchor: "pencapaian-heading", label: text.achievements },
    { id: "sertifikasi", anchor: "sertifikasi-heading", label: text.certificates },
    { id: "kontak", anchor: "kontak-heading", label: text.contact },
  ];
  const closeMenu = () => setMenuOpen(false);
  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>, anchor: string) => {
    closeMenu();
    if (isProjectPage) return;

    const target = document.getElementById(anchor);
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", "#" + anchor);
    const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <nav className="nav-shell page-shell wide-shell" aria-label="Main navigation">
        <a className="brand" href={isProjectPage ? "/#beranda" : "#beranda"} onClick={closeMenu}>Satria Eka Raharjo</a>
        <div className={menuOpen ? "nav-links is-open" : "nav-links"}>
          {links.map((link) => (
            <a key={link.id} className={activeSection === link.id ? "nav-link is-active" : "nav-link"} href={isProjectPage ? "/#" + link.anchor : "#" + link.anchor} onClick={(event) => navigateToSection(event, link.anchor)}>{link.label}</a>
          ))}
          <a className="nav-cv" href={profile.cv} download>{text.cv}<ArrowDownToLine size={15} /></a>
        </div>
        <div className="nav-tools">
          <div className="language-toggle" aria-label="Choose language">
            <button type="button" className={language === "id" ? "selected" : ""} onClick={() => onLanguageChange("id")} aria-pressed={language === "id"}>ID</button>
            <span aria-hidden="true" />
            <button type="button" className={language === "en" ? "selected" : ""} onClick={() => onLanguageChange("en")} aria-pressed={language === "en"}>EN</button>
          </div>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

