import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/shared/ProductPageTemplate'

export const metadata: Metadata = {
  title: 'Restaurant POS System India — Fast, Reliable Billing | Digitory',
  description: 'Lightning-fast restaurant POS software for Indian restaurants. Offline billing, split payments, table management, and aggregator integration. Built for chains, pubs & QSRs.',
  keywords: 'restaurant POS India, restaurant billing software, POS system for restaurants, restaurant POS system',
}

export default function POSPage() {
  return (
    <ProductPageTemplate
      tag="Point of Sale"
      title="Restaurant POS built for speed and reliability"
      subtitle="Process orders in under 3 seconds with an intuitive touchscreen interface that handles peak-hour pressure. Works offline, syncs automatically."
      description="Your POS shouldn't slow you down during a Friday night rush. Digitory POS is engineered for speed, reliability, and the unique needs of Indian restaurants."
      stats={[
        { value: '<3 sec', label: 'Average billing time' },
        { value: '99.9%', label: 'Uptime guarantee' },
        { value: '0', label: 'Transactions lost offline' },
        { value: '15+', label: 'Payment modes supported' },
      ]}
      features={[
        { title: 'Multi-format Billing', desc: 'Dine-in, takeaway, delivery, and bar tabs — all from a single intuitive interface.' },
        { title: 'Offline Mode', desc: 'Continue billing even without internet. All transactions sync automatically when connectivity returns.' },
        { title: 'Split Payments', desc: 'Split bills by item, amount, or percentage. Support for multiple payment modes on a single bill.' },
        { title: 'Table Management', desc: 'Visual floor plan with real-time table status. Merge, split, and transfer tables in one tap.' },
        { title: 'Aggregator Integration', desc: 'Auto-accept orders from Swiggy, Zomato, and other platforms directly into your POS.' },
        { title: 'GST Compliant', desc: 'Automatic CGST, SGST, and IGST calculations with proper invoice formatting and filing support.' },
      ]}
      benefits={[
        'Reduce billing time by 60% during peak hours',
        'Never lose a single transaction — even during internet outages',
        'Manage dine-in, delivery, and takeaway from one screen',
        'Auto-sync orders from all food aggregators',
        'Complete GST compliance with automatic tax calculations',
        'Touch-optimized interface requires minimal staff training',
      ]}
      faqs={[
        { q: 'Does the POS work without internet?', a: 'Yes, Digitory POS is built with offline-first architecture. All billing, order management, and KOT printing works without internet. Data syncs automatically when connectivity is restored.' },
        { q: 'Can it handle multiple payment methods on one bill?', a: 'Absolutely. You can split a single bill across cash, card, UPI, wallet, or any combination. We support 15+ payment modes including Razorpay, Pine Labs, Paytm, and PhonePe.' },
        { q: 'How quickly can we set it up?', a: 'A single outlet can go live in 2-3 days including menu setup, hardware configuration, and staff training. Our implementation team handles everything.' },
      ]}
      relatedProducts={[
        { name: 'Kitchen Display System', href: '/products/kitchen-display' },
        { name: 'QR Code Ordering', href: '/products/qr-ordering' },
        { name: 'Inventory Management', href: '/products/inventory' },
        { name: 'Analytics Dashboard', href: '/products/analytics' },
      ]}
    />
  )
}
