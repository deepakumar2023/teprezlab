// components/FAQSection.jsx
"use client";
import BannerAll from "@/component/Bannerall";
import { useState } from "react";

const faqData = [
  {
    question: "Can you handle destination events outside of our local area?",
    answer:
      "Yes, we have experience in organizing destination events. Our team can handle logistics, travel arrangements, and coordination for events taking place outside of the local area.",
  },
  {
    question: "Can you assist with finding and booking a suitable venue for my event?",
    answer:
      "Yes, we help you find and book venues that match your event requirements and budget.",
  },
  {
    question: "How far in advance should I book your services for my event?",
    answer: "We recommend booking at least 4-6 weeks in advance to ensure availability.",
  },
  {
    question: "How much does your event management service cost?",
    answer: "Our pricing depends on the scale and nature of your event. Contact us for a quote.",
  },
  {
    question: "How do I get started with hiring Target  for services?",
    answer:
      "You can fill out the Quick Contact form or call us directly to get started.",
  },
  {
    question: "What services does Target  events offer?",
    answer:
      "We provide full-service event planning, including corporate events, weddings, and private parties.",
  },
  {
    question: "Can you help with both small and large-scale events?",
    answer: "Yes, we manage events of all sizes, from intimate gatherings to large-scale productions.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <>

     <BannerAll
        title="FAQs"
        subtitle="Your journey starts here"
        image="/banner-image.jpg"
      />


     
       <div className="flex flex-col lg:flex-row gap-8 p-8 bg-white ">

      {/* FAQ Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium">{item.question}</span>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-700 border-t border-gray-200">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Contact Form */}
      <div className="w-full lg:w-1/2 bg-gradient-to-r  from-[#322785] to-purple-600 p-8 rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-6">Quick Contact</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded text-black bg-white border-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded text-black bg-white border-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 rounded text-black bg-white border-none"
          />
          <textarea
            placeholder="Enter your Message"
            className="w-full p-3 rounded text-black h-32 bg-white border-none"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-100"
          >
            SUBMIT NOW
          </button>
        </form>
      </div>
    </div>
    </>
 
  );
};

export default FAQSection;
