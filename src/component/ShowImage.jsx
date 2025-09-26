import React from 'react'

function ShowImage() {
     const services = [
    {
      title: "OUTDOOR ADVENTURES",
      image: "/corporate/show.jpg",
    },
    {
      title: "TRANSPORTATION RENTALS",
      image: "/corporate/show1.avif",
    },
    {
      title: "MEALS & CATERING",
    image: "/corporate/show2.avif",
    },
    {
      title: "TRADITIONAL TEAM BUILDING",
     image: "/corporate/show3.avif",
    },
    {
      title: "GIVE BACK TO THE COMMUNITY",
     image: "/corporate/show4.avif",
    },
    {
      title: "VENUE SELECTION & SITE VISITS",
      image: "/corporate/show5.avif",
    },
    {
      title: "VIP & LUXURY EXPERIENCES",
      image: "/corporate/show6.avif",
    },
    {
      title: "SPEAKERS & WORKSHOPS",
    image: "/corporate/show7.avif",
    },
    {
      title: "SPA TREATMENTS & RELAXATION",
      image: "/corporate/show8.avif",
    },
    {
      title: "AVT ON-SITE ASSISTANCE",
      image: "/corporate/WhatsApp1.jpg",
    },
    {
      title: "HOTEL & LODGING RESERVATIONS",
    image: "/corporate/show10.avif",
    },
    {
      title: "EDUCATIONAL & CULTURAL TOURS",
     image: "/corporate/show11.avif",
    },
  ];
  return (
    <main className="bg-[#FAF9F6]  px-6 md:px-20">
      <div className="max-w-7xl mx-auto ">
        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white text-sm font-semibold uppercase p-4 bg-black w-full    opacity-70 ">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default ShowImage