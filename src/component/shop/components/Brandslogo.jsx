"use client";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

function Brandslogo() {
  const brands = [
    {
      name: "Nike",
      image: "/brands/Adidas-logo-black-1.png",
      alt: "Nike brand logo",
    },
    {
      name: "Adidas",
      image: "/brands/Nike-logo.png.avif",
      alt: "Adidas brand logo",
    },
    {
      name: "Apple",
      image: "/brands/Apple-Logo-1.png.avif",
      alt: "Apple brand logo",
    },
    {
      name: "Moleskine",
      image: "/brands/Moleskine-Emblem-scaled.png",
      alt: "Moleskine brand logo",
    },
    {
      name: "Cross",
      image: "/brands/Cross_Secondary_Logo_Horizontal_Black_1_color.png",
      alt: "Cross brand logo",
    },
    {
      name: "Titleist",
      image: "/brands/Titleist-logo.png.avif",
      alt: "Titleist brand logo",
    },
    {
      name: "New Era",
      image: "/brands/new-era.png.avif",
      alt: "New Era brand logo",
    },
    {
      name: "Swiss Peak",
      image: "/brands/swisspeak.png.avif",
      alt: "Swiss Peak brand logo",
    },
  ];

  return (
    <div>
      {/* Brand Logos Section */}
      <section className="py-3  md:py-8  bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-serif ">
            Customize world-leading brands
          </h2>

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
            className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-6 items-center"
          >
            {brands?.map((brand, idx) => (
              <SwiperSlide key={idx}>
                <div
                  key={idx}
                  className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  {/* Fixed size logo box */}
                  <div className="w-[100px] h-[60px] flex items-center justify-center">
                    <Image
                      src={brand.image}
                      alt={brand.alt}
                      width={100}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Brandslogo;
