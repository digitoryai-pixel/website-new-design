import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/shared/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'QSR & Fast Food POS Software India — Speed-optimized | Digitory',
  description: 'POS and operations software built for speed. Sub-3-second billing, combo management, KDS integration, and drive-through support for quick service restaurants.',
  keywords: 'QSR POS India, fast food software, quick service restaurant management, QSR billing software India',
}

export default function QSRPage() {
  return (
    <IndustryPageTemplate
      tag="QSR & Fast Food"
      title="Built for speed. Optimized for scale."
      subtitle="Sub-3-second billing, intelligent combo management, and drive-through support to handle peak-hour volumes without missing a beat."
      description="In QSR, seconds matter. Every second saved at the counter means more orders served, more revenue earned, and more guests satisfied."
      stats={[
        { value: '<3 sec', label: 'Billing speed' },
        { value: '300+', label: 'QSR outlets powered' },
        { value: '40%', label: 'Faster throughput' },
        { value: '99.9%', label: 'Uptime' },
      ]}
      challenges={[
        { title: 'Slow billing during rush hours', desc: 'Complex POS interfaces slow down billing. Every extra second at the counter costs you orders during peak hours.' },
        { title: 'Combo management is painful', desc: 'Creating and modifying meal combos requires IT support. Promotional combos take days to set up.' },
        { title: 'Kitchen bottlenecks', desc: 'Paper tickets pile up. Kitchen can\'t prioritize or track orders efficiently during high-volume periods.' },
        { title: 'Inconsistency across outlets', desc: 'Franchise outlets deviate from standard portions and recipes. Brand consistency suffers.' },
      ]}
      solutions={[
        { title: 'Speed-optimized POS', desc: 'Minimal-tap interface designed for QSR speed. Popular items as one-touch buttons. Billing in under 3 seconds.' },
        { title: 'Flexible combo builder', desc: 'Create and modify combos in minutes without IT support. Dynamic pricing for promotional offers.' },
        { title: 'Integrated KDS', desc: 'Orders route automatically to stations. Priority queue, prep tracking, and completion alerts keep throughput high.' },
        { title: 'Standardized recipes', desc: 'Recipe management ensures every outlet serves identical portions. Deviation alerts flag inconsistencies.' },
      ]}
      modules={[
        { name: 'Point of Sale', desc: 'Speed-optimized with one-touch ordering', href: '/products/pos' },
        { name: 'Kitchen Display System', desc: 'Station routing and prep time optimization', href: '/products/kitchen-display' },
        { name: 'Inventory Management', desc: 'Auto-replenishment for high-volume consumption', href: '/products/inventory' },
        { name: 'Recipe Management', desc: 'Standardize portions across all outlets', href: '/products/recipe-management' },
        { name: 'QR Code Ordering', desc: 'Self-ordering kiosks and QR ordering', href: '/products/qr-ordering' },
        { name: 'Analytics Dashboard', desc: 'Speed metrics, throughput, and operational insights', href: '/products/analytics' },
      ]}
      testimonial={{
        quote: 'Our average billing time went from 12 seconds to under 3. During lunch rush, that means we serve 40% more customers per hour.',
        name: 'Arjun Patel',
        title: 'Founder, National QSR Brand',
      }}
      faqs={[
        { q: 'How is the POS different for QSR?', a: 'Our QSR POS interface is minimal-tap designed. Frequently ordered items are one-touch buttons, combos are pre-configured, and the entire billing flow is optimized for speed over flexibility.' },
        { q: 'Do you support drive-through?', a: 'Yes. Our POS supports drive-through workflows with order tracking, estimated wait times, and kitchen prioritization for drive-through orders.' },
        { q: 'Can we manage franchise operations?', a: 'Yes. Franchisors get centralized menu, recipe, and pricing control. Franchisees operate within defined parameters. Reporting consolidates across all franchise outlets.' },
      ]}
    />
  )
}
