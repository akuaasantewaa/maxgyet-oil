import React from "react";
import {
  Battery,
  Zap,
  Award,
  Heart,
  Settings,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import About from "../../../assets/image10.jpg";
import { FaLeaf, FaRecycle, FaUsers } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
const AboutProduct = () => {
  // Product features data
  const features = [
    {
      icon: <Battery className="w-6 h-6 text-[#32ba78]" />,
      title: " Innovative Waste Conversion Technology",
      description:
        "Transforms agricultural and plastic waste into fuel with minimal waste",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#32ba78]" />,
      title: "High Energy Efficiency",
      description:
        "Transforms agricultural and plastic waste into fuel with minimal waste",
    },
    {
      icon: <Settings className="w-6 h-6 text-[#32ba78]" />,
      title: " Modular & Scalable Design",
      description:
        "Expandable for small and large-scale use in various locations.",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#32ba78]" />,
      title: "Eco-Friendly & Sustainable Output",
      description:
        "Produces clean-burning, low-emission energy.",
    },
  ];

  const benefits = [
    {
      title: "Affordable and Accessible Energy",
      description:
        "Provides a low-cost fuel alternative for households andindustries, making clean energy more accessible to all communities.",
      icon: MdOutlineAttachMoney,
    },
    {
      title: "Waste Reduction And Environmental Impact",
      description:
        "Reduces landfill waste and pollution by converting organic and plastic waste into usable fuel, creating a circular economy.",
      icon: FaRecycle,
    },
    {
      title: "Job Creation Opportunities",
      description:
        "Creates employment in waste collection, fuel production, and distribution, boosting local economies and communities.",
      icon: FaUsers,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 my-container" id="features">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 pt-6">
          {/* <p className="text-[#32ba78] font-medium mb-2">
            INNOVATION FROM TARKWA-NSUAEM
          </p> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            The Maxgyet Oil Enterprise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tackling environmental pollution and health risks caused by waste by
            converting waste materials into affordable fuel.
          </p>
        </div>

        {/* Main product showcase */}
        <div className="flex flex-col lg:flex-row items-center gap-12 justify-center mb-20">
          <div className="w-full lg:w-1/2">
            <span className="text-[#32ba78] font-semibold text-sm tracking-wider uppercase">
              A Sustainable Solution for a Cleaner Future
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 mb-4">
              How It Works
            </h3>
            <p className="text-gray-600 mb-6 text-justify">
              The Maxgyet Oil process transforms waste materials into low-cost,
              eco-friendly fuel, helping communites reduce pollution and gain
              energy independence.
            </p>
            <ul className="space-y-4">
              {[
                "organic and plastic waste are gathered from households, industries and landfills",
                " Waste is refined into clean-burning fuel using innovative technology",
                "Processed fuel is made accessible to households and businesses at lower cost",
                "Less polution, reduced waste and economic opportunities",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-[#32ba78] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    {/* <span className=""><GoDotFill/></span> */}
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-end">
              <a
                href="#technical-features"
                className="mt-8 px-6 py-3 bg-[#32ba78] hover:bg-[#338a60] cursor-pointer text-white font-medium rounded-full transition-colors duration-200 flex items-center gap-2"
              >
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-amber-100 rounded-lg transform translate-x-4 translate-y-4"></div>
              <img
                src={About}
                alt="Maxgyet Oil Enterprise"
                className="w-full mx-auto h-auto rounded-lg shadow-md relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Benefits section */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Benefits of Maxgyet Oil
              </h3>
              <div className="w-24 h-1 bg-[#32ba78] mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                The Maxgyet Oil Enterprise sustainable energy innovation offers
                numerous advantages for communities, businesses and the
                environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <div className="bg-[#32ba78] bg-opacity-10 p-6 flex justify-center">
                      <Icon className="text-5xl text-white" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Core Technologies Section */}
<div id="core-technologies" className="py-20">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="text-center mb-16">
      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        What Makes Us Unique
      </h3>
      <div className="w-20 h-1 bg-[#32ba78] mx-auto mb-6"></div>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
        Advanced waste-to-energy innovations powering the Maxgyet Oil Enterprise ecosystem.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
        >
          <div className="mb-5 text-[#32ba78] transform group-hover:scale-110 transition-transform duration-300">
            {feature.icon}
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            {feature.title}
          </h4>
          <div className="w-12 h-0.5 bg-gray-200 mb-3"></div>
          <p className="text-gray-600 text-sm">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

       
      </div>
    </section>
  );
};

export default AboutProduct;
