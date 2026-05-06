# Amazon Clone React Project

A simple React/Vite conversion of the existing Amazon clone UI.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

This project is configured for Vercel deployment.

- Build command: `npm run vercel-build`
- Output directory: `dist`
- Vercel config file: `vercel.json`

Live demo: https://amazon-clone-gla.vercel.app/

## Project structure

- `index.html` - Vite entrypoint
- `src/main.jsx` - React app bootstrap
- `src/App.jsx` - Main React component
- `src/App.css` - App styling
- `public/` - Image assets

## Notes

- The project uses Vite and React 18.
- Font Awesome is loaded from CDN via `index.html`.
- The legacy `style.html` and `style.css` files were removed.
