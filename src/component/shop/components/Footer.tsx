import Link from 'next/link'
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">merchlist</h3>
            <p className="text-sm mb-4">
              Custom T-shirts, Merchandise & Promotional Products. Quality printing with no minimums!
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-smooth">About Us</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-smooth">How It Works</Link></li>
              <li><Link href="/bulk-orders" className="hover:text-white transition-smooth">Bulk Orders</Link></li>
              <li><Link href="/corporate-merchandise" className="hover:text-white transition-smooth">Corporate Merchandise</Link></li>
              <li><Link href="/partner-with-us" className="hover:text-white transition-smooth">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/tshirts-polos" className="hover:text-white transition-smooth">T-shirts & Polos</Link></li>
              <li><Link href="/category/hoodies-jackets" className="hover:text-white transition-smooth">Hoodies & Jackets</Link></li>
              <li><Link href="/category/corporate-gifting" className="hover:text-white transition-smooth">Corporate Gifting</Link></li>
              <li><Link href="/category/drinkware" className="hover:text-white transition-smooth">Bottles & Mugs</Link></li>
              <li><Link href="/category/bags-backpacks" className="hover:text-white transition-smooth">Bags & Backpacks</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Office: Merchlist FZ LLC, in5 Design Centre, Dubai Design District, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:team@themerchlist.com" className="hover:text-white transition-smooth">
                  team@themerchlist.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:800-MERCH" className="hover:text-white transition-smooth">
                  800-MERCH
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2024 Merchlist. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-smooth">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-white transition-smooth">Terms & Conditions</Link>
              <Link href="/shipping-policy" className="hover:text-white transition-smooth">Shipping Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
