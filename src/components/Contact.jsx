import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiOutlineLocationMarker, HiPhone } from 'react-icons/hi'
import { SITE, whatsappHref } from '../constants/site'

const phoneDialHref = `tel:+${SITE.whatsappDigits}`

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const text = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      '',
      form.message || 'Looking for guidance on bookings.',
    ].join('\n')
    window.open(whatsappHref(text), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    setForm({ name: '', phone: '', message: '' })
    window.setTimeout(() => setSubmitted(false), 4000)
  }

  const mapSrc = `https://maps.google.com/maps?q=${SITE.mapEmbedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 bg-neutral-50 px-6 py-20 md:scroll-mt-32 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-white to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-dark">
            Contact &amp; routing
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
          >
            Let&apos;s map your convoy—down to the final U-turn.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
            Share your dates, preferred vehicles, and route sketch. We&apos;ll
            reply on WhatsApp with availability, transparent pricing, and a
            choreographed timeline.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <div className="overflow-hidden rounded-[28px] border border-neutral-200/90 bg-white shadow-[0_24px_80px_-48px_rgba(15,23,42,0.75)]">
              <iframe
                title="Jinnah Motors location map"
                src={mapSrc}
                className="h-64 w-full border-0 sm:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="border-t border-neutral-100 p-5 text-sm text-neutral-600">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                  Google Maps preview
                </p>
                <p className="mt-2">
                  Pin is anchored to Shell Pump Chowk for quick orientation—tap
                  directions inside Maps for live routing.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 rounded-2xl border border-neutral-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-md">
                <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-neutral-950 text-gold-light">
                  <HiOutlineLocationMarker className="text-lg" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Address
                  </p>
                  <p className="mt-1 text-sm text-neutral-800">
                    {SITE.addressLine}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl border border-neutral-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-md">
                <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-neutral-950 text-gold-light">
                  <HiPhone className="text-lg" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Phone
                  </p>
                  <a
                    href={phoneDialHref}
                    className="mt-1 block text-sm font-medium text-neutral-900 hover:text-gold-dark"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl border border-neutral-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-md sm:col-span-2">
                <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-neutral-950 text-gold-light">
                  <HiMail className="text-lg" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 block text-sm font-medium text-neutral-900 hover:text-gold-dark"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[30px] border border-neutral-200/90 bg-white/95 p-[1px] shadow-[0_26px_80px_-52px_rgba(15,23,42,0.8)] backdrop-blur-md"
          >
            <div className="rounded-[29px] bg-gradient-to-br from-neutral-950 via-neutral-950 to-neutral-900 p-[1px]">
              <div className="rounded-[28px] bg-white px-8 py-8 sm:px-10 sm:py-10">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-600">
                  Project your routes
                </p>
                <p className="mt-3 text-xl font-semibold text-neutral-950">
                  Reach the concierge desk
                </p>

                <div className="mt-8 space-y-5">
                  <label className="block text-sm font-medium text-neutral-800">
                    Name
                    <input
                      required
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="mt-2 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none ring-1 ring-transparent transition focus:border-transparent focus:bg-white focus:ring-gold"
                      placeholder="e.g. Abdullah Khan"
                    />
                  </label>
                  <label className="block text-sm font-medium text-neutral-800">
                    Phone
                    <input
                      required
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      className="mt-2 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none ring-1 ring-transparent transition focus:border-transparent focus:bg-white focus:ring-gold"
                      placeholder="03xx xxxxxxx"
                    />
                  </label>
                  <label className="block text-sm font-medium text-neutral-800">
                    Message
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      className="mt-2 w-full resize-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none ring-1 ring-transparent transition focus:border-transparent focus:bg-white focus:ring-gold"
                      placeholder="Dates, route, vehicles, or special requests."
                    />
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -1, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full rounded-full bg-neutral-950 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold-light shadow-[0_22px_60px_-24px_rgba(15,23,42,0.75)]"
                >
                  Send via WhatsApp
                </motion.button>

                {submitted ? (
                  <p className="mt-4 text-center text-xs text-emerald-600">
                    Opening WhatsApp with your message…
                  </p>
                ) : (
                  <p className="mt-4 text-center text-xs text-neutral-500">
                    Submissions open your WhatsApp chat prefilled for quick
                    confirmation.
                  </p>
                )}
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
