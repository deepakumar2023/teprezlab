"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function EventSlider() {
  const slides = [
    {
      src: "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
      alt: "Concert Event",
    },
    {
      src: "https://cdn.pixabay.com/photo/2020/02/17/11/58/africa-4856283_1280.jpg",
      alt: "African Event",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754_1280.jpg",
      alt: "Audience Event",
    },
  ];

  return (
    <section className="bg-[#404040] text-center py-16 px-4">
      <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
        CREATIVE EVENTS WITH A CLASSIC STYLE
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-sm sm:text-base leading-relaxed text-left">
        Target Event Prezlab aspires to create amazing work for our clients! Our
        culture inspired from our values of creativity, passion, curiosity,
        generosity, and intelligence motivates and challenges us to deliver
        amazing events and experiences for many of the UAE's admired royal
        events, government sectors, and corporate businesses. Listed below are
        some of our long-standing customers.
      </p>

      <div className="relative max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          className="rounded-lg overflow-hidden"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
