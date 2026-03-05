import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/shared/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Pub & Brewery Management Software India — Bar POS & Operations | Digitory',
  description: 'Purpose-built for pubs, breweries, and nightlife venues. Draft beer tracking, happy hour automation, tab management, and event billing in one platform.',
  keywords: 'pub management software India, brewery POS system, bar management software, nightlife venue management',
}

export default function PubsBreweriesPage() {
  return (
    <IndustryPageTemplate
      tag="Pubs & Breweries"
      title="Built for the bar. Proven in the brewery."
      subtitle="Manage complex bar operations — draft beer tracking, happy hour automation, and event billing alongside full kitchen operations."
      description="Pubs and breweries have unique operational needs that generic restaurant software can't handle. Digitory is purpose-built for your world."
      stats={[
        { value: '200+', label: 'Pubs & bars powered' },
        { value: '50+', label: 'Craft breweries' },
        { value: '₹200Cr+', label: 'Monthly bar sales processed' },
        { value: '30%', label: 'Reduced pour cost variance' },
      ]}
      challenges={[
        { title: 'Draft beer tracking is guesswork', desc: 'You know how many kegs you bought but not exactly how many pints you served. Pour variance eats into margins.' },
        { title: 'Happy hour pricing is manual', desc: 'Staff manually change prices, forget to revert, or apply wrong discounts. It\'s a revenue leak.' },
        { title: 'Tab management is chaotic', desc: 'Open tabs get lost, wrong items get added, and closing out takes forever during peak hours.' },
        { title: 'Events are billed separately', desc: 'Private parties and events require separate billing workflows that your current POS doesn\'t support well.' },
      ]}
      solutions={[
        { title: 'Precise draft tracking', desc: 'Track keg inventory, pints poured, and pour variance. Know exactly how much beer you\'re selling vs losing.' },
        { title: 'Automated happy hours', desc: 'Set time-based pricing rules. Prices change automatically and revert when happy hour ends. Zero manual work.' },
        { title: 'Smart tab management', desc: 'Open, transfer, merge, and close tabs quickly. Pre-auth card holds, running tab totals, and easy settlement.' },
        { title: 'Integrated event billing', desc: 'Create event packages, manage guest lists, and handle billing for private parties — all within your normal workflow.' },
      ]}
      modules={[
        { name: 'Point of Sale', desc: 'Tab management, split billing, and bar-optimized workflow', href: '/products/pos' },
        { name: 'Inventory Management', desc: 'Draft beer tracking and pour cost management', href: '/products/inventory' },
        { name: 'Kitchen Display System', desc: 'Coordinate kitchen and bar operations simultaneously', href: '/products/kitchen-display' },
        { name: 'CRM & Loyalty', desc: 'Guest profiles with preferences for regulars', href: '/products/crm-loyalty' },
        { name: 'Prepaid Cards', desc: 'Bar cards and stored value for repeat customers', href: '/products/prepaid-cards' },
        { name: 'Analytics Dashboard', desc: 'Bar-specific metrics — pour cost, tab averages, peak hours', href: '/products/analytics' },
      ]}
      testimonial={{
        quote: 'Digitory helped us reduce pour variance from 18% to under 5%. That alone paid for the entire system in the first month.',
        name: 'Vikram Singh',
        title: 'Operations Director, Microbrewery Chain',
      }}
      faqs={[
        { q: 'Can Digitory track draft beer pours?', a: 'Yes. Digitory tracks keg inventory, expected yield per keg, actual pints sold, and calculates pour variance. This gives you visibility into over-pouring, spillage, and potential pilferage.' },
        { q: 'How does happy hour automation work?', a: 'You define time windows and pricing rules (e.g., 50% off draft beer from 5-7 PM on weekdays). Prices change automatically in the POS when happy hour starts and revert when it ends.' },
        { q: 'Can we handle event billing?', a: 'Yes. Create event packages with per-head pricing, minimum spends, or custom packages. Track guest consumption against the package and handle settlement seamlessly.' },
      ]}
    />
  )
}
