import { motion } from 'framer-motion'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { aboutImage } from '../constants/carImages'
import { SITE } from '../constants/site'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 bg-white section-pad md:scroll-mt-32"
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,_rgba(201,169,98,0.1),transparent_62%)]" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
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
            className="font-display mt-4 text-balance text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
          >
            Pakistan&apos;s trusted partner for luxury &amp; executive ground
            transport
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            Rooted in Gujrat with nationwide reach, {SITE.name} delivers
            late-model sedans, SUVs, ultra-luxury exotics, and limousine convoys
            for weddings, corporate travel, and VIP events across{' '}
            {SITE.cities.join(', ')}.
          </p>
          <ul className="mt-8 space-y-3.5 text-sm text-neutral-700">
            {[
              '28+ vehicle fleet from economy to Bentley & BMW i8',
              'Wedding baraat, mehndi & VIP groom entry packages',
              'Transparent daily rates — book instantly via WhatsApp',
              'Professional chauffeurs & 24/7 concierge support',
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
          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/70 via-transparent to-transparent z-10" />
          <img
            src={aboutImage}
            alt="Mercedes-Maybach S680 executive sedan luxury car rental Pakistan"
            className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:min-h-[460px] lg:aspect-auto"
            loading="lazy"
            decoding="async"
            width={1200}
            height={900}
          />
          <div className="absolute inset-x-6 bottom-6 z-20 rounded-2xl border border-white/20 bg-neutral-950/75 p-5 text-left backdrop-blur-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-light/80">
              Nationwide service
            </p>
            <p className="mt-2 text-sm font-medium text-white">
              Gujrat headquarters · Lahore · Islamabad · Karachi — one premium
              standard everywhere.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
