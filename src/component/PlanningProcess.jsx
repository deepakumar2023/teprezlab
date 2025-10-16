
import { GrGroup } from "react-icons/gr";
export default function PlanningProcess() {
  return (
    <section className="bg-[#f9f8f3] py-8  sm:py-10 md:py-8 px-6 md:px-20 text-center">
      <div className="text-sm text-blue-600 font-semibold uppercase mb-2 font-serif">
        Our Planning Process
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-5 ">
        Simple, Seamless, Stress-Free
      </h2>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative">
        {/* Dashed Line Connector */}
        <div className="hidden md:block absolute top-6 left-[10%] right-[10%] border-t-2 border-dashed border-gray-300 z-0"></div>

        {/* Step 1 */}
        <div className="relative z-10 flex flex-col items-center max-w-xs mx-auto">
          <div className="bg-white rounded-full p-3 mb-4 shadow-md">
          

            <GrGroup   className="h-6 w-6 text-blue-500"/>
          </div>
          <h3 className="font-semibold text-lg mb-2 font-serif text-[16px] sm:text-[18px]  md:text-[18px] ">Consultation</h3>
          <p className="text-gray-600 font-serif text-left  text-[13px] sm:text-[14px]  md:text-[14px]">
            Share your vision with us. Our team will listen to your goals, preferences, and any special requests.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative z-10 flex flex-col items-center max-w-xs mx-auto">
          <div className="bg-white rounded-full p-3 mb-4 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2 font-serif text-[16px] sm:text-[18px]  md:text-[18px]">Customization</h3>
          <p className="text-gray-600 font-serif text-left  text-[13px] sm:text-[14px]  md:text-[14px]">
            We design a tailored experience based on your needs, offering personalized recommendations and expert guidance.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative z-10 flex flex-col items-center max-w-xs mx-auto">
          <div className="bg-white rounded-full p-3 mb-4 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2 font-serif text-[16px] sm:text-[18px]  md:text-[18px]">Execution</h3>
          <p className="text-gray-600 font-serif text-left  text-[13px] sm:text-[14px]  md:text-[14px]">
            From logistics to on-site management, we handle everything, ensuring a smooth and unforgettable event.
          </p>
        </div>
      </div>

      {/* Contact Button */}
      <div className="mt-12">
        <a
          href="/contact-us"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
