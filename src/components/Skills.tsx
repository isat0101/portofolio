import { Braces, Code2, Database, FileText, MessageSquareText, Paintbrush, Search, ShieldCheck, UsersRound } from "lucide-react";
import type { Language } from "../data/portfolio";
import { skillGroups } from "../data/skills";
import { SectionHeading } from "./common";
import { ToolLogo } from "./ToolLogo";

const icons = [Braces, Database, Paintbrush];
const summaries = {
  id: [
    "Menggali kebutuhan pengguna, merumuskan business rules, dan memetakan proses As-Is dan To-Be.",
    "Menghubungkan fungsi pengguna, interaksi sistem, dan struktur data sebagai acuan pengembangan.",
    "Menggali kebutuhan, meninjau prototipe bersama pengguna, dan menyusun dokumentasi sistem.",
  ],
  en: [
    "Gathering user needs, defining business rules, and mapping As-Is and To-Be processes.",
    "Connecting user functions, system interactions, and data structures as a basis for development.",
    "Gathering needs, reviewing prototypes with users, and preparing system documentation.",
  ],
};
const collaboration = {
  id: [
    { title: "Komunikasi kebutuhan", detail: "Wawancara, diskusi, dan FGD bersama pengguna." },
    { title: "Pemecahan masalah", detail: "PIECES, Ishikawa, dan Five Whys untuk analisis masalah." },
    { title: "Kolaborasi", detail: "Proyek tim dan peninjauan rancangan bersama pengguna." },
    { title: "Dokumentasi", detail: "Kebutuhan, model, dan pengujian yang saling terhubung." },
  ],
  en: [
    { title: "Requirements communication", detail: "Interviews, discussions, and focus groups with users." },
    { title: "Problem solving", detail: "PIECES, Ishikawa, and Five Whys for problem analysis." },
    { title: "Collaboration", detail: "Team projects and design reviews with users." },
    { title: "Documentation", detail: "Connecting requirements, models, and testing." },
  ],
};
const collaborationIcons = [MessageSquareText, Search, UsersRound, FileText];
const evidenceProjects = [{ name: "SIKOMAN", slug: "sikoman" }, { name: "KAGEO", slug: "kageo" }, { name: "KAGEO", slug: "kageo" }];
const skillTools = [
  ["Bizagi Modeler", "Draw.io", "Enterprise Architect"],
  ["Figma", "SAP PowerDesigner", "Microsoft Visio"],
  ["Figma", "Microsoft Word", "Microsoft Excel"],
];

export function Skills({ language, onOpenProject }: { language: Language; onOpenProject: (slug: string) => void }) {
  const core = skillGroups[language].slice(0, 3);
  const support = [
    { title: "Web Development", group: skillGroups[language][3], tools: ["Laravel", "JavaScript", "PHP", "MySQL"], project: "SIKOMAN", icon: Code2 },
    { title: "Testing & Documentation", group: skillGroups[language][4], tools: ["Microsoft Office", "Git", "GitHub", "Draw.io"], project: "KAGEO", icon: ShieldCheck },
  ];

  return (
    <section className="section-block skills-section" id="skills">
      <div className="page-shell">
        <SectionHeading id="skills-heading" eyebrow="KOMPETENSI" title="Core Skills" />
        <div className="core-skills-grid">
          {core.map((group, index) => {
            const Icon = icons[index];
            return (
              <article className="core-skill reveal" key={group.title}>
                <div className="core-skill-icon"><Icon size={19} /></div>
                <h3>{index === 1 ? "System Modeling & Data Design" : index === 2 ? "Stakeholder & Documentation" : group.title}</h3>
                <p>{summaries[language][index]}</p>
                <div className="skill-plain-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="skill-tool-list">
                  {skillTools[index].map((tool) => <span key={tool}><ToolLogo name={tool} />{tool}</span>)}
                </div>
                <button type="button" className="text-link skill-evidence" onClick={() => onOpenProject(evidenceProjects[index].slug)}>{language === "id" ? "Bukti proyek: " : "Project evidence: "}{evidenceProjects[index].name}<ArrowUpRightIcon /></button>
              </article>
            );
          })}
        </div>

        <details className="support-details" open>
          <summary><span>{language === "id" ? "Development & verifikasi pendukung" : "Supporting development & verification"}</span><span className="details-caret">⌄</span></summary>
          <p className="support-intro">{language === "id" ? "Pengalaman development dan functional testing membantu menerjemahkan spesifikasi serta memeriksa kesesuaian solusi terhadap requirements." : "Development and functional testing experience helps translate specifications and verify that solutions meet requirements."}</p>
          <div className="support-grid">
            {support.map(({ title, group, tools, project, icon: Icon }) => (
              <article key={title}>
                <Icon size={19} />
                <h3>{title}</h3>
                <div className="skill-plain-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="support-tools">
                  <strong>Tools</strong>
                  <div className="support-tool-list">{tools.map((tool) => <span key={tool}><ToolLogo name={tool} />{tool}</span>)}</div>
                </div>
                <a className="text-link skill-evidence" href="#proyek-heading">{language === "id" ? "Bukti proyek: " : "Project evidence: "}{project}<ArrowUpRightIcon /></a>
              </article>
            ))}
          </div>
        </details>

        <div className="collaboration-block">
          <h3>{language === "id" ? "Kemampuan Kolaboratif" : "Collaboration Skills"}</h3>
          <div className="collaboration-list">
            {collaboration[language].map((item, index) => {
              const Icon = collaborationIcons[index];
              return <div key={item.title}><span className="collaboration-icon"><Icon size={15} /></span><span>{item.title}</span><span>{item.detail}</span></div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRightIcon() {
  return <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" /></svg>;
}
