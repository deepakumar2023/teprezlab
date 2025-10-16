
import { MdEventNote } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { FaMapLocationDot } from "react-icons/fa6";

export default function WhyUs() {
  return (
    <section className="bg-[#f9f8f3] py-5   sm:py-10 md:py-10 px-6 md:px-20">
      <div className="text-sm text-blue-600 font-semibold uppercase mb-2">About</div>
      <h2 className="text-4xl font-bold  text-gray-900 mb-2">Why Us?</h2>
      <p className="text-gray-700 max-w-2xl mb-5  text-[13px] sm:text-[18px]  md:text-[18px]   font-serif">
        Our tailored corporate retreats are more than just an escape from the office—
        they’re an investment in your team’s growth and success. Here’s what sets us apart:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="text-blue-600 mb-4  flex  justify-center">
          <MdEventNote size={30} />
          </div>
          <h3 className="font-semibold text-lg mb-2 font-serif text-[16px] sm:text-[18px]  md:text-[18px] ">Event Custom Planning</h3>
          <p className="text-gray-600 font-serif text-left  text-[13px] sm:text-[14px]  md:text-[14px] ">
            From dynamic workshops to rejuvenating leisure activities, we personalize every element to align with your company’s goals.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="text-blue-600 mb-4 flex  justify-center">
           <GrUserExpert size={30} />
          </div>
          <h3 className="font-semibold text-lg mb-2 font-serif text-[16px] sm:text-[18px]  md:text-[18px]">Expert Facilitation</h3>
          <p className="text-gray-600 font-serif text-left  text-[13px] sm:text-[14px]  md:text-[14px]">
            Our team of professional planners ensures your retreat is seamless and stress-free, letting you focus on what truly matters.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="text-blue-600 mb-4 flex  justify-center">
          <FaMapLocationDot size={30}  />
          </div>
          <h3 className="font-semibold  mb-2 font-serif text-[16px] sm:text-[18px]  md:text-[18px]">Inspiring Locations</h3>
          <p className="text-gray-600 font-serif text-left  text-[13px] sm:text-[14px]  md:text-[14px]">
            Whether you prefer a serene mountaintop lodge or a vibrant beachfront venue, we’ll help you find the perfect backdrop.
          </p>
        </div>
      </div>
    </section>
  );
}
