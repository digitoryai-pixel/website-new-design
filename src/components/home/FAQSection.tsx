'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is Digitory and how does it work?',
    a: 'Digitory is a comprehensive restaurant technology platform that combines POS, inventory management, recipe costing, QR ordering, kitchen display, CRM, analytics, and more into a single unified system. It works as a cloud-based solution with offline capability, syncing data across all your outlets in real time.',
  },
  {
    q: 'Is Digitory suitable for multi-outlet restaurant chains?',
    a: 'Absolutely. Digitory is specifically designed for multi-outlet operations. You get centralized menu management, inter-outlet inventory transfers, consolidated reporting, and role-based access control — all from a single dashboard. We currently manage chains with 200+ outlets.',
  },
  {
    q: 'How does Digitory compare to other restaurant POS software in India?',
    a: 'Unlike standalone POS systems, Digitory is a complete restaurant operating system. While most competitors offer billing and basic inventory, Digitory includes recipe management, asset maintenance (DigiBeat), prepaid card systems, Tally automation, and executive analytics — all natively integrated without third-party add-ons.',
  },
  {
    q: 'Can Digitory work offline?',
    a: 'Yes. Our POS and KDS modules are built with offline-first architecture. They continue working during internet outages and automatically sync all data when connectivity is restored. You never lose a transaction.',
  },
  {
    q: 'Does Digitory integrate with Swiggy and Zomato?',
    a: 'Yes, Digitory integrates with all major food aggregators including Swiggy, Zomato, and Dunzo. Orders flow directly into your POS and kitchen display, with automatic menu syncing and consolidated order management.',
  },
  {
    q: 'What kind of restaurants use Digitory?',
    a: 'Digitory serves fine dining restaurants, casual dining chains, pubs and breweries, QSR and fast food brands, cloud kitchens, cafes, and central kitchen operations. Our modular approach means you only use what your format requires.',
  },
  {
    q: 'How long does implementation take?',
    a: 'A single outlet can go live in 2-3 days. For multi-outlet chains, we offer phased rollouts with dedicated implementation managers. Full chain deployment typically completes within 2-4 weeks depending on the number of outlets and customization needs.',
  },
  {
    q: 'Does Digitory support GST billing and Tally integration?',
    a: 'Yes. Digitory is fully GST-compliant with support for CGST, SGST, IGST, and cess calculations. Our Tally Automation module auto-syncs daily sales, purchases, expenses, and payments into Tally ERP — eliminating manual data entry completely.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-28">
      <div className="content-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <span className="section-tag">FAQ</span>
            <h2 className="text-heading-xl lg:text-display text-brand-navy mt-5">
              Common questions about Digitory
            </h2>
            <p className="text-body text-brand-gray-500 mt-4">
              Can&apos;t find what you&apos;re looking for? Our team is always ready to help.
            </p>
            <a href="/contact" className="btn-outline mt-6">Talk to us</a>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-brand-gray-200/50">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    className="w-full flex items-start justify-between py-5 text-left group"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                  >
                    <span className="text-body-lg font-semibold text-brand-navy group-hover:text-brand-orange transition-colors pr-8">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-brand-gray-400 flex-shrink-0 mt-1 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                    <p className="text-body text-brand-gray-500 leading-relaxed pr-12">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
