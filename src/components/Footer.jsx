import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95 py-12 text-slate-300">
      <div className="container mx-auto grid gap-10 px-4 md:grid-cols-[1.75fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-gradient-to-r from-sky-500 via-violet-600 to-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-glow">
            <span>LunaCart</span>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            LunaCart is a portfolio-ready ecommerce frontend crafted with premium styling, responsive layouts, and modern motion.
          </p>
          <p className="text-sm text-slate-500">Built with React, Tailwind CSS, Framer Motion, and polished UX for recruiters.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Explore</h3>
          <NavLink to="/shop" className="block text-sm text-slate-300 hover:text-white">Shop</NavLink>
          <NavLink to="/wishlist" className="block text-sm text-slate-300 hover:text-white">Wishlist</NavLink>
          <NavLink to="/orders" className="block text-sm text-slate-300 hover:text-white">Orders</NavLink>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Company</h3>
          <a href="#" className="block text-sm text-slate-300 hover:text-white">About</a>
          <a href="#" className="block text-sm text-slate-300 hover:text-white">Careers</a>
          <a href="#" className="block text-sm text-slate-300 hover:text-white">Contact</a>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Social</h3>
          <a href="#" className="block text-sm text-slate-300 hover:text-white">Instagram</a>
          <a href="#" className="block text-sm text-slate-300 hover:text-white">Dribbble</a>
          <a href="#" className="block text-sm text-slate-300 hover:text-white">LinkedIn</a>
        </div>
      </div>
      <div className="container mx-auto mt-10 border-t border-slate-800 pt-6 px-4 text-center text-sm text-slate-500">
        © 2026 LunaCart · Designed for an internship-ready frontend portfolio.
      </div>
    </footer>
  );
}

export default Footer;
