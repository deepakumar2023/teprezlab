"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function EventSlider() {
  const slides = [
    {
      src: "/creativeevent/img1.jpg",
      alt: "Concert Event",
    },
    {
      src: "/creativeevent/test2.jpg",
      alt: "African Event",
    },
    {
      src: "/creativeevent/test3.jpg",
      alt: "Audience Event",
    },
    {
      src: "/creativeevent/test4.jpg",
      alt: "Audience Event",
    },
    {
      src: "/creativeevent/test5.jpg",
      alt: "Audience Event",
    },
    {
      src: "/creativeevent/test6.jpg",
      alt: "Audience Event",
    },
    {
      src: "/creativeevent/test7.jpg",
      alt: "Audience Event",
    },
    {
      src: "/creativeevent/test8.jpg",
      alt: "Audience Event",
    },
    {
      src: "/creativeevent/test9.jpg",
      alt: "Audience Event",
    },
    {
      src: "/creativeevent/test10.jpg",
      alt: "Audience Event",
    },
    {
      src: "/creativeevent/test11.jpg",
      alt: "Audience Event",
    },
    {
      src: "/creativeevent/test12.jpg",
      alt: "Audience Event",
    },
    {
      src: "/creativeevent/test13.jpg",
      alt: "Audience Event",
    },
   
    {
      src: "/creativeevent/test15.jpg",
      alt: "Audience Event",
    },
    {
      src: "/creativeevent/test16.jpg",
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
                className="w-full h-64 sm:h-80 md:h-96  object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
