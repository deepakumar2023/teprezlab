import Image from 'next/image';
import React from 'react'


const companyLogos = [
  // { src: "/brands/cocacola.png", alt: "Coca-Cola" },
  { src: "/brands/amazon.png", alt: "Amazon" },
   { src: "/brands/logoelpida.webp", alt: "logoelpida" },
     { src: "/brands/aavyna.webp", alt: "aavyna" },
  
  { src: "/brands/sephora.png", alt: "Sephora" },
  // { src: "/brands/netflix.png", alt: "Netflix" },
  
  { src: "/brands/Emirat.png", alt: "Emirat" },
  { src: "/brands/eemarat.png", alt: "eemarat" },
  { src: "/brands/linkdin.png", alt: "linkdin" },
  // { src: "/brands/disney.png", alt: "disney" },
  { src: "/brands/creem.png", alt: "creem" },
  { src: "/brands/aqz.png", alt: "aqz" },
  { src: "/brands/wework.png", alt: "wework" },
  { src: "/brands/stc.png", alt: "stc" },
  { src: "/brands/mazi.png", alt: "mazi" },

 
  // add more...
];


function ShopTrustedCompaniess() {
  return (
    <section className="py-4 md:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[18px] sm:text-[24px] md:text-[32px] font-bold  text-center text-gray-900 mb-12 font-serif ">
          Trusted by 1000&apos;s of Companies
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {companyLogos.map((logo, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopTrustedCompaniess