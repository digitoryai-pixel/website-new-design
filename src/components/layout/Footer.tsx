import Logo from '@/components/icons/Logo'

const footerLinks = {
  Products: [
    { name: 'Point of Sale', href: '/products/pos' },
    { name: 'Inventory Management', href: '/products/inventory' },
    { name: 'Recipe Management', href: '/products/recipe-management' },
    { name: 'QR Code Ordering', href: '/products/qr-ordering' },
    { name: 'Kitchen Display System', href: '/products/kitchen-display' },
    { name: 'CRM & Loyalty', href: '/products/crm-loyalty' },
    { name: 'Prepaid Cards', href: '/products/prepaid-cards' },
    { name: 'DigiBeat', href: '/products/digibeat' },
    { name: 'Analytics Dashboard', href: '/products/analytics' },
    { name: 'Tally Automation', href: '/products/tally-automation' },
  ],
  Industries: [
    { name: 'Restaurant Chains', href: '/industries/restaurant-chains' },
    { name: 'Pubs & Breweries', href: '/industries/pubs-breweries' },
    { name: 'QSR & Fast Food', href: '/industries/qsr' },
    { name: 'Cloud Kitchens', href: '/industries/cloud-kitchens' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/about#careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Compare', href: '/compare' },
  ],
  Resources: [
    { name: 'Book a Demo', href: '/demo' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Help Center', href: '#' },
    { name: 'API Documentation', href: '#' },
    { name: 'Partner Program', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="content-max section-padding py-16 lg:py-20 text-center">
          <h2 className="text-display-lg lg:text-display-xl text-white text-balance">
            Ready to transform your<br className="hidden sm:block" />
            <span className="gradient-text">restaurant operations?</span>
          </h2>
          <p className="text-body-lg text-white/70 mt-5 max-w-narrow mx-auto">
            Join 2,000+ restaurants across India that trust Digitory to run their business.
            Get started with a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="/demo" className="btn-primary text-lg px-10 py-4">Book a Free Demo</a>
            <a href="/contact" className="inline-flex items-center px-7 py-4 text-white/80 hover:text-white font-medium transition-colors">
              Talk to Sales
            </a>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="content-max section-padding py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="16" height="16" rx="2" fill="#ff5a10" />
                <rect x="20" y="20" width="28" height="28" rx="2" fill="#ff5a10" />
                <rect x="8" y="28" width="20" height="20" rx="2" fill="#ff5a10" />
                <rect x="24" y="32" width="10" height="10" rx="1" fill="white" />
              </svg>
              <span className="font-poppins font-semibold text-xl text-white tracking-tight">Digitory</span>
            </div>
            <p className="text-body-sm text-white/60 max-w-[240px]">
              India&apos;s most comprehensive restaurant technology platform for chains, pubs, breweries & QSRs.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-body-sm text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href + link.name}>
                    <a href={link.href} className="text-body-sm text-white/60 hover:text-brand-orange transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="content-max section-padding py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-white/40">&copy; 2024 Digitory. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-body-sm text-white/40 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-body-sm text-white/40 hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
