import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/shared/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Cloud Kitchen Management Software India — Multi-brand Operations | Digitory',
  description: 'Run multiple brands from one kitchen. Manage aggregator orders, brand-wise P&L, production planning, and kitchen operations from a single platform.',
  keywords: 'cloud kitchen software India, ghost kitchen management, virtual restaurant software, multi brand kitchen management',
}

export default function CloudKitchensPage() {
  return (
    <IndustryPageTemplate
      tag="Cloud Kitchens"
      title="Multiple brands. One kitchen. Zero chaos."
      subtitle="Run multiple brands from one kitchen. Manage aggregator orders, brand-wise P&L, and production planning from a single dashboard."
      description="Cloud kitchens need software that thinks in brands, not tables. Digitory manages your multi-brand operation with the clarity each brand deserves."
      stats={[
        { value: '100+', label: 'Cloud kitchens powered' },
        { value: '15+', label: 'Aggregator integrations' },
        { value: 'Real-time', label: 'Brand-wise P&L' },
        { value: '50%', label: 'Faster order processing' },
      ]}
      challenges={[
        { title: 'Juggling multiple aggregator dashboards', desc: 'Each brand on each platform means dozens of tablets and dashboards. Orders get missed, accept times lag.' },
        { title: 'No brand-wise cost clarity', desc: 'You know your total P&L but not which brand is profitable and which is bleeding money.' },
        { title: 'Kitchen chaos during peak hours', desc: 'Orders from multiple brands and aggregators pile up. Kitchen can\'t prioritize or route efficiently.' },
        { title: 'Inventory shared across brands', desc: 'Same ingredients used by different brands but no clear tracking of per-brand consumption.' },
      ]}
      solutions={[
        { title: 'Unified order management', desc: 'All aggregator orders from all brands flow into one screen. Auto-accept, route to kitchen, and track — no missed orders.' },
        { title: 'Brand-wise P&L', desc: 'See revenue, costs, and profit for each brand separately. Make data-driven decisions about which brands to scale or shut.' },
        { title: 'Smart kitchen routing', desc: 'Orders route to the right prep stations regardless of brand. Kitchen sees what to cook, not which brand it\'s for.' },
        { title: 'Shared inventory, separate costing', desc: 'Track shared ingredient pool but allocate consumption to brands via recipes. True brand-wise food costing.' },
      ]}
      modules={[
        { name: 'Point of Sale', desc: 'Aggregator order management and brand-wise billing', href: '/products/pos' },
        { name: 'Kitchen Display System', desc: 'Multi-brand order routing and production management', href: '/products/kitchen-display' },
        { name: 'Inventory Management', desc: 'Shared inventory with brand-wise consumption tracking', href: '/products/inventory' },
        { name: 'Recipe Management', desc: 'Brand-specific recipes with shared ingredient costing', href: '/products/recipe-management' },
        { name: 'Analytics Dashboard', desc: 'Brand-wise P&L and cross-brand comparisons', href: '/products/analytics' },
        { name: 'Tally Automation', desc: 'Brand-wise accounting with automated Tally sync', href: '/products/tally-automation' },
      ]}
      testimonial={{
        quote: 'We run 6 brands from 3 kitchens. Before Digitory, we had 18 tablets and zero clarity. Now everything flows through one screen.',
        name: 'Sneha Kapoor',
        title: 'Co-founder, Multi-brand Cloud Kitchen',
      }}
      faqs={[
        { q: 'How does multi-brand management work?', a: 'Each brand has its own menu, pricing, and cost structure within Digitory. Orders flow in tagged by brand and platform. Reporting, P&L, and analytics can be viewed per-brand or consolidated.' },
        { q: 'Which aggregators are supported?', a: 'Digitory integrates with Swiggy, Zomato, Dunzo, Amazon Food, and all major aggregator platforms. Orders auto-accept and flow directly into your kitchen workflow.' },
        { q: 'Can we share ingredients across brands?', a: 'Yes. You maintain one inventory pool but define brand-specific recipes. When orders come in, ingredient consumption is allocated to the correct brand for accurate costing.' },
      ]}
    />
  )
}
