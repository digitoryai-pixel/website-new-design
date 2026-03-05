export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Digitory replaced 4 different software tools for us. Now our 32 outlets run on a single system with real-time visibility into everything.',
      name: 'Rajesh Menon',
      title: 'CEO, Multi-outlet Chain',
      metric: '32 outlets unified',
    },
    {
      quote: 'The inventory module alone saved us ₹12 lakhs in the first quarter by reducing waste and automating purchase orders.',
      name: 'Priya Sharma',
      title: 'Operations Head, Brewery Chain',
      metric: '₹12L saved in Q1',
    },
    {
      quote: 'QR ordering cut our service staff requirements by 30% during peak hours while actually improving guest satisfaction scores.',
      name: 'Arjun Patel',
      title: 'Founder, QSR Brand',
      metric: '30% efficiency gain',
    },
  ]

  return (
    <section className="py-20 lg:py-28">
      <div className="content-max section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">Testimonials</span>
          <h2 className="text-display-lg lg:text-display text-brand-navy mt-5">
            Hear from operators who{' '}
            <span className="text-brand-gray-400">switched to Digitory</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-elevated flex flex-col">
              <div className="flex-1">
                <div className="text-brand-orange text-3xl mb-4">&ldquo;</div>
                <p className="text-body text-brand-navy leading-relaxed">{t.quote}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-brand-gray-200/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-body-sm text-brand-navy">{t.name}</p>
                    <p className="text-caption text-brand-gray-400">{t.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-heading-sm font-bold text-brand-orange">{t.metric}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
