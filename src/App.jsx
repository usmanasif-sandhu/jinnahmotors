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

function App() {
  const [booting, setBooting] = useState(true)

  useEffect(() => {
    const id = window.setTimeout(() => setBooting(false), 900)
    return () => window.clearTimeout(id)
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
