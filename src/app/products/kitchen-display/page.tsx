import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/shared/ProductPageTemplate'

export const metadata: Metadata = {
  title: 'Kitchen Display System (KDS) for Restaurants | Digitory',
  description: 'Replace paper tickets with digital kitchen displays. Route orders to the right station, track prep times, and improve kitchen efficiency across all outlets.',
  keywords: 'kitchen display system restaurant, KDS restaurant India, digital kitchen management, restaurant kitchen software',
}

export default function KitchenDisplayPage() {
  return (
    <ProductPageTemplate
      tag="Kitchen Display System"
      title="Your kitchen, orchestrated digitally"
      subtitle="Replace paper tickets with smart digital screens. Orders route automatically to the right station, prep times are tracked, and nothing gets missed."
      description="A busy kitchen with paper tickets is a kitchen waiting for mistakes. Digitory KDS brings order to the chaos — every dish tracked, every station coordinated."
      stats={[
        { value: '40%', label: 'Fewer missed orders' },
        { value: '25%', label: 'Faster order completion' },
        { value: '0', label: 'Lost KOT tickets' },
        { value: 'Real-time', label: 'Station coordination' },
      ]}
      features={[
        { title: 'Station-based Routing', desc: 'Orders automatically split and route to the correct kitchen station — grill, fry, bar, dessert.' },
        { title: 'Priority Management', desc: 'Highlight rush orders, VIP tables, and time-critical items. Kitchen staff see what matters most.' },
        { title: 'Prep Time Tracking', desc: 'Track actual prep times vs expected times. Identify bottlenecks and optimize kitchen flow.' },
        { title: 'Color-coded Alerts', desc: 'Orders change color based on wait time. Green → yellow → red ensures nothing sits too long.' },
        { title: 'Multi-screen Support', desc: 'Different screens for different stations. Each station sees only their relevant orders.' },
        { title: 'Offline Operation', desc: 'KDS continues working offline. Orders queue and display without internet dependency.' },
      ]}
      benefits={[
        'Eliminate lost or illegible paper tickets completely',
        'Route orders automatically to the right kitchen station',
        'Track and optimize prep times across all stations',
        'Color-coded alerts prevent orders from sitting too long',
        'Works offline — never miss an order during internet outages',
        'Reduce food waste from wrong or missed preparations',
      ]}
      faqs={[
        { q: 'Can it work with our existing kitchen setup?', a: 'Yes. Digitory KDS runs on standard Android tablets or any screen with a browser. No proprietary hardware needed. Mount it wherever works best for your kitchen workflow.' },
        { q: 'What happens during internet outages?', a: 'KDS operates offline. Orders from the POS are transmitted over your local network, so internet outages don\'t affect kitchen operations.' },
        { q: 'Can we customize station routing?', a: 'Completely. You define which menu items go to which station. When an order has items for multiple stations, each station sees only their relevant items while tracking overall order completion.' },
      ]}
      relatedProducts={[
        { name: 'Point of Sale', href: '/products/pos' },
        { name: 'QR Code Ordering', href: '/products/qr-ordering' },
        { name: 'Recipe Management', href: '/products/recipe-management' },
        { name: 'Analytics Dashboard', href: '/products/analytics' },
      ]}
    />
  )
}
