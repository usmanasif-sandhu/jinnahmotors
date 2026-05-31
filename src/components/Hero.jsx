import { motion } from 'framer-motion'
import { HiArrowRight, HiOutlineSparkles } from 'react-icons/hi'
import { heroImage } from '../constants/carImages'
import { SITE, whatsappHref } from '../constants/site'
import { formatPkr } from '../data/cars'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden section-pad pb-28 pt-28 md:pb-36 md:pt-36 lg:pb-44"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <img
          src={heroImage}
          alt="Mercedes-Maybach S680 luxury executive car rental Pakistan"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={2200}
          height={1400}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/70 to-neutral-950/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,98,0.22),transparent_50%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fafafa] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-14 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl space-y-8 text-white"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-light backdrop-blur-md"
          >
            <HiOutlineSparkles className="text-base" />
            {SITE.tagline}
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]"
          >
            {SITE.heroHeading.split('Across Pakistan')[0]}
            <span className="gold-gradient-text">Across Pakistan</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg"
          >
            Luxury fleet · Executive chauffeurs · Wedding convoys · VIP
            transport — serving{' '}
            {SITE.cities.map((c, i) => (
              <span key={c}>
                {i > 0 && (i === SITE.cities.length - 1 ? ' & ' : ', ')}
                <strong className="font-medium text-white">{c}</strong>
              </span>
            ))}
            .
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href={whatsappHref(
                'Hi Jinnah Motors, I would like to book a luxury car. Please share availability.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              Book Now
              <HiArrowRight className="text-lg" />
            </motion.a>
            <motion.a
              href="#fleet-showcase"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline"
            >
              Explore Luxury Fleet
            </motion.a>
          </motion.div>

          <motion.dl
            variants={item}
            className="grid max-w-2xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {[
              { label: 'Fleet Size', value: '28+ Vehicles' },
              { label: 'Ultra Luxury', value: 'Mercedes · BMW · Bentley' },
              { label: 'Coverage', value: 'Nationwide' },
              { label: 'Support', value: '24/7 WhatsApp' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-light/80">
                  {stat.label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-white sm:text-[15px]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md lg:shrink-0"
          aria-label="Featured rental highlight"
        >
          <div className="glass-dark relative overflow-hidden rounded-[32px] border border-white/10 p-7 text-left shadow-[0_40px_100px_-40px_rgba(0,0,0,0.8)]">
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-light/80">
              Executive Concierge
            </p>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug text-white">
              From Prado to Maybach — one trusted partner for every milestone.
            </p>
            <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">Economy from</span>
                <span className="text-sm font-semibold text-white">
                  {formatPkr(3500)}
                  <span className="text-xs font-normal text-neutral-500">/day</span>
                </span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">Ultra luxury from</span>
                <span className="text-sm font-semibold gold-gradient-text">
                  {formatPkr(100000)}
                  <span className="text-xs font-normal text-neutral-500">/day</span>
                </span>
              </div>
            </div>
            <motion.a
              href="#cars"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-950"
            >
              View Full Fleet
            </motion.a>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
