"use client";
import CountUp from "react-countup";

function Experience() {

 const stats = [
    { value: 11, suffix: "", label: "Years of experience" },
    { value: 500000, suffix: "", label: "Virtual participants" },
    { value: 12.2, suffix: "", label: "Million miles covered" },
  ];

  return (
     <section className="bg-black text-white py-25 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            {/* Animated Number */}
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">
              <CountUp
                start={0}
                end={stat.value}
                duration={1.5}
                separator=","
                decimals={stat.suffix === "M" ? 1 : 0}
              />
              {stat.suffix}
            </h3>

            {/* Label */}
            <p className="mt-3 text-gray-300 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience