import Link from "next/link";
import { Building2, Users, Award, Zap } from "lucide-react";

export default function CorporatePage() {
  return (
    <div className="pt-[90px] lg:pt-[90px]  bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Corporate Merchandise Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Elevate your brand with custom corporate merchandise. From employee
            uniforms to promotional products, we&apos;ve got you covered.
          </p>

          <Link
            href="/customize"
            className="inline-block px-10 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-100 transition-smooth"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Enterprise Solutions
              </h3>
              <p className="text-gray-600">
                Tailored merchandise programs for large organizations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Bulk Pricing
              </h3>
              <p className="text-gray-600">
                Competitive rates for large volume orders
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">World-class brands and materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fast Turnaround
              </h3>
              <p className="text-gray-600">Quick delivery for urgent orders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Corporate Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Employee Uniforms",
                description:
                  "Professional workwear and uniforms customized with your brand",
              },
              {
                title: "Corporate Gifting",
                description:
                  "Premium gifts for clients, partners, and employees",
              },
              {
                title: "Event Merchandise",
                description:
                  "Custom products for conferences, trade shows, and events",
              },
              {
                title: "Promotional Items",
                description: "Marketing materials and giveaways for campaigns",
              },
              {
                title: "Office Supplies",
                description: "Branded stationery and office essentials",
              },
              {
                title: "Team Building",
                description:
                  "Custom merchandise for company events and team activities",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-smooth"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our corporate team for a custom quote and dedicated support
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-100 transition-smooth"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
