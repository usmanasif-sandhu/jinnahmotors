import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const whatsappUrl = 'https://wa.me/923232002999'

export default function WhatsAppFloat() {
  return (
    <div className="pointer-events-none fixed bottom-6 right-5 z-50 md:bottom-8 md:right-8">
      <div className="pointer-events-auto group relative inline-flex flex-col items-end gap-3">
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp — Chat With Us"
          title="Chat With Us"
          animate={{
            scale: [1, 1.055, 1],
            boxShadow: [
              '0 18px 45px -12px rgba(16,185,129,0.75)',
              '0 24px 60px -10px rgba(16,185,129,0.95)',
              '0 18px 45px -12px rgba(16,185,129,0.75)',
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.9,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 text-[26px] text-white ring-4 ring-emerald-200/85"
        >
          <FaWhatsapp aria-hidden />

          <span className="pointer-events-none absolute -top-11 right-2 hidden whitespace-nowrap rounded-full bg-neutral-950 px-3 py-1 text-[11px] font-medium text-gold-light opacity-0 shadow-lg ring-1 ring-white/25 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 sm:block sm:translate-y-1">
            Chat With Us
          </span>

          <span className="pointer-events-none absolute inset-[-8px] -z-10 rounded-full bg-emerald-400/55 blur-md animate-shimmer-soft" />
        </motion.a>
      </div>
    </div>
  )
}
