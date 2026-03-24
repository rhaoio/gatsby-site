# Richard Hao Personal Site

This portfolio now runs on Astro with React components and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run check
```

## Project structure

- `src/pages/index.astro` - homepage entry
- `src/layouts/BaseLayout.astro` - shared document layout and metadata
- `src/components/` - React UI components rendered by Astro
- `src/common/` - shared React subcomponents
- `src/styles/global.css` - Tailwind import and theme tokens
- `public/` - favicons and manifest
