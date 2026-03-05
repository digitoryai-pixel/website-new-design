import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/shared/ProductPageTemplate'

export const metadata: Metadata = {
  title: 'Restaurant CRM & Loyalty Program Software India | Digitory',
  description: 'Build lasting guest relationships with smart CRM and loyalty programs. Track preferences, run targeted campaigns, and increase repeat visits for your restaurant.',
  keywords: 'restaurant CRM India, loyalty program restaurant, guest relationship management restaurant, restaurant customer retention',
}

export default function CRMLoyaltyPage() {
  return (
    <ProductPageTemplate
      tag="CRM & Loyalty"
      title="Build lasting guest relationships"
      subtitle="Know your guests by name, preference, and visit history. Run targeted campaigns that drive repeat visits and increase lifetime value."
      description="Every guest interaction is an opportunity to build loyalty. Digitory CRM captures, analyzes, and activates guest data to keep them coming back."
      stats={[
        { value: '35%', label: 'Increase in repeat visits' },
        { value: '2.5x', label: 'Higher spend from loyal guests' },
        { value: '360°', label: 'Guest profile view' },
        { value: '10x', label: 'Campaign ROI' },
      ]}
      features={[
        { title: '360° Guest Profiles', desc: 'Complete view of every guest — visit history, order preferences, spend patterns, feedback, and special occasions.' },
        { title: 'Points-based Loyalty', desc: 'Configurable points programs — earn on spend, redeem on visits. Tier-based benefits for high-value guests.' },
        { title: 'Targeted Campaigns', desc: 'Send SMS, WhatsApp, or email campaigns based on guest segments — lapsed guests, high spenders, birthday month.' },
        { title: 'Feedback Collection', desc: 'Automated post-visit feedback collection. Track NPS scores and address concerns before they hit social media.' },
        { title: 'Referral Programs', desc: 'Word-of-mouth amplification. Reward guests for bringing new diners to your restaurant.' },
        { title: 'Anniversary & Birthday', desc: 'Auto-detect special occasions and trigger personalized offers that drive celebratory visits.' },
      ]}
      benefits={[
        'Increase repeat visits by 35% with targeted loyalty programs',
        'Know guest preferences before they even order',
        'Run ROI-positive campaigns via WhatsApp and SMS',
        'Capture feedback and improve before negative reviews go public',
        'Segment guests and personalize their experience',
        'Automate birthday and anniversary outreach',
      ]}
      faqs={[
        { q: 'How does the loyalty program work?', a: 'You define the earning and redemption rules — for example, 1 point per ₹10 spent, redeem 100 points for ₹50 off. You can create tier-based programs (Silver, Gold, Platinum) with increasing benefits.' },
        { q: 'Can we send WhatsApp campaigns?', a: 'Yes. Digitory integrates with WhatsApp Business API for template-based campaigns. You can send personalized offers, reservation confirmations, and feedback requests directly via WhatsApp.' },
        { q: 'Does it capture guest data automatically?', a: 'Yes. Guest data is captured at billing, QR ordering, loyalty enrollment, and feedback touchpoints. Over time, rich profiles build automatically without manual data entry.' },
      ]}
      relatedProducts={[
        { name: 'Prepaid Cards', href: '/products/prepaid-cards' },
        { name: 'QR Code Ordering', href: '/products/qr-ordering' },
        { name: 'Point of Sale', href: '/products/pos' },
        { name: 'Analytics Dashboard', href: '/products/analytics' },
      ]}
    />
  )
}
