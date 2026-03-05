import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/shared/ProductPageTemplate'

export const metadata: Metadata = {
  title: 'Restaurant Analytics Dashboard — Executive Insights | Digitory',
  description: 'Monitor revenue, food costs, staff performance, and guest trends across all outlets. Real-time executive analytics dashboard for restaurant chains.',
  keywords: 'restaurant analytics dashboard, restaurant reporting software, restaurant business intelligence, multi outlet restaurant analytics',
}

export default function AnalyticsPage() {
  return (
    <ProductPageTemplate
      tag="Analytics Dashboard"
      title="Executive insights that drive decisions"
      subtitle="Monitor revenue, food costs, staff performance, and guest trends across all outlets from a single dashboard. Custom reports in seconds."
      description="You can't improve what you can't measure. Digitory Analytics turns your restaurant data into actionable insights that directly impact your bottom line."
      stats={[
        { value: '100+', label: 'Pre-built reports' },
        { value: 'Real-time', label: 'Data updates' },
        { value: '360°', label: 'Business view' },
        { value: 'Mobile', label: 'Access anywhere' },
      ]}
      features={[
        { title: 'Multi-outlet Dashboard', desc: 'See revenue, orders, covers, and P&L across all outlets in one view. Drill down into any outlet for details.' },
        { title: 'Real-time P&L', desc: 'Live profit and loss statements that update with every transaction. Know your margins right now, not next month.' },
        { title: 'Custom Reports', desc: 'Build custom reports with drag-and-drop. Schedule automated delivery to stakeholders via email.' },
        { title: 'Trend Analysis', desc: 'Compare performance across time periods, outlets, and menu categories. Spot trends before they become problems.' },
        { title: 'Staff Performance', desc: 'Track server sales, speed, upselling rates, and attendance. Identify top performers and coaching needs.' },
        { title: 'Mobile Access', desc: 'Check key metrics from your phone. Get push alerts for anomalies — unusual voids, low sales, high waste.' },
      ]}
      benefits={[
        'Real-time visibility into revenue and costs across all outlets',
        'Make data-driven decisions instead of relying on gut feel',
        'Custom reports delivered to your inbox on schedule',
        'Spot issues early with anomaly alerts and trend analysis',
        'Track staff performance and optimize scheduling',
        'Access insights anywhere from your mobile device',
      ]}
      faqs={[
        { q: 'Can we create custom reports?', a: 'Yes. Our report builder lets you create custom reports by selecting metrics, dimensions, filters, and time periods. Save them as templates and schedule automated delivery.' },
        { q: 'Is data updated in real time?', a: 'Yes. Dashboard metrics update in real time as transactions flow through the POS. Financial summaries like P&L update every few minutes as inventory and cost data is reconciled.' },
        { q: 'Can we compare outlet performance?', a: 'Absolutely. Compare any metrics across outlets, time periods, or menu categories. Identify your best-performing locations and understand what drives their success.' },
      ]}
      relatedProducts={[
        { name: 'Point of Sale', href: '/products/pos' },
        { name: 'Inventory Management', href: '/products/inventory' },
        { name: 'Tally Automation', href: '/products/tally-automation' },
        { name: 'CRM & Loyalty', href: '/products/crm-loyalty' },
      ]}
    />
  )
}
