import { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, Search, ZoomIn } from "lucide-react";
import type { Language } from "../data/portfolio";
import type { Project } from "../data/experience-projects";
import { sikomanDesignArtifacts, sikomanImplementationArtifacts, sikomanTestingArtifacts, sipaktDesignArtifacts, sipaktImplementationArtifacts, sipaktTestingArtifacts, type ProjectArtifact } from "../data/project-artifacts";
import { kageoArtifacts } from "../data/kageo-artifacts";
import { Modal } from "./common";

type Props = {
  project: Project;
  language: Language;
  galleryId: string;
  onBack: () => void;
  onBackToStage: () => void;
};

type Group = "account" | "dashboard" | "commodity" | "management" | "community" | "reports" | "items" | "orders" | "shipping" | "warehouse" | "incoming" | "outgoing" | "users" | "test-register" | "test-login" | "test-commodity" | "test-type" | "test-variety" | "test-product" | "test-user" | "test-forum" | "test-report" | "test-items" | "test-orders" | "test-shipping" | "test-warehouse" | "test-incoming" | "test-outgoing";
type Filter = "all" | "use-case" | "activity" | "sequence" | "analysis" | "bpmn" | "data" | "design" | "ui" | "testing" | "method" | Group;

const groupLabels: Record<Group, { id: string; en: string }> = {
  account: { id: "Akun", en: "Account" },
  dashboard: { id: "Dashboard", en: "Dashboard" },
  commodity: { id: "Komoditas", en: "Commodity information" },
  management: { id: "Pengelolaan data", en: "Data management" },
  community: { id: "Forum", en: "Forum" },
  reports: { id: "Laporan", en: "Reports" },
  items: { id: "Data barang", en: "Item data" },
  orders: { id: "Pemesanan", en: "Orders" },
  shipping: { id: "Ekspedisi", en: "Shipping" },
  warehouse: { id: "Gudang", en: "Warehouse" },
  incoming: { id: "Barang masuk", en: "Incoming goods" },
  outgoing: { id: "Barang keluar", en: "Outgoing goods" },
  users: { id: "User", en: "Users" },
  "test-register": { id: "Daftar Akun", en: "Account Registration" },
  "test-login": { id: "Login", en: "Login" },
  "test-commodity": { id: "Kelola Komoditas", en: "Commodity Management" },
  "test-type": { id: "Jenis Komoditas", en: "Commodity Types" },
  "test-variety": { id: "Varietas Komoditas", en: "Commodity Varieties" },
  "test-product": { id: "Produk Olahan", en: "Processed Products" },
  "test-user": { id: "Kelola User", en: "User Management" },
  "test-forum": { id: "Forum", en: "Forum" },
  "test-report": { id: "Filter Laporan", en: "Report Filters" },
  "test-items": { id: "Kelola Data Barang", en: "Manage Item Data" },
  "test-orders": { id: "Pemesanan", en: "Orders" },
  "test-shipping": { id: "Kelola Ekspedisi", en: "Manage Shipping" },
  "test-warehouse": { id: "Kelola Gudang", en: "Manage Warehouse" },
  "test-incoming": { id: "Barang Masuk", en: "Incoming Goods" },
  "test-outgoing": { id: "Barang Keluar", en: "Outgoing Goods" },
};

function sourceReference(item: ProjectArtifact, isId: boolean) {
  if (item.sourceId || item.sourceEn) return isId ? item.sourceId || "Galeri KAGEO" : item.sourceEn || "KAGEO gallery";
  if (item.scenarioId) return `${isId ? "Bukti" : "Evidence"} ${item.scenarioId}`;
  if (item.figure) return `${isId ? "Gambar" : "Figure"} ${item.figure}`;
  return `${isId ? "Halaman" : "Page"} ${item.page}`;
}

