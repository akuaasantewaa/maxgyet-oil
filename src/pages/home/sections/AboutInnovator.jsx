import React, { useState } from "react";
import { MapPin, X } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineAcademicCap, HiOutlineMail } from "react-icons/hi";
import CEO from "../../../assets/image21.jpg";

const AboutInnovator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Innovator data
  const innovator = {
    name: "Maxwell Gyetu",
    title: "Social Entrepreneur",
    location: "Banda Sabiye, Bono Region, Ghana",
    bio: "Gyetu Maxwell is a young entrepreneur from Banda Sabiye, Bono Region, dedicated to tackling environmental pollution and fuel scarcity. By innovatively converting plastic waste into affordable fuel, he is addressing two major challenges in his community: reducing land degradation caused by plastic waste and providing a reliable fuel source for local farmers and households.",
    story:
      "Growing up in Banda, Maxwell witnessed the struggles of farmers, including his own parents, who faced difficulties accessing fuel due to distance barriers and frequent unavailability. Additionally, he noticed that plastic waste was degrading farmland, making it harder for seedlings to grow. Determined to solve these challenges, he began experimenting with converting plastic waste into fuel at home. Initially, his fuel was used only by his family, but as word spread, others in the community wanted to try it. Positive feedback led to increased demand, and Maxgyet was born.",
    achievements: ["Featured in 'Africa's Top 30 Innovators Under 30'"],
    education: [
      {
        degree: "Certificate in General Arts",
        institution: "Banaman Technical School",
        year: "2019",
      },
    ],
    vision:
      "Maxwell's vision extends beyond personal fuel production. He aims to scale Maxgyet into a sustainable energy solution that not only reduces waste and pollution but also provides an affordable fuel alternative to farmers, businesses, and households. To achieve this, he seeks mentorship, coaching, and financial support to expand production, refine the process, and maximize his impact in the industrial sector.",
    quote:
      "My goal is not just to create fuel but to build a sustainable future where waste is transformed into opportunity. I strive to reduce environmental pollution, provide affordable energy solutions, and empower communities through innovative waste-to-fuel technology.",
    socialLinks: [
      { platform: "LinkedIn", url: "#", icon: <FaLinkedin /> },
      { platform: "Email", url: "#", icon: <HiOutlineMail /> },
      { platform: "GitHub", url: "#", icon: <FaGithub /> },
    ],
  };

  return (
    <section id="about-innovator" className="py-16 bg-white my-container">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Minimal Innovator Preview */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          {/* Brief Info */}
          <div className="w-full md:w-3/5 lg:w-2/3">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {innovator.name}
                </h1>
                <div className="flex items-center">
                  <div className="h-1 w-12 bg-[#32ba78] mr-3"></div>
                  <p className="text-[#32ba78] font-medium">
                    {innovator.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{innovator.location}</span>
              </div>

              <p className="text-gray-700 leading-relaxed md:w-4/5">
                {innovator.bio.substring(0, 500)}...
              </p>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-2 bg-white border border-[#32ba78] text-[#32ba78] font-medium rounded-full hover:bg-[#32ba78] hover:text-white transition-colors duration-300 md:w-1/4"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="w-full md:w-2/5 lg:w-1/3">
            <div className="relative">
              <div className="absolute inset-0 bg-[#32ba78] opacity-10 rounded-3xl transform translate-x-3 translate-y-3"></div>
              <img
                src={CEO}
                alt="Maxwell Gyetu"
                className="w-full rounded-3xl relative z-10 shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                About {innovator.name}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left sidebar in modal */}
                <div className="md:col-span-1">
                  <img
                    src={CEO}
                    alt={innovator.name}
                    className="w-full rounded-md shadow-md mb-6"
                  />

                  <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">
                      Education
                    </h3>
                    <ul className="space-y-3">
                      {innovator.education.map((edu, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <HiOutlineAcademicCap className="w-4 h-4 text-[#32ba78] mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-800">
                              {edu.degree}
                            </p>
                            <p className="text-sm text-gray-600">
                              {edu.institution} | {edu.year}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {innovator.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        className="p-2 bg-gray-50 hover:bg-[#d7fcea] rounded-md text-gray-700 hover:text-[#32ba78] transition-colors duration-200"
                        aria-label={link.platform}
                      >
                        {React.cloneElement(link.icon, {
                          className: "w-5 h-5",
                        })}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Main content in modal */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      The Journey
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {innovator.story}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Vision for the Future
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {innovator.vision}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Achievements
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {innovator.achievements.map((achievement, index) => (
                        <li key={index} className="text-gray-700">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="p-4 bg-[#d7fcea] border-l-4 border-[#32ba78] italic text-gray-700">
                    "{innovator.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutInnovator;
