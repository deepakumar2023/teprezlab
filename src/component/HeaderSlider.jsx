// src/components/VideoSection.jsx
import React from "react";

export default function VideoSection() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/images/TEP_vid3.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Over Video */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold   font-serif mb-4 md:text-left sm:text-left">
            We create mind blowing events in a changing world
          </h1>
        </div>
      </div>
    </section>
  );
}
