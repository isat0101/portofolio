# Satria Eka Raharjo — Portfolio

React, TypeScript, Vite, Tailwind CSS, and Lucide icons. Ready for Vercel with the default Vite build settings.

## Run locally

1. Run npm install.
2. Run npm run dev.
3. Open the local URL printed by Vite.

## Update portfolio details

- Edit personal information, links, CV path, language text, and photo path in src/data/portfolio.ts.
- Update experience and project cards in src/data/experience-projects.ts.
- Update each full case study, stages, and artifact paths in src/data/case-studies.ts.
- Update skills, organization details, certificates, and tools in src/data/skills.ts.
- Replace public/CV-Satria-Eka-Raharjo.pdf to update the downloadable CV.
- To add a profile photo, put the image at public/profile.jpg and set photo: /profile.jpg in src/data/portfolio.ts.
- Certificate cards can link to a PDF by adding its path as the document value in src/data/skills.ts. Until a document is supplied, the preview clearly shows that it has not been added.
- Project cards open a full case-study page at ?project=slug. Add project screenshots or supporting documents under public/assets and set the document path on the matching case-study section.

## Publish on Vercel

Import the project and use the Vite defaults: build command npm run build, output directory dist.

