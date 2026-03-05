export default function TrustBar() {
  const logos = [
    'Barbeque Nation', 'Chai Point', 'The Beer Cafe',
    'Smoke House Deli', 'Social', 'Byg Brewski',
    'Punjab Grill', 'Farzi Cafe',
  ]

  return (
    <section className="py-12 border-b border-brand-gray-200/50">
      <div className="content-max section-padding">
        <p className="text-center text-caption text-brand-gray-400 uppercase tracking-widest mb-8">
          Trusted by India&apos;s leading restaurant brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((name) => (
            <div
              key={name}
              className="text-brand-gray-300 font-semibold text-lg tracking-wide hover:text-brand-gray-400 transition-colors cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
