import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/shared/ProductPageTemplate'

export const metadata: Metadata = {
  title: 'QR Code Ordering System for Restaurants India | Digitory',
  description: 'Branded QR menu ordering for restaurants. Guests scan, browse, and order from their table. Reduce wait times, cut labor costs, and increase average order value.',
  keywords: 'QR ordering system India, QR code menu restaurant, contactless ordering restaurant, digital menu QR code',
}

export default function QROrderingPage() {
  return (
    <ProductPageTemplate
      tag="QR Code Ordering"
      title="Guests order from their table. You save on everything."
      subtitle="Branded QR menus with real-time updates. Guests browse, customize, and order without waiting. Cuts table turnaround time by 20%."
      description="Let your guests take control of their dining experience. They order when they're ready, see exactly what's available, and you get higher order values with zero additional service staff."
      stats={[
        { value: '20%', label: 'Faster table turns' },
        { value: '15%', label: 'Higher avg. order value' },
        { value: '30%', label: 'Less front-of-house staff needed' },
        { value: '0 sec', label: 'Wait time for ordering' },
      ]}
      features={[
        { title: 'Branded Menu Pages', desc: 'Custom-designed QR menus that match your restaurant branding. Not a generic template.' },
        { title: 'Real-time Availability', desc: 'Items marked out-of-stock in your POS instantly disappear from the QR menu. No more disappointing guests.' },
        { title: 'Smart Upselling', desc: 'Intelligent recommendations and add-on prompts that increase average order value by 15%.' },
        { title: 'Multi-language Support', desc: 'Serve guests in their preferred language. Support for Hindi, English, and regional languages.' },
        { title: 'Pay at Table', desc: 'Guests can pay directly after ordering via UPI, cards, or wallets. No waiting for the check.' },
        { title: 'Customization & Notes', desc: 'Guests can add special instructions, choose spice levels, and customize dishes — just like ordering from a server.' },
      ]}
      benefits={[
        'Reduce front-of-house staffing by 30% during peak hours',
        'Increase average order value by 15% with smart upselling',
        'Eliminate ordering wait times for better guest experience',
        'Real-time menu sync — no more out-of-stock embarrassment',
        'Support multiple languages for diverse guest base',
        'Integrated payment reduces checkout friction',
      ]}
      faqs={[
        { q: 'Can we customize the QR menu to match our brand?', a: 'Absolutely. The QR ordering pages are fully branded with your logo, colors, imagery, and voice. They look like your own app, not a third-party tool.' },
        { q: 'What happens when items go out of stock?', a: 'When you mark an item as unavailable in your POS or inventory system, it instantly disappears from the QR menu. Guests only see what they can actually order.' },
        { q: 'Does it work with the POS and KDS?', a: 'Yes. QR orders flow directly into your POS and appear on your Kitchen Display System automatically. No manual entry needed — it behaves exactly like a server-entered order.' },
      ]}
      relatedProducts={[
        { name: 'Point of Sale', href: '/products/pos' },
        { name: 'Kitchen Display System', href: '/products/kitchen-display' },
        { name: 'CRM & Loyalty', href: '/products/crm-loyalty' },
        { name: 'Prepaid Cards', href: '/products/prepaid-cards' },
      ]}
    />
  )
}
