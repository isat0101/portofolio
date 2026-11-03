import { ArrowUp } from "lucide-react";
import type { Language } from "../data/portfolio";
import { profile, ui } from "../data/portfolio";

export function Footer({ language, showBackToTop }: { language: Language; showBackToTop: boolean }) {
  const text = ui[language];
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <div className="footer-identity"><strong>{profile.name}</strong><span>{profile.title}</span></div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#proyek-heading">{text.projects}</a><a href="#skills-heading">{text.skills}</a><a href="#kontak-heading">{text.contact}</a>
        </nav>
        <span className="footer-copyright">© {new Date().getFullYear()}</span>
      </div>
      <button className={showBackToTop ? "back-to-top is-visible" : "back-to-top"} type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={text.backToTop}><ArrowUp size={18} /></button>
    </footer>
  );
}

