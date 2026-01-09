import Link from 'next/link'
import { User, Package, MapPin, Heart, Settings } from 'lucide-react'

export default function AccountPage() {
  return (
    <div className="pt-[80px] lg:pt-[80px]  bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <User className="w-10 h-10 text-gray-600" />
                </div>
                <h2 className="font-bold text-gray-900">John Doe</h2>
                <p className="text-sm text-gray-600">john@example.com</p>
              </div>
              <nav className="space-y-2">
                <Link href="/account" className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-lg font-medium">
                  <User className="w-5 h-5" />
                  Profile
                </Link>
                <Link href="/account/orders" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-smooth">
                  <Package className="w-5 h-5" />
                  Orders
                </Link>
                <Link href="/account/addresses" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-smooth">
                  <MapPin className="w-5 h-5" />
                  Addresses
                </Link>
                <Link href="/account/wishlist" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-smooth">
                  <Heart className="w-5 h-5" />
                  Wishlist
                </Link>
                <Link href="/account/settings" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-smooth">
                  <Settings className="w-5 h-5" />
                  Settings
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+971 50 123 4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-smooth"
                >
                  Save Changes
                </button>
              </form>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-md p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Orders</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((order) => (
                  <div key={order} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-smooth">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">Order #ML{order}0{order}234</p>
                        <p className="text-sm text-gray-600">Placed on Dec {order}, 2024</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                        Delivered
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">3 items • $89.97</p>
                    <Link href={`/account/orders/${order}`} className="text-black font-semibold hover:underline">
                      View Details
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
