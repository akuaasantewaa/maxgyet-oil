// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";
// import { FaLinkedin, FaTiktok } from "react-icons/fa";

// function Contact() {
//   return (
//     <div className="py-12 bg-gray-50">
//       <div className="container max-w-7xl mx-auto px-4">
//         {/* Page Title */}
//         <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
//           Get in Touch with Fowohodie
//         </h1>
//         <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
//           Have any questions or want to learn more about the Fowohodie
//           Conversion Kit? We're happy to answer all your inquiries. Reach out to
//           us, and we’ll be glad to assist!
//         </p>

//         {/* Contact Form and Info Section */}
//         <div className="bg-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 p-4 lg:p-0">
//           {/* Contact Form */}
//           <div className="shadow-lg rounded-lg p-6 sm:p-8">
//             <h2 className="text-2xl font-bold text-gray-700 mb-4">
//               Send Us a Message
//             </h2>
//             <form className="space-y-6">
//               <div>
//                 <label className="block font-medium text-gray-600 mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700"
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium text-gray-600 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700"
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium text-gray-600 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   placeholder="Your Message"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700"
//                   rows="4"
//                 ></textarea>
//               </div>
//               <button className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition duration-200">
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div>
//             <h2 className="text-2xl font-bold text-gray-700 mb-6 pt-6 sm:pt-12">
//               Contact Information
//             </h2>
//             <ul className="space-y-6">
//               <li className="flex items-center space-x-4">
//                 <FaPhone className="text-blue-900 w-6 h-6" />
//                 <span className="text-gray-600">+233243999631</span>
//               </li>
//               <li className="flex items-center space-x-4">
//                 <FaEnvelope className="text-blue-900 w-6 h-6" />
//                 <span className="text-gray-600">
//                   <a
//                     href="mailto:kingplastLtd.co@gmail.com"
//                     className="hover:text-gray-800"
//                   >
//                     info@fawohodiekits.com
//                   </a>
//                 </span>
//               </li>
//               <li className="flex items-center space-x-4">
//                 <FaMapMarkerAlt className="text-blue-900 w-6 h-6" />
//                 <span className="text-gray-600">
//                   Tarkwa-Nsuaem, Western Region, Ghana
//                 </span>
//               </li>
//             </ul>

//             {/* Social Links */}
//             <div className="mt-8">
//               <h3 className="text-lg font-bold text-gray-700 mb-4">
//                 Follow Elizabeth's Innovation Journey
//               </h3>
//               <div className="flex space-x-4">
//                 <a
//                   href="https://web.facebook.com/profile.php?id=61569529484943"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-900 hover:text-blue-700 transition"
//                 >
//                   <BsFacebook size={24} />
//                 </a>
//                 <a
//                   href="https://x.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-900 hover:text-blue-700 transition"
//                 >
//                   <BsTwitterX size={24} />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/kingplastlimitedcompany/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-900 hover:text-blue-700 transition"
//                 >
//                   <BsInstagram size={24} />
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-900 hover:text-blue-700 transition"
//                 >
//                   <FaLinkedin size={24} />
//                 </a>
//                 <a
//                   href="https://vm.tiktok.com/ZMkL54C5R/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-900 hover:text-blue-700 transition"
//                 >
//                   <FaTiktok size={24} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="mt-16 px-4">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//             Frequently Asked Questions
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
//             <div className="bg-white shadow rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">
//                 What is the Fowohodie Conversion Kit?
//               </h3>
//               <p className="text-gray-600">
//                 The Fowohodie Conversion Kit automates manual wheelchairs by
//                 adding a battery-powered motor, transforming them into motorized
//                 wheelchairs.
//               </p>
//             </div>
//             <div className="bg-white shadow rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">
//                 How does the kit improve mobility?
//               </h3>
//               <p className="text-gray-600">
//                 The kit reduces the physical effort required to move the
//                 wheelchair, enhancing autonomy and enabling easier navigation in
//                 different environments.
//               </p>
//             </div>
//             <div className="bg-white shadow rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">
//                 Who can use the Fowohodie Conversion Kit?
//               </h3>
//               <p className="text-gray-600">
//                 The kit is designed for individuals with mobility impairments
//                 who use traditional manual wheelchairs.
//               </p>
//             </div>
//             <div className="bg-white shadow rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">
//                 How can I purchase the Fowohodie Conversion Kit?
//               </h3>
//               <p className="text-gray-600">
//                 You can contact us directly through the form above or email us
//                 at the address provided to place an order.
//               </p>
//             </div>
//           </div>
// //         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle, User } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import backgroundImage from "../assets/undraw_community_fv55.png";
// import { Link } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 5.1817,
  lng: -2.0273,
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-7xl mx-auto px-5 py-16 pt-20">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Get in Touch with Maxgyet Oil
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-xl p-8">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-6 flex items-center">
              <Send className="mr-4 text-[#DA0037]" size={32} />
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700 flex items-center">
                  <User className="mr-2 text-gray-700" size={20} />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 flex items-center">
                  <Mail className="mr-2 text-gray-700" size={20} />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 flex items-center">
                  <Phone className="mr-2 text-gray-700" size={20} />
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 flex items-center">
                  <MessageCircle className="mr-2 text-gray-700" size={20} />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C70039] transition"
                  placeholder="Your message to us..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#DA0037] text-white py-3 rounded-lg hover:bg-[#C70039] transition-colors flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-xl rounded-xl p-5 lg:p-6">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-6">
              Our Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="mr-4 text-gray-800" size={32} />
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    Banda, Bono Region, Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="mr-4 text-gray-800" size={32} />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">(+233) 059-684-4397</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="mr-4 text-gray-800" size={32} />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">
                    maxwellgyetu6@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  Monday - Friday: 8:00 AM - 5:00 PM
                  <br />
                  Saturday: 9:00 AM - 5:00 PM
                  <br />
                  {/* Sunday: Closed (Worship Day) */}
                </p>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            {/* <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Location Map Placeholder</p>
            </div> */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-[#DA0037] mb-4 text-center">
                Find Us on the Map
              </h2>
              <div className="bg-gray-300 rounded-lg h-64">
                {/* Google Maps Integration */}
                <LoadScript
                  googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                >
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={14}
                  >
                    <Marker
                      position={center}
                      label={{
                        text: "We are here!",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                      icon={{
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        scaledSize: { width: 40, height: 40 }, // Adjust icon size
                      }}
                    />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="container mx-auto mt-16 px-4 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              What is the eco-friendly fuel alternative?
            </h3>
            <p className="text-gray-600">
            Maxgyet Oil has developed a sustainable fuel alternatve by converting waste materials into affordable and efficient fuel, reducing environmental pollution.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              How does this fuel benefit users ?
            </h3>
            <p className="text-gray-600">
              The fuel is cost-effective, burns cleaner than traditional options, and minimizes health risks associated with toxic emissions.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Who can use this fuel?
            </h3>
            <p className="text-gray-600">
              It is suitable for households, small businesses, and industries looking for an affordable and environmentally friendly energy source.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              How can I purchase the fuel?
            </h3>
            <p className="text-gray-600">
              You can contact us directly through the form above or email us at
              the provided address to place an order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
