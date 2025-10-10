"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "971568913030"; // ✅ remove spaces for wa.me link
  const message = "Hello";
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed right-6 bottom-20 z-50">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center
          w-12 h-12                 
          bg-[#25D366]             
          text-white
          rounded-full              
          hover:scale-110
          hover:bg-[#1EBE57]
          transition-all duration-300
        "
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
