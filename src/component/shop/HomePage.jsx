import Link from 'next/link'
import { Star, Package, DollarSign, Truck, HeadphonesIcon } from 'lucide-react'
import ProductCategories from '../ProductCategories'
import Image from 'next/image'

import ShopTrustedCompaniess from './components/ShopTrustedCompaniess'
import Brandslogo from './components/Brandslogo'
import Promotional from './Promotional'




const categories = [
  { name: 'Best Sellers', icon: '🏆', href: '/category/best-sellers' },
  { name: 'New Arrivals', icon: '✨', href: '/category/new-arrivals' },
  { name: 'T-shirts', icon: '👕', href: '/category/tshirts-polos' },
  { name: 'Hoodies', icon: '🧥', href: '/category/hoodies-jackets' },
  { name: 'Uniforms', icon: '👔', href: '/category/uniforms-workwear' },
  { name: 'Jerseys', icon: '⚽', href: '/category/jerseys-sportswear' },
  { name: 'Bottles & Mugs', icon: '☕', href: '/category/drinkware' },
  { name: 'Caps', icon: '🧢', href: '/category/caps-hats' },
  { name: 'Bags', icon: '🎒', href: '/category/bags-backpacks' },
  { name: 'Office', icon: '📋', href: '/category/office-stationery' },
  { name: 'Gifting', icon: '🎁', href: '/category/corporate-gifting' },
  { name: 'Tech', icon: '💻', href: '/category/travel-tech' },
]




export default function HomePage() {
  return (
    <div className="pt-[90px]   bg-white">

{/* <div className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4">
                      <div className="hidden lg:flex items-center gap-6 py-3 overflow-x-auto">
                        {categories.map((category) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black whitespace-nowrap transition-smooth group"
                          >
                            <span className="text-lg group-hover:scale-110 transition-smooth">{category.icon}</span>
                            {category.name}
                          </Link>
                        ))}
                        <Link
                          href="/customize"
                          className="ml-auto px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-smooth whitespace-nowrap"
                        >
                          CUSTOMIZE NOW
                        </Link>
                      </div>
                    </div>
  </div> */}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage via-green-50 to-blue-50   py-4 md:py-8 px-4 relative overflow-hidden">
        <div className=" mx-auto">
          <div className="text-center mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6  font-serif text-left md:text-center">
              Custom T-shirts,<br />
              Merchandise & Gifts
            </h1>
            <Link
              href="#"
              className="inline-block px-10 py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-800 transition-smooth shadow-lg"
            >
              CUSTOMIZE NOW
            </Link>
          </div>

          {/* Product Images Around Hero */}
          {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[
              { name: 'Drawstring Bag', color: 'bg-orange-500' },
              { name: 'Baseball Cap', color: 'bg-gray-700' },
              { name: 'White Mug', color: 'bg-white border-2 border-gray-200' },
              { name: 'Navy T-shirt', color: 'bg-gray-900' },
              { name: 'Purple Hoodie', color: 'bg-purple-900' },
              { name: 'Red Notebook', color: 'bg-red-500' },
              { name: 'Yellow Box', color: 'bg-yellow-500' },
              { name: 'Water Bottle', color: 'bg-gray-300' },
              { name: 'Tote Bag', color: 'bg-amber-100' },
              { name: 'Stationery', color: 'bg-blue-500' },
              { name: 'Pins', color: 'bg-gradient-to-r from-red-400 to-yellow-400' },
              { name: 'Gift Box', color: 'bg-gray-800' },
            ].map((product, idx) => (
              <div
                key={idx}
                className={`${product.color} rounded-xl aspect-square flex items-center justify-center text-white text-sm font-semibold shadow-md hover:scale-105 transition-smooth cursor-pointer`}
              >
                YOUR<br />DESIGN<br />HERE
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900">★ ★ ★ ★ ★</h3>
              <p className="text-sm text-gray-600 font-serif ">50,000+ Happy<br />Customers</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 font-serif ">1000+ Custom<br />Products</h3>
              <p className="text-sm text-gray-600 font-serif ">High Quality.<br />No Minimums!</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 font-serif ">Affordable<br />Prices</h3>
              <p className="text-sm text-gray-600 font-serif ">up to 40%<br />Bulk Discounts!</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 font-serif ">Fast & Free<br />Shipping</h3>
              <p className="text-sm text-gray-600 font-serif ">Global Delivery.<br />On-time!</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <HeadphonesIcon className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 font-serif ">Worry Free!</h3>
              <p className="text-sm text-gray-600 font-serif ">Instant 24/7<br />Support</p>
            </div>
          </div>
        </div>
      </section> */}

  

      <ProductCategories />


      <Brandslogo />

  
      {/* Promotional Banner */}
      {/* <section className="py-4 md:py-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className=" text-[18px] sm:text-[24px] md:text-[32px] font-bold mb-4 font-serif">
                ELEVATE YOUR COMPANY WITH<br />CUSTOM PROMOTIONAL PRODUCT
              </h2>
              <div className="flex justify-center md:justify-start">
  <Link
    href="/merchandise"
    className="inline-block px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-smooth"
  >
    CUSTOMIZE
  </Link>
</div>

            </div>
            <div className="flex-1">
              <div className="bg-gray-700 rounded-xl h-64 flex items-center justify-center">
                <span className="text-gray-400">
<Image
  src="/brands/elevate.webp"
  alt="Promotional Banner"
  width={400}
  height={250}
  className="object-contain rounded-xl"
/>

                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}


<Promotional/>
     

     <ShopTrustedCompaniess />

      {/* Testimonials Section */}
      <section className="py-4 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-[18px] sm:text-[24px] md:text-[32px] font-bold  text-gray-900 mb-12 font-serif  ">
            Aww, thanks guys! #Merchtribe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah Johnson', company: 'Tech Startup', rating: 5, text: 'Amazing quality and fast delivery! Our team loves the custom hoodies.' },
              { name: 'Michael Chen', company: 'Marketing Agency', rating: 5, text: 'Perfect for our corporate gifts. The printing quality is outstanding!' },
              { name: 'Emma Wilson', company: 'Event Company', rating: 5, text: 'Best customer service! They helped us create the perfect merchandise.' },
            ].map((review, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex justify-center mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 font-serif text-left ">&quot;{review.text}&quot;</p>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
