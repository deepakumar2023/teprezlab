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

      image: "/creativeevent/DSC_3535.jpg",
      // image1: [
      //   "/creativeevent/DSC_3535.jpg", 
      // ],
    },
    {
      title: "TRANSPORTATION RENTALS",
      image: "/creativeevent/DSC_1361.jpg",
      image1 :[
        "/Transporation rental/35 seater.jpg",
        "/Transporation rental/45 SEATER INSIDE.jpg",
        "/Transporation rental/50 Seater bus.jpg",
        "/Transporation rental/50seater inside.jpg",
        "/Transporation rental/bus .jpg",
        "/Transporation rental/Mercedes 1.jpg",
        "/Transporation rental/merecdes 4.jpg",
        "/Transporation rental/merecedes inside.jpg",
        "/Transporation rental/Picture9.png",
       
        
        

      ]
    },
    {
      title: "Outbound Expert Team",
      image: "/creativeevent/DSC_1419.jpg",
    },
    {
      title: "TRADITIONAL TEAM BUILDING",
      image: "/creativeevent/DSC_1428.jpg",

      image1:[

"/tradination team/DSC_0859.jpg",
"/tradination team/DSC_0924.jpg",
"/tradination team/DSC_2733.JPG",
"/tradination team/DSC_2934.JPG",
"/tradination team/DSC_3230.JPG",
"/tradination team/DSC_3233.JPG",
"/tradination team/DSC_4112.JPG",
"/tradination team/IMG_9433.JPG",
"/tradination team/IMG_9579.JPG",
"/tradination team/IMG_9596.JPG",
"/tradination team/IMG_9824.JPG",
"/tradination team/IMG-20241014-WA0056.jpg",
"/tradination team/IMG-20241014-WA0063.jpg",
"/tradination team/Picture6.jpg",
"/tradination team/Picture7.jpg", 

      ]
    },
    {
      // title: "GIVE BACK TO THE COMMUNITY",
      title: "SIS interpretation ",
      image: "/creativeevent/DSC_1426.jpg",
      image1: [
        "/SIS interpretation/download.jpeg",
        "/SIS interpretation/images (1).jpeg",
        "/SIS interpretation/images (2).jpeg",
        "/SIS interpretation/images.jpeg",
        "/SIS interpretation/Picture10.png",
        "/SIS interpretation/Picture11.png",
        "/SIS interpretation/w1200.jpg",
        "/SIS interpretation/WhatsApp Image 2024-10-12 at 18.12.58_2dcf413c.jpg",
        "/SIS interpretation/WhatsApp Image 2024-10-28 at 01.33.42_0a00a5a3.jpg",

      ]
    },
    {
      title: "In-house LED Screen/AV production – Branding",
      image: "/creativeevent/DSC_1390.jpg",
      image1: [
        "/Inhouse LED & AV - Branding/AHIT4417.JPG",
        "/Inhouse LED & AV - Branding/CHR_0202.JPG",
        "/Inhouse LED & AV - Branding/CHR_0251.JPG",
        "/Inhouse LED & AV - Branding/CHR_0252.JPG",
        "/Inhouse LED & AV - Branding/DSC_2844.JPG",
        "/Inhouse LED & AV - Branding/DSC_2868.JPG",
        "/Inhouse LED & AV - Branding/DSC00999.JPG",
        "/Inhouse LED & AV - Branding/Foto 0056.jpg",
        "/Inhouse LED & AV - Branding/Foto 0086.jpg",
        "/Inhouse LED & AV - Branding/Foto 0570.jpg",
        "/Inhouse LED & AV - Branding/Foto 1015.jpg",
        "/Inhouse LED & AV - Branding/Foto 2007.jpg",
        "/Inhouse LED & AV - Branding/IMG_4334.JPG",
        "/Inhouse LED & AV - Branding/JAD_0808.JPG",
        "/Inhouse LED & AV - Branding/JAD_0821.JPG",
        "/Inhouse LED & AV - Branding/JAD_0858.JPG",
        "/Inhouse LED & AV - Branding/JAD_1003.JPG",
        "/Inhouse LED & AV - Branding/JAD_1411.JPG",
        "/Inhouse LED & AV - Branding/LED.jpg",
        "/Inhouse LED & AV - Branding/P 1544.JPG",
        "/Inhouse LED & AV - Branding/Picture2.jpg",
        "/Inhouse LED & AV - Branding/Picture3.jpg",
        "/Inhouse LED & AV - Branding/Picture4.jpg",
        "/Inhouse LED & AV - Branding/Picture5.jpg",
        "/Inhouse LED & AV - Branding/Picture8.jpg",
        "/Inhouse LED & AV - Branding/TARGET EVENT  (150).jpg",
        "/Inhouse LED & AV - Branding/TARGET EVENT  (302).jpg",
        "/Inhouse LED & AV - Branding/Target Event Prezlab (26).jpg",
        "/Inhouse LED & AV - Branding/Target Event Prezlab (128).jpg",
        "/Inhouse LED & AV - Branding/Target Event Prezlab (205).jpg",
        "/Inhouse LED & AV - Branding/Target Event Prezlab (260).jpg",
      ],

    },
    {
      title: "VIP & LUXURY EXPERIENCES",
      image: "/creativeevent/DSC_1421.jpg",
    },
    {
      title: "SPEAKERS & WORKSHOPS",
      image: "/Speakers and workshops/APRA-09.jpg",
      image1: [

        "/Speakers and workshops/(141).jpg",
        "/Speakers and workshops/(167).jpg",
        "/Speakers and workshops/(545).jpg",
        "/Speakers and workshops/(628).jpg",
        "/Speakers and workshops/(631).jpg",
        "/Speakers and workshops/CHR_0655.JPG",
        "/Speakers and workshops/DSC_0099.JPG",
        "/Speakers and workshops/DSC_0121.JPG",
        "/Speakers and workshops/IMG_1734.JPG",
        "/Speakers and workshops/IMG_1750.JPG",
        "/Speakers and workshops/JAD_1362.JPG",
        "/Speakers and workshops/JAD_1557.JPG",
        "/Speakers and workshops/P 1613.JPG",
        "/Speakers and workshops/Target Event Prezlab  (95).jpg",
      ]
    },
    {
      title: "Product Launches",
      image: "/creativeevent/DSC_1408.jpg",
    },
    {
      title: "TEP ON-SITE ASSISTANCE",
      image: "/creativeevent/DJI_0934.jpg",
      image1 :[

         "/Tep OnSite/CHR_0220.JPG",
         "/Tep OnSite/CHR_0496.JPG",
         "/Tep OnSite/Foto 0537.jpg",
         "/Tep OnSite/IMG_4293.JPG",
         "/Tep OnSite/TARGET EVENT  (5).jpg",
         "/Tep OnSite/TARGET EVENT  (19).jpg",
         "/Tep OnSite/TARget Event - AUH (58).jpg",
         "/Tep OnSite/TARget Event - AUH (374).jpg",
         "/Tep OnSite/Target Event Prezlab  (29).jpg",
         "/Tep OnSite/Target Event Prezlab (12).jpg",
         "/Tep OnSite/Target Event Prezlab (73).jpg",
         "/Tep OnSite/Target Event Prezlab (80).jpg",
         "/Tep OnSite/Target Event Prezlab (282).jpg",

      ]
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
    <main className="bg-[#FAF9F6]  py-2   sm:py-5 md:py-5 px-4 md:px-20 ">
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
      {selectedService ? (
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {selectedService?.image1?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="rounded-lg w-full h-50  object-contain hover:scale-105 transition-transform"
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
