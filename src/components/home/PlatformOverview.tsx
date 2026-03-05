import { ArrowRight } from 'lucide-react'

export default function PlatformOverview() {
  return (
    <section id="platform" className="py-20 lg:py-28">
      <div className="content-max section-padding">
        {/* Section Header — Notion-style simplicity */}
        <div className="max-w-3xl">
          <span className="section-tag">Platform</span>
          <h2 className="text-display-lg lg:text-display text-brand-navy mt-5 text-balance">
            One platform. Every operation.{' '}
            <span className="text-brand-gray-400">Complete control.</span>
          </h2>
          <p className="text-body-lg text-brand-gray-500 mt-5 max-w-2xl">
            Digitory replaces fragmented tools with a unified system designed
            for multi-outlet restaurants. Every module works together, sharing
            data in real time across your entire operation.
          </p>
        </div>

        {/* Platform Visual */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Interactive Platform Diagram */}
          <div className="relative">
            <div className="bg-brand-gray-50 rounded-3xl p-8 lg:p-12">
              {/* Central Hub */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 rounded-2xl bg-brand-orange flex items-center justify-center shadow-lg">
                  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="16" height="16" rx="2" fill="white" />
                    <rect x="20" y="20" width="28" height="28" rx="2" fill="white" />
                    <rect x="8" y="28" width="20" height="20" rx="2" fill="white" />
                    <rect x="24" y="32" width="10" height="10" rx="1" fill="#ff5a10" />
                  </svg>
                </div>
              </div>

              {/* Module Grid */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: '🏷️', label: 'POS' },
                  { icon: '📦', label: 'Inventory' },
                  { icon: '📋', label: 'Recipes' },
                  { icon: '📱', label: 'QR Order' },
                  { icon: '🖥️', label: 'KDS' },
                  { icon: '❤️', label: 'CRM' },
                  { icon: '💳', label: 'Prepaid' },
                  { icon: '🔧', label: 'DigiBeat' },
                  { icon: '📊', label: 'Analytics' },
                ].map((mod) => (
                  <div key={mod.label} className="bg-white rounded-xl p-4 text-center hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
                    <div className="text-2xl mb-1.5">{mod.icon}</div>
                    <p className="text-caption font-semibold text-brand-navy">{mod.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Value Props */}
          <div className="space-y-8">
            {[
              {
                title: 'Unified Data Layer',
                desc: 'Every transaction, every ingredient, every guest interaction feeds into a single source of truth. No more data silos between departments.',
              },
              {
                title: 'Real-time Sync Across Outlets',
                desc: 'Menu changes, pricing updates, and inventory transfers propagate instantly across all your locations. One update, everywhere.',
              },
              {
                title: 'Enterprise-grade Security',
                desc: 'Role-based access control, encrypted data at rest and in transit, and full audit trails. Built for the compliance needs of large chains.',
              },
              {
                title: 'Open API Architecture',
                desc: 'Connect Digitory to your existing tools — aggregators, payment gateways, accounting software — through our well-documented APIs.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center mt-0.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                </div>
                <div>
                  <h3 className="text-heading-sm font-semibold text-brand-navy">{item.title}</h3>
                  <p className="text-body text-brand-gray-500 mt-1.5">{item.desc}</p>
                </div>
              </div>
            ))}

            <a href="/demo" className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:gap-3 transition-all mt-4">
              Explore the platform <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
