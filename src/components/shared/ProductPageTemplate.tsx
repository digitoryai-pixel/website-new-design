import { ArrowRight, Check } from 'lucide-react'

interface Feature {
  title: string
  desc: string
}

interface ProductPageProps {
  tag: string
  title: string
  subtitle: string
  description: string
  features: Feature[]
  benefits: string[]
  stats: { value: string; label: string }[]
  faqs: { q: string; a: string }[]
  relatedProducts: { name: string; href: string }[]
}

export default function ProductPageTemplate({
  tag,
  title,
  subtitle,
  description,
  features,
  benefits,
  stats,
  faqs,
  relatedProducts,
}: ProductPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-orange/[0.03] to-white">
        <div className="content-max section-padding">
          <div className="max-w-3xl">
            <span className="section-tag">{tag}</span>
            <h1 className="text-display-lg lg:text-display-xl text-brand-navy mt-5 text-balance">
              {title}
            </h1>
            <p className="text-body-lg lg:text-xl text-brand-gray-500 mt-5 max-w-2xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="/demo" className="btn-primary">
                Book a Demo <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="/pricing" className="btn-outline">View Pricing</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-brand-gray-200/50">
        <div className="content-max section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-heading-xl lg:text-display font-bold text-brand-orange">{s.value}</p>
                <p className="text-body-sm text-brand-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 lg:py-28">
        <div className="content-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading-xl lg:text-display text-brand-navy text-balance">
              {description}
            </h2>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-brand-gray-50">
        <div className="content-max section-padding">
          <div className="text-center mb-16">
            <span className="section-tag">Features</span>
            <h2 className="text-display-lg text-brand-navy mt-5">What&apos;s included</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                </div>
                <h3 className="text-heading-sm font-semibold text-brand-navy">{f.title}</h3>
                <p className="text-body-sm text-brand-gray-500 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="content-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag">Benefits</span>
              <h2 className="text-display-lg text-brand-navy mt-5">Why choose Digitory</h2>
              <div className="mt-8 space-y-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <p className="text-body text-brand-navy">{b}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-gray-50 rounded-2xl p-8 lg:p-12 text-center">
              <p className="text-display font-bold text-brand-orange">Ready to get started?</p>
              <p className="text-body text-brand-gray-500 mt-3">See how Digitory can transform your operations with a personalized demo.</p>
              <a href="/demo" className="btn-primary mt-6">Book a Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-brand-gray-50">
        <div className="content-max section-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-xl text-brand-navy text-center mb-10">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6">
                  <h3 className="text-body-lg font-semibold text-brand-navy">{faq.q}</h3>
                  <p className="text-body text-brand-gray-500 mt-2">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 border-t border-brand-gray-200/50">
        <div className="content-max section-padding">
          <h3 className="text-heading-lg text-brand-navy text-center mb-8">Explore related modules</h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {relatedProducts.map((p) => (
              <a
                key={p.name}
                href={p.href}
                className="px-5 py-3 bg-white border border-brand-gray-200/50 rounded-xl hover:border-brand-orange hover:text-brand-orange font-medium text-body-sm transition-colors"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
