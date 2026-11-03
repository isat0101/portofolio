import { useState } from "react";
import { ArrowUpRight, FileText, ZoomIn } from "lucide-react";
import type { Language } from "../data/portfolio";
import type { CaseSection } from "../data/case-studies";
import { ui } from "../data/portfolio";
import { Modal } from "./common";

export function CaseSectionList({ sections, language, onOpenGallery }: { sections: CaseSection[]; language: Language; onOpenGallery?: (galleryId: string) => void }) {
  const text = ui[language];
  const [selected, setSelected] = useState<CaseSection | null>(null);
  const [selectedEvidence, setSelectedEvidence] = useState<{ title: string; document: string; caption?: string } | null>(null);
  const close = () => setSelected(null);
  const closeEvidence = () => setSelectedEvidence(null);

  return (
    <>
      <div className="case-sections-list">
        {sections.map((section, index) => (
          <section className="case-stage" id={"case-" + section.id} key={section.id}>
            <div className="case-stage-copy">
              <span className="case-stage-number">{(index + 1).toString().padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              <p>{section.intro}</p>
              <ul>{section.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              <div className="case-stage-relation"><strong>{language === "id" ? "Kaitan dengan rancangan" : "Design connection"}</strong><span>{section.relation || section.caption}</span></div>
            </div>
            <div className="case-stage-artifact">
              {section.document && !section.document.toLowerCase().endsWith(".pdf") ? (
                <button className="artifact-preview artifact-image-preview" type="button" onClick={() => setSelected(section)}>
                  <img src={section.document} alt={section.artifact} loading="lazy" />
                  <span>{section.artifact}</span>
                  <small><ZoomIn size={13} />{language === "id" ? "Buka & periksa" : "Open preview"}</small>
                </button>
              ) : section.document ? (
                <a className="artifact-preview" href={section.document} target="_blank" rel="noreferrer">
                  <FileText size={32} /><span>{section.artifact}</span><small>{language === "id" ? "Buka dokumen" : "Open document"}<ArrowUpRight size={13} /></small>
                </a>
              ) : section.artifactStats?.length ? (
                <div className="artifact-preview artifact-summary-preview" aria-label={section.artifact}>
                  {section.artifactStats.map((stat) => (
                    <div className="artifact-summary-stat" key={stat.label}>
                      <strong>{stat.value}</strong><span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <button className="artifact-preview artifact-placeholder" type="button" onClick={() => setSelected(section)}>
                  <FileText size={32} /><span>{section.artifact}</span><small><ZoomIn size={13} />{language === "id" ? "Pratinjau dokumen" : "Preview document"}</small>
                </button>
              )}
              <strong>{section.artifact}</strong>
              <p>{section.caption}</p>
              <span className="artifact-related">{language === "id" ? "BUKTI TERKAIT" : "RELATED EVIDENCE"}</span>
              {section.galleryId && onOpenGallery && (
                <button className="artifact-link artifact-gallery-action" type="button" onClick={() => section.galleryId && onOpenGallery(section.galleryId)}>
                  {language === "id" ? "Seluruh bukti tahap ini" : "All evidence for this stage"}<ArrowUpRight size={13} />
                </button>
              )}
              {section.evidence?.length ? section.evidence.length > 4 ? (
                <div className="artifact-evidence-grid" aria-label={language === "id" ? "Galeri diagram terkait" : "Related diagram gallery"}>
                  {section.evidence.map((item) => (
                    <button className="artifact-evidence-thumbnail" type="button" key={item.document} onClick={() => setSelectedEvidence(item)}>
                      <img src={item.document} alt="" loading="lazy" />
                      <span>{item.title}</span>
                    </button>
                  ))}
                </div>
              ) : section.evidence.map((item) => (
                <button className="artifact-link" type="button" key={item.document} onClick={() => setSelectedEvidence(item)}>
                  {item.title}<ArrowUpRight size={13} />
                </button>
              )) : section.artifactStats?.length ? null : (
                <button className="artifact-link" type="button" onClick={() => setSelected(section)}>{section.artifact}<ArrowUpRight size={13} /></button>
              )}
            </div>
          </section>
        ))}
      </div>

      {selectedEvidence && (
        <Modal title={selectedEvidence.title} closeLabel={text.close} onClose={closeEvidence} wide={selectedEvidence.document.toLowerCase().endsWith(".svg")}>
          <div className="artifact-document">
            <img src={selectedEvidence.document} alt={selectedEvidence.title} />
          </div>
          {selectedEvidence.caption && <p className="artifact-evidence-caption">{selectedEvidence.caption}</p>}
        </Modal>
      )}
      {selected && (
        <Modal title={selected.artifact} closeLabel={text.close} onClose={close} wide={selected.document?.toLowerCase().endsWith(".svg")}>
          {selected.document ? (
            <div className="artifact-document">
              {selected.document.toLowerCase().endsWith(".pdf")
                ? <iframe src={selected.document} title={selected.artifact} />
                : <img src={selected.document} alt={selected.artifact} />}
            </div>
          ) : (
            <div className="artifact-empty-state"><FileText size={34} /><h3>{language === "id" ? "Dokumen belum ditambahkan" : "Document not added yet"}</h3><p>{selected.caption}</p><small>{language === "id" ? "Tambahkan file ke public/assets dan isi properti document pada src/data/case-studies.ts." : "Add a file to public/assets and set the document property in src/data/case-studies.ts."}</small></div>
          )}
        </Modal>
      )}
    </>
  );
}
