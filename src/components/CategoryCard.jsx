import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

function CategoryCard({ category }) {
  return (
    <MotionLink
      to={`/shop?category=${category.id}`}
      whileHover={{ y: -4 }}
      className="group flex items-center gap-4 rounded-[28px] border border-slate-800 bg-slate-900/90 p-6 transition duration-300 hover:border-cyan-400 hover:bg-slate-900"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 via-violet-600 to-cyan-500 text-xl text-white shadow-glow">
        <i className={`${category.icon} text-lg`} aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
        <p className="text-sm text-slate-400">{category.description}</p>
      </div>
    </MotionLink>
  );
}

export default CategoryCard;
