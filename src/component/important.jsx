

"use client"
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // React Icons

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 flex items-center justify-center 
        w-12 h-12 rounded-full shadow-lg transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} 
        bg-[#0083FF] hover:bg-blue-800
      `}
    >
      <FaArrowUp className="text-white text-2xl transition-transform duration-200 hover:scale-125" />
    </button>
  );
};

export default ScrollToTop;
