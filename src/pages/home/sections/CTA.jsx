import React from "react";
import KitUser from "../../../assets/image22.jpg";

const CTA = () => {
  return (
    <div className="relative my-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#32ba78] opacity-5"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#32ba78] opacity-5"></div>

      <div className="my-container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden rounded-3xl shadow-xl">
          {/* Testimonial Section - 3 columns */}
          <div className="lg:col-span-3 bg-white p-10 lg:p-16">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-1 h-16 bg-[#32ba78] mr-4"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    What Our Clients Say
                  </h3>
                </div>

                <div className="mb-8">
                  <svg
                    className="w-12 h-12 text-[#32ba78] opacity-30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-xl text-gray-700 leading-relaxed mt-4">
                    Before Maxgyet Oil Enterprise, getting fuel was a major
                    challenge. Now, with Maxgyet Oil right in the Banda
                    community, I can easily access quality diesel without the
                    stress of long trips. It has saved me time and money, making
                    my daily operations much smoother.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <img
                  src={KitUser}
                  alt="Testimonial from user"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#32ba78] p-0.5"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">Alfred Owusu</p>
                  <p className="text-gray-500 text-sm">
                    Local Business Owner, Banda
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - 2 columns */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#32ba78] to-[#229e64] text-white p-10 lg:p-16 flex items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to Transform Energy Efficiency?
              </h3>
              <div className="w-16 h-1 bg-white opacity-50 mb-6"></div>
              <p className="text-white text-opacity-90 mb-8 leading-relaxed">
                Join the movement towards a cleaner and more sustainable future
                with Maxgyet's innovative waste-to-fuel solution.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-white text-[#32ba78] font-medium rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Request a Demonstration
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
