import React from 'react'
import ShowImage from './ShowImage';
import Link from 'next/link';

function TestExperience() {
 const experiences = [
    {
      title: "Creative Problem-Solving Retreats",
      description:
        "Take your team to an inspiring setting where they can tackle challenges with fresh perspectives.",
    },
    {
      title: "Leadership Alignment Offsites",
      description:
        "Refocus your leadership team with strategic planning in a calm, distraction-free environment.",
    },
    {
      title: "Cultural Immersion Experiences",
      description:
        "Combine business with culture by hosting your retreat in a location rich in history and charm.",
    },
    {
      title: "Adventure Style Retreats",
      description:
        "Mix work and adrenaline with activities like hiking, kayaking, or zip-lining to spark team fun.",
    },
  ];

  return (

    <>
    <main className="bg-[#FAF9F6]  flex items-center justify-center py-16 px-6 md:px-20">
      <div className=" text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Signature Experiences
        </h2>
        <p className="mt-3 text-gray-600">
          Looking for inspiration? Here are just a few examples of the retreats
          we can design:
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <h3 className="font-semibold text-lg text-gray-900">
                {exp.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed  text-left">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
     
    </main>
       <ShowImage/>


       <main className="bg-[#FAF9F6] flex items-center justify-center py-10 px-5 md:px-20">
      <div className=" w-full">
        <div className="bg-[#111] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Start Planning Your Retreat Today
            </h2>
            <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
              Your team deserves more than just another meeting. They deserve an
              experience that energizes, inspires, and connects them. Partner
              with Target Event Tours to create a retreat that achieves your
              company’s goals while leaving a lasting impression.
            </p>

            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-medium rounded-full shadow-md hover:shadow-lg transition">
             <Link href={"/contact-us"}>  Let&apos;s Get Started </Link>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/corporate/WhatsApp Image.jpg"
              alt="Retreat Event"
              className="rounded-xl shadow-md w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
export default  TestExperience