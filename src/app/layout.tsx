import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Digitory — Restaurant Technology Platform for Chains, Pubs & QSRs',
  description: 'India\'s most comprehensive restaurant management software. POS, Inventory, QR Ordering, Kitchen Display, CRM & Analytics — all in one platform for multi-outlet restaurants.',
  keywords: 'restaurant management software India, restaurant POS India, inventory management for restaurants, QR ordering system India, restaurant ERP India, multi outlet restaurant software',
  openGraph: {
    title: 'Digitory — Restaurant Technology Platform',
    description: 'The operating system for modern restaurants. POS, Inventory, QR Ordering, KDS, CRM & Analytics in one platform.',
    url: 'https://www.digitory.com',
    siteName: 'Digitory',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digitory — Restaurant Technology Platform',
    description: 'India\'s most comprehensive restaurant management software for chains, pubs & QSRs.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.digitory.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Digitory',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web, Android, iOS',
              description: 'Comprehensive restaurant technology platform for chains, pubs, breweries, QSRs, and cloud kitchens.',
              url: 'https://www.digitory.com',
              author: {
                '@type': 'Organization',
                name: 'Digitory',
                url: 'https://www.digitory.com',
              },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '500',
                bestRating: '5',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
