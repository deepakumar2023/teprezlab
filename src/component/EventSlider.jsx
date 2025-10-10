"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function EventSlider() {
  const slides = [
   
   
    {
      src: "/creativeevent/Homepage(1).jpg",
      alt: "Homepage1",
    },
    {
      src: "/creativeevent/Homepage(2).jpg",
      alt: "Homepage2",
    },
    {
      src: "/creativeevent/Homepage(3).jpg",
      alt: "Homepage3",
    },
    {
      src: "/creativeevent/Homepage(4).jpg",
      alt: "Homepage4",
    },
    {
      src: "/creativeevent/Homepage(5).jpg",
      alt: "Homepage5",
    },
    {
      src: "/creativeevent/Homepage(6).jpg",
      alt: "Homepage6",
    },
    {
      src: "/creativeevent/Homepage(7).jpg",
      alt: "Homepage7",
    },
    {
      src: "/creativeevent/Homepage(8).jpg",
      alt: "Homepage8",
    },
    {
      src: "/creativeevent/Homepage(9).jpg",
      alt: "Homepage9",
    },
    {
      src: "/creativeevent/Homepage(10).jpg",
      alt: "Homepage10",
    },
    {
      src: "/creativeevent/Homepage (11).JPG",
      alt: "Homepage11",
    },
    {
      src: "/creativeevent/Homepage (12).JPG",
      alt: "Homepage12",
    },
    {
      src: "/creativeevent/Homepage(13).jpg",
      alt: "Homepage13",
    },
    {
      src: "/creativeevent/Homepage(14).jpg",
      alt: "Homepage14",
    },
    {
      src: "/creativeevent/Homepage(15).jpg",
      alt: "Homepage15",
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
   
    

    
   
  ];

  return (
    <section className="bg-[#2a2f8b] text-center py-16 px-4">
      <h3 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold font-serif mb-4">
       Creative Events with a Classic Style
      </h3>
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
