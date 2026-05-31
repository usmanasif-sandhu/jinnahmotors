import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { whatsappHref } from '../constants/site'
import { FEATURED_CARS, formatPkr } from '../data/cars'

export default function FleetShowcase() {
  return (
    <section
      id="fleet-showcase"
      className="premium-gradient relative scroll-mt-28 overflow-hidden section-pad md:scroll-mt-32"
      aria-labelledby="fleet-showcase-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(201,169,98,0.12),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.04),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-light/90">
              Luxury fleet showcase
            </p>
            <h2
              id="fleet-showcase-heading"
              className="font-display mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
            >
              Iconic vehicles for{' '}
              <span className="gold-gradient-text">unforgettable arrivals</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-[15px]">
              Curated ultra-luxury and executive fleet — Mercedes, BMW, Bentley,
              Porsche, Range Rover &amp; more. Perfect for weddings, corporate
              events, and VIP transport across Pakistan.
            </p>
          </div>
          <motion.a
            href="#cars"
            whileHover={{ x: 4 }}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold-light transition hover:text-white"
          >
            View all 28+ vehicles
            <HiArrowRight />
          </motion.a>
        </motion.div>

        <div className="hide-scrollbar mt-12 flex gap-5 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory md:gap-6">
          {FEATURED_CARS.map((car, index) => (
            <motion.article
              key={car.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative w-[min(85vw,340px)] shrink-0 snap-start overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900/80 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.9)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.alt}
                  loading="lazy"
                  decoding="async"
                  width={680}
                  height={510}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-neutral-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-md">
                  Ultra Luxury
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-white">
                  {car.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  From{' '}
                  <span className="font-semibold text-gold-light">
                    {formatPkr(car.pricePerDay)}
                  </span>
                  <span className="text-neutral-500"> / day</span>
                </p>
                <motion.a
                  href={whatsappHref(
                    `Hi Jinnah Motors, I would like to book the ${car.name}. Please confirm availability.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/30 bg-gold/10 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-light transition hover:bg-gold/20"
                >
                  <FaWhatsapp className="text-base" />
                  Book Now
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
