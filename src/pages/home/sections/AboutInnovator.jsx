import React from "react";
import {
  MapPin,
  Calendar,
  Award,
  ExternalLink,
  Linkedin,
  Mail,
} from "lucide-react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa"; // Correct import for GitHub
import CEO from "../../../assets/image21.jpg";

const AboutInnovator = () => {
  // Innovator data
  const innovator = {
    name: "Maxwell Gyetu",
    title: "Social Entrepreneur",
    location: "Banda Sabiye, Bono Region, Ghana",
    bio: "Gyetu Maxwell is a young entrepreneur from Banda Sabiye, Bono Region, dedicated to tackling environmental pollution and fuel scarcity. By innovatively converting plastic waste into affordable fuel, he is addressing two major challenges in his community: reducing land degradation caused by plastic waste and providing a reliable fuel source for local farmers and households. Through his groundbreaking work with Maxgyet, he is transforming the way people access and utilize fuel in Banda.",
    story:
      "Growing up in Banda, Maxwell witnessed the struggles of farmers, including his own parents, who faced difficulties accessing fuel due to distance barriers and frequent unavailability. Additionally, he noticed that plastic waste was degrading farmland, making it harder for seedlings to grow. Determined to solve these challenges, he began experimenting with converting plastic waste into fuel at home. Initially, his fuel was used only by his family, but as word spread, others in the community wanted to try it. Positive feedback led to increased demand, and Maxgyet was born.",
    achievements: [
      "Featured in 'Africa's Top 30 Innovators Under 30'",
    ],
    education: [
      {
        WASSCE: "Certificate in General Arts",
        institution: "Banaman Technical School",
        year: "2019",
      },
    ],
    vision:
      "Maxwell’s vision extends beyond personal fuel production. He aims to scale Maxgyet into a sustainable energy solution that not only reduces waste and pollution but also provides an affordable fuel alternative to farmers, businesses, and households. To achieve this, he seeks mentorship, coaching, and financial support to expand production, refine the process, and maximize his impact in the industrial sector.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "#",
        icon: <Linkedin className="w-5 h-5" />,
      },
      { platform: "Email", url: "#", icon: <Mail className="w-5 h-5" /> },
      { platform: "GitHub", url: "#", icon: <FaGithub className="w-5 h-5" /> },
    ],
  };

  return (
    <section id="about-innovator" className="py-20 bg-gradient-to-b from-[#d7fcea] to-white">
      <div className="container mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left column - Profile and quick info */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-8">
              <div className="relative mb-8">
                <div className="absolute -z-50 inset-8 rounded-full transform translate-x-3 translate-y-3"></div>
                <img
                  src={CEO}
                  alt="Elizabeth Acheampong - Innovator"
                  className="w-full max-w-md mx-auto rounded-sm shadow-lg relative z-10"
                />
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {innovator.name}
              </h1>
              <p className="text-xl text-[#32ba78] font-medium mb-4">
                {innovator.title}
              </p>

              <div className="flex items-start gap-2 text-gray-700 mb-4">
                <MapPin className="w-5 h-5 text-[#32ba78] mt-0.5 flex-shrink-0" />
                <span>{innovator.location}</span>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm border border-amber-100 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
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

              <div className="flex flex-wrap gap-3 mb-8">
                {innovator.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#d7fcea] border border-gray-200 rounded-md text-gray-700 hover:text-[#32ba78] transition-colors duration-200"
                  >
                    {link.icon} {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Main content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-[#5ceda7] pb-2">
              About the Innovator
            </h2>

            <div className="prose max-w-none mb-10">
              <p className="text-xl font-medium text-gray-700 mb-6">
                {innovator.bio}
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                The Journey
              </h3>
              <p className="text-gray-700 mb-8">{innovator.story}</p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Vision for the Future
              </h3>
              <p className="text-gray-700 mb-8">{innovator.vision}</p>

              <blockquote className="p-6 bg-[#d7fcea] border-l-4 border-[#32ba78] italic text-lg text-gray-700 mb-8">
                ""My goal is not just to create fuel but to build a sustainable future where waste is transformed into opportunity. I strive to reduce environmental pollution, provide affordable energy solutions, and empower communities through innovative waste-to-fuel technology."
              </blockquote>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {innovator.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-amber-100"
                  >
                    <Award className="w-6 h-6 text-[#32ba78] flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Impact Stories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Environmental Sustainability
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Maxwell has developed a fuel alternative from waste materials, reducing environmental pollution and promoting cleaner energy solutions.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-[#32ba78] hover:text-[#32ba78] font-medium"
                  >
                    Read more <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Community Empowerment
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Through training and mentorship, Maxwell has helped local entrepreneur and artisans adopt sustainable energy solutions, fostering economic growth.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-[#32ba78] hover:text-[#32ba78] font-medium"
                  >
                    Read more <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Connect with Maxwell
              </h3>
              <div className="bg-[#d7fcea] p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Interested in learning more about Maxwell's work or exploring partnership opportunities? Schedule a conversation or demonstration.
                </p>
                <button className="px-6 py-3 bg-[#32ba78] hover:bg-[#338a60] cursor-pointer text-white font-medium rounded-md transition-colors duration-200">
                  Request a Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInnovator;
