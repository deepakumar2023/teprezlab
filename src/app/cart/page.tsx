import Link from 'next/link'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'

export default function CartPage() {
  const cartItems = [
    { id: 1, name: 'Classic Cotton T-Shirt', color: 'White', size: 'L', quantity: 2, price: 12.99, image: 'bg-blue-100' },
    { id: 2, name: 'Premium Hoodie', color: 'Black', size: 'XL', quantity: 1, price: 34.99, image: 'bg-gray-800' },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const total = subtotal + shipping

  return (
    <div className="pt-[80px] lg:pt-[80px]  bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started!</p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-smooth"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-md p-6 flex gap-6">
                  <div className={`${item.image} w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <span className="text-xs text-gray-400">Image</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Color: {item.color} | Size: {item.size}
                    </p>
                    <div className="flex items-center gap-3">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900 mb-4">${(item.price * item.quantity).toFixed(2)}</p>
                    <button className="text-red-600 hover:text-red-700 transition-smooth">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-[220px]">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-lg font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className="block w-full py-3 bg-black text-white text-center font-bold rounded-lg hover:bg-gray-800 transition-smooth mb-3"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/"
                  className="block w-full py-3 bg-white border-2 border-black text-black text-center font-bold rounded-lg hover:bg-gray-50 transition-smooth"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
