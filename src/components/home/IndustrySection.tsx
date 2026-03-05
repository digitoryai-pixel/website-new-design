import { ArrowRight } from 'lucide-react'

const industries = [
  {
    name: 'Restaurant Chains',
    desc: 'Centralized control for 5 outlets or 500. Standardize menus, recipes, and operations while giving each outlet the flexibility it needs.',
    stat: '500+',
    statLabel: 'outlets managed',
    href: '/industries/restaurant-chains',
    features: ['Central menu management', 'Inter-outlet transfers', 'Consolidated reporting', 'Franchise controls'],
    gradient: 'from-brand-orange/10 to-brand-orange/5',
  },
  {
    name: 'Pubs & Breweries',
    desc: 'Manage complex bar operations — draft beer tracking, happy hour automation, and event management alongside full kitchen operations.',
    stat: '200+',
    statLabel: 'pubs powered',
    href: '/industries/pubs-breweries',
    features: ['Draft beer tracking', 'Happy hour automation', 'Tab management', 'Event billing'],
    gradient: 'from-amber-500/10 to-amber-500/5',
  },
  {
    name: 'QSR & Fast Food',
    desc: 'Built for speed. Sub-3-second billing, integrated KDS, and drive-through support to handle peak-hour volumes without breaking a sweat.',
    stat: '3 sec',
    statLabel: 'avg. billing time',
    href: '/industries/qsr',
    features: ['Speed-optimized POS', 'Combo management', 'Drive-through support', 'Kitchen routing'],
    gradient: 'from-red-500/10 to-red-500/5',
  },
  {
    name: 'Cloud Kitchens',
    desc: 'Run multiple brands from one kitchen. Manage aggregator orders, brand-wise P&L, and production planning from a single dashboard.',
    stat: '15+',
    statLabel: 'aggregator integrations',
    href: '/industries/cloud-kitchens',
    features: ['Multi-brand ops', 'Aggregator sync', 'Brand-wise costing', 'Production planning'],
    gradient: 'from-violet-500/10 to-violet-500/5',
  },
]

export default function IndustrySection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="content-max section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">Industries</span>
          <h2 className="text-display-lg lg:text-display text-brand-navy mt-5">
            Built for how you{' '}
            <span className="gradient-text">actually operate</span>
          </h2>
          <p className="text-body-lg text-brand-gray-500 mt-5">
            Not a one-size-fits-all solution. Digitory adapts to your specific
            restaurant format with industry-specific features and workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind) => (
            <a
              key={ind.name}
              href={ind.href}
              className={`group bg-gradient-to-br ${ind.gradient} rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-all hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-heading-lg font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">
                  {ind.name}
                </h3>
                <div className="text-right">
                  <p className="text-heading-xl font-bold text-brand-orange">{ind.stat}</p>
                  <p className="text-caption text-brand-gray-400">{ind.statLabel}</p>
                </div>
              </div>
              <p className="text-body text-brand-gray-500">{ind.desc}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {ind.features.map((f) => (
                  <span key={f} className="px-3 py-1 bg-white/80 rounded-lg text-caption font-medium text-brand-gray-600">
                    {f}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-brand-orange font-semibold mt-6 group-hover:gap-3 transition-all">
                Explore solutions <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
