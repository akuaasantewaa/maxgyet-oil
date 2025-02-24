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
import KitUser from "../../../assets/image22.jpg";
import About from "../../../assets/image10.jpg";

const AboutProduct = () => {
  // Product features data
  const features = [
    {
      icon: <Battery className="w-6 h-6 text-amber-500" />,
      title: "♻️ Innovative Waste Conversion Technology",
      description:
        "A highly efficient waste conversion transforms agricultural and plastic waste into sustainable fuel source.By utilizing an advanced pyrolysis or gasification process, the system extracts energy while minimizing material waste.",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "High Energy Efficiency",
      description:
        "The design maximize fuel output while minimizing raw material waste, ensuring optimal energy utilization.Aheat recovery mechanism is integrated to enhance efficiency within low-emission parameters,aligning with global environmental",
    },
    {
      icon: <Settings className="w-6 h-6 text-amber-500" />,
      title: "🔧 Modular & Scalable Design",
      description:
        "Making it suitable for both small-scale and industrial applications.It can be easily expanded to increase production capacity, and its compact structure allows for deployment in various locations, including both urban and rural settings.",
    },
    {
      icon: <Heart className="w-6 h-6 text-amber-500" />,
      title: "🌍 Eco-Friendly & Sustainable Output",
      description:
        " The resulting fuel is designed to be clean-burning, minimizing harmful emissions and supporting industrial and domestic energy needs in a responsible manner.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 pt-6">
          {/* <p className="text-amber-600 font-medium mb-2">
            INNOVATION FROM TARKWA-NSUAEM
          </p> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            The Maxgyet Oil Enterprise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Tackling environmental pollution and health risks caused by waste by converting waste materials into affordable fuel.
          </p>
        </div>

        {/* Main product showcase */}
        <div className="flex flex-col lg:flex-row items-center gap-12 justify-center mb-20">
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
          <div className="w-full lg:w-1/2">
            <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase">
              A Sustainable Solution for a Cleaner Future
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 mb-4">
              How It Works
            </h3>
            <p className="text-gray-600 mb-6 text-justify">
              The Maxgyet Oil process transforms waste materials
               into low-cost, eco-friendly fuel, helping communites reduce pollution and gain energy independence.
            </p>
            <ul className="space-y-4">
              {[
                "organic and plastic waste are gathered from households, industries and landfills",
                " Waste is refined into clean-burning fuel using innovative technology",
                "Processed fuel is made accessible to households and businesses at lower cost",
                "Less polution, reduced waste and economic opportunities",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors duration-200 flex items-center gap-2">
              Learn More <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Benefits section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Benefits of Maxgyet Oil
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The Maxgyet Oil Enterprise sustainable energy innovation offers numerous advantages for communities,businesses and the environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Affordable and Accessible Energy
              </h4>
              <p className="text-gray-600">
               Provides a low-cost fuel alternative for households and industries, making clean energy more accessible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Energy Independence for Communities
              </h4>
              <p className="text-gray-600">
                Empowers local communities by redcucing reliance on expensive and imported fossil fuels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Waste Reduction And Environmental Impact
              </h4>
              <p className="text-gray-600">
                Reduces landfill waste and pollution by converting organic and plastic waste into usable fuel.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Job Creation Opportunities
              </h4>
              <p className="text-gray-600">
                Creates employment in waste collection, fuel production, and distribution, boosting local economies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Scalable and Sustainable Solution
              </h4>
              <p className="text-gray-600">
                Designed to expand with growing energy demands while maintaining enviromental sustainability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Supports Circular Economy 
              </h4>
              <p className="text-gray-600">
                Encourages a zero-waste approach by repurposing byproducts for agriculture, construction, and energy storage.
              </p>
            </div>
          </div>
        </div>

        {/* Technical features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Technical Features
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Innovative engineering meets advanced waste-to-energy technology in every aspect of Maxgyet Oil Enterprise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-20 bg-white p-8 md:p-12 rounded-lg shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-amber-500 text-4xl mb-6">"</div>
            <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
            "Before Maxgyet Oil Enterprise, getting fuel was a major challenge. I had to travel long distances just to refuel, which was both costly and time-consuming. Now, with Maxgyet Oil right in the Banda community, I can easily access quality diesel without the stress of long trips. It has saved me time and money, making my daily operations much smoother.
            </p>
            <div className="flex items-center justify-center">
              <img
                src={KitUser}
                alt="Testimonial from user"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Alfred Owusu</p>
                <p className="text-gray-500 text-sm">Local Business Owner,Banda</p>
              </div>
            </div>
          </div>
        </div>

        {/* Availability and pricing */}
        <div className="flex flex-col justify-center text-center md:flex-row items-center bg-amber-50 rounded-lg overflow-hidden mb-20">
          <div className="w-full md:w-2/3 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Availability & Support
            </h3>
            <p className="text-gray-700 mb-6">
             Maxgyet Oil Enterprise eco-friendly fuel solution is currently available in Banda, Bono Region, with plans to scale nationwide. We are committed to providing seamless access to clean energy for business and households.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-500" />
                <span className="text-gray-700">Fast delivery available  📍Find supply points near you</span>
              </div>
            </div>
            <button className="mt-4 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors duration-200">
              Check Availability In Your Area
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Ready to Transform Energy Efficiency?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join the movement towards a cleaner and more sustainable future with Maxgyet innovative waste-to-fuel solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors duration-200">
              Request a Demonstration
            </button>
            <button className="px-8 py-3 border border-gray-300 hover:border-amber-500 hover:text-amber-500 text-gray-700 font-medium rounded-md transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
