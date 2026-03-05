import type { Metadata } from 'next'
import { Check, Clock, Users, Monitor } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book a Free Demo — See Digitory in Action | Restaurant Technology',
  description: 'Schedule a personalized demo of Digitory\'s restaurant management platform. See how POS, inventory, QR ordering, and analytics work together for your business.',
}

export default function DemoPage() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <div className="content-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Why demo */}
            <div>
              <span className="section-tag">Free Demo</span>
              <h1 className="text-display-lg text-brand-navy mt-5">
                See Digitory in action for{' '}
                <span className="gradient-text">your restaurant</span>
              </h1>
              <p className="text-body-lg text-brand-gray-500 mt-5">
                Get a personalized walkthrough tailored to your specific restaurant
                format, size, and operational challenges. No generic presentations.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  { icon: Clock, title: '30-minute session', desc: 'Quick, focused demo tailored to your needs' },
                  { icon: Users, title: 'Talk to product experts', desc: 'Not salespeople — our team knows restaurant operations' },
                  { icon: Monitor, title: 'Live product walkthrough', desc: 'See real features with your actual use cases' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-body text-brand-navy">{title}</h3>
                      <p className="text-body-sm text-brand-gray-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-brand-gray-50 rounded-xl">
                <p className="text-body-sm font-semibold text-brand-navy mb-3">What you&apos;ll see in the demo:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'POS billing workflow',
                    'Inventory dashboards',
                    'QR ordering flow',
                    'Kitchen display system',
                    'Analytics & reports',
                    'Multi-outlet management',
                    'CRM & loyalty setup',
                    'Integration options',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-body-sm text-brand-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="card-elevated">
              <h2 className="text-heading-lg text-brand-navy mb-2">Book your free demo</h2>
              <p className="text-body-sm text-brand-gray-500 mb-6">Fill in your details and we&apos;ll schedule a personalized demo.</p>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-body-sm font-medium text-brand-navy mb-1.5">Full Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-body" placeholder="Rajesh Menon" />
                  </div>
                  <div>
                    <label className="block text-body-sm font-medium text-brand-navy mb-1.5">Phone *</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-body" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label className="block text-body-sm font-medium text-brand-navy mb-1.5">Work Email *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-body" placeholder="rajesh@restaurant.com" />
                </div>
                <div>
                  <label className="block text-body-sm font-medium text-brand-navy mb-1.5">Restaurant Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-body" placeholder="My Restaurant" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-body-sm font-medium text-brand-navy mb-1.5">Restaurant Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-body text-brand-gray-500">
                      <option>Fine Dining</option>
                      <option>Casual Dining</option>
                      <option>QSR / Fast Food</option>
                      <option>Pub / Brewery</option>
                      <option>Cloud Kitchen</option>
                      <option>Cafe</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-body-sm font-medium text-brand-navy mb-1.5">Number of Outlets</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-body text-brand-gray-500">
                      <option>1 outlet</option>
                      <option>2-5 outlets</option>
                      <option>6-20 outlets</option>
                      <option>21-50 outlets</option>
                      <option>50+ outlets</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-body-sm font-medium text-brand-navy mb-1.5">What are you most interested in?</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-body resize-none" placeholder="E.g., POS + inventory for our 12-outlet chain..." />
                </div>
                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Book My Free Demo
                </button>
                <p className="text-caption text-brand-gray-400 text-center">
                  No credit card required. We&apos;ll reach out within 4 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
