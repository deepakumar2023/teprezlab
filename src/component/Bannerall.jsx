// components/Banner.jsx
import React from "react";

const BannerAll = ({ title, subtitle, image }) => {
  return (
    <div
      className="relative w-full h-64 md:h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r  from-[#322785] to-purple-600 bg-opacity-50 flex flex-col items-center justify-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-lg md:text-2xl mt-2 text-center">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default BannerAll;
