"use client";
import React from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import BannerAll from "@/component/Bannerall";
import { FaLocationDot } from "react-icons/fa6";
import GoogleLocationMap from "@/component/GoogleLocationMap";

export default function ContactPage() {
    return (


        <>
            <BannerAll
                title="Career"
            // subtitle="Your journey starts here"
            // image="/banner-image.jpg"
            />

            <section className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center px-6 py-16">
                <div className="max-w-7xl w-full grid md:grid-cols-3 gap-10">
                    {/* Left Form */}
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Let’s Grow Together
                        </h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-white"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-white"
                                />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-white"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-white"
                                />
                            </div>
                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-white"
                            ></textarea>



                            <button
                                type="submit"
                                className="bg-[#322785]   text-white font-semibold py-3 px-8 rounded-md"
                            >
                                SUBMIT NOW
                            </button>
                        </form>
                    </div>

                    {/* Right Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Information
                        </h2>
                        {/* Address */}
                        <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 border border-gray-100">
                            

                            <FaLocationDot className="text-[#322785] w-10 h-6 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-800">ADDRESS</h4>
                                <p className="text-sm text-gray-600">
                                    Block B, Office B09-182, Sharjah Research
                                    Technology and Innovation Park, Sharjah,
                                    United Arab Emirates
                                </p>
                            </div>
                        </div>

                        {/* Timing */}
                        <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 border border-gray-100">
                            <Clock className="text-[#322785] w-10 h-6 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-800">TIMING</h4>
                                <p className="text-sm text-gray-600">
                                    Monday – Friday<br />
                                    9.30 AM – 6.00 PM
                                </p>
                            </div>
                        </div>

                        {/* Mail */}
                        <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 border border-gray-100">
                            <Mail className="text-[#322785] w-10 h-6 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-800">MAIL TO US</h4>
                                <p className="text-sm text-gray-600">operations@teprezlab.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

<GoogleLocationMap/>

        </>
    );
}
