import Image from "next/image";
// import retreatImg from "../public/retreat.jpg"; // Replace with your actual image path
export default function WhyRetreatsMatter() {
  return (


    <>
      <section className="py-5   sm:py-10 md:py-10 px-6 md:px-20">
        <div className="rounded-2xl bg-[#111111] relative  ">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-lg p-5">
              <Image
                src={"/corporate/Why Corporate Retreats Matter photo.jpeg"}
                alt="Corporate Retreat"
                className="w-full h-auto object-cover  rounded-xl "
                width={100}
                height={100}
              />
            </div>

            <div className=" mb-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white px-3 text-[13px] sm:text-[18px]  md:text-[28px]   font-serif ">
                Why Corporate Retreats Matter
              </h2>
              <p className="text-gray-300 mb-1 px-3 text-[13px] sm:text-[14px]  md:text-[14px]   font-serif " >
                A thoughtfully planned retreat can yield benefits that ripple through your organization:
              </p>

              <ul className="space-y-2 text-gray-200 text-sm md:text-base">
                <li className="px-3">
                  <span className="font-bold text-white font-serif  text-[15px] sm:text-[15px]  md:text-[15px] ">Enhanced Collaboration :</span> {" "}
                   <span className=" text-[13px] sm:text-[14px]  md:text-[14px]   font-serif">
                  Strengthen team dynamics through shared experiences and collaborative sessions.
                  </span>
                </li>
                <li className="px-3">
                  <span className="font-bold text-white font-serif  text-[15px] sm:text-[15px]  md:text-[15px]">Improved Morale :</span> {" "}
                  <span className=" text-[13px] sm:text-[14px]  md:text-[14px]   font-serif">
               Show your team their value by investing in their professional and personal well-being.
                  </span>
                 
                </li>
                <li className="px-3">
                  <span className="font-bold text-white font-serif  text-[15px] sm:text-[15px]  md:text-[15px]">Fresh Ideas :</span> {" "}
                  
                  <em className=" text-[13px] sm:text-[14px]  md:text-[14px]   font-serif">Step outside the office to spark creativity and innovation that transforms the way you do business.</em>
                </li>
              </ul>
            </div>
          </div>

          {/* Optional decorative corner SVG */}
          <div className="absolute top-0 right-0">
            <img src="/corporate/Topography 2.avif" alt=""

              className="
      w-[80px] h-[80px]    
      sm:w-[auto] sm:h-[auto]  
      md:w-[180px] md:h-[180px]  
      lg:w-[180px] lg:h-[180px] 
      xl:w-[180px] xl:h-[180px]
    "

            />
          </div>
        </div>

      </section>
    </>
  );
}


