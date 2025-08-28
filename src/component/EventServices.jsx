// src/components/EventServices.jsx
import React from "react";

const services = [
  { title: "BUSINESS EVENTS MANAGEMENT", img: "/img/business.jpg" },
  { title: "SALES PROMOTION", img: "/img/sales.jpg" },
  { title: "DELEGATE MANAGEMENT", img: "/img/delegate.jpg" },
  { title: "FOOD AND BEVERAGES", img: "/img/food.jpg" },
  { title: "EXHIBITION ORGANIZATION AND MANAGEMENT", img: "/img/exhibition.jpg" },
  { title: "VENUE IDENTIFICATION", img: "/img/venue.jpg" },
  { title: "REGISTRATIONS", img: "/img/register.jpg" },
  { title: "TRANSPORTATION", img: "/img/transport.jpg" },
  { title: "PROFESSIONAL MANAGEMENT DEVELOPMENT TRAINING", img: "/img/training.jpg" },
  { title: "DESTINATION MANAGEMENT", img: "/img/destination.jpg" },
  { title: "ACCOMMODATIONS", img: "/img/hotel.jpg" },
  { title: "AV/PRODUCTION", img: "/img/av.jpg" },
  { title: "LEGAL PERMITS", img: "/img/legal.jpg" },
  { title: "EXHIBITION SERVICES", img: "/img/exhibition2.jpg" },
  { title: "TEAM BUILDING ACTIVITIES", img: "/img/team.jpg" },
  { title: "ONSITE SUPPORT", img: "/img/onsite.jpg" },
];

export default function EventServices() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            EVENT MANAGEMENT SERVICES
          </h2>
          <p className="text-gray-700 leading-relaxed">
            One of our services is to provide your next conference event needs.
            We are a one-stop event management company. We provide services as
            finding an event venue, assistance with visa's, tickets, hotel
            accommodation, ground transportation theme dinners and excursions
            like a full complete package in all countries.
          </p>
        </div>

        {/* Right Section - Diamond Grid */}
        <div className="grid grid-cols-4 gap-6 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative transform rotate-45 w-28 h-28 bg-white shadow-md flex items-center justify-center overflow-hidden"
            >
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="absolute w-full h-full object-cover -rotate-45"
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center -rotate-45 p-2">
                <p className="text-white text-[10px] font-semibold text-center leading-tight">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
