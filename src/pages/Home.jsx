import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider.jsx';
import ProductCard from '../components/ProductCard.jsx';
import CategoryCard from '../components/CategoryCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import Newsletter from '../components/Newsletter.jsx';
import LoadingSkeleton from '../components/LoadingSkeleton.jsx';
import categories from '../data/categories.js';
import testimonials from '../data/testimonials.js';
import { useShop } from '../context/ShopContext.jsx';

const brandList = ['Nike', 'Adidas', 'Sony', 'Apple', 'Samsung', 'Beats'];

function Home() {
  const { products, loading, error } = useShop();
  const trending = products.filter((product) => product.rating >= 4.4).slice(0, 4);
  const bestSellers = products.slice(4, 10);
  const newArrivals = products.slice(10, 16);

  return (
    <div className="space-y-20 pb-16">
      <HeroSlider />

      <main className="container mx-auto px-4 space-y-20">
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">Trending products</p>
            <h2 className="text-4xl font-black text-white sm:text-5xl">Handpicked collections for modern shoppers</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {loading
              ? Array.from({ length: 4 }).map((_, index) => <LoadingSkeleton key={index} />)
              : trending.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
          {error && (
            <div className="rounded-3xl border border-rose-500/20 bg-rose-500/10 p-4 text-sm text-rose-200">
              {error}
            </div>
          )}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Flash sale</p>
            <h3 className="mt-4 text-3xl font-black text-white">Unlock limited-time savings on premium gear.</h3>
            <p className="mt-4 text-slate-400">This week only: exclusive reductions on top categories, curated for designer brand vibes and polished user journeys.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-950/85 p-5 text-center text-sm text-slate-300 shadow-soft">
                <span className="block text-3xl font-semibold text-white">20%</span>
                <span>Off smart accessories</span>
              </div>
              <div className="rounded-3xl bg-slate-950/85 p-5 text-center text-sm text-slate-300 shadow-soft">
                <span className="block text-3xl font-semibold text-white">120+</span>
                <span>Premium products</span>
              </div>
              <div className="rounded-3xl bg-slate-950/85 p-5 text-center text-sm text-slate-300 shadow-soft">
                <span className="block text-3xl font-semibold text-white">Fast</span>
                <span>Checkout flow</span>
              </div>
            </div>
            <Link
              to="/shop"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-sky-500 via-violet-600 to-cyan-400 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Browse flash deals
            </Link>
          </div>

          <div className="grid gap-6 rounded-[32px] border border-slate-800 bg-slate-900/95 p-8 shadow-soft">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Why shop LunaCart</p>
              <h3 className="text-3xl font-black text-white">A premium storefront experience built for recruiters.</h3>
            </div>
            <div className="space-y-4">
              {['Gradient visuals', 'Smooth motion', 'Responsive every screen'].map((item) => (
                <div key={item} className="rounded-3xl border border-slate-800/80 bg-slate-950/85 p-5">
                  <p className="text-sm text-slate-300">{item}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/80 to-slate-950/95 p-6 text-slate-300">
              <p className="text-sm text-cyan-300">Designer highlight</p>
              <p className="mt-3 text-white">Showcase the brand in a way that feels polished, modern, and production-ready.</p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Categories</p>
              <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">Shop by category</h2>
            </div>
            <Link to="/shop" className="inline-flex rounded-full border border-slate-700 bg-slate-950/80 px-5 py-3 text-sm text-slate-200 transition hover:border-cyan-400">
              Explore all categories
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Best sellers</p>
            <h2 className="text-4xl font-black text-white sm:text-5xl">Explore top rated picks</h2>
          </div>
          <div className="grid gap-6 xl:grid-cols-3 lg:grid-cols-2">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => <LoadingSkeleton key={index} />)
              : bestSellers.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">New arrivals</p>
            <h2 className="text-4xl font-black text-white sm:text-5xl">Fresh launches for modern lifestyles</h2>
          </div>
          <div className="grid gap-6 xl:grid-cols-3 lg:grid-cols-2">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => <LoadingSkeleton key={index} />)
              : newArrivals.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>

        <section className="space-y-8 rounded-[32px] border border-slate-800 bg-slate-900/95 p-8 shadow-soft">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Featured brands</p>
            <h2 className="text-4xl font-black text-white sm:text-5xl">Trusted labels in the premium market</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brandList.map((brand) => (
              <div key={brand} className="rounded-3xl border border-slate-800 bg-slate-950/80 px-6 py-7 text-center text-xl font-semibold text-white shadow-soft transition hover:-translate-y-1 hover:border-cyan-400">
                {brand}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Customer stories</p>
            <h2 className="text-4xl font-black text-white sm:text-5xl">Why LunaCart feels like a premium store</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>

        <Newsletter />
      </main>
    </div>
  );
}

export default Home;
