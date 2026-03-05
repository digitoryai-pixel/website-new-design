import type { Metadata } from 'next'
import { Check, X, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digitory vs Competitors — Restaurant Software Comparison India',
  description: 'Compare Digitory with other restaurant management software in India. See why 2,000+ restaurants chose Digitory for POS, inventory, and operations.',
  keywords: 'restaurant POS comparison India, Digitory vs Petpooja, restaurant software comparison, best restaurant POS India',
}

const features = [
  { name: 'Cloud-based POS', digitory: true, compA: true, compB: true, compC: true },
  { name: 'Offline Billing', digitory: true, compA: true, compB: false, compC: true },
  { name: 'Multi-outlet Management', digitory: true, compA: true, compB: true, compC: false },
  { name: 'Inventory Management', digitory: true, compA: true, compB: 'Basic', compC: false },
  { name: 'Recipe Management & Costing', digitory: true, compA: false, compB: false, compC: false },
  { name: 'QR Code Ordering', digitory: true, compA: true, compB: true, compC: true },
  { name: 'Kitchen Display System', digitory: true, compA: true, compB: false, compC: false },
  { name: 'CRM & Loyalty', digitory: true, compA: 'Basic', compB: true, compC: false },
  { name: 'Prepaid Card System', digitory: true, compA: false, compB: false, compC: false },
  { name: 'Asset & Maintenance (DigiBeat)', digitory: true, compA: false, compB: false, compC: false },
  { name: 'Executive Analytics Dashboard', digitory: true, compA: 'Basic', compB: 'Basic', compC: false },
  { name: 'Tally Automation', digitory: true, compA: false, compB: false, compC: false },
  { name: 'Aggregator Integration', digitory: true, compA: true, compB: true, compC: true },
  { name: 'Open API', digitory: true, compA: false, compB: true, compC: false },
  { name: 'Dedicated Account Manager', digitory: true, compA: false, compB: false, compC: false },
]

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />
  if (value === false) return <X className="w-5 h-5 text-brand-gray-300 mx-auto" />
  return <span className="text-caption text-yellow-600 font-medium">{value}</span>
}

export default function ComparePage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-orange/[0.03] to-white">
        <div className="content-max section-padding text-center">
          <span className="section-tag">Compare</span>
          <h1 className="text-display-lg lg:text-display-xl text-brand-navy mt-5">
            Why restaurants choose{' '}
            <span className="gradient-text">Digitory</span>
          </h1>
          <p className="text-body-lg text-brand-gray-500 mt-5 max-w-2xl mx-auto">
            See how Digitory compares to other restaurant management platforms.
            The most comprehensive solution, not the most expensive.
          </p>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="content-max section-padding">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b-2 border-brand-gray-200">
                  <th className="text-left py-4 pr-4 text-body font-semibold text-brand-navy w-1/3">Feature</th>
                  <th className="py-4 px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-lg">
                      <span className="font-bold text-brand-orange">Digitory</span>
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center text-body-sm font-medium text-brand-gray-400">Competitor A</th>
                  <th className="py-4 px-4 text-center text-body-sm font-medium text-brand-gray-400">Competitor B</th>
                  <th className="py-4 px-4 text-center text-body-sm font-medium text-brand-gray-400">Competitor C</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f) => (
                  <tr key={f.name} className="border-b border-brand-gray-200/50 hover:bg-brand-gray-50 transition-colors">
                    <td className="py-4 pr-4 text-body-sm font-medium text-brand-navy">{f.name}</td>
                    <td className="py-4 px-4 text-center bg-brand-orange/[0.02]"><FeatureCell value={f.digitory} /></td>
                    <td className="py-4 px-4 text-center"><FeatureCell value={f.compA} /></td>
                    <td className="py-4 px-4 text-center"><FeatureCell value={f.compB} /></td>
                    <td className="py-4 px-4 text-center"><FeatureCell value={f.compC} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-heading-lg text-brand-navy">The only all-in-one platform</h3>
            <p className="text-body text-brand-gray-500 mt-3 max-w-xl mx-auto">
              While competitors offer pieces of the puzzle, Digitory provides the complete
              picture — natively integrated, not bolted together.
            </p>
            <a href="/demo" className="btn-primary mt-6">
              Book a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-brand-gray-50">
        <div className="content-max section-padding">
          <h2 className="text-heading-xl text-brand-navy text-center mb-12">What sets Digitory apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'True All-in-One Platform', desc: 'POS, inventory, recipes, KDS, CRM, analytics, prepaid cards, asset management, and Tally sync — all natively built, not third-party add-ons.' },
              { title: 'Recipe-linked Inventory', desc: 'The only platform where every order automatically deducts ingredients based on actual recipes. True food costing, not estimates.' },
              { title: 'DigiBeat for Asset Management', desc: 'No other restaurant platform offers equipment and maintenance management. Prevent breakdowns before they happen.' },
              { title: 'Tally Automation', desc: 'Automatic daily sync with Tally ERP. No manual data entry, no delayed books. Unique to Digitory.' },
              { title: 'Enterprise-grade for All Sizes', desc: 'The same platform that runs 200-outlet chains is available to a single-outlet restaurant. Scale without migration.' },
              { title: 'India-first, Global-ready', desc: 'Built for Indian restaurant complexity — GST, aggregators, regional languages, multiple formats — but ready for international expansion.' },
            ].map((d) => (
              <div key={d.title} className="card">
                <h3 className="text-heading-sm font-semibold text-brand-navy">{d.title}</h3>
                <p className="text-body-sm text-brand-gray-500 mt-2">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
