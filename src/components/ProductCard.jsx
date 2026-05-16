import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import { useShop } from '../context/ShopContext.jsx';

function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const isWished = wishlist.some((item) => item.id === product.id);
  const reviewCount =
    Array.isArray(product.reviews) ? product.reviews.length :
    typeof product.reviews === 'number' ? product.reviews : 0;

  return (
    <motion.article whileHover={{ y: -6 }} className="group overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900/90 shadow-soft transition duration-300">
      <div className="relative overflow-hidden rounded-[28px] bg-slate-950">
        <Link to={`/product/${product.id}`} className="block h-72 w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-glow">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label="Toggle wishlist"
          className={`absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-slate-700 bg-slate-950/90 text-slate-200 transition ${
            isWished ? 'text-rose-400 shadow-glow' : 'hover:border-cyan-400 hover:text-cyan-300'
          }`}
        >
          <FiHeart size={18} />
        </button>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <Link to={`/product/${product.id}`} className="block text-lg font-semibold text-white transition hover:text-cyan-300">
            {product.name}
          </Link>
          <p className="text-sm text-slate-400">{product.category}</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-300">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-cyan-300 shadow-sm">
            <FiStar /> {product.rating.toFixed(1)}
          </span>
          <span className="text-slate-500">({reviewCount})</span>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-2xl font-semibold text-white">${product.price}</p>
            {product.discount > 0 && (
              <p className="text-sm text-slate-500 line-through">${product.oldPrice}</p>
            )}
          </div>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-violet-600 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5"
          >
            <FiShoppingCart /> Add
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProductCard;
