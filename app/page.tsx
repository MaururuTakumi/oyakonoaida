import Header from '@/components/waiting-lp/Header'
import MobileCTABar from '@/components/waiting-lp/ui/MobileCTABar'
import HeroSection from '@/components/waiting-lp/sections/HeroSection'
import ProblemSection from '@/components/waiting-lp/sections/ProblemSection'
import SolutionSection from '@/components/waiting-lp/sections/SolutionSection'
import WriterSection from '@/components/waiting-lp/sections/WriterSection'
import PreviewSection from '@/components/waiting-lp/sections/PreviewSection'
import BenefitSection from '@/components/waiting-lp/sections/BenefitSection'
import CTASection from '@/components/waiting-lp/sections/CTASection'

export default function WaitingLandingPage() {
  return (
    <>
      <Header />
      <MobileCTABar />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <WriterSection />
        <PreviewSection />
        <BenefitSection />
        <CTASection />
      </main>
    </>
  )
}