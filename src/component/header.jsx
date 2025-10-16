"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);


      useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", link: "/" },
    // { name: "About", link: "/about" },
     { name: "Corporate", link: "/corporate-retreats" },
    { name: "Services", link: "/services" },
   
    { name: "Gallery", link: "/gallery" },
    { name: "FAQs", link: "/faqs" },
    { name: "Career", link: "/carrier" },
    { name: "Contact Us", link: "/contact-us" },
  
  ];

  return (
    <header  className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "fixed bg-white shadow-md py-2"
          : "absolute bg-transparent py-4"
      }`}>
      <div className=" mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <img
              src="/TEP_logo5.png"
              alt="Logo"
              className="h-15 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={`font-semibold transition ${
                scrolled ? "text-black hover:text-blue-500" : "text-white hover:text-blue-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-2xl ${
            scrolled ? "text-black" : "text-white"
          }`}
          aria-label="Open item"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col space-y-6 p-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className="block text-lg font-medium hover:text-blue-400"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
