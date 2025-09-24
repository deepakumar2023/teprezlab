import Image from "next/image";
// import retreatImg from "../public/retreat.jpg"; // Replace with your actual image path
export default function WhyRetreatsMatter() {
  return (
  

    <>

       <section >
      <div className="max-w-[1200px] mx-5 sm:mx-auto  px-6 md:px-20  p-5 rounded-2xl bg-[#111111] relative  ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg p-5">
            <Image
              src={"/corporate/tttt.avif"}
              alt="Corporate Retreat"
              className="w-full h-auto object-cover"
              width={100}
              height={100}
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Corporate Retreats Matter
            </h2>
            <p className="text-gray-300 mb-6">
              A thoughtfully planned retreat can yield benefits that ripple through your organization:
            </p>

            <ul className="space-y-4 text-gray-200 text-sm md:text-base">
              <li>
                <span className="font-bold text-white">Enhanced Collaboration:</span>{" "}
                Strengthen team dynamics through shared experiences and collaborative sessions.
              </li>
              <li>
                <span className="font-bold text-white">Improved Morale:</span>{" "}
                Show your team their value by investing in their professional and personal well-being.
              </li>
              <li>
                <span className="font-bold text-white">Fresh Ideas:</span>{" "}
                <em>Step outside the office to spark creativity and innovation that transforms the way you do business.</em>
              </li>
            </ul>
          </div>
        </div>

        {/* Optional decorative corner SVG */}
        <div className="absolute top-0 right-0">
          <img src="/corporate/Topography 2.avif" alt="" />
        </div>
      </div>

    </section>
    </>
  );
}


