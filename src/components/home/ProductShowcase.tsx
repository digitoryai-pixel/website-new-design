import { ArrowRight } from 'lucide-react'

const products = [
  {
    tag: 'Point of Sale',
    title: 'Lightning-fast billing that never misses a beat',
    desc: 'Process orders in under 3 seconds with an intuitive touchscreen interface built for peak-hour pressure. Works offline, syncs automatically.',
    features: ['Multi-format billing', 'Offline mode', 'Split payments', 'Table management', 'Aggregator integration'],
    href: '/products/pos',
    gradient: 'from-orange-500/10 to-red-500/5',
    mockup: {
      type: 'pos',
      items: [
        { name: 'Butter Chicken', qty: 2, price: '₹580' },
        { name: 'Garlic Naan (4)', qty: 1, price: '₹160' },
        { name: 'Dal Makhani', qty: 1, price: '₹320' },
        { name: 'Mojito', qty: 3, price: '₹540' },
      ],
      total: '₹1,600',
    }
  },
  {
    tag: 'Inventory Management',
    title: 'Know exactly what you have. Across every outlet.',
    desc: 'Track raw materials in real time, automate purchase orders, and reduce food waste by up to 25%. Multi-outlet stock transfers in a click.',
    features: ['Auto purchase orders', 'Waste tracking', 'Stock transfers', 'Vendor management', 'Expiry alerts'],
    href: '/products/inventory',
    gradient: 'from-blue-500/10 to-cyan-500/5',
    mockup: {
      type: 'inventory',
      items: [
        { name: 'Chicken Breast', stock: '85%', status: 'good' },
        { name: 'Paneer', stock: '42%', status: 'medium' },
        { name: 'Basmati Rice', stock: '15%', status: 'low' },
        { name: 'Cooking Oil', stock: '67%', status: 'good' },
      ],
    },
  },
  {
    tag: 'QR Code Ordering',
    title: 'Guests order from their table. You save on labor.',
    desc: 'Branded QR menus with real-time updates. Guests browse, customize, and order without waiting. Cuts table turnaround time by 20%.',
    features: ['Branded menu pages', 'Real-time availability', 'Upsell prompts', 'Multi-language', 'Pay-at-table'],
    href: '/products/qr-ordering',
    gradient: 'from-green-500/10 to-emerald-500/5',
    mockup: {
      type: 'qr',
      categories: ['Starters', 'Mains', 'Drinks', 'Desserts'],
      items: [
        { name: 'Tandoori Platter', price: '₹450', tag: 'Bestseller' },
        { name: 'Farm Fresh Salad', price: '₹280', tag: '' },
        { name: 'Craft IPA', price: '₹350', tag: 'New' },
      ],
    },
  },
  {
    tag: 'Analytics Dashboard',
    title: 'Executive insights that drive decisions, not confusion',
    desc: 'Monitor revenue, food costs, staff performance, and guest trends across all outlets from a single dashboard. Custom reports in seconds.',
    features: ['Multi-outlet view', 'Real-time P&L', 'Custom reports', 'Trend analysis', 'Mobile access'],
    href: '/products/analytics',
    gradient: 'from-purple-500/10 to-violet-500/5',
    mockup: {
      type: 'analytics',
      metrics: [
        { label: 'Revenue', value: '₹48.2L', trend: '+12%' },
        { label: 'Food Cost', value: '28.4%', trend: '-2.1%' },
        { label: 'Covers', value: '12,847', trend: '+8%' },
      ],
    },
  },
]

