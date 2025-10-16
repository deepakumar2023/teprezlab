"use client";
import React from "react";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.934256011325!2d55.36139307585858!3d25.26774241619693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d00a95a2fb7%3A0x2db80bd876783cdc!2sSharjah%20Research%20Technology%20and%20Innovation%20Park!5e0!3m2!1sen!2sae!4v1728574733890!5m2!1sen!2sae";

// ✅ Add dynamic link for full Google Maps page
const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps/place/Sharjah+Research+Technology+and+Innovation+Park/@25.2677424,55.3613931,15z/data=!4m6!3m5!1s0x3e5f5d00a95a2fb7:0x2db80bd876783cdc!8m2!3d25.2677424!4d55.3613931!16s%2Fg%2F11h_4yfpn_";

export default function GoogleLocationMap() {
  return (
    <section className="w-full mx-auto px-10 py-8">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        {/* Map iframe */}
        <div className="w-full h-64 sm:h-80 md:h-96">
          <iframe
            title="Target Event Prezlab location"
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Info Card Overlay */}
        <div className="absolute left-3 top-4 min-w-[220px] max-w-xs bg-white/95 backdrop-blur-sm rounded-lg border border-gray-200 shadow-md p-3 text-sm">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-800">
                Target Event Prezlab
              </h3>

              <p className="text-xs text-gray-500 mt-1 leading-snug">
                Sharjah Research Technology and Innovation Park -
                <br />
                {/* Al Nahda St - Dubai Int'l Airport - Dubai - UAE */}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-[2px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      className="w-3 h-3 text-yellow-500"
                      fill="currentColor"
                    >
                      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896l-7.336 3.874 1.402-8.173L.132 9.21l8.2-1.192z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-700 font-medium">4.8</span>
                <span className="text-xs text-gray-400">•</span>
                <a
                  href={GOOGLE_MAPS_LINK + "?hl=en"}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                >
                  28 reviews
                </a>
              </div>
            </div>

            {/* Directions icon */}
            <div className="flex-shrink-0">
              <a
                href={GOOGLE_MAPS_LINK + "/?hl=en&dir_action=navigate"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white shadow-sm"
                aria-label="Directions"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L19 21l-7-4-7 4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-3 flex items-center justify-between gap-2">
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-blue-600 hover:underline"
            >
              View larger map
            </a>

            <span className="text-xs text-gray-400">Map • Google</span>
          </div>
        </div>

        {/* Mobile fallback info card */}
        {/* <div className="md:hidden mt-2">
          <div className="mt-3 bg-white rounded-md p-3 text-xs text-gray-700 shadow-sm">
            <div className="font-medium">Target Event Prezlab</div>
            <div className="text-gray-500 mt-1">
              Sharjah Research Technology and Innovation Park - Al Nahda St -
              Dubai Int'l Airport - Dubai - UAE
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
