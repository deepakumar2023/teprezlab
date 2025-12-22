import Link from 'next/link'
import { Gift, Heart, Sparkles, Box } from 'lucide-react'

export default function GiftingPage() {
  return (
    <div className="pt-[80px] lg:pt-[80px]  bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Corporate Gifting Made Easy</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Create memorable impressions with premium custom gifts for your clients, partners, and employees.
          </p>
          <Link
            href="/category/corporate-gifting"
            className="inline-block px-10 py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-800 transition-smooth"
          >
            Explore Gifts
          </Link>
        </div>
      </section>

      {/* Gift Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Gift Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Budget Gifts', icon: '💰', href: '/category/budget-gifts', color: 'bg-green-100' },
              { name: 'Premium Gifts', icon: '⭐', href: '/category/premium-gifts', color: 'bg-purple-100' },
              { name: 'Luxury Gifts', icon: '💎', href: '/category/luxury-gifts', color: 'bg-yellow-100' },
              { name: 'Tech Gifts', icon: '💻', href: '/category/travel-tech', color: 'bg-blue-100' },
              { name: 'Sustainable Gifts', icon: '🌱', href: '/category/eco-friendly', color: 'bg-emerald-100' },
              { name: 'Home Gifts', icon: '🏠', href: '/category/home-wellness', color: 'bg-rose-100' },
              { name: 'Corporate Gifts', icon: '🎁', href: '/category/corporate-gifting', color: 'bg-indigo-100' },
              { name: 'Custom Packaging', icon: '📦', href: '/category/boxes-and-packaging', color: 'bg-orange-100' },
            ].map((category, idx) => (
              <Link
                key={idx}
                href={category.href}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`${category.color} h-32 flex items-center justify-center text-5xl`}>
                  {category.icon}
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Our Gifting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Curated Selection</h3>
              <p className="text-gray-600">Handpicked premium gifts for every occasion</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personalization</h3>
              <p className="text-gray-600">Custom branding on every product</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">World-class brands and materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Box className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Packaging</h3>
              <p className="text-gray-600">Beautiful presentation for every gift</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Gifts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Popular Gift Ideas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Branded Notebooks',
              'Premium Pens',
              'Custom Water Bottles',
              'Tech Accessories',
              'Desk Organizers',
              'Gift Hampers',
              'Branded Apparel',
              'Eco-friendly Products',
            ].map((gift, idx) => (
              <div key={idx} className="bg-gray-100 p-6 rounded-xl text-center hover:bg-gray-200 transition-smooth cursor-pointer">
                <div className="text-4xl mb-3">🎁</div>
                <h3 className="font-semibold text-gray-900">{gift}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
