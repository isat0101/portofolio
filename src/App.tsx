import { useCallback, useEffect, useState } from "react";
import type { Language } from "./data/portfolio";
import { projects } from "./data/experience-projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Achievements, Certifications } from "./components/Credentials";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectArtifactLibrary } from "./components/ProjectArtifactLibrary";
import { ProjectDetail } from "./components/ProjectDetail";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

const sectionIds = ["tentang", "pengalaman", "proyek", "skills", "pencapaian", "sertifikasi", "kontak"];

function readProjectRoute() {
  const slug = new URLSearchParams(window.location.search).get("project");
  return slug && projects.id.some((project) => project.slug === slug) ? slug : null;
}

function readGalleryRoute() {
  const params = new URLSearchParams(window.location.search);
  const gallery = params.get("gallery");
  const project = params.get("project");
  const allowed = project === "sikoman"
    ? ["sikoman-design", "sikoman-implementation", "sikoman-testing"]
    : project === "sipakt"
      ? ["sipakt-design", "sipakt-implementation", "sipakt-testing"]
      : project === "kageo"
        ? ["kageo-library", "kageo-stage-1", "kageo-stage-2", "kageo-stage-3", "kageo-stage-5"]
        : [];
  return gallery && allowed.includes(gallery) ? gallery : null;
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem("portfolio-language");
    return saved === "en" ? "en" : "id";
  });
  const [activeSection, setActiveSection] = useState("tentang");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [projectSlug, setProjectSlug] = useState<string | null>(readProjectRoute);
  const [galleryId, setGalleryId] = useState<string | null>(readGalleryRoute);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  const openProject = useCallback((slug: string) => {
    window.history.pushState({ project: slug }, "", window.location.pathname + "?project=" + encodeURIComponent(slug));
    setProjectSlug(slug);
    setGalleryId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openArtifactGallery = useCallback((slug: string, selectedGalleryId: string) => {
    const query = "?project=" + encodeURIComponent(slug) + "&gallery=" + encodeURIComponent(selectedGalleryId);
    window.history.pushState({ project: slug, gallery: selectedGalleryId }, "", window.location.pathname + query);
    setProjectSlug(slug);
    setGalleryId(selectedGalleryId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const closeArtifactGallery = useCallback((slug: string, returnToStage = false, sourceGallery: string | null = null) => {
    window.history.replaceState({ project: slug }, "", window.location.pathname + "?project=" + encodeURIComponent(slug));
    setProjectSlug(slug);
    setGalleryId(null);
    window.scrollTo({ top: 0 });
    if (returnToStage) {
      const stageId = slug === "kageo"
        ? sourceGallery === "kageo-stage-2" ? "case-perancangan-data" : sourceGallery === "kageo-stage-3" ? "case-perancangan-antarmuka" : sourceGallery === "kageo-stage-5" ? "case-dokumentasi-sistem" : "case-analisis-kebutuhan"
        : slug === "sipakt"
          ? sourceGallery === "sipakt-implementation" ? "case-implementasi-sipakt" : sourceGallery === "sipakt-testing" ? "case-pengujian-sipakt" : "case-perancangan-sipakt"
          : sourceGallery === "sikoman-implementation" ? "case-implementasi-sikoman" : sourceGallery === "sikoman-testing" ? "case-pengujian-sikoman" : "case-perancangan-sistem-sikoman";
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
        document.getElementById(stageId)?.scrollIntoView({ behavior: "smooth" });
      }));
    }
  }, []);

  const backToProjects = useCallback(() => {
    window.history.replaceState({}, "", window.location.pathname + "#proyek-heading");
    setProjectSlug(null);
    setGalleryId(null);
    window.requestAnimationFrame(() => document.getElementById("proyek-heading")?.scrollIntoView({ behavior: "smooth" }));
  }, []);

  useEffect(() => {
    const syncRoute = () => {
      const slug = readProjectRoute();
      setProjectSlug(slug);
      setGalleryId(readGalleryRoute());
      if (slug) {
        window.scrollTo({ top: 0 });
      } else if (window.location.hash) {
        const id = window.location.hash.slice(1);
        window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
      }
    };
    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: "-32% 0px -58% 0px", threshold: 0 });
    if (!projectSlug) {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) sectionObserver.observe(section);
      });
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const onScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [projectSlug, galleryId]);

  useEffect(() => {
    const project = projectSlug ? projects[language].find((item) => item.slug === projectSlug) : null;
    document.title = galleryId ? (projectSlug === "kageo" ? (language === "id" ? "Galeri Artefak KAGEO" : "KAGEO Artifact Gallery") : "Pustaka " + (project?.title || "Proyek")) : project ? project.title + " - Satria Eka Raharjo" : "Satria Eka Raharjo - Portfolio";
  }, [language, projectSlug, galleryId]);

  const selectedProject = projectSlug ? projects[language].find((item) => item.slug === projectSlug) : undefined;

  if (selectedProject && galleryId && (selectedProject.slug === "sikoman" || selectedProject.slug === "sipakt" || selectedProject.slug === "kageo")) {
    return (
      <>
        <Header language={language} onLanguageChange={setLanguage} activeSection="proyek" isProjectPage />
        <ProjectArtifactLibrary key={galleryId} project={selectedProject} language={language} galleryId={galleryId} onBack={() => closeArtifactGallery(selectedProject.slug)} onBackToStage={() => closeArtifactGallery(selectedProject.slug, true, galleryId)} />
        <Footer language={language} showBackToTop={showBackToTop} />
      </>
    );
  }

  if (selectedProject) {
    return (
      <>
        <Header language={language} onLanguageChange={setLanguage} activeSection="proyek" isProjectPage />
        <ProjectDetail project={selectedProject} language={language} onBack={backToProjects} onOpenProject={openProject} onOpenGallery={openArtifactGallery} />
        <Footer language={language} showBackToTop={showBackToTop} />
      </>
    );
  }

  return (
    <>
      <Header language={language} onLanguageChange={setLanguage} activeSection={activeSection} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Experience language={language} />
        <Projects language={language} onOpenProject={openProject} />
        <Skills language={language} onOpenProject={openProject} />
        <Achievements language={language} />
        <Certifications language={language} onLanguageChange={setLanguage} />
        <Contact language={language} />
      </main>
      <Footer language={language} showBackToTop={showBackToTop} />
    </>
  );
}
