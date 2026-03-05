import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/shared/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Restaurant Chain Management Software India — Multi-outlet POS & ERP | Digitory',
  description: 'Centralized control for multi-outlet restaurant chains. Menu management, inventory, analytics, and operations — all from one platform. Built for 5 to 500+ outlets.',
  keywords: 'multi outlet restaurant software, restaurant chain management, restaurant ERP India, franchise management software restaurant',
}

export default function RestaurantChainsPage() {
  return (
    <IndustryPageTemplate
      tag="Restaurant Chains"
      title="Scale without losing control"
      subtitle="Centralized management for 5 outlets or 500. Standardize operations while giving each location the flexibility it needs."
      description="Running a restaurant chain means balancing consistency with local needs. Digitory gives you central control with outlet-level flexibility."
      stats={[
        { value: '500+', label: 'Outlets managed' },
        { value: '200+', label: 'Chain brands' },
        { value: '₹500Cr+', label: 'Monthly transactions' },
        { value: '99.9%', label: 'Uptime' },
      ]}
      challenges={[
        { title: 'Inconsistent operations across outlets', desc: 'Every outlet runs differently. Menu items taste different, pricing varies, and processes aren\'t standardized.' },
        { title: 'Zero real-time visibility', desc: 'You rely on end-of-day reports from outlet managers. By the time issues surface, the damage is done.' },
        { title: 'Fragmented technology stack', desc: 'POS from one vendor, inventory from another, CRM from a third. Nothing talks to each other.' },
        { title: 'Difficult to scale', desc: 'Opening a new outlet means weeks of setup, training, and configuration across multiple disconnected systems.' },
      ]}
      solutions={[
        { title: 'Central menu & recipe management', desc: 'Define menus, recipes, and pricing centrally. Push to all outlets with one click or allow outlet-level customization.' },
        { title: 'Real-time multi-outlet dashboard', desc: 'See revenue, orders, inventory levels, and operational metrics across every outlet in real time.' },
        { title: 'Unified platform — one vendor', desc: 'POS, inventory, KDS, CRM, analytics, and more — all natively integrated. One login, one data layer, one vendor.' },
        { title: 'Rapid outlet deployment', desc: 'New outlets go live in 2-3 days. Clone configurations from existing outlets and customize as needed.' },
      ]}
      modules={[
        { name: 'Point of Sale', desc: 'Fast billing with multi-outlet configuration management', href: '/products/pos' },
        { name: 'Inventory Management', desc: 'Centralized stock control with inter-outlet transfers', href: '/products/inventory' },
        { name: 'Recipe Management', desc: 'Standardize recipes and control food costs chain-wide', href: '/products/recipe-management' },
        { name: 'Analytics Dashboard', desc: 'Executive insights across all outlets in real time', href: '/products/analytics' },
        { name: 'CRM & Loyalty', desc: 'Chain-wide loyalty programs and guest management', href: '/products/crm-loyalty' },
        { name: 'Tally Automation', desc: 'Automated accounting with outlet-wise Tally mapping', href: '/products/tally-automation' },
      ]}
      testimonial={{
        quote: 'We went from managing each outlet individually with spreadsheets to having complete real-time visibility across 32 locations. Digitory is our operating system.',
        name: 'Rajesh Menon',
        title: 'CEO, 32-outlet restaurant chain',
      }}
      faqs={[
        { q: 'How many outlets can Digitory support?', a: 'There\'s no limit. We currently manage chains with 200+ outlets. The platform is designed to scale with your growth.' },
        { q: 'Can different outlets have different menus?', a: 'Yes. You can maintain a master menu centrally and allow outlet-level additions, removals, or pricing adjustments. Changes can be pushed selectively.' },
        { q: 'How quickly can a new outlet go live?', a: '2-3 days for a standard outlet. Configuration can be cloned from existing outlets, and our implementation team handles hardware setup and staff training.' },
      ]}
    />
  )
}
