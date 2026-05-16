# Ecommerce Shopping Site

A simple React/Vite project implementing an ecommerce shopping UI.

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

Live demo: https://ecommerce-shopping-site-gla.vercel.app/

## Project structure

- `index.html` - Vite entrypoint
- `src/main.jsx` - React app bootstrap
- `src/App.jsx` - Main React component
- `src/App.css` - App styling
- `public/` - Image assets

## Notes

- The project uses Vite and React 18.
- Font Awesome is loaded from CDN via `index.html`.
- The UI is responsive and optimized for desktop, tablet, and mobile screens.
- The legacy `style.html` and `style.css` files were removed.
