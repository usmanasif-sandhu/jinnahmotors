import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'
import { PACKAGES } from '../data/packages'
import { whatsappHref } from '../constants/site'

const formatPkr = (n) =>
  `PKR ${n.toLocaleString('en-PK', { maximumFractionDigits: 0 })}+`

export default function PackagesSection() {
  return (
    <section
      id="packages"
      className="relative scroll-mt-28 overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900 px-6 py-20 text-white md:scroll-mt-32 md:py-28"
      aria-labelledby="packages-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(197,160,89,0.35),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-gold-light">
            <HiOutlineSparkles />
            Barat &amp; wedding logistics
          </p>
          <h2
            id="packages-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Sculpted wedding transport with{' '}
            <span className="bg-gradient-to-r from-gold-light via-amber-200 to-gold bg-clip-text text-transparent">
              golden precision
            </span>
            .
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-[15px]">
            Layered convoys, groom entry theatrics, and multi-day guest
            routing — each package is choreographed with the same obsession for
            timing as you put into your guest list.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {PACKAGES.map((pkg, index) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-[30px] border border-amber-200/25 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px] shadow-[0_30px_90px_-50px_rgba(0,0,0,0.9)]"
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-[29px] bg-neutral-950/80">
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${pkg.accent}`}
                />
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-amber-200/40 bg-neutral-950/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-100 backdrop-blur-md">
                    From {formatPkr(pkg.fromPrice)}
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col gap-4 p-7">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {pkg.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-300">
                      {pkg.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-sm text-neutral-200">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-gold-light to-amber-300 shadow-[0_0_0_4px_rgba(250,204,21,0.15)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={whatsappHref(
                      `Hi Jinnah Motors, I'm interested in the ${pkg.title}. Please share details and starting price.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-dark via-gold to-amber-200 px-4 py-3 text-sm font-semibold text-neutral-950 shadow-[0_22px_60px_-24px_rgba(250,204,21,0.75)] ring-1 ring-amber-100/80"
                  >
                    <FaWhatsapp className="text-lg" />
                    Book on WhatsApp
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
