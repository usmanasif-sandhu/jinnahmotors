import { motion } from 'framer-motion'
import {
  FaCarSide,
  FaClock,
  FaCouch,
  FaRing,
  FaTag,
  FaUserTie,
} from 'react-icons/fa'

const FEATURES = [
  {
    title: 'Professional Drivers',
    body: 'Trained chauffeurs with premium hospitality instincts and spotless presentation.',
    icon: FaUserTie,
  },
  {
    title: 'Clean & Luxury Cars',
    body: 'Late-model sedans & SUVs detailed like private-jet cabins before each ride.',
    icon: FaCarSide,
  },
  {
    title: '24/7 Service',
    body: 'WhatsApp-first coordination for last-minute route shifts and extensions.',
    icon: FaClock,
  },
  {
    title: 'Affordable Pricing',
    body: 'Clear PKR day-rates without surprise surcharges on agreed scopes.',
    icon: FaTag,
  },
  {
    title: 'Wedding Event Packages',
    body: 'Barat, Mehndi, and VIP groom choreography with multi-vehicle routing.',
    icon: FaRing,
  },
  {
    title: 'Comfortable Travel',
    body: 'Climate-balanced cabins, quiet rolling stock, and luggage-forward planning.',
    icon: FaCouch,
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
}

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative scroll-mt-28 bg-neutral-50 section-pad md:scroll-mt-32"
      aria-labelledby="why-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-[420px] bg-[radial-gradient(circle,_rgba(15,23,42,0.06),transparent_62%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-dark">
            Why discerning hosts choose us
          </p>
          <h2
            id="why-heading"
            className="font-display mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
          >
            Seamless choreography from first inquiry to driveway departure.
          </h2>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.li
                key={feature.title}
                variants={reveal}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[26px] border border-neutral-200/90 bg-white/90 p-6 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.45)] ring-1 ring-black/[0.03] backdrop-blur-md"
              >
                <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-gold/25 via-transparent to-transparent blur-2xl transition duration-500 group-hover:opacity-100" />
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-gold-light shadow-[0_18px_40px_-18px_rgba(15,23,42,0.65)]">
                  <Icon className="text-xl" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-neutral-950">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {feature.body}
                </p>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
