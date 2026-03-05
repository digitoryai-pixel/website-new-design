import type { Metadata } from 'next'
import { Phone, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Digitory — Talk to Our Restaurant Technology Experts',
  description: 'Get in touch with Digitory\'s sales and support team. Book a demo, request pricing, or discuss your restaurant technology needs.',
}

export default function ContactPage() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <div className="content-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Info */}
            <div>
              <span className="section-tag">Contact</span>
              <h1 className="text-display-lg text-brand-navy mt-5">
                Let&apos;s talk about your restaurant
              </h1>
              <p className="text-body-lg text-brand-gray-500 mt-5">
                Whether you&apos;re a single-outlet restaurant or a 200-outlet chain,
                we&apos;d love to understand your needs and show you how Digitory can help.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">Phone</h3>
                    <p className="text-body text-brand-gray-500 mt-1">+91 80 4567 8900</p>
                    <p className="text-body-sm text-brand-gray-400">Mon-Sat, 9 AM - 7 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">Email</h3>
                    <p className="text-body text-brand-gray-500 mt-1">hello@digitory.com</p>
                    <p className="text-body-sm text-brand-gray-400">We respond within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">Office</h3>
                    <p className="text-body text-brand-gray-500 mt-1">Bangalore, India</p>
                    <p className="text-body-sm text-brand-gray-400">With presence in Mumbai, Delhi & Chennai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="card-elevated">
              <h2 className="text-heading-lg text-brand-navy mb-6">Send us a message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-body-sm font-medium text-brand-navy mb-1.5">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-body"
                      placeholder="Rajesh"
                    />
                  </div>
                  <div>
                    <label className="block text-body-sm font-medium text-brand-navy mb-1.5">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-body"
                      placeholder="Menon"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-body-sm font-medium text-brand-navy mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-body"
                    placeholder="rajesh@restaurant.com"
                  />
                </div>
                <div>
                  <label className="block text-body-sm font-medium text-brand-navy mb-1.5">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-body"
                    placeholder="+91 98765 43210"
                  />
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
                <div>
                  <label className="block text-body-sm font-medium text-brand-navy mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-body resize-none"
                    placeholder="Tell us about your restaurant and what you're looking for..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
                <p className="text-caption text-brand-gray-400 text-center">
                  We respond within 4 hours during business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
