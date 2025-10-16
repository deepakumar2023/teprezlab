"use client";
import Image from "next/image";
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function Page() {
  const images = [
    { src: "/galleryimg/image1.jpg", alt: "Corporate event with round table setup" },
    { src: "/galleryimg/image2.jpg", alt: "Outdoor team activity" },
    { src: "/galleryimg/image3.jpg", alt: "Event banner and displays" },
    { src: "/galleryimg/image4.jpg", alt: "Wooden ship model on display" },
    { src: "/galleryimg/image5.jpg", alt: "Event staff with safety gear" },
    { src: "/galleryimg/image6.jpg", alt: "Luxury cars at an event" },
    { src: "/galleryimg/image7.jpg", alt: "Luxury cars at an event" },
    { src: "/galleryimg/image8.jpg", alt: "Luxury cars at an event" },
    { src: "/galleryimg/image9.jpg", alt: "Luxury cars at an event" },
    { src: "/galleryimg/image10.jpeg", alt: "Luxury cars at an event" },
    { src: "/galleryimg/image11.jpeg", alt: "Luxury cars at an event" },
    { src: "/galleryimg/image12.jpeg", alt: "Luxury cars at an event" },
    { src: "/galleryimg/image13.jpeg", alt: "Luxury cars at an event" },
    { src: "/galleryimg/image14.jpeg", alt: "Luxury cars at an event" },
    { src: "/galleryimg/image15.jpeg", alt: "Luxury cars at an event" },
    { src: "/galleryimg/image16.jpeg", alt: "Luxury cars at an event" },
    { src: "/galleryimg/image17.jpeg", alt: "Luxury cars at an event" },
    { src: "/galleryimg/image18.jpeg", alt: "Luxury cars at an event" },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="bg-[#404040] min-h-screen py-12 px-6 ">
        <h2 className="text-white text-3xl font-bold text-center mb-10 mt-10">Gallery</h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setCurrentIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {currentIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            {/* Close button */}
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
            >
              <X size={32} />
            </button>

            {/* Left Arrow */}
            <button
              onClick={showPrev}
              className="absolute left-6 text-white hover:text-gray-300 transition"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image */}
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
            />

            {/* Right Arrow */}
            <button
              onClick={showNext}
              className="absolute right-6 text-white hover:text-gray-300 transition"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </section>

      {/* Wave Section */}
      <section className="relative bg-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/galleryimg/wave2.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center py-20 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
            Target Event Prezlab
          </h2>
          <p className="text-gray-700 max-w-2xl mb-8 text-base sm:text-lg text-left">
            If you’re considering any one of our services whether that’s
            utilising our creative team to project-manage your event, calling on
            our technical expertise, we are here to assist you.
          </p>
          <a
            href="/contact-us"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>
    </>
  );
}

export default Page;
