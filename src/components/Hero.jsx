import { motion } from 'framer-motion'
import { HiArrowRight, HiOutlineSparkles } from 'react-icons/hi'
import { whatsappHref } from '../constants/site'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.18 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden px-6 pb-28 pt-32 md:pb-36 md:pt-40 lg:pb-44"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div
          className="absolute inset-0 bg-cover bg-[center_top] bg-neutral-950"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=2200&q=80)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-neutral-50 via-neutral-50/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/45 to-neutral-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(197,160,89,0.28),_transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl space-y-7 text-white"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-light shadow-[0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-md"
          >
            <HiOutlineSparkles className="text-base text-gold-light" />
            Gujrat&apos;s Signature Fleet
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Premium Car Rental Services in{' '}
            <span className="bg-gradient-to-r from-gold-light via-gold to-amber-200 bg-clip-text text-transparent">
              Gujrat
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-xl text-base text-neutral-200/90 sm:text-lg"
          >
            Luxury • Comfort • Professional Drivers • Affordable Packages
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href={whatsappHref(
                'Hi Jinnah Motors, I would like to book a car. Please share availability.',
              )}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light px-7 py-3 text-sm font-semibold text-neutral-950 shadow-[0_22px_60px_-18px_rgba(197,160,89,0.75)] ring-1 ring-white/40"
            >
              Book Now
              <HiArrowRight className="text-lg" />
            </motion.a>
            <motion.a
              href="#cars"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_-30px_rgba(15,23,42,0.9)] backdrop-blur-md"
            >
              View Cars
            </motion.a>
          </motion.div>

          <motion.dl
            variants={item}
            className="grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-8 text-xs text-neutral-200/90 sm:text-sm"
          >
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-light/90">
                Fleet
              </dt>
              <dd className="mt-1 text-sm font-medium text-white sm:text-base">
                Sedan · SUV · VIP
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-light/90">
                Coverage
              </dt>
              <dd className="mt-1 text-sm font-medium text-white sm:text-base">
                City &amp; Motorway
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-light/90">
                Support
              </dt>
              <dd className="mt-1 text-sm font-medium text-white sm:text-base">
                24/7 WhatsApp
              </dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md self-stretch lg:self-auto"
        >
          <div className="glass relative overflow-hidden rounded-[28px] p-6 text-left text-neutral-900 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.75)]">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-gold/40 to-transparent blur-3xl" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-neutral-500">
              Signature Experience
            </p>
            <p className="mt-3 text-lg font-semibold leading-snug text-neutral-900">
              Curated vehicles, hotel-grade cabin prep, and chauffeurs trained
              for premium hospitality.
            </p>
            <div className="mt-5 flex items-center justify-between rounded-2xl bg-neutral-50/80 p-4 ring-1 ring-neutral-200/80">
              <div>
                <p className="text-xs text-neutral-500">Starting from</p>
                <p className="text-xl font-semibold text-neutral-900">
                  PKR 7,000{' '}
                  <span className="text-sm font-medium text-neutral-500">
                    / day
                  </span>
                </p>
              </div>
              <div className="rounded-full bg-neutral-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-light">
                No hidden fees
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
