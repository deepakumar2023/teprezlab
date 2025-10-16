
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { X, ChevronLeft, ChevronRight } from "lucide-react";


const Banner = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (idx) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));



  const images = [
    "/Inhouse LED & AV - Branding/Target Event Prezlab (205).jpg",
    "/Inhouse LED & AV - Branding/Target Event Prezlab (26).jpg",
    "/Speakers and workshops/APRA-09.jpg",
     "/Tep OnSite/Target Event Prezlab (12).jpg",
    "/Speakers and workshops/JAD_1557.JPG",
    "/Tep OnSite/Target Event Prezlab (282).jpg",
  
    "/tradination team/IMG-20241014-WA0056.jpg",
    "/tradination team/DSC_4112.JPG",
    
  
    // "/corporate/DSC_2036.jpg",
    // "/corporate/DSC_2051.jpg",
    // "/corporate/DSC_3749.jpg",
    // "/corporate/DSC_1789.jpg",
    // "/corporate/DSC_1990.jpg",
    // "/corporate/DSC_1984.jpg",
    // "/corporate/DSC_1749.jpg",
    "/corporate/DSC_1819.jpg",
    // "/corporate/DSC_3758.jpg",
    "/corporate/DSC_1783.jpg",


  ];

  return (

    <>
      {/* <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[60vh] overflow-hidden">
        <Image
          src={"/corporate/banner.avif"}
          className="absolute top-0 left-0 w-full h-full object-cover"
          width={100}
          height={100}
          alt='test'
        />
  
        <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 md:text-left sm:text-left text-left ">
              We create mind blowing events in a changing world
            </h1>
          </div>
        </div>
      </section> */}

      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[60vh] overflow-hidden">
  <Image
    src={"/corporate/banner.avif"}
    className="absolute top-0 left-0 w-full h-full object-cover"
    width={100}
    height={100}
    alt="test"
  />
  {/* Content Over Image */}
  <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
    <div className="text-center text-white max-w-3xl">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 text-center">
        We create mind blowing events in a changing world
      </h1>
    </div>
  </div>
</section>



      <section className="bg-[#f8f8f3] py-5   sm:py-10 md:py-10">
        {/* Top Text */}
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-gray-700  sm:text-base leading-relaxed text-[13px] sm:text-[18px]  md:text-[18px]   font-serif text-left">
            Transform the way your team collaborates, strategizes, and innovates with expertly curated corporate retreats and offsite experiences.
            At Target Event Tours, we design retreats that go beyond the typical work environment, offering a perfect balance of productivity and relaxation to foster creativity, deepen connections, and elevate company culture.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="mt-10 px-6">
          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            rewind={false}
            speed={4000}
            loop={true}
            slidesPerView={6}
            spaceBetween={20}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 6 },
              1280: { slidesPerView: 6 },
            }}
            grabCursor={true}
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openModal(idx)}
                >
                  <img
                    src={src}
                    alt={`Slide ${idx}`}
                    className="w-full h-auto object-contain"   // 👈 auto height
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Modal */}
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 text-white p-2 hover:text-gray-300"
              >
                <X size={32} />
              </button>

              {/* Left Arrow */}
              <button
                onClick={prevImage}
                className="absolute left-5 text-white p-2 hover:text-gray-300"
              >
                <ChevronLeft size={48} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextImage}
                className="absolute right-5 text-white p-2 hover:text-gray-300"
              >
                <ChevronRight size={48} />
              </button>

              {/* Image */}
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
              />
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Banner