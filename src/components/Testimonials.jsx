import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { TESTIMONIALS } from '../data/testimonials'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, 6500)
    return () => window.clearInterval(id)
  }, [])

  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length)

  const active = TESTIMONIALS[index]

  return (
    <section
      className="relative scroll-mt-28 bg-white px-6 py-20 md:scroll-mt-32 md:py-28"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-dark">
            Client voices
          </p>
          <h2
            id="reviews-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
          >
            Proof that the little details—the quiet cabin hum, the crease-free
            seat leather—matter.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
            We obsess over choreography so hosts can stay present with their
            guests, not their logistics spreadsheets.
          </p>
          <div className="mt-8 flex gap-3">
            <motion.button
              type="button"
              onClick={prev}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-sm"
              aria-label="Previous review"
            >
              <HiChevronLeft />
            </motion.button>
            <motion.button
              type="button"
              onClick={next}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-sm"
              aria-label="Next review"
            >
              <HiChevronRight />
            </motion.button>
          </div>
          <div
            className="mt-4 flex gap-2"
            role="tablist"
            aria-label="Choose testimonial"
          >
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 flex-1 max-w-[52px] rounded-full transition ${
                  i === index
                    ? 'bg-gradient-to-r from-gold-dark via-gold to-gold-light'
                    : 'bg-neutral-200'
                }`}
                aria-label={`Show review ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <div className="relative w-full max-w-xl lg:max-w-none lg:flex-1">
          <div className="pointer-events-none absolute -inset-6 rounded-[38px] bg-gradient-to-br from-neutral-950/12 via-transparent to-gold/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-neutral-200/90 bg-neutral-50/80 p-[1px] shadow-[0_30px_80px_-52px_rgba(15,23,42,0.75)]">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -36 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[31px] bg-white/95 p-8 backdrop-blur-md sm:p-10"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={active.avatar}
                    alt=""
                    className="h-14 w-14 rounded-2xl object-cover ring-2 ring-gold/25"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-neutral-950">
                      {active.name}
                    </p>
                    <p className="text-xs text-neutral-600">{active.role}</p>
                    <div
                      className="mt-2 flex gap-1 text-gold-dark"
                      aria-label={`Rated ${active.rating} out of 5`}
                    >
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <FaStar
                          key={`${active.id}-star-${starIdx}`}
                          className={`text-base ${
                            starIdx < active.rating
                              ? ''
                              : 'text-neutral-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-neutral-700 sm:text-[15px]">
                  “{active.review}”
                </p>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
