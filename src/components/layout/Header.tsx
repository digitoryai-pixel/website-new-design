'use client'

import { useState } from 'react'
import Logo from '@/components/icons/Logo'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

const products = [
  { name: 'Point of Sale', href: '/products/pos', desc: 'Fast, reliable billing for every format' },
  { name: 'Inventory Management', href: '/products/inventory', desc: 'Real-time stock across all outlets' },
  { name: 'Recipe Management', href: '/products/recipe-management', desc: 'Standardize recipes & control costs' },
  { name: 'QR Code Ordering', href: '/products/qr-ordering', desc: 'Contactless dine-in ordering' },
  { name: 'Kitchen Display System', href: '/products/kitchen-display', desc: 'Streamline kitchen operations' },
  { name: 'CRM & Loyalty', href: '/products/crm-loyalty', desc: 'Build lasting guest relationships' },
  { name: 'Prepaid Cards', href: '/products/prepaid-cards', desc: 'Drive repeat visits with stored value' },
  { name: 'DigiBeat', href: '/products/digibeat', desc: 'Asset & maintenance management' },
  { name: 'Analytics Dashboard', href: '/products/analytics', desc: 'Executive insights across outlets' },
  { name: 'Tally Automation', href: '/products/tally-automation', desc: 'Auto-sync with Tally ERP' },
]

const industries = [
  { name: 'Restaurant Chains', href: '/industries/restaurant-chains', desc: 'Multi-outlet management at scale' },
  { name: 'Pubs & Breweries', href: '/industries/pubs-breweries', desc: 'Bar, brewery & nightlife operations' },
  { name: 'QSR & Fast Food', href: '/industries/qsr', desc: 'Speed & consistency for quick service' },
  { name: 'Cloud Kitchens', href: '/industries/cloud-kitchens', desc: 'Multi-brand, delivery-first operations' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-gray-200/50">
      <div className="content-max section-padding">
        <div className="flex items-center justify-between h-[72px]">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="nav-link flex items-center gap-1 px-4 py-2"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                Products <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 ${productsOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.1)] border border-brand-gray-200/50 p-6 w-[640px] grid grid-cols-2 gap-1">
                  {products.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="flex flex-col px-4 py-3 rounded-xl hover:bg-brand-orange/5 transition-colors group/item"
                    >
                      <span className="font-semibold text-body-sm text-brand-navy group-hover/item:text-brand-orange transition-colors">{p.name}</span>
                      <span className="text-caption text-brand-gray-500">{p.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button
                className="nav-link flex items-center gap-1 px-4 py-2"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                Industries <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 ${industriesOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.1)] border border-brand-gray-200/50 p-6 w-[360px] grid grid-cols-1 gap-1">
                  {industries.map((i) => (
                    <a
                      key={i.href}
                      href={i.href}
                      className="flex flex-col px-4 py-3 rounded-xl hover:bg-brand-orange/5 transition-colors group/item"
                    >
                      <span className="font-semibold text-body-sm text-brand-navy group-hover/item:text-brand-orange transition-colors">{i.name}</span>
                      <span className="text-caption text-brand-gray-500">{i.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="/pricing" className="nav-link px-4 py-2">Pricing</a>
            <a href="/about" className="nav-link px-4 py-2">About</a>
            <a href="/blog" className="nav-link px-4 py-2">Blog</a>
            <a href="/compare" className="nav-link px-4 py-2">Compare</a>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="/contact" className="btn-ghost">Contact Sales</a>
            <a href="/demo" className="btn-primary">
              Book a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto">
          <nav className="section-padding py-6 flex flex-col gap-2">
            <div className="border-b border-brand-gray-200 pb-4 mb-2">
              <p className="text-caption text-brand-gray-400 uppercase tracking-wider px-3 mb-2">Products</p>
              {products.map((p) => (
                <a key={p.href} href={p.href} className="block px-3 py-2.5 text-body font-medium text-brand-navy hover:text-brand-orange rounded-lg">
                  {p.name}
                </a>
              ))}
            </div>
            <div className="border-b border-brand-gray-200 pb-4 mb-2">
              <p className="text-caption text-brand-gray-400 uppercase tracking-wider px-3 mb-2">Industries</p>
              {industries.map((i) => (
                <a key={i.href} href={i.href} className="block px-3 py-2.5 text-body font-medium text-brand-navy hover:text-brand-orange rounded-lg">
                  {i.name}
                </a>
              ))}
            </div>
            <a href="/pricing" className="block px-3 py-2.5 text-body font-medium text-brand-navy">Pricing</a>
            <a href="/about" className="block px-3 py-2.5 text-body font-medium text-brand-navy">About</a>
            <a href="/blog" className="block px-3 py-2.5 text-body font-medium text-brand-navy">Blog</a>
            <a href="/compare" className="block px-3 py-2.5 text-body font-medium text-brand-navy">Compare</a>
            <a href="/contact" className="block px-3 py-2.5 text-body font-medium text-brand-navy">Contact Sales</a>
            <div className="mt-4 px-3">
              <a href="/demo" className="btn-primary w-full text-center">Book a Demo</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
