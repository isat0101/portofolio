import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, CalendarDays, Boxes, ChevronRight, ClipboardList, FileText, Folder, Leaf, MessageCircle, Star, Wrench } from "lucide-react";
import type { Language } from "../data/portfolio";
import { projects, type Project } from "../data/experience-projects";
import { caseStudies } from "../data/case-studies";
import { ui } from "../data/portfolio";
import { CaseSectionList } from "./CaseSectionList";
import { ToolLogo } from "./ToolLogo";

type Props = {
  project: Project;
  language: Language;
  onBack: () => void;
  onOpenProject: (slug: string) => void;
  onOpenGallery: (projectSlug: string, galleryId: string) => void;
};

export function ProjectDetail({ project, language, onBack, onOpenProject, onOpenGallery }: Props) {
  const text = ui[language];
  const study = caseStudies[language][project.slug];
  const [activeStage, setActiveStage] = useState("case-background");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveStage(entry.target.id); });
    }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });
    document.querySelectorAll(".case-main [id^='case-']").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [project.slug]);
  const allProjects = projects[language];
  const currentIndex = allProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const stages = [
    { id: "case-background", title: study.contextTitle },
    ...study.sections.map((section, index) => ({ id: "case-" + section.id, title: (index + 1).toString().padStart(2, "0") + "  " + section.title })),
    { id: "case-outcome", title: study.outcomeTitle },
  ];

  return (
    <main className="project-detail-page">
      <div className="detail-shell">
        <div className="detail-breadcrumb">
          <button type="button" onClick={onBack}><ArrowLeft size={14} />{language === "id" ? "Semua proyek" : "All projects"}</button>
          <ChevronRight size={13} /><span>{project.title}</span>
        </div>

        <section className="case-hero">
          <div className="case-cover">
            {project.coverImages?.length ? (
              <div className="case-cover-mosaic">
                {project.coverImages.map((image, index) => <img key={image} src={image} alt={project.title + " prototype " + (index + 1)} />)}
              </div>
            ) : project.slug === "sipakt" ? (
              <div className="case-cover-photo">
                <img src={project.cover} alt={project.title + (language === "id" ? " — dashboard Admin" : " — Admin dashboard")} />
                <span className="case-cover-note">{language === "id" ? "Dashboard Admin — Gambar 5.2 DPL" : "Admin dashboard — DPL Figure 5.2"}</span>
              </div>
            ) : (
              <div className="case-cover-placeholder">
                <div className="case-dashboard">
                  <span /><span /><span /><i /><b /><b /><b /><b /><b /><b />
                </div>
                <div className="case-cover-note">{language === "id" ? "Tangkapan layar proyek belum ditambahkan" : "Project screenshots have not been added"}</div>
              </div>
            )}
            <div className="case-cover-copy">
              <span className="case-project-mark"><img src={project.logo} alt={project.logoAlt} /></span>
              {project.organizationLogo && <span className="case-project-organization"><img src={project.organizationLogo} alt="" />{project.organization}</span>}
              <h1>{project.title} {"\u2014"} {project.summary}</h1>
              <p>{project.problem}</p>
            </div>
          </div>

          <div className="case-facts-row">
            <div><span><CalendarDays size={13} />{language === "id" ? "Kegiatan" : "Type"}</span><strong>{project.kind}</strong></div>
            <div><span><Building2 size={13} />{text.organization}</span><strong>{project.organization}</strong></div>
            <div><span><BriefcaseBusiness size={13} />{language === "id" ? "Peran saya" : "My role"}</span><strong>{project.role}</strong></div>
            <div><span><CalendarDays size={13} />{language === "id" ? "Periode" : "Period"}</span><strong>{project.period}</strong></div>
          </div>

          {project.videoUrl && <a className="case-video-link" href={project.videoUrl} target="_blank" rel="noreferrer"><span><strong>{language === "id" ? "Tonton video KAGEO" : "Watch KAGEO video"}</strong><small>{language === "id" ? "Alur dan prototipe KAGEO di YouTube." : "KAGEO workflows and prototypes on YouTube."}</small></span><ArrowUpRight size={17} /></a>}
          {project.tools.length > 0 && <div className="case-tools-row"><strong><Wrench size={14} />Tools</strong>{project.tools.map((tool) => <span key={tool}><ToolLogo name={tool} />{tool}</span>)}</div>}
          {study.metrics.length > 0 ? (
            <div className="case-metrics">{study.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
          ) : study.focus.length > 0 ? (
            <div className="case-focus"><strong>{language === "id" ? "Cakupan utama" : "Project focus"}</strong><div>{study.focus.map((item) => <span key={item}>{item}</span>)}</div></div>
          ) : null}
        </section>

        <div className="case-layout">
          <aside className="case-sidebar">
            <span className="case-sidebar-title">{language === "id" ? "DI DALAM STUDI KASUS" : "CASE STUDY CONTENTS"}</span>
            <nav>
              {stages.map((stage) => <a key={stage.id} className={activeStage === stage.id ? "case-sidebar-active" : ""} href={"#" + stage.id}>{stage.title}</a>)}
            </nav>
            <span className="case-sidebar-result">{language === "id" ? "Hasil pekerjaan" : "Outcome"}</span>
            <button className="case-sidebar-back" type="button" onClick={project.slug === "kageo" ? () => onOpenGallery("kageo", "kageo-library") : onBack}>{project.slug === "kageo" ? (language === "id" ? "Galeri 36 artefak" : "36 artifact gallery") : language === "id" ? "Pustaka artefak" : "Project library"}<ArrowRight size={14} /></button>
          </aside>
          <div className="case-main">
            <section className={study.backgroundItems?.length ? "case-background-section case-background-with-cards" : "case-background-section"} id="case-background">
              {!study.backgroundItems?.length && <span className="eyebrow">{language === "id" ? "KONTEKS PROYEK" : "PROJECT CONTEXT"}</span>}
              <h2>{study.contextTitle}</h2>
              {study.backgroundItems?.length ? (
                <div className="case-background-grid">
                  {study.backgroundItems.map((item) => (
                    <article className="case-background-card" key={item.title}>
                      <span className="case-background-icon">
                        {item.icon === "folder" ? <Folder size={20} /> : item.icon === "questions" ? <MessageCircle size={20} /> : item.icon === "inventory" ? <Boxes size={20} /> : item.icon === "document" ? <FileText size={20} /> : <Star size={20} />}
        </span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </article>
    ))}
  </div>
) : <p>{study.context}</p>}
              <details className="case-responsibilities" open={project.slug === "sikoman" || project.slug === "sipakt" || project.slug === "kageo"}>
                <summary>{study.roleTitle}<ChevronRight size={15} /></summary>
                <ul>{study.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
              </details>
            </section>

            {study.sectionGroupTitle && (
              <header className="case-section-group-heading">
                <h2>{study.sectionGroupTitle[language]}</h2>
              </header>
            )}

            <CaseSectionList sections={study.sections} language={language} onOpenGallery={(galleryId) => onOpenGallery(project.slug, galleryId)} />

            <section className="case-outcome-section" id="case-outcome">
              <span className="eyebrow">{language === "id" ? "HASIL" : "OUTCOME"}</span>
              <h2>{study.outcomeTitle}</h2>
              {study.outcomes?.length ? (
                <div className="case-outcome-grid">
                  {study.outcomes.map((item) => (
                    <article className="case-outcome-card" key={item.title}>
                      <span className="case-outcome-icon">
                        {item.icon === "leaf" ? <Leaf size={20} /> : item.icon === "forum" ? <MessageCircle size={20} /> : item.icon === "inventory" ? <Boxes size={20} /> : item.icon === "transactions" ? <ClipboardList size={20} /> : item.icon === "document" ? <FileText size={20} /> : <Star size={20} />}
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              ) : <p>{study.outcome}</p>}
              {study.disclosure && <small>{study.disclosure}</small>}
              {project.slug === "kageo" && <button className="case-archive-cta" type="button" onClick={() => onOpenGallery("kageo", "kageo-library")}>{language === "id" ? "Lihat semua 36 artefak" : "View all 36 artifacts"}<ArrowUpRight size={15} /></button>}
            </section>

            <div className="case-next-project">
              <button type="button" onClick={() => onOpenProject(nextProject.slug)}>
                <span><small>{language === "id" ? "PROYEK BERIKUTNYA" : "NEXT PROJECT"}</small><strong>{nextProject.title} {"\u2014"} {nextProject.summary}</strong></span>
                <ArrowRight size={19} />
              </button>
              <button className="all-projects-link" type="button" onClick={onBack}>{language === "id" ? "Semua proyek" : "All projects"}<ArrowUpRight size={14} /></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


