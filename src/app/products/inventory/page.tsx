import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/shared/ProductPageTemplate'

export const metadata: Metadata = {
  title: 'Restaurant Inventory Management Software — Real-time Stock Control | Digitory',
  description: 'Track raw materials across all outlets in real time. Automate purchase orders, reduce food waste by 25%, and manage vendor relationships — all from one dashboard.',
  keywords: 'inventory management for restaurants, restaurant stock management, food inventory software, restaurant inventory India',
}

export default function InventoryPage() {
  return (
    <ProductPageTemplate
      tag="Inventory Management"
      title="Real-time inventory across every outlet"
      subtitle="Track raw materials in real time, automate purchase orders, and reduce food waste by up to 25%. Multi-outlet stock transfers in a click."
      description="Stop guessing what's in your kitchen. Digitory gives you exact, real-time visibility into every ingredient across every outlet — from the moment it arrives to the moment it's served."
      stats={[
        { value: '25%', label: 'Avg. waste reduction' },
        { value: 'Real-time', label: 'Stock visibility' },
        { value: '80%', label: 'Less manual counting' },
        { value: '₹12L+', label: 'Avg. quarterly savings' },
      ]}
      features={[
        { title: 'Auto Purchase Orders', desc: 'Set minimum stock levels and let Digitory automatically generate purchase orders when inventory runs low.' },
        { title: 'Waste Tracking', desc: 'Log and categorize waste by type — spillage, expiry, over-production. Identify patterns and reduce losses.' },
        { title: 'Inter-outlet Transfers', desc: 'Transfer stock between outlets with full tracking. Approval workflows and automatic inventory adjustments.' },
        { title: 'Vendor Management', desc: 'Compare vendor prices, track delivery performance, and manage purchase histories all in one place.' },
        { title: 'Expiry Alerts', desc: 'Get automatic alerts before ingredients expire. FIFO tracking ensures nothing goes to waste.' },
        { title: 'Recipe-linked Consumption', desc: 'Every order automatically deducts ingredients based on recipe configuration. See true food costs in real time.' },
      ]}
      benefits={[
        'Reduce food waste by up to 25% with intelligent tracking',
        'Automate purchase orders — never run out of critical ingredients',
        'Transfer stock between outlets with full audit trails',
        'See real-time food costs linked to actual consumption',
        'Manage vendor relationships and compare pricing easily',
        'Eliminate manual stock counting with automated deductions',
      ]}
      faqs={[
        { q: 'How does auto-consumption tracking work?', a: 'When an order is placed through the POS, Digitory automatically deducts the raw materials used based on your recipe configurations. This gives you real-time visibility into actual food costs and remaining stock.' },
        { q: 'Can we manage inventory across multiple outlets?', a: 'Yes, Digitory provides a centralized inventory view across all your outlets. You can see stock levels, initiate transfers, and compare consumption patterns across locations from a single dashboard.' },
        { q: 'Does it integrate with our existing vendors?', a: 'Digitory supports vendor onboarding with details like pricing, lead times, and minimum order quantities. Purchase orders can be sent directly to vendors via email or WhatsApp.' },
      ]}
      relatedProducts={[
        { name: 'Recipe Management', href: '/products/recipe-management' },
        { name: 'Point of Sale', href: '/products/pos' },
        { name: 'Analytics Dashboard', href: '/products/analytics' },
        { name: 'Tally Automation', href: '/products/tally-automation' },
      ]}
    />
  )
}
