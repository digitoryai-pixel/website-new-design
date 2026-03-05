import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/shared/ProductPageTemplate'

export const metadata: Metadata = {
  title: 'Tally Automation for Restaurants — Auto-sync Sales & Expenses | Digitory',
  description: 'Automatically sync daily sales, purchases, and expenses from Digitory to Tally ERP. Zero manual entries, 100% accuracy for restaurant accounting.',
  keywords: 'tally integration restaurant, restaurant accounting automation, tally ERP restaurant, restaurant Tally sync',
}

export default function TallyAutomationPage() {
  return (
    <ProductPageTemplate
      tag="Tally Automation"
      title="Zero manual entries. 100% Tally accuracy."
      subtitle="Auto-sync daily sales, purchases, expenses, and payments from Digitory directly into Tally ERP. Your accountant will thank you."
      description="Manual Tally entries are slow, error-prone, and weeks behind. Digitory Tally Automation delivers daily, accurate, automated sync that keeps your books current."
      stats={[
        { value: '100%', label: 'Data accuracy' },
        { value: '0', label: 'Manual entries needed' },
        { value: 'Daily', label: 'Auto-sync frequency' },
        { value: '80%', label: 'Time saved in accounting' },
      ]}
      features={[
        { title: 'Daily Sales Sync', desc: 'All daily sales — categorized by payment mode, tax type, and outlet — automatically posted to Tally every day.' },
        { title: 'Purchase Entries', desc: 'Vendor purchases and GRNs from inventory module auto-sync as purchase vouchers in Tally.' },
        { title: 'Expense Tracking', desc: 'Petty cash, utility bills, and operational expenses recorded in Digitory flow into Tally expense ledgers.' },
        { title: 'GST Reconciliation', desc: 'Tax entries are perfectly aligned between Digitory and Tally. GST filing becomes a formality.' },
        { title: 'Multi-outlet Mapping', desc: 'Each outlet maps to separate cost centers or companies in Tally. Consolidated and outlet-wise views.' },
        { title: 'Error Handling', desc: 'Failed entries are flagged with clear error descriptions. Retry or fix and resync with one click.' },
      ]}
      benefits={[
        'Eliminate 100% of manual Tally data entry',
        'Save 80% of accounting team time',
        'Perfect GST reconciliation between POS and Tally',
        'Daily sync keeps books current — not weeks behind',
        'Multi-outlet mapping to separate Tally companies',
        'Clear error handling prevents data discrepancies',
      ]}
      faqs={[
        { q: 'Which version of Tally is supported?', a: 'Digitory integrates with Tally ERP 9 and TallyPrime. The integration works via Tally\'s XML import functionality, ensuring compatibility with standard Tally installations.' },
        { q: 'How often does data sync?', a: 'Data syncs daily, typically in the early morning for the previous day\'s transactions. You can also trigger manual syncs at any time for immediate updates.' },
        { q: 'Can we map different outlets to different Tally companies?', a: 'Yes. Each outlet can be mapped to a separate company or cost center in Tally. You can also consolidate all outlets into a single company with cost center tracking.' },
      ]}
      relatedProducts={[
        { name: 'Analytics Dashboard', href: '/products/analytics' },
        { name: 'Inventory Management', href: '/products/inventory' },
        { name: 'Point of Sale', href: '/products/pos' },
        { name: 'Recipe Management', href: '/products/recipe-management' },
      ]}
    />
  )
}
