import ContactForm from '@/component/ContactForm';
import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

function page() {
  return (
      <>
 <section className="bg-gray-800 text-white py-16 px-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">CONTACT US</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Address */}
          <div className="bg-white text-black rounded-2xl shadow-lg p-2 flex flex-col items-center">
            <FaMapMarkerAlt className="text-3xl text-blue-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">OUR MAIN OFFICE</h3>
            <p className="text-sm text-center">
              Target Event Prezlab. <br />
              Block B, Office B09-182, Sharjah Research 
              <br/>
              Technology and Innovation Park, Sharjah,
              <br />
              United Arab Emirates <br />
              PO Box: 66636
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white text-black rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <FaPhoneAlt className="text-3xl text-blue-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">PHONE NUMBER</h3>
            <p className="text-sm">Mobile: +971 566 785 210</p>
            <p className="text-sm">Land line: +971 4250 5173</p>
          </div>

          {/* Email */}
          <div className="bg-white text-black rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <FaEnvelope className="text-3xl text-blue-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">EMAIL</h3>
            <a href="mailto:operations@teprezlab.com" className="text-blue-600 text-sm">
              operations@teprezlab.com
            </a>
          </div>

          {/* Website */}
          <div className="bg-white text-black rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <FaGlobe className="text-3xl text-blue-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">WEBSITE</h3>
            <a href="https://www.teprezlab.com" target="_blank" className="text-blue-600 text-sm">
              www.teprezlab.com
            </a>
          </div>
        </div>
      </div>
    
    </section>

  
      <ContactForm/></>
  )
}

export default page