// app/components/TargetEvent.jsx (Next.js 13+ App Router)
export default function TargetEvent() {
  return (
    <section className="flex items-center justify-center px-4   py-5   sm:py-10 md:py-10  bg-white">
      <div className="max-w-3xl text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold   font-serif  text-blue-600 mb-3">
          Target Event Prezlab
        </h2>

        {/* Description */}
        <h6 className="text-gray-800 text-base  leading-relaxed mb-3    text-[13px] sm:text-[18px]  md:text-[18px]   font-serif text-left  ">
          Today, we are the nation’s most reliable live, virtual and hybrid
          event production company. We’ve successfully produced events for
          leading brands, covering 1.2 million miles; engaging over 500,000
          virtual participants for leading world-class corporate organizations.
        </h6>

        <h6 className="text-gray-800 text-base  leading-relaxed mb-6 text-left    text-[13px] sm:text-[18px]  md:text-[18px]   font-serif">
          We work closely with you from the initial concept meeting right
          through to the final event date, we provide bespoke solutions that
          take your event to the next level. No request is too big or too small
          – our job is to design your events a reality, we are Target Event
          Prezlab.
        </h6>

        {/* Button */}
        <div className="flex justify-center">
          <a
            href="/contact-us"
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-full transition font-serif"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
}
