import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Tag } from "lucide-react";
import Product1 from "../../../assets/image19.jpg";
import Product2 from "../../../assets/image24.jpg";
import Product3 from "../../../assets/image27.jpg";
import Product4 from "../../../assets/image4.jpg";
import Product5 from "../../../assets/image14.jpg";
import Product6 from "../../../assets/image13.jpg";
import Product7 from "../../../assets/image6.jpg";
import Product8 from "../../../assets/image30.jpg";
import Product9 from "../../../assets/image15.jpg";

const Showcase = () => {
  // Sample data for products/services
  const showcaseItems = [
    {
      title: "Eco-Friendly Fuel Pack",
      description:
        "A sustainable and affordable packaged biofuel alternative made from recycled waste materials, designed for cleaner energy solutions.",
      imageUrl: Product1,
      price: "GH₵10",
      badge: "Best Seller",
    },
    {
      title: "Eco-Power Blend Pack",
      description:
        "A responsible and efficient fuel alternative, harnessing waste materials for a more sustainable energy future.",
      imageUrl: Product2,
      price: "GH₵10",
      badge: "EcoFuel",
    },
    {
      title: "MaxEco Fuel Pack",
      description:
        "MaxEco Petrol is a high-performance fuel designed to power engines with efficiency and reliability. Our petrol is refined to ensure clean combustion, reducing engine wear and improving fuel economy. Perfect for vehicles, generators, and small machinery, this eco-conscious blend meets industry standards for reduced emissions while delivering maximum power.",
      imageUrl: Product3,
      price: "GH₵20",
      badge: "Classic",
    },
    {
      title: "Maxgyet Energy",
      description:
        "Maxgyet Energy Diesel is a premium-grade fuel engineered for durability and power. It provides superior combustion efficiency, ensuring smooth operation for diesel-powered vehicles, trucks, and industrial machines. With its advanced formulation, this diesel minimizes carbon buildup, improves mileage, and supports cleaner energy solutions.",
      imageUrl: Product4,
      price: "GH₵20",
      badge: "Superior",
    },
    {
      title: "Fuel Upcycle Pack",
      description:
        "Maxgyet Oil’s Petrol is refined for maximum efficiency, ensuring smooth engine operation and optimal fuel economy. Designed for cars, motorcycles, and power generators, our Petrol provides high octane ratings, ensuring cleaner combustion and enhanced performance. Whether for everyday commuting or business operations, trust Maxgyet Oil for quality fuel you can rely on.",
      imageUrl: Product5,
      price: "GH₵50",
      badge: "MaxPower",
    },
    {
      title: "Regen Fuel",
      description:
        "Maxgyet Oil’s premium Diesel fuel is formulated to deliver high performance and efficiency for vehicles, generators, and industrial machinery. Our Diesel is low in sulfur, ensuring cleaner combustion, reduced emissions, and enhanced engine longevity. Whether for transportation, power generation, or industrial use, Maxgyet Diesel guarantees reliable energy at an affordable price.",
      imageUrl: Product6,
      price: "GH₵50",
      badge: "Elite",
    },
    {
      title: "Waste-to-Energy Workshops",
      description:
        "Hands-on-training sessions where young engineers and entrepreneurs are working with waste materials to create sustainable energy solutions.",
      imageUrl: Product7,
      price: "GH₵200",
      badge: "New",
    },
    {
      title: "Maxgyet Multi-Litre Fuel",
      description:
        "The Maxgyet Fuel Pack ensures you get the right amount of high quality fuel whether petrol or diesel available in all sizes to meet your needs. Designed for convenience and efficiency, our fuel is sustainably sourced to provide a cleaner and more reliable energy solution. Power your journey with Maxgyet’s commitment to affordability, sustainability, and quality.",
      imageUrl: Product8,
      price: "Price Varies",
      badge: "Premium",
    },
    {
      title: "Sustainable Community Programs",
      description:
        "Join a network of eco-conscious individuals collaborating on environmental projects, symbolizing sustainability and clean energy effort.",
      imageUrl: Product9,
      price: "Free",
      badge: "Community",
    },
  ];

  // Animation trigger state
  const [animateItems, setAnimateItems] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);

  useEffect(() => {
    // Trigger animation after the component is mounted
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pb-20 bg-white" id="products">
      <div className="my-container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div className="mb-6 md:mb-0">
              <span className="inline-block text-sm font-medium text-[#32ba78] uppercase tracking-wider mb-2">
                Our Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Featured Products
              </h2>
            </div>
            <div className="flex items-center">
              <div className="hidden md:flex space-x-2 mr-4">
                {showcaseItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProduct(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeProduct === index ? "bg-[#32ba78] w-6" : "bg-gray-300"
                    }`}
                    aria-label={`View product ${index + 1}`}
                  />
                ))}
              </div>
              <a
                href="https://paystack.shop/maxgyet-oil"
                target="_blank"
                className="flex items-center text-gray-800 hover:text-[#32ba78] font-medium group transition-colors"
              >
                <span>Got to Shop</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl ${
                animateItems
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {item.badge && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black bg-opacity-80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white">
                    <Tag className="w-3 h-3" />
                    <span>{item.badge}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#32ba78] transition-colors">
                    {item.title}
                  </h3>
                  <div className="relative w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-[#32ba78]" />
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className={`font-bold ${item.price === "Free" ? "text-[#32ba78]" : "text-gray-900"}`}>
                    {item.price}
                  </span>
                  <a
                    href="https://paystack.shop/maxgyet-oil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white border border-[#32ba78] text-gray-800 hover:bg-[#32ba78] hover:text-white rounded-full text-sm font-medium transition-colors duration-300"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center block md:hidden">
          <div className="flex justify-center space-x-2 mb-6">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProduct(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeProduct === index ? "bg-[#32ba78] w-6" : "bg-gray-300"
                }`}
                aria-label={`View product ${index + 1}`}
              />
            ))}
          </div>
          <a
            href="/product-catalog"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#32ba78] text-white font-medium rounded-full hover:bg-[#229e64] transition-colors"
          >
            Browse All Products
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Showcase;