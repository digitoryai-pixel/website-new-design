import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/shared/ProductPageTemplate'

export const metadata: Metadata = {
  title: 'Restaurant Prepaid Card System — Stored Value Cards | Digitory',
  description: 'Offer stored-value prepaid cards that drive upfront revenue and increase guest retention. Digital and physical card support for restaurants.',
  keywords: 'restaurant prepaid cards, stored value cards restaurant, restaurant gift cards India, prepaid dining card',
}

export default function PrepaidCardsPage() {
  return (
    <ProductPageTemplate
      tag="Prepaid Cards"
      title="Upfront revenue. Guaranteed returns."
      subtitle="Offer stored-value cards that drive upfront cash flow and guarantee repeat visits. Digital and physical card support with full lifecycle management."
      description="Prepaid cards are the most underutilized revenue tool in Indian restaurants. They lock in future visits, generate immediate cash flow, and increase average spend per visit."
      stats={[
        { value: '35%', label: 'Higher retention rate' },
        { value: '20%', label: 'More spend per visit' },
        { value: 'Instant', label: 'Cash flow' },
        { value: '85%', label: 'Redemption rate' },
      ]}
      features={[
        { title: 'Digital & Physical Cards', desc: 'Issue physical cards for gifting or digital cards via SMS/WhatsApp. Both work seamlessly across all outlets.' },
        { title: 'Custom Denominations', desc: 'Offer flexible amounts or fixed denominations. Add bonus value for higher purchases (buy ₹5000, get ₹5500).' },
        { title: 'Multi-outlet Validity', desc: 'Cards work across all your outlets. Perfect for chain operations where guests visit different locations.' },
        { title: 'Expiry Management', desc: 'Set validity periods, send expiry reminders, and manage extensions. Full control over card lifecycle.' },
        { title: 'Corporate Bulk Orders', desc: 'Accept corporate orders for employee rewards and client gifting. Bulk issuance with custom branding.' },
        { title: 'Balance & Transaction History', desc: 'Guests check balance via SMS or your website. Full transaction history for every card issued.' },
      ]}
      benefits={[
        'Generate immediate cash flow with upfront card purchases',
        'Guarantee repeat visits — guests always come back to use their balance',
        'Increase per-visit spend by 20% with prepaid guests',
        'Tap into corporate gifting market for bulk revenue',
        'Offer bonus value incentives to drive larger purchases',
        'Full card lifecycle management from issuance to expiry',
      ]}
      faqs={[
        { q: 'Can guests use cards across all our outlets?', a: 'Yes. Prepaid cards work across all outlets in your network. A card purchased at your Mumbai outlet can be redeemed at your Delhi outlet seamlessly.' },
        { q: 'Do you support corporate gifting?', a: 'Yes. We support bulk card issuance for corporate clients with custom branding, denomination selection, and activation scheduling. Perfect for Diwali gifts, employee rewards, and client appreciation.' },
        { q: 'Can we add bonus value?', a: 'Absolutely. You can configure bonus schemes — for example, load ₹5,000 and get ₹5,500 value. This is a powerful incentive for larger purchases and drives higher upfront revenue.' },
      ]}
      relatedProducts={[
        { name: 'CRM & Loyalty', href: '/products/crm-loyalty' },
        { name: 'Point of Sale', href: '/products/pos' },
        { name: 'Analytics Dashboard', href: '/products/analytics' },
        { name: 'QR Code Ordering', href: '/products/qr-ordering' },
      ]}
    />
  )
}
