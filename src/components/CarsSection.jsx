import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { whatsappHref } from '../constants/site'
import { CARS, CATEGORIES, formatPkr } from '../data/cars'

const grid = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.04 },
  },
}

const card = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
}

const CATEGORY_LABELS = {
  'ultra-luxury': 'Ultra Luxury',
  limousine: 'Limousine',
  suv: 'SUV',
  sedan: 'Sedan',
  pickup: 'Pickup',
  economy: 'Economy',
  van: 'Van',
}

export default function CarsSection() {
  const [active, setActive] = useState('all')

  const filtered = useMemo(
    () =>
      active === 'all' ? CARS : CARS.filter((c) => c.category === active),
    [active],
  )

  return (
    <section
      id="cars"
      className="scroll-mt-28 bg-[#fafafa] section-pad md:scroll-mt-32"
      aria-labelledby="cars-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-dark">
            Complete rental fleet
          </p>
          <h2
            id="cars-heading"
            className="font-display mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-[2.75rem]"
          >
            Luxury car rental fleet in Pakistan
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Transparent daily rates on sedans, SUVs, ultra-luxury exotics,
            limousines, and vans. Filter by category or book instantly via
            WhatsApp — available in Gujrat, Lahore, Islamabad &amp; Karachi.
          </p>
        </motion.header>

        <div
          className="hide-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Filter fleet by category"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                active === cat.id
                  ? 'bg-neutral-950 text-gold-light shadow-lg'
                  : 'border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.ul
          variants={grid}
          initial="hidden"
          animate="show"
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((car) => (
              <motion.li
                key={car.id}
                layout
                variants={card}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className={`group flex flex-col overflow-hidden rounded-[24px] border bg-white shadow-[0_20px_60px_-40px_rgba(0,0,0,0.25)] ${
                  car.category === 'ultra-luxury' || car.category === 'limousine'
                    ? 'border-gold/25 ring-1 ring-gold/10'
                    : 'border-neutral-200/80'
                }`}
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-neutral-100">
                  <img
                    src={car.image}
                    alt={car.alt}
                    loading="lazy"
                    decoding="async"
                    width={640}
                    height={440}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-neutral-950/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-light backdrop-blur-sm">
                    {CATEGORY_LABELS[car.category]}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <h3 className="text-[15px] font-semibold leading-snug text-neutral-950">
                      {car.name}
                    </h3>
                    {car.note ? (
                      <p className="mt-1 text-[11px] text-neutral-500">
                        {car.note}
                      </p>
                    ) : null}
                  </div>

                  <div className="mt-auto rounded-xl bg-neutral-50 px-4 py-3 ring-1 ring-neutral-100">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      Daily rate
                    </p>
                    <p className="mt-0.5 text-lg font-semibold text-neutral-950">
                      {formatPkr(car.pricePerDay)}
                      <span className="text-xs font-medium text-neutral-500">
                        {' '}
                        / day
                      </span>
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <motion.a
                      href={whatsappHref(
                        `Hi Jinnah Motors, I would like to book the ${car.name} at ${formatPkr(car.pricePerDay)}/day. Please confirm availability.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-emerald-500 py-2.5 text-xs font-semibold text-white shadow-md"
                    >
                      <FaWhatsapp className="text-sm" />
                      WhatsApp
                    </motion.a>
                    <motion.a
                      href={whatsappHref(
                        `Book Now: ${car.name} — ${formatPkr(car.pricePerDay)}/day`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-neutral-950 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-gold-light"
                    >
                      Book Now
                    </motion.a>
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {filtered.length === 0 ? (
          <p className="mt-12 text-center text-neutral-500">
            No vehicles in this category.
          </p>
        ) : null}
      </div>
    </section>
  )
}
