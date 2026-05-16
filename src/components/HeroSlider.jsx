import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTruck, FiShield, FiRotateCw } from 'react-icons/fi';

const slides = [
  {
    id: 'slide-1',
    title: 'Premium shopping, polished for your portfolio',
    description: 'Discover curated products and fast delivery with a refined frontend experience designed to impress recruiters.',
    ctaPrimary: 'Shop Now',
    ctaSecondary: 'Explore Deals',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'slide-2',
    title: 'Smart carts. Premium experiences.',
    description: 'Bring the next-level marketplace design to your demo with fast checkout, powerful filters, and modern UI polish.',
    ctaPrimary: 'Browse Collections',
    ctaSecondary: 'View New Arrivals',
    image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'slide-3',
    title: 'Elegant product storytelling at every step',
    description: 'Beautiful imagery, clean product cards, and subtle motion create a premium ecommerce homepage built for portfolios.',
    ctaPrimary: 'See Best Sellers',
    ctaSecondary: 'Start Shopping',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=80'
  }
];

function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);
    return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <section className="relative overflow-hidden bg-slate-950 min-h-screen">
      <div className="absolute inset-0 bg-hero-glow opacity-90" />
      <div className="relative min-h-screen">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === activeSlide ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className={`absolute inset-0 transition-opacity duration-700 ${index === activeSlide ? 'z-10' : 'pointer-events-none -z-10'}`}
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            aria-hidden={index !== activeSlide}
          >
            <div className="absolute inset-0 bg-slate-950/70" />
            <div className="container relative mx-auto px-4 py-24 md:py-28 lg:py-32">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: index === activeSlide ? 1 : 0, y: index === activeSlide ? 0 : 28 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="max-w-3xl space-y-6"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-slate-900/80 px-4 py-2 text-sm text-cyan-200">
                  <span className="uppercase tracking-[0.35em]">New portfolio-ready store</span>
                </div>
                <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  {slide.description}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    to="/shop"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-violet-600 to-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5"
                  >
                    {slide.ctaPrimary}
                  </Link>
                  <Link
                    to="/shop"
                    className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-8 py-3 text-sm text-slate-200 transition hover:border-cyan-400"
                  >
                    {slide.ctaSecondary}
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-4 text-sm text-slate-200 shadow-soft">
                    <div className="flex items-center gap-3 text-cyan-300">
                      <FiTruck size={20} />
                      <span className="font-semibold">Free Shipping</span>
                    </div>
                    <p className="mt-2 text-slate-400">Fast delivery across premium categories.</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-4 text-sm text-slate-200 shadow-soft">
                    <div className="flex items-center gap-3 text-cyan-300">
                      <FiShield size={20} />
                      <span className="font-semibold">Secure Payment</span>
                    </div>
                    <p className="mt-2 text-slate-400">Trusted checkout flow with sleek UX.</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-4 text-sm text-slate-200 shadow-soft">
                    <div className="flex items-center gap-3 text-cyan-300">
                      <FiRotateCw size={20} />
                      <span className="font-semibold">Easy Returns</span>
                    </div>
                    <p className="mt-2 text-slate-400">Hassle-free policies built for modern shoppers.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl justify-center gap-3 px-4 pb-6 pt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 w-11 rounded-full transition ${index === activeSlide ? 'bg-cyan-300' : 'bg-slate-700 hover:bg-slate-500'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
