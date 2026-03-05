import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/shared/ProductPageTemplate'

export const metadata: Metadata = {
  title: 'Recipe Management Software for Restaurants — Cost Control | Digitory',
  description: 'Standardize recipes, control portions, and track food costs down to the ingredient level. Ensure consistency across all your restaurant outlets.',
  keywords: 'recipe management software, restaurant recipe costing, food cost control, recipe standardization restaurants',
}

export default function RecipeManagementPage() {
  return (
    <ProductPageTemplate
      tag="Recipe Management"
      title="Standardize every dish. Control every cost."
      subtitle="Define recipes with exact ingredient quantities, track food costs in real time, and ensure consistency across every outlet and every shift."
      description="Your guests expect the same taste whether they visit your Bangalore outlet or your Delhi one. Recipe management makes that possible while keeping food costs in check."
      stats={[
        { value: '3-5%', label: 'Avg. food cost reduction' },
        { value: '100%', label: 'Recipe consistency' },
        { value: 'Real-time', label: 'Cost visibility' },
        { value: 'Unlimited', label: 'Recipe variations' },
      ]}
      features={[
        { title: 'Multi-level Recipes', desc: 'Create sub-recipes (sauces, marinades) that feed into main dish recipes. Accurate costing at every level.' },
        { title: 'Portion Control', desc: 'Define exact quantities per serving. The system flags deviations in consumption vs expected usage.' },
        { title: 'Real-time Food Costing', desc: 'See the exact cost of each dish based on current ingredient prices. Update automatically when vendor prices change.' },
        { title: 'Menu Engineering', desc: 'Identify your stars, plowhorses, puzzles, and dogs. Make data-driven decisions about your menu.' },
        { title: 'Allergen Tracking', desc: 'Tag allergens at the ingredient level. Automatically flag dishes containing common allergens.' },
        { title: 'Nutritional Information', desc: 'Calculate nutritional values from ingredient data. Essential for QSR and health-conscious brands.' },
      ]}
      benefits={[
        'Reduce food costs by 3-5% through accurate costing',
        'Ensure taste consistency across all outlets and shifts',
        'Make data-driven menu decisions with menu engineering',
        'Auto-calculate dish costs when ingredient prices change',
        'Track allergens and nutritional info automatically',
        'Sub-recipe support for complex preparations',
      ]}
      faqs={[
        { q: 'Can we create sub-recipes?', a: 'Yes. You can create multi-level recipes where base preparations (sauces, stocks, marinades) are defined as sub-recipes and referenced by multiple main dishes. Costing flows accurately through all levels.' },
        { q: 'How does real-time food costing work?', a: 'Digitory calculates the cost of each dish based on current ingredient purchase prices. When vendor prices change, dish costs update automatically. You always know your exact margins.' },
        { q: 'Can we handle different recipes for different outlets?', a: 'Yes. You can have a master recipe with outlet-specific variations — for example, different ingredient sourcing that affects cost, or portion adjustments for different markets.' },
      ]}
      relatedProducts={[
        { name: 'Inventory Management', href: '/products/inventory' },
        { name: 'Analytics Dashboard', href: '/products/analytics' },
        { name: 'Kitchen Display System', href: '/products/kitchen-display' },
        { name: 'Point of Sale', href: '/products/pos' },
      ]}
    />
  )
}
