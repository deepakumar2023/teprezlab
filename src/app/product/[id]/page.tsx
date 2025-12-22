import Link from 'next/link'
import { ArrowLeft, ShoppingCart, Heart, Share2, Star } from 'lucide-react'

export function generateStaticParams() {
  return Array.from({ length: 20 }, (_, i) => ({
    id: String(i + 1),
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="pt-[80px] lg:pt-[80px]  bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span>/</span>
          <Link href="/category/tshirts-polos" className="hover:text-gray-900">T-shirts & Polos</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Classic Cotton T-Shirt</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center mb-4">
              <span className="text-gray-400">Main Product Image</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center cursor-pointer hover:ring-2 ring-black transition-smooth">
                  <span className="text-xs text-gray-400">View {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Classic Cotton T-Shirt</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600">(124 reviews)</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-smooth">
                  <Heart className="w-6 h-6" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-smooth">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$12.99</span>
              <span className="text-gray-600 ml-2">/ piece</span>
            </div>

            <p className="text-gray-700 mb-6">
              Premium quality cotton t-shirt perfect for custom printing. Available in multiple colors and sizes. Ideal for events, corporate branding, and promotional purposes.
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Select Color</h3>
              <div className="flex gap-3">
                {['White', 'Black', 'Navy', 'Red', 'Gray'].map((color) => (
                  <button
                    key={color}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-black transition-smooth flex items-center justify-center"
                  >
                    <span className="text-xs">{color[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Select Size</h3>
              <div className="flex gap-3">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-black hover:bg-black hover:text-white transition-smooth font-medium"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">-</button>
                <span className="text-xl font-semibold">1</span>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <button className="flex-1 bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition-smooth flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <Link
                href="/customize"
                className="flex-1 bg-white text-black border-2 border-black py-4 rounded-lg font-bold hover:bg-gray-50 transition-smooth text-center"
              >
                Customize Design
              </Link>
            </div>

            {/* Features */}
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-gray-700">100% Premium Cotton</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-gray-700">Free Shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-gray-700">No Minimum Order Quantity</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-gray-700">Bulk Discounts Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
