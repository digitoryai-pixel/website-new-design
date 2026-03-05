export default function MetricsSection() {
  const metrics = [
    { value: '2,000+', label: 'Restaurants', desc: 'across India trust Digitory' },
    { value: '₹500Cr+', label: 'Transactions', desc: 'processed monthly' },
    { value: '99.9%', label: 'Uptime', desc: 'reliability guaranteed' },
    { value: '25%', label: 'Cost Reduction', desc: 'avg. food waste reduction' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="content-max section-padding relative">
        <div className="text-center mb-16">
          <h2 className="text-display-lg lg:text-display text-white">
            Numbers that speak for{' '}
            <span className="gradient-text">themselves</span>
          </h2>
          <p className="text-body-lg text-white/60 mt-5 max-w-2xl mx-auto">
            From single-outlet restaurants to 200+ chain operations,
            Digitory scales with your ambition.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-display-lg lg:text-display-xl font-bold text-brand-orange">{m.value}</p>
              <p className="text-heading-sm font-semibold text-white mt-2">{m.label}</p>
              <p className="text-body-sm text-white/50 mt-1">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
