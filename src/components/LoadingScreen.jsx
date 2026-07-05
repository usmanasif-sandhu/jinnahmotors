import { AnimatePresence, motion } from 'framer-motion'
import { SITE } from '../constants/site'

export default function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[60] grid place-items-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ rotate: -4, opacity: 0 }}
              animate={{ rotate: [0, 2.5, 0], opacity: 1 }}
              transition={{ duration: 0.95, repeat: Infinity, repeatType: 'mirror' }}
              className="relative flex h-24 w-24 items-center justify-center"
              aria-busy="true"
              aria-label="Loading Jinnah Motors site"
            >
              <img
                src="/logo.webp"
                alt={`${SITE.name} logo`}
                className="h-full w-full object-contain drop-shadow-[0_18px_40px_rgba(15,23,42,0.35)]"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.45 }}
              className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-700"
            >
              {SITE.name}
              <span className="mx-3 text-neutral-300">/</span>
              Calibrating routes
            </motion.p>

            <div className="mt-5 h-[3px] w-40 overflow-hidden rounded-full bg-neutral-200">
              <motion.span
                className="block h-full w-[45%] rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                initial={{ x: '-140%' }}
                animate={{ x: '140%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.05,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}