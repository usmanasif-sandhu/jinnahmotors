import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { SITE } from '../constants/site'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#cars', label: 'Cars' },
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
    'relative text-sm font-medium text-neutral-800 transition-colors hover:text-neutral-950 after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-center after:scale-x-0 after:bg-gradient-to-r after:from-gold-dark after:to-gold after:transition-transform after:duration-300 hover:after:scale-x-100'

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 sm:px-6 lg:px-10 pt-4">
      <motion.nav
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-5 py-3 shadow-sm transition-all duration-500 ${
          scrolled
            ? 'border-neutral-200/80 bg-white/70 shadow-[0_18px_60px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl'
            : 'border-white/55 bg-white/45 backdrop-blur-md'
        }`}
        aria-label="Primary"
      >
        <a
          href="#home"
          className="group inline-flex min-w-0 shrink items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 text-[11px] font-semibold tracking-[0.2em] text-gold-light shadow-inner shadow-black/35">
            JM
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/25" />
          </span>
          <span className="flex min-w-0 max-w-[200px] flex-col leading-tight sm:max-w-xs">
            <span className="text-[13px] font-semibold leading-snug text-neutral-950 sm:text-[14px]">
              <span className="line-clamp-2 sm:line-clamp-none">{SITE.name}</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-neutral-500">
              Gujrat · Luxury transport
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <motion.a key={link.href} href={link.href} className={baseLink}>
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="hidden lg:block">
          <motion.a
            href="#cars"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-neutral-950 px-[18px] py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-light shadow-[0_14px_40px_-16px_rgba(15,23,42,0.75)] ring-1 ring-white/25 transition hover:bg-neutral-900"
          >
            Reserve Fleet
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

        {/* Mobile */}
        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-nav-drawer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-neutral-950/55 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ y: '-6%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-4%', opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="glass absolute right-6 top-24 flex w-[min(92vw,400px)] flex-col gap-1 rounded-[22px] p-6 text-left shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
                  {SITE.shortName}
                </p>
                <p className="mb-2 text-lg font-semibold text-neutral-900">
                  Glide through Gujrat in comfort.
                </p>
                {links.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.24,
                      delay: 0.05 * idx,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white/95"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#cars"
                  whileTap={{ scale: 0.98 }}
                  className="mt-3 rounded-full bg-neutral-950 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold-light shadow-lg"
                  onClick={() => setOpen(false)}
                >
                  View Premium Cars
                </motion.a>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
