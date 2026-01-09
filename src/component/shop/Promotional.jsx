import Image from "next/image";
import Link from "next/link";
import React from "react";

function Promotional() {
  return (
    <section className="py-4 md:py-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className=" text-[18px] sm:text-[24px] md:text-[32px] font-bold mb-4 font-serif">
              ELEVATE YOUR COMPANY WITH
              <br />
              CUSTOM PROMOTIONAL PRODUCT
            </h2>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/merchandise"
                className="inline-block px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-smooth"
              >
                CUSTOMIZE
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className=" rounded-xl h-64 flex items-center justify-center">
              <span className="text-gray-400">
                <Image
                  src="/brands/elevates.png"
                  alt="Promotional Banner"
                  width={400}
                  height={250}
                  className="object-contain rounded-xl"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotional;
