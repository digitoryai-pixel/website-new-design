import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/shared/ProductPageTemplate'

export const metadata: Metadata = {
  title: 'DigiBeat — Restaurant Asset & Maintenance Management | Digitory',
  description: 'Track equipment health, schedule preventive maintenance, and reduce unexpected downtime. Asset management software purpose-built for restaurants.',
  keywords: 'restaurant maintenance management, restaurant equipment tracking, asset management restaurant, DigiBeat restaurant',
}

export default function DigiBeatPage() {
  return (
    <ProductPageTemplate
      tag="DigiBeat — Asset & Maintenance"
      title="Keep your equipment running. Keep your kitchen open."
      subtitle="Track equipment health, schedule preventive maintenance, and reduce unexpected downtime across all your outlets."
      description="A broken fryer on a Saturday night doesn't just cost a repair — it costs revenue, reputation, and guest trust. DigiBeat prevents those moments."
      stats={[
        { value: '60%', label: 'Fewer breakdowns' },
        { value: '₹3L+', label: 'Avg. annual savings' },
        { value: '100%', label: 'Asset visibility' },
        { value: '2x', label: 'Equipment lifespan' },
      ]}
      features={[
        { title: 'Asset Registry', desc: 'Complete digital inventory of all equipment across outlets. Track purchase date, warranty, AMC status, and maintenance history.' },
        { title: 'Preventive Scheduling', desc: 'Set maintenance schedules based on time or usage. Automatic reminders ensure nothing gets missed.' },
        { title: 'Breakdown Logging', desc: 'Log issues with photos and descriptions. Track resolution time and costs for every incident.' },
        { title: 'Vendor Coordination', desc: 'Assign maintenance tasks to vendors. Track response times and completion status.' },
        { title: 'Cost Tracking', desc: 'Track maintenance costs by equipment, outlet, and vendor. Identify money pits and make replacement decisions.' },
        { title: 'Warranty & AMC Management', desc: 'Never miss a warranty claim or AMC renewal. Automatic alerts before expiration dates.' },
      ]}
      benefits={[
        'Reduce unexpected equipment breakdowns by 60%',
        'Save ₹3L+ annually on emergency repairs',
        'Extend equipment lifespan with preventive maintenance',
        'Complete visibility into all assets across outlets',
        'Track maintenance costs and make informed replacement decisions',
        'Never miss warranty claims or AMC renewals',
      ]}
      faqs={[
        { q: 'What types of equipment can we track?', a: 'Everything — kitchen equipment (fryers, ovens, grills), refrigeration, HVAC, POS hardware, furniture, and any other assets. You define the categories and maintenance schedules.' },
        { q: 'Can we track maintenance costs?', a: 'Yes. Every maintenance event is logged with costs, parts used, and vendor charges. You get reports on cost-per-asset, cost-per-outlet, and can compare vendor performance.' },
        { q: 'Does it send automatic maintenance reminders?', a: 'Yes. Set maintenance schedules (e.g., deep clean fryer every 30 days) and DigiBeat sends automatic reminders to the responsible staff or vendor before the due date.' },
      ]}
      relatedProducts={[
        { name: 'Analytics Dashboard', href: '/products/analytics' },
        { name: 'Inventory Management', href: '/products/inventory' },
        { name: 'Point of Sale', href: '/products/pos' },
        { name: 'Tally Automation', href: '/products/tally-automation' },
      ]}
    />
  )
}
