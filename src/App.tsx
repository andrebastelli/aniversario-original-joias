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
