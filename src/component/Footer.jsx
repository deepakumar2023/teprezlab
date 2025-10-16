// src/components/Footer.jsx
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r   from-purple-600  to-[#322785] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <Link href="/" className="flex items-center mb-4">
            <img src="/images/TEP_logo5.png" alt="Logo" className="h-12 mb-4" />
          </Link>
          <p className=" text-[13px] sm:text-[14px]  md:text-[14px]">
            We provide high-quality services tailored to your needs. Let’s build
            something great together.
          </p>
        </div>

        {/* Middle Section - Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">

            <li>
              <Link href="/about" className="hover:text-blue-400">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-400">Services</Link>
            </li>
             <li>
              <Link href="/corporate-retreats" className="hover:text-blue-400">Corporate</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-blue-400">Gallery</Link>
            </li>

           
           
            <li>
              <Link href="/contact-us" className="hover:text-blue-400">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p>Target Event Prezlab.</p>
          <p>Block B, Office B09-182, Sharjah Research</p>
          <p>Technology and Innovation Park, Sharjah,</p>
          <p>United Arab Emirates</p>
          <p>Email : operations@teprezlab.com</p>
          <p>Phone : +971 568913030</p>


          <div className="flex space-x-5 mt-4">
            <a href="https://www.facebook.com/100087765681692/photos/625281963740654/?_rdr" className="hover:text-[#1877F2] text-[19px]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#075E54] text-[19px]"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/teprezlab/?hl=en" className="hover:text-[#405DE6] text-[19px]"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/target-event-prezlab-tep/?originalSubdomain=ae" className="hover:text-blue-400 text-[19px]"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © 2025 Your Company. All rights reserved.
      </div>
    </footer>
  );
}
