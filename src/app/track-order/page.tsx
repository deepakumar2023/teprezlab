import { Package, Search } from 'lucide-react'

export default function TrackOrderPage() {
  return (
    <div className="pt-[180px] lg:pt-[200px] min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Order</h1>
          <p className="text-gray-600">Enter your order number to see the latest status</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Order Number</label>
              <input
                type="text"
                placeholder="ML123456"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>
          <button className="w-full mt-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-smooth flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            Track Order
          </button>
        </div>

        {/* Sample Tracking Result */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Order #ML101234</h2>
              <p className="text-gray-600">Estimated delivery: Dec 20, 2024</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {[
              { status: 'Order Placed', date: 'Dec 15, 2024', time: '10:30 AM', completed: true },
              { status: 'Order Confirmed', date: 'Dec 15, 2024', time: '11:45 AM', completed: true },
              { status: 'In Production', date: 'Dec 16, 2024', time: '2:00 PM', completed: true },
              { status: 'Quality Check', date: 'Dec 17, 2024', time: '4:30 PM', completed: true },
              { status: 'Shipped', date: 'Dec 18, 2024', time: '9:00 AM', completed: false },
              { status: 'Out for Delivery', date: 'Dec 20, 2024', time: 'Pending', completed: false },
              { status: 'Delivered', date: 'Dec 20, 2024', time: 'Pending', completed: false },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.completed ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  {idx < 6 && <div className={`w-0.5 h-12 ${step.completed ? 'bg-green-500' : 'bg-gray-300'}`} />}
                </div>
                <div className="flex-1 pb-6">
                  <h3 className={`font-semibold ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                    {step.status}
                  </h3>
                  <p className="text-sm text-gray-600">{step.date} • {step.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
