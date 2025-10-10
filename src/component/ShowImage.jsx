// import React from 'react'

// function ShowImage() {
//      const services = [
//     {
//       title: "OUTDOOR ADVENTURES",
//       image: "/creativeevent/DSC_3535.jpg",
//     },
//     {
//       title: "TRANSPORTATION RENTALS",
//       image: "/creativeevent/DSC_1361.jpg",
//     },
//     {
//       title: "MEALS & CATERING",
//     image: "/creativeevent/DSC_1419.jpg",
//     },
//     {
//       title: "TRADITIONAL TEAM BUILDING",
//      image: "/creativeevent/DSC_1428.jpg",
//     },
//     {
//       // title: "GIVE BACK TO THE COMMUNITY",
//       title: "Sustainability And greenery plants etc",
//      image: "/creativeevent/DSC_1426.jpg",
//     },
//     {
//       title: "VENUE SELECTION & SITE VISITS",
//       image: "/creativeevent/DSC_1390.jpg",
//     },
//     {
//       title: "VIP & LUXURY EXPERIENCES",
//       image: "/creativeevent/DSC_1421.jpg",
//     },
//     {
//       title: "SPEAKERS & WORKSHOPS",
//     image: "/creativeevent/DSC_1399.jpg",
//     },
//     {
//       title: "SPA TREATMENTS & RELAXATION",
//       image: "/creativeevent/DSC_1408.jpg",
//     },
//     {
//       title: "TEP ON-SITE ASSISTANCE",
//       image: "/creativeevent/DJI_0934.jpg",
//     },
//     {
//       title: "HOTEL & LODGING RESERVATIONS",
//     image: "/creativeevent/DSC_1360.jpg",
//     },
//     {
//       title: "EDUCATIONAL & CULTURAL TOURS",
//      image: "/creativeevent/DSC_1375.jpg",
//     },
//   ];
//   return (
//     <main className="bg-[#FAF9F6]  px-6 md:px-20">
//       <div className="max-w-7xl mx-auto ">
//         {/* Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
//             >
//               {/* Background Image */}
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
//                 <p className="text-white text-sm font-semibold uppercase p-4 bg-black w-full    opacity-70 ">
//                   {service.title}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }

// export default ShowImage




"use client";
import React, { useState } from "react";

function ShowImage() {
     const services = [
    {
      title: "OUTDOOR ADVENTURES",

       image:  "/creativeevent/DSC_3535.jpg",
      // image1: [
      //   "/creativeevent/DSC_3535.jpg", 
      // ],
    },
    {
      title: "TRANSPORTATION RENTALS",
      image: "/creativeevent/DSC_1361.jpg",
    },
    {
      title: "Outbound Expert Team",
    image: "/creativeevent/DSC_1419.jpg",
    },
    {
      title: "TRADITIONAL TEAM BUILDING",
     image: "/creativeevent/DSC_1428.jpg",
    },
    {
      // title: "GIVE BACK TO THE COMMUNITY",
      title: "SIS interpretation ",
     image: "/creativeevent/DSC_1426.jpg",
    },
    {
      title: "In-house LED Screen/AV production – Branding",
      image: "/creativeevent/DSC_1390.jpg",
 image1: [
        "/creativeevent/DSC_3535.jpg", 
      ],
      
    },
    {
      title: "VIP & LUXURY EXPERIENCES",
      image: "/creativeevent/DSC_1421.jpg",
    },
    {
      title: "SPEAKERS & WORKSHOPS",
    image: "/creativeevent/DSC_1399.jpg",
    },
    {
      title: "Product Launches",
      image: "/creativeevent/DSC_1408.jpg",
    },
    {
      title: "TEP ON-SITE ASSISTANCE",
      image: "/creativeevent/DJI_0934.jpg",
    },
    {
      title: "HOTEL & LODGING RESERVATIONS",
    image: "/creativeevent/DSC_1360.jpg",
    },
    {
      title: "EDUCATIONAL & CULTURAL TOURS",
     image: "/creativeevent/DSC_1375.jpg",
    },
  ];
  const [selectedService, setSelectedService] = useState(null);

  return (
    <main className="bg-[#FAF9F6] px-6 md:px-20 py-10">
      <div className=" mx-auto">
        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, idx) => (
  <div
    key={idx}
    onClick={() => {
      if (service.image1 && service.image1.length > 0) {
        setSelectedService(service);
      }
    }}
    className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
  >
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
      <p className="text-white text-sm font-semibold uppercase p-4 bg-black/60 w-full">
        {service.title}
      </p>
    </div>
  </div>
))}
  </div>
      </div>

      {/* Modal */}
     {selectedService ?  (
  <div
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    onClick={() => setSelectedService(null)}
  >
    <div
      className="bg-white rounded-2xl max-w-[1200px] w-full p-6 relative max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedService(null)}
        className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
      >
        ✕
      </button>

      {/* Title */}
      <h2 className="text-xl font-bold mb-4 text-center text-[#322785]">
        {selectedService.title}
      </h2>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {selectedService?.image1?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="rounded-lg w-full h-40 object-cover hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  </div>
) : ""}

    </main>
  );
}

export default ShowImage;
