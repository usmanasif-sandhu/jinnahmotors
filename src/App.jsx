import { useEffect, useState } from 'react'
import AboutSection from './components/AboutSection'
import CarsSection from './components/CarsSection'
import Contact from './components/Contact'
import FleetShowcase from './components/FleetShowcase'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import PackagesSection from './components/PackagesSection'
import StructuredData from './components/StructuredData'
import Testimonials from './components/Testimonials'
import WhatsAppFloat from './components/WhatsAppFloat'
import WhyChooseUs from './components/WhyChooseUs'

const MIN_VISIBLE_MS = 250 // just enough to avoid an ugly flash, not an artificial wait

function App() {
  const [booting, setBooting] = useState(true)

  useEffect(() => {
    const start = performance.now()

    const finish = () => {
      const elapsed = performance.now() - start
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed)
      window.setTimeout(() => setBooting(false), remaining)
    }

    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish, { once: true })
      return () => window.removeEventListener('load', finish)
    }
  }, [])

  return (
    <>
      <StructuredData />
      <div className="min-h-svh bg-[#fafafa] text-neutral-900 antialiased">
        <LoadingScreen visible={booting} />
        <Navbar />
        <main id="main-content">
          <Hero />
          <FleetShowcase />
          <CarsSection />
          <PackagesSection />
          <WhyChooseUs />
          <AboutSection />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  )
}

export default App