import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Restaurant Technology Insights & Best Practices | Digitory',
  description: 'Expert insights on restaurant management, POS systems, inventory control, QR ordering, and restaurant technology trends in India.',
}

const featuredPosts = [
  {
    title: 'The Complete Guide to Restaurant Inventory Management in 2024',
    excerpt: 'Learn how to reduce food waste by 25%, automate purchase orders, and gain real-time visibility into stock across all your outlets.',
    category: 'Inventory',
    readTime: '12 min read',
  },
  {
    title: 'Why Indian Restaurant Chains Are Moving to Unified POS Platforms',
    excerpt: 'Multi-outlet chains are replacing fragmented tech stacks with unified platforms. Here\'s what\'s driving the shift and what to look for.',
    category: 'Industry Trends',
    readTime: '8 min read',
  },
  {
    title: 'QR Code Ordering: ROI Calculator for Indian Restaurants',
    excerpt: 'We break down the exact ROI of implementing QR ordering — from labor savings to increased average order value.',
    category: 'QR Ordering',
    readTime: '6 min read',
  },
]

const topicClusters = [
  {
    topic: 'Restaurant POS',
    posts: [
      'How to Choose the Right POS System for Your Restaurant',
      'Offline POS: Why It Matters During India\'s Internet Outages',
      'POS Integration with Food Aggregators: A Complete Guide',
    ],
  },
  {
    topic: 'Inventory & Recipes',
    posts: [
      'Recipe Costing 101: How to Calculate True Food Costs',
      'Auto-consumption Tracking: The Future of Restaurant Inventory',
      'Reducing Food Waste: Technology-driven Strategies for Restaurants',
    ],
  },
  {
    topic: 'Restaurant Operations',
    posts: [
      'Kitchen Display Systems: Paper Tickets vs Digital Screens',
      'How to Manage Multiple Outlets Without Losing Control',
      'Tally Automation: End-to-End Restaurant Accounting',
    ],
  },
  {
    topic: 'Guest Experience',
    posts: [
      'Building a Restaurant Loyalty Program That Actually Works',
      'Prepaid Cards: The Untapped Revenue Strategy for Restaurants',
      'How QR Ordering Improves Guest Satisfaction Scores',
    ],
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-orange/[0.03] to-white">
        <div className="content-max section-padding">
          <div className="max-w-3xl">
            <span className="section-tag">Blog</span>
            <h1 className="text-display-lg lg:text-display-xl text-brand-navy mt-5">
              Insights for modern{' '}
              <span className="gradient-text">restaurant operators</span>
            </h1>
            <p className="text-body-lg text-brand-gray-500 mt-5">
              Expert perspectives on restaurant technology, operations, and
              growth strategies for Indian restaurants.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-20 lg:pb-28">
        <div className="content-max section-padding">
          <h2 className="text-heading-lg text-brand-navy mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <article key={post.title} className="card group cursor-pointer hover:-translate-y-1">
                <div className="h-40 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 rounded-xl mb-5 flex items-center justify-center">
                  <span className="text-4xl opacity-30">📝</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-caption font-semibold text-brand-orange">{post.category}</span>
                  <span className="text-caption text-brand-gray-400">{post.readTime}</span>
                </div>
                <h3 className="text-heading-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-body-sm text-brand-gray-500 mt-2">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-brand-orange font-medium text-body-sm mt-4 group-hover:gap-2.5 transition-all">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Clusters */}
      <section className="py-20 lg:py-28 bg-brand-gray-50">
        <div className="content-max section-padding">
          <h2 className="text-heading-xl text-brand-navy text-center mb-12">Browse by Topic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topicClusters.map((cluster) => (
              <div key={cluster.topic} className="card">
                <h3 className="text-heading font-semibold text-brand-navy mb-4">{cluster.topic}</h3>
                <ul className="space-y-3">
                  {cluster.posts.map((post) => (
                    <li key={post}>
                      <a href="#" className="flex items-start gap-3 group/link">
                        <ArrowRight className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className="text-body-sm text-brand-gray-600 group-hover/link:text-brand-orange transition-colors">
                          {post}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 border-t border-brand-gray-200/50">
        <div className="content-max section-padding text-center">
          <h2 className="text-heading-xl text-brand-navy">Stay updated</h2>
          <p className="text-body text-brand-gray-500 mt-3 max-w-xl mx-auto">
            Get the latest restaurant technology insights delivered to your inbox.
            No spam, just actionable content.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-body"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  )
}
