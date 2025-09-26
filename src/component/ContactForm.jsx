// // app/components/ContactForm.jsx
// "use client";

// import { useState } from "react";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     enquiry: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); 
//     alert("Form submitted!");
//   };

//   return (
//     <section className="bg-blue-600 py-16 px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
//         {/* Left Form */}
//         <div className="text-white">
//           <h3 className="font-bold mb-2">Working Hours:</h3>
//           <p>Sunday to Thursday from 08:30am to 6pm</p>
//           <p className="mb-6">Break time: 1:30 pm to 2:30 pm</p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Name */}
//             <div>
//               <label className="block text-sm font-semibold">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:outline-none shadow"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-semibold">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter a valid email address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:outline-none shadow"
//                 required
//               />
//             </div>

//             {/* Enquire For */}
//             <div>
//               <label className="block text-sm font-semibold">Enquire For</label>
//               <select
//                 name="enquiry"
//                 value={formData.enquiry}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:outline-none shadow"
//               >
//                 <option>Business Events Management</option>
//                 <option>Exhibitions</option>
//                 <option>Corporate Events</option>
//                 <option>Other</option>
//               </select>
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-sm font-semibold">Message</label>
//               <textarea
//                 name="message"
//                 rows="4"
//                 placeholder="Enter your message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:outline-none shadow"
//               ></textarea>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full bg-white text-black font-bold py-3 rounded-full hover:bg-gray-200 transition"
//             >
//               SUBMIT
//             </button>
//           </form>
//         </div>

//         {/* Right Map */}
//         <div className="w-full h-[500px]">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115623.6504782557!2d55.2708!3d25.276987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cfb2f54a4d9%3A0x6c37ed2cc78e98dc!2sSharjah%20Research%20Technology%20and%20Innovation%20Park!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
        
//       </div>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiry: "Business Events Management",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Send via EmailJS
    emailjs
      .send(
        "service_lunnf6f", // ✅ Your EmailJS Service ID
        "template_ph2pm8s", // ✅ Your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          enquiry: formData.enquiry,
          message: formData.message,
        },
        "u6-Yq1ngiF1y48f-F" // ✅ Your Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          alert("Message sent successfully!");

          // Reset form
          setFormData({
            name: "",
            email: "",
            enquiry: "Business Events Management",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send the message. Please try again.");
        }
      )
      .catch((error) => {
        console.error("Network or email service error:", error);
        alert("Failed to send the message. Please try again.");
      });
  };

  return (
    <section className="bg-blue-600 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Form */}
        <div className="text-white">
          <h3 className="font-bold mb-2">Working Hours:</h3>
          <p>Sunday to Thursday from 08:30am to 6pm</p>
          <p className="mb-6">Break time: 1:30 pm to 2:30 pm</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:outline-none shadow"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter a valid email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:outline-none shadow"
                required
              />
            </div>

            {/* Enquire For */}
            <div>
              <label className="block text-sm font-semibold">Enquire For</label>
              <select
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:outline-none shadow"
              >
                <option>Business Events Management</option>
                <option>Exhibitions</option>
                <option>Corporate Events</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:outline-none shadow"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-3 rounded-full hover:bg-gray-200 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right Map */}
        <div className="w-full h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115623.6504782557!2d55.2708!3d25.276987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cfb2f54a4d9%3A0x6c37ed2cc78e98dc!2sSharjah%20Research%20Technology%20and%20Innovation%20Park!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
