import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Digitory — India\'s Restaurant Technology Platform',
  description: 'Learn about Digitory\'s mission to modernize restaurant operations across India. Our story, team, and vision for the future of restaurant technology.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-orange/[0.03] to-white">
        <div className="content-max section-padding">
          <div className="max-w-3xl">
            <span className="section-tag">About Us</span>
            <h1 className="text-display-lg lg:text-display-xl text-brand-navy mt-5">
              We&apos;re building the operating system for{' '}
              <span className="gradient-text">Indian restaurants</span>
            </h1>
            <p className="text-body-lg text-brand-gray-500 mt-6 max-w-2xl">
              Digitory was founded with a simple belief: Indian restaurants deserve
              technology that&apos;s as sophisticated as the food they serve. Not
              cobbled-together tools, but a unified platform built for how restaurants
              actually operate.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28">
        <div className="content-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-heading-xl text-brand-navy">Our Mission</h2>
              <p className="text-body-lg text-brand-gray-500 mt-4 leading-relaxed">
                To empower every restaurant in India — from a single-outlet cafe to a
                200-outlet chain — with enterprise-grade technology that simplifies
                operations, reduces costs, and drives growth.
              </p>
              <p className="text-body text-brand-gray-500 mt-4 leading-relaxed">
                We believe that the restaurant industry is one of the most important
                sectors in the Indian economy. It employs millions, feeds billions, and
                represents our culture at its most vibrant. Yet it runs on fragmented,
                outdated technology. We&apos;re changing that.
              </p>
            </div>
            <div>
              <h2 className="text-heading-xl text-brand-navy">Our Vision</h2>
              <p className="text-body-lg text-brand-gray-500 mt-4 leading-relaxed">
                To become the default technology infrastructure for the Indian restaurant
                industry — the platform that every restaurant founder, operations head,
                and chain owner turns to when they think about running their business better.
              </p>
              <p className="text-body text-brand-gray-500 mt-4 leading-relaxed">
                And as we build for India, we&apos;re building for the world. The
                operational challenges of Indian restaurants — diverse formats, high
                complexity, cost sensitivity — make our platform robust enough to serve
                restaurants anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 lg:py-28 bg-brand-navy">
        <div className="content-max section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '2,000+', label: 'Restaurants' },
              { value: '50+', label: 'Cities' },
              { value: '₹500Cr+', label: 'Monthly transactions' },
              { value: '150+', label: 'Team members' },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-display-lg font-bold text-brand-orange">{m.value}</p>
                <p className="text-body text-white/60 mt-2">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="content-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-display-lg text-brand-navy">What drives us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Restaurant-first Thinking', desc: 'Every feature starts with a real problem faced by a real restaurant operator. We don\'t build technology for technology\'s sake.' },
              { title: 'Reliability is Non-negotiable', desc: '99.9% uptime isn\'t a target — it\'s a commitment. Restaurants can\'t afford downtime, and neither can we.' },
              { title: 'Simplicity at Scale', desc: 'Complex operations should feel simple. We obsess over making powerful features intuitive and accessible.' },
              { title: 'Data-driven Decisions', desc: 'We believe every restaurant decision should be backed by data. That\'s why analytics is at the core of everything we build.' },
              { title: 'Partnership, Not Vendorship', desc: 'We succeed when our restaurants succeed. Our team is an extension of your operations team.' },
              { title: 'India-built, Global-ready', desc: 'We build for the complexity and diversity of Indian restaurants, which makes our platform robust enough for any market.' },
            ].map((v) => (
              <div key={v.title} className="card">
                <h3 className="text-heading-sm font-semibold text-brand-navy">{v.title}</h3>
                <p className="text-body-sm text-brand-gray-500 mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section id="careers" className="py-16 bg-brand-orange/5">
        <div className="content-max section-padding text-center">
          <h2 className="text-heading-xl text-brand-navy">Join the team</h2>
          <p className="text-body text-brand-gray-500 mt-3 max-w-xl mx-auto">
            We&apos;re always looking for passionate people who want to build the
            future of restaurant technology. Check our open positions.
          </p>
          <a href="/contact" className="btn-primary mt-6">View Open Positions <ArrowRight className="w-4 h-4 ml-2" /></a>
        </div>
      </section>
    </>
  )
}
