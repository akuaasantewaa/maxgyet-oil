"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  User,
  Clock,
} from "lucide-react";
import Swal from 'sweetalert2'

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xdkenrya", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been sent successfully. We will get back to you soon.",
          confirmButtonColor: "#CD7F32",
        });

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send message. Please try again later.",
          confirmButtonColor: "#CD7F32",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "An error occurred. Please check your internet connection and try again.",
        confirmButtonColor: "#CD7F32",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-cover bg-center py-20"
      style={{
        backgroundImage: `url('/image11.jpg')`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Heading with subtle glass effect */}
        <div
          className="backdrop-blur-sm bg-white/30 p-8 rounded-2xl mb-16 text-center max-w-3xl mx-auto"
          data-aos="fade-down"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Get in Touch
          </h1>
          <p className="text-gray-800">We'd love to hear from you</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form - Takes 3 columns */}
          <div
            className="lg:col-span-3 backdrop-blur-md bg-white/80 rounded-2xl shadow-xl overflow-hidden"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                        placeholder="Your name"
                      />
                      <User
                        className="absolute left-3 top-3 text-gray-400"
                        size={18}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                        placeholder="Your email"
                      />
                      <Mail
                        className="absolute left-3 top-3 text-gray-400"
                        size={18}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Phone (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                      placeholder="Your phone number"
                    />
                    <Phone
                      className="absolute left-3 top-3 text-gray-400"
                      size={18}
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                      placeholder="Your message..."
                    ></textarea>
                    <MessageCircle
                      className="absolute left-3 top-3 text-gray-400"
                      size={18}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#32ba78] shadow-lg cursor-pointer hover:shadow-2xl text-white py-3 rounded-full transition-colors flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      "Send Message"
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information - Takes 2 columns */}
          <div
            className="lg:col-span-2 backdrop-blur-md bg-white/80 rounded-2xl shadow-xl overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="p-8 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <MapPin
                    className="mr-4 text-gray-700 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">Address</h3>
                    <p className="text-gray-600">Banda, Bono Region, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone
                    className="mr-4 text-gray-700 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">Phone</h3>
                    <p className="text-gray-600">(+233) 059-684-4397</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail
                    className="mr-4 text-gray-700 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <p className="text-gray-600">maxwellgyetu6@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock
                    className="mr-4 text-gray-700 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-8 pt-6 border-gray-200"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="max-w-4xl mx-auto h-auto bg-gray-100 rounded-lg overflow-hidden">
            <div className="shadow-lg rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.311387251482!2d-2.354192226013159!3d8.069688003269158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd0197bd4be4fa1%3A0xd97fa41bf0dd4a5d!2sBanda%20sabiye!5e0!3m2!1sen!2sgh!4v1740658514442!5m2!1sen!2sgh"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-300 hover:opacity-95"
              ></iframe>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div
          className="mt-16 backdrop-blur-md bg-white/80 rounded-2xl shadow-xl p-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                What is the eco-friendly fuel alternative?
              </h3>
              <p className="text-gray-600">
                Maxgyet Oil has developed a sustainable fuel alternative by
                converting waste materials into affordable and efficient fuel,
                reducing environmental pollution.
              </p>
            </div>

            <div
              className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                How does this fuel benefit users?
              </h3>
              <p className="text-gray-600">
                The fuel is cost-effective, burns cleaner than traditional
                options, and minimizes health risks associated with toxic
                emissions.
              </p>
            </div>

            <div
              className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Who can use this fuel?
              </h3>
              <p className="text-gray-600">
                It is suitable for households, small businesses, and industries
                looking for an affordable and environmentally friendly energy
                source.
              </p>
            </div>

            <div
              className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                How can I purchase the fuel?
              </h3>
              <p className="text-gray-600">
                You can contact us directly through the form above or email us
                at the provided address to place an order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
