// // src/components/EventServices.jsx
// import React from "react";

// const services = [
//   { title: "BUSINESS EVENTS MANAGEMENT", img: "/dimondshape/business.jpg" },
//   { title: "SALES PROMOTION", img: "/dimondshape/SalesPromotion.jpg" },
//   { title: "DELEGATE MANAGEMENT", img: "/dimondshape/Delegate_Management.jpg" },
//   { title: "FOOD AND BEVERAGES", img: "/dimondshape/Food_Beverages.jpg" },
//   { title: "EXHIBITION ORGANIZATION AND MANAGEMENT", img: "/dimondshape/ExhibitionOrganization.jpg" },
//   { title: "VENUE IDENTIFICATION", img: "/dimondshape/Venue_Identification.jpg" },
//   { title: "REGISTRATIONS", img: "/dimondshape/Registrations.jpg" },
//   { title: "TRANSPORTATION", img: "/dimondshape/Transportation.jpg" },
//   { title: "PROFESSIONAL MANAGEMENT DEVELOPMENT TRAINING", img: "/dimondshape/ProfessionalManagement.png" },
//   { title: "DESTINATION MANAGEMENT", img: "/dimondshape/DestinationManagement.jpg" },
//   { title: "ACCOMMODATIONS", img: "/dimondshape/Accommodations.jpg" },
//   { title: "AV/PRODUCTION", img: "/dimondshape/AV_Production.jpg" },
//   { title: "LEGAL PERMITS", img: "/dimondshape/Legal_Permits.jpg" },
//   { title: "EXHIBITION SERVICES", img: "/dimondshape/Exhibition_Services.jpg" },
//   { title: "TEAM BUILDING ACTIVITIES", img: "/dimondshape/Team_Building.jpg" },
//   { title: "ONSITE SUPPORT", img: "/dimondshape/Onsite_support.jpg" },
// ];

// export default function EventServices() {
//   return (
//     <section className="bg-gray-50 py-16 px-6 md:px-20">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Section */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
//             {/* EVENT MANAGEMENT SERVICES */}

//             Conferences, Exhibitions and Destination Meetings
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             One of our services is to provide your next conference event needs.
//             We are a one-stop event management company. We provide services as
//             finding an event venue, assistance with visa's, tickets, hotel
//             accommodation, ground transportation theme dinners and excursions
//             like a full complete package in all countries.
//           </p>
//         </div>

//         {/* Right Section - Diamond Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
//           {services.map((service, index) => (
//             <div key={index} className="flex items-center justify-center p-4">
//               {/* Group wrapper for hover */}
//               <div className="group relative w-28 h-28 bg-white shadow-md transform rotate-45 flex items-center justify-center overflow-hidden transition-colors duration-300 hover:bg-gradient-to-r  from-[#322785] to-purple-600">
//                 {/* Inside content (straight) */}
//                 <div className="-rotate-45 flex flex-col items-center justify-between w-[65px] p-2">
//                   {/* Image on Top */}
//                   <div className="flex-1 flex items-center justify-center relative -top-3">
//                     <img
//                       src={service.img}
//                       alt={service.title}
//                       className="w-[50px] h-10 object-cover rounded-[8%]"
//                     />
//                   </div>

//                   {/* Text on Bottom */}
//                   <p className="text-[9px] text-center text-gray-800 transition-colors duration-300 group-hover:text-white">
//                     {service.title}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  { title: "BUSINESS EVENTS MANAGEMENT", img: "/dimondshape/business.jpg" },
  { title: "SALES PROMOTION", img: "/dimondshape/SalesPromotion.jpg" },
  { title: "DELEGATE MANAGEMENT", img: "/dimondshape/Delegate_Management.jpg" },
  { title: "FOOD AND BEVERAGES", img: "/dimondshape/Food_Beverages.jpg" },
  { title: "EXHIBITION ORGANIZATION AND MANAGEMENT", img: "/dimondshape/ExhibitionOrganization.jpg" },
  { title: "VENUE IDENTIFICATION", img: "/dimondshape/Venue_Identification.jpg" },
  { title: "REGISTRATIONS", img: "/dimondshape/Registrations.jpg" },
  { title: "TRANSPORTATION", img: "/dimondshape/Transportation.jpg" },
  { title: "PROFESSIONAL MANAGEMENT DEVELOPMENT TRAINING", img: "/dimondshape/ProfessionalManagement.png" },
  { title: "DESTINATION MANAGEMENT", img: "/dimondshape/DestinationManagement.jpg" },
  { title: "ACCOMMODATIONS", img: "/dimondshape/Accommodations.jpg" },
  { title: "AV/PRODUCTION", img: "/dimondshape/AV_Production.jpg" },
  { title: "LEGAL PERMITS", img: "/dimondshape/Legal_Permits.jpg" },
  { title: "EXHIBITION SERVICES", img: "/dimondshape/Exhibition_Services.jpg" },
  { title: "TEAM BUILDING ACTIVITIES", img: "/dimondshape/Team_Building.jpg" },
  { title: "ONSITE SUPPORT", img: "/dimondshape/Onsite_support.jpg" },
];

export default function EventSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* ---------- LEFT SECTION ---------- */}
        <div data-aos="fade-right" className="text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl md:text-4xl   font-serif font-bold text-blue-600 mb-6">
            Conferences, Exhibitions and Destination Meetings
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            One of our services is to provide your next conference event needs.
            We are a one-stop event management company. We provide services such
            as finding an event venue, assistance with visas, tickets, hotel
            accommodation, ground transportation, theme dinners, and excursions —
            offering a complete package in all countries.
          </p>
        </div>

        {/* ---------- RIGHT SECTION (SWIPER) ---------- */}
        <div data-aos="fade-left">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="w-full"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-xl shadow-md">
                  {/* Background Image */}
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {/* Overlay Title */}
                  {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-2 text-center">
                    <h3 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold uppercase tracking-wide">
                      {service.title}
                    </h3>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

