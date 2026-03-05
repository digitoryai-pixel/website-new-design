import { ArrowRight, Play } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-orange/[0.03] to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff5a10' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="content-max section-padding relative">
        <div className="pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-caption text-brand-orange font-semibold">Trusted by 2,000+ restaurants across India</span>
            </div>

            {/* Headline — Apple-style storytelling with Stripe typography */}
            <h1 className="text-[2.75rem] sm:text-display-lg lg:text-display-xl font-semibold text-brand-navy leading-[1.08] tracking-tight text-balance">
              The operating system for{' '}
              <span className="gradient-text">modern restaurants</span>
            </h1>

            <p className="text-body-lg lg:text-xl text-brand-gray-500 mt-6 max-w-2xl mx-auto text-balance leading-relaxed">
              From POS to inventory, kitchen ops to guest loyalty — Digitory unifies
              every part of your restaurant into one intelligent platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a href="/demo" className="btn-primary text-lg px-10 py-4">
                Book a Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="#platform" className="inline-flex items-center gap-2.5 px-6 py-4 text-brand-navy font-medium hover:text-brand-orange transition-colors">
                <span className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-brand-navy" />
                </span>
                See how it works
              </a>
            </div>
          </div>

          {/* Hero Product Mockup */}
          <div className="mt-16 lg:mt-20 relative">
            <div className="relative mx-auto max-w-5xl">
              {/* Browser Chrome */}
              <div className="bg-brand-navy rounded-2xl shadow-[0_20px_80px_rgba(34,51,69,0.2)] overflow-hidden">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-5 py-3.5 bg-brand-navy border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 bg-white/10 rounded-md text-caption text-white/50">app.digitory.com</div>
                  </div>
                </div>
                {/* Dashboard Preview */}
                <div className="bg-brand-gray-50 p-6 lg:p-8">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                      { label: 'Today\'s Revenue', value: '₹4,82,350', change: '+12.5%' },
                      { label: 'Orders', value: '847', change: '+8.2%' },
                      { label: 'Avg. Order Value', value: '₹569', change: '+3.1%' },
                      { label: 'Active Outlets', value: '24', change: '100%' },
                    ].map((m) => (
                      <div key={m.label} className="bg-white rounded-xl p-4 shadow-sm">
                        <p className="text-caption text-brand-gray-400">{m.label}</p>
                        <p className="text-heading-sm font-bold text-brand-navy mt-1">{m.value}</p>
                        <p className="text-caption text-green-600 mt-0.5">{m.change}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 bg-white rounded-xl p-4 shadow-sm h-48">
                      <p className="text-body-sm font-semibold text-brand-navy mb-3">Revenue Trend</p>
                      {/* Chart placeholder */}
                      <div className="h-32 flex items-end gap-2 px-2">
                        {[40, 55, 45, 65, 50, 75, 60, 80, 70, 85, 90, 95].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i === 11 ? '#ff5a10' : '#e5e5e5' }} />
                        ))}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm h-48">
                      <p className="text-body-sm font-semibold text-brand-navy mb-3">Top Items</p>
                      <div className="space-y-3">
                        {['Butter Chicken', 'Paneer Tikka', 'Dal Makhani', 'Biryani'].map((item, i) => (
                          <div key={item} className="flex items-center justify-between">
                            <span className="text-caption text-brand-gray-500">{item}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-1.5 bg-brand-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-orange rounded-full" style={{ width: `${95 - i * 15}%` }} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 hidden md:block animate-float">
                <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-4 w-48">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-caption font-semibold text-brand-navy">Order #1247</span>
                  </div>
                  <p className="text-caption text-green-600 font-medium">Completed</p>
                </div>
              </div>

              <div className="absolute -right-4 lg:-right-8 top-1/3 hidden md:block animate-float" style={{ animationDelay: '2s' }}>
                <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-4 w-52">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <span className="text-caption font-semibold text-brand-navy">Live Insights</span>
                  </div>
                  <p className="text-caption text-brand-gray-500">Food cost at <span className="text-brand-orange font-semibold">28.4%</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
