'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User, Menu, X, Phone, MapPin } from 'lucide-react'

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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Banner */}
      {/* <div className="bg-yellow-400 text-center py-2 px-4 text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          ⚡ (50% PRICE DROP) + EXTRA 20% OFF (XMAS20) ⚡ Ends Dec 25
        </span>
      </div> */}

      {/* Top Bar */}
      {/* <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">العربية</span>
            <select className="bg-transparent border-none text-gray-600 text-sm focus:outline-none cursor-pointer">
              <option>USD</option>
              <option>AED</option>
              <option>SAR</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/track-order" className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
              <MapPin className="w-4 h-4" />
              Track Order
            </Link>
            <Link href="tel:800-MERCH" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium">
              <Phone className="w-4 h-4" />
              800 MERCH
            </Link>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <div className=" text-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-smooth"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Left Menu - Desktop */}
            {/* <div className="hidden lg:flex items-center gap-6">
              <Link href="/customize" className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-100 transition-smooth">
                CUSTOMIZE
              </Link>
              <Link href="/corporate" className="hover:text-gray-300 transition-smooth font-medium">
                CORPORATE
              </Link>
              <Link href="/gifting" className="hover:text-gray-300 transition-smooth font-medium">
                GIFTING
              </Link>
            </div> */}

            {/* Logo */}
            {/* <Link href="/" className="text-3xl font-bold tracking-tight">
              <span className="font-serif">merchlist</span>
            </Link> */}

            {/* Search Bar - Desktop */}
            {/* <div className="hidden md:flex flex-1 max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search 1000+ Custom Products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </div> */}

            {/* Right Icons */}
            {/* <div className="flex items-center gap-4">
              <button className="hidden md:block hover:text-gray-300 transition-smooth">
                <Search className="w-6 h-6" />
              </button>
              <Link href="/cart" className="relative hover:text-gray-300 transition-smooth">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>
              <Link href="/account" className="hover:text-gray-300 transition-smooth">
                <User className="w-6 h-6" />
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white border-b border-gray-200">
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
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[140px] bg-white z-40 overflow-y-auto">
          <div className="p-4 space-y-4">
            <Link
              href="/customize"
              className="block w-full px-4 py-3 bg-black text-white text-center font-semibold rounded hover:bg-gray-800 transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              CUSTOMIZE
            </Link>
            <Link
              href="/corporate"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              CORPORATE
            </Link>
            <Link
              href="/gifting"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              GIFTING
            </Link>
            <hr className="my-4" />
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded transition-smooth"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
