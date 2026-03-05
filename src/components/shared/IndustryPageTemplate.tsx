import { ArrowRight, Check } from 'lucide-react'

interface IndustryPageProps {
  tag: string
  title: string
  subtitle: string
  description: string
  challenges: { title: string; desc: string }[]
  solutions: { title: string; desc: string }[]
  stats: { value: string; label: string }[]
  modules: { name: string; desc: string; href: string }[]
  testimonial: { quote: string; name: string; title: string }
  faqs: { q: string; a: string }[]
}

export default function IndustryPageTemplate({
  tag,
  title,
  subtitle,
  description,
  challenges,
  solutions,
  stats,
  modules,
  testimonial,
  faqs,
}: IndustryPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-orange/[0.03] to-white">
        <div className="content-max section-padding">
          <div className="max-w-3xl">
            <span className="section-tag">{tag}</span>
            <h1 className="text-display-lg lg:text-display-xl text-brand-navy mt-5 text-balance">{title}</h1>
            <p className="text-body-lg lg:text-xl text-brand-gray-500 mt-5 max-w-2xl">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="/demo" className="btn-primary">Book a Demo <ArrowRight className="w-4 h-4 ml-2" /></a>
              <a href="/pricing" className="btn-outline">View Pricing</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-brand-gray-200/50 bg-brand-gray-50">
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

      {/* Problem/Solution */}
      <section className="py-20 lg:py-28">
        <div className="content-max section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-lg text-brand-navy">{description}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <h3 className="text-heading-lg text-brand-navy mb-6">Common challenges</h3>
              <div className="space-y-4">
                {challenges.map((c) => (
                  <div key={c.title} className="bg-red-50/50 rounded-xl p-5 border border-red-100/50">
                    <h4 className="text-body font-semibold text-brand-navy">{c.title}</h4>
                    <p className="text-body-sm text-brand-gray-500 mt-1">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-heading-lg text-brand-navy mb-6">How Digitory solves them</h3>
              <div className="space-y-4">
                {solutions.map((s) => (
                  <div key={s.title} className="bg-green-50/50 rounded-xl p-5 border border-green-100/50">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-body font-semibold text-brand-navy">{s.title}</h4>
                        <p className="text-body-sm text-brand-gray-500 mt-1">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Modules */}
      <section className="py-20 lg:py-28 bg-brand-gray-50">
        <div className="content-max section-padding">
          <div className="text-center mb-12">
            <span className="section-tag">Recommended Stack</span>
            <h2 className="text-display-lg text-brand-navy mt-5">Modules for your operation</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((m) => (
              <a key={m.name} href={m.href} className="card hover:-translate-y-1 group">
                <h4 className="text-heading-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">{m.name}</h4>
                <p className="text-body-sm text-brand-gray-500 mt-2">{m.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-brand-orange font-medium text-body-sm mt-3 group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-28 bg-brand-navy">
        <div className="content-max section-padding text-center max-w-3xl mx-auto">
          <div className="text-brand-orange text-5xl mb-6">&ldquo;</div>
          <p className="text-heading-lg lg:text-display text-white leading-relaxed">{testimonial.quote}</p>
          <div className="mt-8">
            <p className="text-body font-semibold text-white">{testimonial.name}</p>
            <p className="text-body-sm text-white/60">{testimonial.title}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="content-max section-padding max-w-3xl mx-auto">
          <h2 className="text-heading-xl text-brand-navy text-center mb-10">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-brand-gray-50 rounded-xl p-6">
                <h3 className="text-body-lg font-semibold text-brand-navy">{faq.q}</h3>
                <p className="text-body text-brand-gray-500 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-orange/5">
        <div className="content-max section-padding text-center">
          <h2 className="text-heading-xl text-brand-navy">Ready to modernize your operations?</h2>
          <p className="text-body text-brand-gray-500 mt-3">Get a personalized demo tailored to your specific needs.</p>
          <a href="/demo" className="btn-primary mt-6">Book a Free Demo</a>
        </div>
      </section>
    </>
  )
}
