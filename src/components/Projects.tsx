import { ArrowRight } from "lucide-react";
import type { Language } from "../data/portfolio";
import { projects, type Project } from "../data/experience-projects";
import { ui } from "../data/portfolio";
import { SectionHeading } from "./common";
import { ToolLogo } from "./ToolLogo";

function ProjectPreview({ project, language }: { project: Project; language: Language }) {
  return (
    <div className={"project-cover project-cover-" + project.number}>
      <img
        className="project-cover-image"
        src={project.cover}
        alt={project.title + (language === "id" ? " - tampilan aplikasi" : " application screenshot")}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export function Projects({ language, onOpenProject }: { language: Language; onOpenProject: (slug: string) => void }) {
  const text = ui[language];
  return (
    <section className="section-block project-section" id="proyek">
      <div className="projects-shell">
        <SectionHeading id="proyek-heading" eyebrow="PORTOFOLIO" title={text.projectsTitle} description={text.projectsIntro} />
        <div className="project-grid">
          {projects[language].map((project) => (
            <article className="project-card reveal" id={"project-" + project.slug} key={project.number}>
              <ProjectPreview project={project} language={language} />
              <div className="project-card-content">
                <div className="project-card-meta"><span>{project.kind} · {project.period}</span><span>{project.number}</span></div>
                <div className="project-card-heading"><img src={project.logo} alt={project.logoAlt} loading="lazy" decoding="async" /><h3>{project.title}</h3></div>
                <strong className="project-full-title">{project.summary}</strong>
                <div className="project-role">{project.role}<span>{project.organization}</span></div>
                <p className="project-problem">{project.problem}</p>
                <div className="project-tags">{project.skills.slice(0, 4).map((skill) => <span key={skill}>{skill}</span>)}</div>
                <div className="project-tools">
                  <span className="project-tools-label">{text.tools}</span>
                  <div>{(project.tools.length ? project.tools : [language === "id" ? "Detail belum tersedia" : "Details not provided"]).map((tool) => <span key={tool}><ToolLogo name={tool} />{tool}</span>)}</div>
                </div>
                <button type="button" className="project-case-link" onClick={() => onOpenProject(project.slug)}>{text.caseStudy}<ArrowRight size={16} /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

