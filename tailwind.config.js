import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 28px 80px rgba(56, 189, 248, 0.16)',
        soft: '0 20px 60px rgba(15, 23, 42, 0.18)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 24%), radial-gradient(circle at bottom right, rgba(168,85,247,0.16), transparent 20%)'
      }
    }
  },
  plugins: [forms]
}
