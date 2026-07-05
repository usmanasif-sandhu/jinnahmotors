import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { SITE, SOCIAL } from '../constants/site'

const quick = [
  { href: '#home', label: 'Home' },
  { href: '#fleet-showcase', label: 'Luxury Fleet' },
  { href: '#cars', label: 'All Cars' },
  { href: '#packages', label: 'Packages' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-neutral-200 bg-neutral-950 px-6 py-16 text-neutral-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(197,160,89,0.22),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-light">
            {SITE.name}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
            Pakistan&apos;s trusted luxury car rental — executive transport,
            wedding convoys &amp; VIP fleet hire across Gujrat, Lahore,
            Islamabad &amp; Karachi.
          </p>
          <div className="mt-6 flex gap-4">
            {[
              {
                Icon: FaInstagram,
                label: 'Instagram',
                href: SOCIAL.instagram,
              },
              {
                Icon: FaFacebookF,
                label: 'Facebook',
                href: SOCIAL.facebook,
              },
              { Icon: FaTiktok, label: 'TikTok', href: SOCIAL.tiktok },
            ].map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gold-light shadow-[0_0_0_1px_rgba(250,204,21,0.06)] backdrop-blur-md transition hover:border-amber-200/60 hover:shadow-[0_0_32px_-4px_rgba(250,204,21,0.55)]"
              >
                <Icon className="text-lg" aria-hidden />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Footer quick links"
          className="space-y-3 text-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-500">
            Quick Links
          </p>
          <ul className="space-y-2">
            {quick.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-neutral-300 transition hover:text-gold-light hover:underline underline-offset-[6px]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 text-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-500">
            Contact Desk
          </p>
          <p className="text-neutral-300">{SITE.phoneDisplay}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex text-neutral-200 transition hover:text-gold-light hover:underline underline-offset-[6px]"
          >
            {SITE.email}
          </a>
          <p className="pt-1 text-neutral-400">{SITE.addressLine}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        className="relative mx-auto mt-12 max-w-6xl border-t border-white/10 pt-8 text-xs text-neutral-500"
      >
        <p className="text-center">
          © 2026 {SITE.name} — All Rights Reserved
        </p>
        <p className="mt-2 text-center text-[11px] tracking-[0.18em] text-neutral-600">
          Developed By Usman Asif Sandhu (0321-1161139) | DevTorque
        </p>
      </motion.div>
    </footer>
  )
}