function ProductMockup({ product }: { product: typeof products[0] }) {
  if (product.mockup.type === 'pos') {
    const items = product.mockup.items as { name: string; qty: number; price: string }[]
    return (
      <div className="bg-white rounded-xl shadow-sm border border-brand-gray-200/50 overflow-hidden">
        <div className="px-4 py-3 border-b border-brand-gray-200/50 flex items-center justify-between">
          <span className="text-body-sm font-semibold text-brand-navy">Current Order #1248</span>
          <span className="text-caption text-brand-gray-400">Table 14</span>
        </div>
        <div className="p-4 space-y-2.5">
          {items?.map((item) => (
            <div key={item.name} className="flex items-center justify-between py-1">
              <div className="flex items-center gap-3">
                <span className="text-caption bg-brand-gray-100 rounded px-1.5 py-0.5 font-mono">{item.qty}x</span>
                <span className="text-body-sm text-brand-navy">{item.name}</span>
              </div>
              <span className="text-body-sm font-semibold text-brand-navy">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="px-4 py-3 bg-brand-navy flex items-center justify-between rounded-b-xl">
          <span className="text-body-sm font-semibold text-white">Total</span>
          <span className="text-heading-sm font-bold text-white">{product.mockup.total}</span>
        </div>
      </div>
    )
  }

  if (product.mockup.type === 'inventory') {
    const items = product.mockup.items as { name: string; stock: string; status: string }[]
    return (
      <div className="bg-white rounded-xl shadow-sm border border-brand-gray-200/50 p-4 space-y-3">
        <p className="text-body-sm font-semibold text-brand-navy mb-3">Stock Levels — Central Kitchen</p>
        {items?.map((item) => {
          const color = item.status === 'good' ? 'bg-green-500' : item.status === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
          return (
            <div key={item.name} className="space-y-1.5">
              <div className="flex justify-between text-caption">
                <span className="text-brand-gray-600">{item.name}</span>
                <span className="font-medium text-brand-navy">{item.stock}</span>
              </div>
              <div className="w-full h-2 bg-brand-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${color} rounded-full transition-all`} style={{ width: item.stock }} />
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  if (product.mockup.type === 'qr') {
    const qrItems = product.mockup.items as { name: string; price: string; tag: string }[]
    return (
      <div className="bg-white rounded-xl shadow-sm border border-brand-gray-200/50 overflow-hidden max-w-[260px] mx-auto">
        <div className="bg-brand-orange p-4 text-center">
          <p className="text-white font-semibold text-body-sm">Your Menu</p>
        </div>
        <div className="flex gap-2 p-3 overflow-x-auto">
          {product.mockup.categories?.map((cat) => (
            <span key={cat} className="px-3 py-1 text-caption font-medium rounded-full bg-brand-gray-100 text-brand-gray-600 whitespace-nowrap first:bg-brand-orange first:text-white">
              {cat}
            </span>
          ))}
        </div>
        <div className="p-3 space-y-2">
          {qrItems?.map((item) => (
            <div key={item.name} className="flex items-center justify-between p-2.5 rounded-lg bg-brand-gray-50">
              <div>
                <p className="text-body-sm font-medium text-brand-navy">{item.name}</p>
                <p className="text-caption text-brand-gray-400">{item.price}</p>
              </div>
              {item.tag && (
                <span className="text-[10px] font-semibold bg-brand-orange/10 text-brand-orange px-2 py-0.5 rounded-full">{item.tag}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Analytics
  return (
    <div className="bg-white rounded-xl shadow-sm border border-brand-gray-200/50 p-4">
      <p className="text-body-sm font-semibold text-brand-navy mb-4">This Month — All Outlets</p>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {product.mockup.metrics?.map((m) => (
          <div key={m.label} className="text-center p-3 bg-brand-gray-50 rounded-lg">
            <p className="text-heading-sm font-bold text-brand-navy">{m.value}</p>
            <p className="text-caption text-brand-gray-400">{m.label}</p>
            <p className={`text-caption font-semibold ${m.trend.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>{m.trend}</p>
          </div>
        ))}
      </div>
      <div className="h-24 flex items-end gap-1.5 px-2">
        {Array.from({ length: 14 }, (_, i) => (
          <div key={i} className="flex-1 rounded-t bg-brand-orange/20" style={{ height: `${30 + Math.random() * 70}%` }}>
            <div className="w-full rounded-t bg-brand-orange" style={{ height: `${50 + Math.random() * 50}%` }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProductShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-brand-gray-50">
      <div className="content-max section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">Products</span>
          <h2 className="text-display-lg lg:text-display text-brand-navy mt-5">
            Everything your restaurant needs.{' '}
            <span className="text-brand-gray-400">Nothing it doesn&apos;t.</span>
          </h2>
          <p className="text-body-lg text-brand-gray-500 mt-5">
            10 purpose-built modules that work independently or together as a
            complete restaurant operating system.
          </p>
        </div>

        {/* Product Cards — Linear-style layout */}
        <div className="space-y-12">
          {products.map((product, i) => (
            <div
              key={product.tag}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="section-tag">{product.tag}</span>
                <h3 className="text-heading-xl lg:text-display text-brand-navy mt-4 text-balance">
                  {product.title}
                </h3>
                <p className="text-body-lg text-brand-gray-500 mt-3">{product.desc}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {product.features.map((f) => (
                    <span key={f} className="px-3 py-1.5 bg-white rounded-lg text-caption font-medium text-brand-gray-600 border border-brand-gray-200/50">
                      {f}
                    </span>
                  ))}
                </div>
                <a href={product.href} className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:gap-3 transition-all mt-6">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`bg-gradient-to-br ${product.gradient} rounded-2xl p-6 lg:p-8`}>
                  <ProductMockup product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Products Grid */}
        <div className="mt-16">
          <h3 className="text-heading-lg text-brand-navy text-center mb-8">And more purpose-built modules</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Recipe Management', desc: 'Standardize recipes, control portions, and track food costs down to the ingredient level.', href: '/products/recipe-management', icon: '📋' },
              { name: 'Kitchen Display System', desc: 'Replace paper tickets with digital screens. Route orders to the right station automatically.', href: '/products/kitchen-display', icon: '🖥️' },
              { name: 'CRM & Loyalty', desc: 'Build guest profiles, run targeted campaigns, and drive repeat visits with smart loyalty programs.', href: '/products/crm-loyalty', icon: '❤️' },
              { name: 'Prepaid Cards', desc: 'Offer stored-value cards that drive upfront revenue and increase guest retention by 35%.', href: '/products/prepaid-cards', icon: '💳' },
              { name: 'DigiBeat', desc: 'Track equipment health, schedule preventive maintenance, and reduce unexpected downtime.', href: '/products/digibeat', icon: '🔧' },
              { name: 'Tally Automation', desc: 'Auto-sync daily sales, purchases, and expenses directly into Tally ERP. Zero manual entries.', href: '/products/tally-automation', icon: '📒' },
            ].map((mod) => (
              <a key={mod.name} href={mod.href} className="card hover:-translate-y-1 group">
                <div className="text-3xl mb-3">{mod.icon}</div>
                <h4 className="text-heading-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">{mod.name}</h4>
                <p className="text-body-sm text-brand-gray-500 mt-2">{mod.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-brand-orange font-medium text-body-sm mt-4 group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
