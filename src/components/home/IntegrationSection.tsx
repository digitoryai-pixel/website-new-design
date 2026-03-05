export default function IntegrationSection() {
  const integrations = [
    'Swiggy', 'Zomato', 'Tally', 'Razorpay', 'Paytm',
    'PhonePe', 'Google Pay', 'Pine Labs', 'Petpooja',
    'Dunzo', 'Amazon Pay', 'WhatsApp',
  ]

  return (
    <section className="py-20 lg:py-28 bg-brand-gray-50">
      <div className="content-max section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">Integrations</span>
          <h2 className="text-display-lg lg:text-display text-brand-navy mt-5">
            Connects with the tools{' '}
            <span className="text-brand-gray-400">you already use</span>
          </h2>
          <p className="text-body-lg text-brand-gray-500 mt-5">
            Digitory integrates seamlessly with popular aggregators, payment
            gateways, and business tools across India.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
          {integrations.map((name) => (
            <div
              key={name}
              className="px-6 py-4 bg-white rounded-xl border border-brand-gray-200/50 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default"
            >
              <span className="text-body font-medium text-brand-navy">{name}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-body-sm text-brand-gray-400 mt-8">
          And 50+ more integrations via our open API
        </p>
      </div>
    </section>
  )
}
