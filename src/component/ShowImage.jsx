import React from 'react'

function ShowImage() {
     const services = [
    {
      title: "OUTDOOR ADVENTURES",
      image: "/creativeevent/DSC_3535.jpg",
    },
    {
      title: "TRANSPORTATION RENTALS",
      image: "/creativeevent/DSC_1361.jpg",
    },
    {
      title: "MEALS & CATERING",
    image: "/creativeevent/DSC_1419.jpg",
    },
    {
      title: "TRADITIONAL TEAM BUILDING",
     image: "/creativeevent/DSC_1428.jpg",
    },
    {
      // title: "GIVE BACK TO THE COMMUNITY",
      title: "Sustainability And greenery plants etc",
     image: "/creativeevent/DSC_1426.jpg",
    },
    {
      title: "VENUE SELECTION & SITE VISITS",
      image: "/creativeevent/DSC_1390.jpg",
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
      title: "SPA TREATMENTS & RELAXATION",
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