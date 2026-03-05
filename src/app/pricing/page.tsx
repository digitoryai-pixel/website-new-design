import type { Metadata } from 'next'
import { Check, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing — Restaurant Management Software Plans | Digitory',
  description: 'Flexible pricing for every restaurant size. From single outlets to large chains — choose Lite, Standard, or Premium plans. Start with a free demo.',
  keywords: 'restaurant software pricing India, POS software price, restaurant management software cost',
}

const plans = [
  {
    name: 'Lite',
    desc: 'For single outlets getting started with digital operations',
    price: '₹2,999',
    period: '/outlet/month',
    highlight: false,
    features: [
      'Point of Sale',
      'Basic Inventory Management',
      'QR Code Ordering',
      'GST Compliant Billing',
      'Basic Reports',
      'Email Support',
      'Up to 3 users',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Standard',
    desc: 'For growing restaurants that need full operational control',
    price: '₹5,999',
    period: '/outlet/month',
    highlight: true,
    features: [
      'Everything in Lite, plus:',
      'Advanced Inventory & Recipes',
      'Kitchen Display System',
      'CRM & Loyalty Program',
      'Multi-outlet Management',
      'Analytics Dashboard',
      'Tally Automation',
      'Priority Support',
      'Up to 10 users',
    ],
    cta: 'Book a Demo',
  },
  {
    name: 'Premium',
    desc: 'For enterprise chains needing complete platform access',
    price: 'Custom',
    period: 'per outlet/month',
    highlight: false,
    features: [
      'Everything in Standard, plus:',
      'Prepaid Card System',
      'DigiBeat (Asset Management)',
      'Custom Integrations',
      'Dedicated Account Manager',
      'SLA-backed Support',
      'Custom Reports & API Access',
      'Unlimited Users',
      'On-site Training',
    ],
    cta: 'Contact Sales',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-orange/[0.03] to-white">
        <div className="content-max section-padding text-center">
          <span className="section-tag">Pricing</span>
          <h1 className="text-display-lg lg:text-display-xl text-brand-navy mt-5">
            Simple, transparent pricing
          </h1>
          <p className="text-body-lg text-brand-gray-500 mt-5 max-w-2xl mx-auto">
            Choose the plan that fits your operation. All plans include setup,
            training, and onboarding at no extra cost.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="pb-20 lg:pb-28 -mt-4">
        <div className="content-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 lg:p-10 flex flex-col ${
                  plan.highlight
                    ? 'bg-brand-navy text-white ring-2 ring-brand-orange shadow-[0_8px_40px_rgba(255,90,16,0.15)] relative'
                    : 'bg-white border border-brand-gray-200/60'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-brand-orange text-white text-caption font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div>
                  <h3 className={`text-heading-lg font-semibold ${plan.highlight ? 'text-white' : 'text-brand-navy'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-body-sm mt-2 ${plan.highlight ? 'text-white/70' : 'text-brand-gray-500'}`}>
                    {plan.desc}
                  </p>
                </div>

                <div className="mt-6 mb-8">
                  <span className={`text-display font-bold ${plan.highlight ? 'text-white' : 'text-brand-navy'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-body-sm ${plan.highlight ? 'text-white/60' : 'text-brand-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-brand-orange' : 'text-green-500'}`} />
                      <span className={`text-body-sm ${plan.highlight ? 'text-white/90' : 'text-brand-gray-600'}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/demo"
                  className={`mt-8 inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold transition-all ${
                    plan.highlight
                      ? 'bg-brand-orange text-white hover:bg-brand-orange-hover'
                      : 'bg-brand-navy text-white hover:bg-brand-navy-light'
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-brand-gray-50">
        <div className="content-max section-padding max-w-3xl mx-auto">
          <h2 className="text-heading-xl text-brand-navy text-center mb-10">Pricing FAQs</h2>
          <div className="space-y-4">
            {[
              { q: 'Is there a setup fee?', a: 'No. Setup, hardware configuration, data migration, and staff training are included in all plans at no extra cost.' },
              { q: 'Can I upgrade or downgrade anytime?', a: 'Yes. You can change plans at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle.' },
              { q: 'Do you offer annual discounts?', a: 'Yes. Annual billing comes with a 20% discount on all plans. Contact our sales team for details.' },
              { q: 'What hardware do I need?', a: 'Digitory runs on standard Android tablets, Windows POS terminals, or any device with a modern browser. We can recommend hardware partners or work with your existing setup.' },
              { q: 'Is there a free trial?', a: 'We offer a 14-day free trial on the Lite plan. For Standard and Premium plans, we provide a personalized demo to ensure the platform fits your specific needs.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <h3 className="text-body-lg font-semibold text-brand-navy">{faq.q}</h3>
                <p className="text-body text-brand-gray-500 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16 border-t border-brand-gray-200/50">
        <div className="content-max section-padding text-center">
          <h2 className="text-heading-xl text-brand-navy">Need a custom solution for your enterprise?</h2>
          <p className="text-body text-brand-gray-500 mt-3 max-w-xl mx-auto">
            We build custom packages for large chains with specific integration,
            compliance, and support requirements.
          </p>
          <a href="/contact" className="btn-primary mt-6">Talk to Enterprise Sales</a>
        </div>
      </section>
    </>
  )
}
