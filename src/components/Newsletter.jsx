import { motion } from 'framer-motion';

function Newsletter() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8 shadow-soft"
    >
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Join the community</p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Never miss a launch or promo.</h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Subscribe to fresh drops, curated collections, and modern store updates built for a polished ecommerce experience.
          </p>
        </div>

        <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={(event) => event.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            className="rounded-3xl border border-slate-800 bg-slate-950/80 px-5 py-4 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
          />
          <button className="rounded-3xl bg-gradient-to-r from-sky-500 via-violet-600 to-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
            Subscribe
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default Newsletter;
