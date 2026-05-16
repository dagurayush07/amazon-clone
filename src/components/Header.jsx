import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX, FiChevronDown, FiUser } from 'react-icons/fi';
import { useShop } from '../context/ShopContext.jsx';
import categories from '../data/categories.js';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Orders', path: '/orders' }
];

function Header() {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const navigate = useNavigate();
  const { cartCount, wishlist } = useShop();

  const handleSearch = (event) => {
    event.preventDefault();
    setMenuOpen(false);
    navigate(`/shop?query=${encodeURIComponent(query.trim())}`);
  };

  const goCategory = (categoryId) => {
    setCategoryOpen(false);
    setMenuOpen(false);
    navigate(`/shop?category=${categoryId}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 border-b border-slate-800/70 backdrop-blur-xl transition duration-300">
      <div className="container mx-auto flex items-center gap-4 px-4 py-4 md:py-5">
        <NavLink to="/" onClick={() => setMenuOpen(false)} className="inline-flex items-center gap-3 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 via-violet-600 to-cyan-400 shadow-glow">
            <span className="text-xl font-black tracking-wide">L</span>
          </div>
          <div className="hidden md:block">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">LunaCart</p>
            <p className="font-semibold text-slate-100">Premium Storefront</p>
          </div>
        </NavLink>

        <form onSubmit={handleSearch} className="relative flex-1 overflow-hidden rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 shadow-soft md:flex">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            className="w-full bg-transparent pl-11 pr-4 text-sm text-slate-100 placeholder:text-slate-500 outline-none md:text-base"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, brands, categories..."
            aria-label="Search products"
          />
          <button className="mt-3 hidden rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-glow md:inline-flex">
            Search
          </button>
        </form>

        <div className="ml-auto flex items-center gap-3 md:hidden">
          <button onClick={() => setMenuOpen((state) => !state)} aria-label="Toggle menu" className="rounded-full border border-slate-700 bg-slate-950/80 p-3 text-slate-200 transition hover:bg-slate-900">
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => setCategoryOpen((state) => !state)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400"
            >
              Categories
              <FiChevronDown className="text-slate-300" />
            </button>
            {categoryOpen && (
              <div className="absolute right-0 mt-3 w-56 space-y-1 rounded-3xl border border-slate-800 bg-slate-950/95 p-3 shadow-soft">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => goCategory(category.id)}
                    className="w-full rounded-2xl px-4 py-3 text-left text-sm text-slate-200 transition hover:bg-slate-800"
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition ${isActive ? 'bg-slate-800 text-cyan-300' : 'text-slate-300 hover:bg-slate-800'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink to="/wishlist" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400">
            <FiHeart />
            <span>{wishlist.length}</span>
          </NavLink>

          <NavLink to="/cart" className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-100 transition hover:bg-slate-700">
            <FiShoppingCart />
            <span>{cartCount}</span>
          </NavLink>

          <NavLink to="/login" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 transition hover:border-violet-400">
            <FiUser />
            Login
          </NavLink>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-5 shadow-soft md:hidden">
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setCategoryOpen((state) => !state)}
              className="w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-left text-slate-100 transition hover:border-cyan-400"
            >
              Categories
            </button>
            {categoryOpen && (
              <div className="space-y-2 rounded-3xl bg-slate-950/95 p-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => goCategory(category.id)}
                    className="w-full rounded-2xl px-4 py-3 text-left text-sm text-slate-200 transition hover:bg-slate-800"
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            )}
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-3xl bg-slate-900/90 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-800"
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink to="/wishlist" onClick={() => setMenuOpen(false)} className="block rounded-3xl bg-slate-900/90 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-800">
                Wishlist ({wishlist.length})
              </NavLink>
              <NavLink to="/cart" onClick={() => setMenuOpen(false)} className="block rounded-3xl bg-slate-900/90 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-800">
                Cart ({cartCount})
              </NavLink>
              <NavLink to="/login" onClick={() => setMenuOpen(false)} className="block rounded-3xl bg-slate-900/90 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-800">
                Login / Signup
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
