"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
    {
        img: "/homeslider/homeimg1.jpeg",
        text: "Whether you’re looking for a conference speaker to oversee the proceedings from concept to delivery, a show caller who’s used to handling pressure, or a stage manager to run the day, we’re in the position to provide everything and everyone you need for any business event.",
    },
    {
        img: "/homeslider/homeimg3.jpeg",
        text: "Our teams of expert event technicians and production managers have years of experience generating distinctive and momentous experiences for numerous international and domestic high energy events. Armed with the most talented and creative event designers for booth buildings and branding.",
    },
    {
        img: "/homeslider/homeimg3.jpeg",
        text: "One of our services is to provide your next conference event needs. We are one-stop-event management company. We provide services As room booking, event work order requests, furniture rental, space rental contracts, AV System arrangements. Sound and lighting – microphones and speakers.",
    },
    {
        img: "/homeslider/homeimg4.jpg",
        text: "Our programs are for your inspiration; they are cross-section of what we have done in the past or what our customers like to experience. ",
    },
];

function HomeSlider() {
    return (
        <div className="relative w-full h-[500px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
                className="h-full"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-[500px]">
                            <Image
                                src={slide.img}
                                alt="Beef Slide"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-4">
                                <p className="text-white text-[13px] md:text-[15px] lg:text-[16px] font-medium max-w-2xl  font-serif">
                                    {slide.text}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HomeSlider