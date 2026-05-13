import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { CARS } from '../data/cars'
import { whatsappHref } from '../constants/site'

const formatPkr = (n) =>
  `PKR ${n.toLocaleString('en-PK', { maximumFractionDigits: 0 })}`

const grid = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function CarsSection() {
  return (
    <section
      id="cars"
      className="scroll-mt-28 bg-white px-6 py-20 md:scroll-mt-32 md:py-28"
      aria-labelledby="cars-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-dark">
            Daily &amp; weekly rentals
          </p>
          <h2
            id="cars-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
          >
            Hand-picked fleet for every occasion.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
            Compare transparent day-rates with or without a professional
            driver. Tap WhatsApp to lock your dates — we typically confirm
            within minutes during business hours.
          </p>
        </motion.div>

        <motion.ul
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-14 grid gap-7 sm:grid-cols-2 xl:grid-cols-3"
        >
          {CARS.map((car) => (
            <motion.li
              key={car.id}
              variants={card}
              whileHover={{ y: -10, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="group relative flex flex-col overflow-hidden rounded-[26px] border border-neutral-200/80 bg-neutral-50/60 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.45)] ring-1 ring-black/[0.03]"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/55 via-transparent to-transparent opacity-80" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-800 shadow-sm backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.18)]" />
                  {car.year} Model
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-950">
                    {car.name}
                  </h3>
                  <dl className="mt-3 grid grid-cols-2 gap-3 text-xs text-neutral-600 sm:text-[13px]">
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        Transmission
                      </dt>
                      <dd className="mt-1 font-medium text-neutral-900">
                        {car.transmission}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        Fuel
                      </dt>
                      <dd className="mt-1 font-medium text-neutral-900">
                        {car.fuel}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        Seating
                      </dt>
                      <dd className="mt-1 font-medium text-neutral-900">
                        {car.seats} passengers
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        Segment
                      </dt>
                      <dd className="mt-1 font-medium text-neutral-900">
                        Premium rental
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="grid gap-3 rounded-2xl bg-white/90 p-4 text-sm shadow-inner shadow-neutral-200/60 ring-1 ring-neutral-200/80">
                  <div className="flex items-baseline justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        Without driver
                      </p>
                      <p className="mt-1 text-base font-semibold text-neutral-950">
                        {formatPkr(car.priceNoDriver)}
                        <span className="text-xs font-medium text-neutral-500">
                          {' '}
                          / day
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        With driver
                      </p>
                      <p className="mt-1 text-base font-semibold text-neutral-950">
                        {formatPkr(car.priceWithDriver)}
                        <span className="text-xs font-medium text-neutral-500">
                          {' '}
                          / day
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <motion.a
                  href={whatsappHref(
                    `Hi Jinnah Motors, I would like to book the ${car.name}. Please confirm availability and next steps.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(16,185,129,0.9)] ring-1 ring-emerald-300/80"
                >
                  <FaWhatsapp className="text-lg" />
                  Book on WhatsApp
                </motion.a>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
