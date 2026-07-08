import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { SITE, whatsappHref } from '../constants/site'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#fleet-showcase', label: 'Luxury Fleet' },
  { href: '#cars', label: 'All Cars' },
  { href: '#packages', label: 'Packages' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const baseLink =
    'relative text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-950 after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-center after:scale-x-0 after:bg-gradient-to-r after:from-gold-dark after:to-gold after:transition-transform after:duration-300 hover:after:scale-x-100'

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <motion.nav
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 shadow-sm transition-all duration-500 sm:px-5 ${
          scrolled
            ? 'border-neutral-200/80 bg-white/85 shadow-[0_18px_60px_-24px_rgba(0,0,0,0.2)] backdrop-blur-xl'
            : 'border-white/40 bg-white/60 backdrop-blur-md'
        }`}
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="group inline-flex min-w-0 shrink items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center">
            <img
              src="/logo.webp"
              alt={`${SITE.shortName} logo`}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-[13px] font-semibold text-neutral-950 sm:text-sm">
              {SITE.shortName}
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500 sm:block">
              Luxury · Pakistan
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 xl:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={baseLink}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.a
            href={whatsappHref('Hi Jinnah Motors, I would like to book a car.')}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-neutral-950 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-light shadow-lg ring-1 ring-gold/20 transition hover:bg-neutral-900"
          >
            Book Now
          </motion.a>
        </div>

        <motion.button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white p-2 text-neutral-900 shadow-sm lg:hidden"
          whileTap={{ scale: 0.96 }}
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
        </motion.button>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-nav-drawer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-neutral-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            >
              <motion.div
  initial={{ y: '-6%', opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: '-4%', opacity: 0 }}
  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
  className="absolute right-4 top-24 flex w-[min(92vw,400px)] flex-col gap-1 rounded-[22px] border border-neutral-200 bg-white p-6 text-left shadow-2xl"
  onClick={(e) => e.stopPropagation()}
>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                  {SITE.name}
                </p>
                <p className="mb-3 font-display text-lg font-semibold text-neutral-900">
                  Luxury transport across Pakistan
                </p>
                {links.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.24, delay: 0.04 * idx }}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  className="mt-3 rounded-full bg-neutral-950 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-gold-light"
                  onClick={() => setOpen(false)}
                >
                  Book Now — WhatsApp
                </motion.a>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}