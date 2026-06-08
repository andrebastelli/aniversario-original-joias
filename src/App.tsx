import { useEffect } from 'react'
import Confetti from '@/components/Confetti'
import HeroSection from '@/components/HeroSection'
import HowSection from '@/components/HowSection'
import PrizesSection from '@/components/PrizesSection'
import UrgencySection from '@/components/UrgencySection'
import PhotoSection from '@/components/PhotoSection'
import FaqSection from '@/components/FaqSection'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'
import StickyMobileCta from '@/components/StickyMobileCta'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  // Re-run observer after mount so dynamically rendered reveals are picked up
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Confetti />
      <StickyMobileCta />
      <main>
        <HeroSection />
        <HowSection />
        <PrizesSection />
        <UrgencySection />
        <PhotoSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
