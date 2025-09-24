export default function WhyUs() {
  return (
    <section className="bg-[#f9f8f3] py-16 px-6 md:px-20">
      <div className="text-sm text-blue-600 font-semibold uppercase mb-2">About</div>
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Us?</h2>
      <p className="text-gray-700 max-w-2xl mb-12">
        Our tailored corporate retreats are more than just an escape from the office—
        they’re an investment in your team’s growth and success. Here’s what sets us apart:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.382V5.618a2 2 0 011.553-1.894L9 2m0 18V2m0 18l5.447-2.724A2 2 0 0021 15.382V5.618a2 2 0 00-1.553-1.894L15 2m0 18V2" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Custom Planning</h3>
          <p className="text-gray-600 text-sm">
            From dynamic workshops to rejuvenating leisure activities, we personalize every element to align with your company’s goals.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-8h-2M6 12H4m15.364-4.636l-1.414 1.414M7.05 17.95l-1.414-1.414M17.95 17.95l-1.414-1.414M7.05 6.05L5.636 7.464" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Expert Facilitation</h3>
          <p className="text-gray-600 text-sm">
            Our team of professional planners ensures your retreat is seamless and stress-free, letting you focus on what truly matters.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.05 6a9 9 0 0112.95 0M21.95 6a9 9 0 00-12.95 0M12 2v2m0 16v2m4-4h2m-12 0H4" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Inspiring Locations</h3>
          <p className="text-gray-600 text-sm">
            Whether you prefer a serene mountaintop lodge or a vibrant beachfront venue, we’ll help you find the perfect backdrop.
          </p>
        </div>
      </div>
    </section>
  );
}