export function ProjectArtifactLibrary({ project, language, galleryId, onBack, onBackToStage }: Props) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<ProjectArtifact | null>(null);
  const isId = language === "id";
  const isSipakt = project.slug === "sipakt";
  const isKageo = project.slug === "kageo";
  const kageoStage = isKageo ? Number(galleryId.match(/kageo-stage-(\d)/)?.[1] || 0) : 0;
  const isDesignGallery = galleryId.endsWith("-design");
  const isTestingGallery = galleryId.endsWith("-testing");
  const artifacts = isKageo
    ? kageoArtifacts.filter((item) => !kageoStage || item.stage === kageoStage)
    : isSipakt
      ? isDesignGallery ? sipaktDesignArtifacts : isTestingGallery ? sipaktTestingArtifacts : sipaktImplementationArtifacts
      : isDesignGallery ? sikomanDesignArtifacts : isTestingGallery ? sikomanTestingArtifacts : sikomanImplementationArtifacts;
  const designArtifacts = isSipakt ? sipaktDesignArtifacts : sikomanDesignArtifacts;
  const useCaseCount = designArtifacts.filter((item) => item.kind === "use-case").length;
  const activityCount = designArtifacts.filter((item) => item.kind === "activity").length;
  const sequenceCount = designArtifacts.filter((item) => item.kind === "sequence").length;
  const sikomanInterfaceGroups: Group[] = ["account", "commodity", "management", "community", "reports"];
  const sipaktInterfaceGroups: Group[] = ["account", "dashboard", "items", "orders", "shipping", "warehouse", "incoming", "outgoing", "users"];
  const sikomanTestGroups: Group[] = ["test-register", "test-login", "test-commodity", "test-type", "test-variety", "test-product", "test-user", "test-forum", "test-report"];
  const sipaktTestGroups: Group[] = ["test-login", "test-items", "test-orders", "test-shipping", "test-warehouse", "test-incoming", "test-outgoing", "test-user"];
  const currentGroups = isTestingGallery ? isSipakt ? sipaktTestGroups : sikomanTestGroups : isSipakt ? sipaktInterfaceGroups : sikomanInterfaceGroups;

  const visibleArtifacts = useMemo(() => artifacts.filter((item) => {
    const matchesFilter = filter === "all" || (isKageo ? item.kind === filter : isDesignGallery ? item.kind === filter : item.group === filter);
    const title = isId ? item.titleId : item.titleEn;
    return matchesFilter && (title + " " + (item.descriptionId || item.descriptionEn || "") + " " + (item.sourceId || item.sourceEn || "") + " " + (item.figure || "") + " " + (item.scenarioId || "")).toLowerCase().includes(query.trim().toLowerCase());
  }), [artifacts, filter, isDesignGallery, isId, query]);

  const kageoKinds = Array.from(new Set(artifacts.map((item) => item.kind)));
  const filters: { id: Filter; label: string; count: number }[] = isKageo
    ? [{ id: "all", label: isId ? "Semua artefak" : "All artifacts", count: artifacts.length }, ...kageoKinds.map((kind) => ({ id: kind as Filter, label: (artifacts.find((item) => item.kind === kind)?.[isId ? "categoryId" : "categoryEn"] || kind), count: artifacts.filter((item) => item.kind === kind).length }))]
    : isDesignGallery
    ? [
        { id: "all", label: isId ? "Semua" : "All", count: artifacts.length },
        ...(useCaseCount ? [{ id: "use-case" as const, label: isId ? "Use Case" : "Use Case", count: useCaseCount }] : []),
        { id: "activity", label: isId ? "Activity Diagram" : "Activity Diagrams", count: activityCount },
        { id: "sequence", label: isId ? "Sequence Diagram" : "Sequence Diagrams", count: sequenceCount },
      ]
    : [
        { id: "all", label: isId ? "Semua" : "All", count: artifacts.length },
        ...currentGroups.map((group) => ({ id: group, label: groupLabels[group][isId ? "id" : "en"], count: artifacts.filter((item) => item.group === group).length })),
      ];

  return (
    <main className="artifact-library-page">
      <div className="artifact-library-shell">
        <button className="artifact-library-back" type="button" onClick={onBack}>
          <ArrowLeft size={14} />{isId ? `Kembali ke ${project.title}` : `Back to ${project.title}`}
        </button>

        <header className="artifact-library-heading">
          <span className="eyebrow">{isId ? "GALERI PROYEK" : "PROJECT GALLERY"}</span>
          <h1>{isKageo ? (isId ? "Galeri Artefak KAGEO" : "KAGEO Artifact Gallery") : isId ? "Pustaka " + project.title : project.title + " Artifact Library"}</h1>
          <p>{isKageo ? (kageoStage ? (isId ? "Artefak tahap " + kageoStage + " dalam proses KAGEO." : "Artifacts from KAGEO process stage " + kageoStage + ".") : (isId ? "Kumpulan 36 diagram, model data, prototipe, dan dokumen rancangan KAGEO." : "A collection of 36 KAGEO diagrams, data models, prototypes, and design documents.")) : isDesignGallery ? (isId ? "Seluruh diagram " + project.title + " dari DPL, dikelompokkan menurut jenis diagram." : "All " + project.title + " diagrams from the DPL, grouped by diagram type.") : isTestingGallery ? isSipakt ? (isId ? "Delapan tabel pengujian Black Box pada DPL, mencakup 48 skenario SIPAKT." : "Eight DPL Black Box test tables covering 48 SIPAKT scenarios.") : (isId ? "Bukti 27 skenario pengujian Black Box SIKOMAN." : "Evidence for 27 SIKOMAN Black Box test scenarios.") : (isId ? "Seluruh antarmuka " + project.title + " yang ditampilkan pada DPL." : "All " + project.title + " interfaces shown in the DPL.")}</p>
          <strong>{project.title}</strong>
          <small>{isKageo ? (isId ? "Artefak sumber: Laporan KAGEO, DPL KAGEO, dan Portofolio KAGEO" : "Source artifacts: KAGEO report, DPL, and portfolio") : isTestingGallery ? isSipakt ? (isId ? "Tabel Pengujian - DPL SIPAKT" : "SIPAKT DPL Test Tables") : (isId ? "Lampiran Case Pengujian - PDHUPL" : "Test Case Appendix - PDHUPL") : (isId ? "Dokumen Perancangan dan Implementasi - DPL " + project.title : project.title + " Design and Implementation Document - DPL")}</small>
        </header>

        <section className="artifact-library-controls" aria-label={isId ? "Pencarian dan filter artefak" : "Artifact search and filters"}>
          <label className="artifact-search">
            <span>{isKageo ? (kageoStage ? (isId ? "Tahap " + kageoStage : "Stage " + kageoStage) + " · " + artifacts.length + (isId ? " artefak" : " artifacts") : (isId ? "5 tahap proses · 36 artefak" : "5 process stages · 36 artifacts")) : isDesignGallery ? (isId ? "Cari diagram atau proses" : "Search diagrams or processes") : isTestingGallery ? (isId ? "Cari case atau bukti skenario" : "Search test cases or scenario evidence") : (isId ? "Cari halaman antarmuka" : "Search interface screens")}</span>
            <span className="artifact-search-input"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={isKageo ? (isId ? "Contoh: BPMN, CDM, katalog, laporan..." : "Example: BPMN, CDM, catalog, reports...") : isTestingGallery ? isSipakt ? (isId ? "Contoh: login, barang masuk, 6.7..." : "Example: login, incoming goods, 6.7...") : "Contoh: PDHUPL-3.a, login, laporan..." : isSipakt ? (isId ? "Contoh: login, barang, pemesanan..." : "Example: login, items, orders...") : isId ? "Contoh: login, komoditas, rating..." : "Example: login, commodity, rating..."} /></span>
          </label>
          <div className="artifact-filter-list">
            {filters.map((item) => <button type="button" key={item.id} className={filter === item.id ? "artifact-filter active" : "artifact-filter"} onClick={() => setFilter(item.id)}>{item.label}<span>{item.count}</span></button>)}
          </div>
        </section>

        <p className="artifact-results">{isId ? "Menampilkan" : "Showing"} {visibleArtifacts.length} {isId ? "dari" : "of"} {artifacts.length} {isKageo ? (isId ? "artefak" : "artifacts") : isId ? "bukti" : "evidence items"}</p>

        <div className="artifact-stage-banner">
          <button type="button" onClick={onBackToStage}><ArrowLeft size={14} />{isKageo ? (isId ? "Proses Pengerjaan" : "Project Process") : isDesignGallery ? (isId ? "Perancangan Sistem" : "System Design") : isTestingGallery ? (isId ? "Pengujian Sistem" : "System Testing") : (isId ? "Implementasi Aplikasi" : "Application Implementation")}</button>
          <span>{isKageo ? (kageoStage ? (isId ? "Tahap " + kageoStage : "Stage " + kageoStage) + " · " + artifacts.length + (isId ? " artefak" : " artifacts") : (isId ? "5 tahap proses · 36 artefak" : "5 process stages · 36 artifacts")) : isDesignGallery
            ? (isId
              ? `${useCaseCount ? `${useCaseCount} use case - ` : ""}${activityCount} activity diagram - ${sequenceCount} sequence diagram`
              : `${useCaseCount ? `${useCaseCount} use case - ` : ""}${activityCount} activity diagrams - ${sequenceCount} sequence diagrams`)
            : isTestingGallery
              ? isSipakt
                ? (isId ? `${artifacts.length} tabel pengujian - 48 skenario` : `${artifacts.length} test tables - 48 scenarios`)
                : (isId ? "26 bukti lainnya - 9 case - 27 skenario" : "26 other proofs - 9 test cases - 27 scenarios")
              : (isId ? `${artifacts.length} antarmuka${isSipakt ? "" : " tambahan"}` : `${artifacts.length}${isSipakt ? " interfaces" : " additional interfaces"}`)}</span>
        </div>

        {visibleArtifacts.length ? (
          <div className="artifact-gallery-grid">
            {visibleArtifacts.map((item) => {
              const title = isId ? item.titleId : item.titleEn;
              const category = isKageo ? (isId ? item.categoryId : item.categoryEn) || item.kind : item.kind === "activity"
                ? "Activity Diagram"
                : item.kind === "sequence"
                  ? "Sequence Diagram"
                  : item.kind === "use-case"
                    ? "Use Case Diagram"
                    : groupLabels[item.group || "account"][isId ? "id" : "en"];
              return (
                <article className="artifact-gallery-card" key={item.id}>
                  <div className="artifact-gallery-preview">
                    <img src={item.image} alt={title} loading="lazy" />
                    <button type="button" onClick={() => setSelected(item)} aria-label={(isId ? "Perbesar " : "Preview ") + title}>
                      <ZoomIn size={13} />{isId ? "Perbesar" : "Preview"}<ArrowUpRight size={12} />
                    </button>
                  </div>
                  <div className="artifact-gallery-card-copy">
                    <span>{category}</span>
                    <h2>{title}</h2>{isKageo && <p className="artifact-gallery-description">{isId ? item.descriptionId : item.descriptionEn}</p>}
                    <div><small>{isKageo ? sourceReference(item, isId) : "DPL - " + sourceReference(item, isId)}</small><button type="button" onClick={() => setSelected(item)}>{isId ? "Buka bukti" : "Open evidence"}<ArrowUpRight size={13} /></button></div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="artifact-library-empty">{isId ? "Tidak ada artefak yang cocok dengan pencarian." : "No artifacts match your search."}</div>
        )}

        {selected && (
          <Modal title={isId ? selected.titleId : selected.titleEn} closeLabel={isId ? "Tutup" : "Close"} onClose={() => setSelected(null)} wide={isKageo || isSipakt && selected.kind === "test"}>
            <div className="artifact-image-viewer"><img src={selected.image} alt={isId ? selected.titleId : selected.titleEn} /></div>
            <div className="artifact-viewer-footer">
              <span>{isKageo ? sourceReference(selected, isId) : isId ? "DPL " + project.title + " - " + sourceReference(selected, isId) : project.title + " DPL - " + sourceReference(selected, isId)}</span>
            </div>
          </Modal>
        )}
      </div>
    </main>
  );
}
