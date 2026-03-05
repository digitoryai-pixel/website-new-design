import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import PlatformOverview from '@/components/home/PlatformOverview'
import ProductShowcase from '@/components/home/ProductShowcase'
import IndustrySection from '@/components/home/IndustrySection'
import MetricsSection from '@/components/home/MetricsSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import IntegrationSection from '@/components/home/IntegrationSection'
import FAQSection from '@/components/home/FAQSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PlatformOverview />
      <ProductShowcase />
      <IndustrySection />
      <MetricsSection />
      <TestimonialsSection />
      <IntegrationSection />
      <FAQSection />
    </>
  )
}
