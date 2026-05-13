import { motion } from 'framer-motion'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { SITE } from '../constants/site'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 bg-neutral-50 px-6 py-20 md:scroll-mt-32 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,_rgba(197,160,89,0.16),transparent_62%)]" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.08fr,minmax(0,0.92fr)] lg:gap-16 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-dark">
            About {SITE.shortName}
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
          >
            Elevated ground transport for Gujrat&apos;s most discerning guests.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
            From executive airport transfers to cinematic baraat convoys,{' '}
            {SITE.name} pairs late-model sedans and SUVs with drivers who move
            like an extension of your inner circle — punctual, discreet, and
            immaculately presented.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-neutral-700">
            {[
              'Route planning for multi-stop wedding weekends',
              'Transparent day-rates with driver & without driver options',
              'Flexible extensions for motorway or outstation travel',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gold/15 text-gold-dark ring-1 ring-gold/25">
                  <HiOutlineBadgeCheck className="text-lg" />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/65 via-transparent to-transparent" />
          <img
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury vehicle detail"
            className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-auto lg:min-h-[420px]"
            loading="lazy"
          />
          <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/35 bg-white/70 p-5 text-left shadow-[0_24px_80px_-40px_rgba(15,23,42,0.75)] backdrop-blur-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Studio-grade presentation
            </p>
            <p className="mt-2 text-sm font-medium text-neutral-900">
              Leather conditioning, fragrance-neutral cabins, and silent cabin
              HVAC calibration before every dispatch.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
