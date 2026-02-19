import { FaLocationArrow } from "react-icons/fa6";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { socialMedia, personalInfo } from "@/data";
import MagicButton from "./ui/MagicButton";
import GridGlobe from "./ui/GridGlobe";

const Footer = () => {
  return (
    <footer
      className="w-full pt-10 sm:pt-16 md:pt-20 pb-10 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-6 relative"
      id="contact"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to bring your <span className="text-purple">ideas</span> to
            life?
          </h1>
          <p className="text-white-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Let's collaborate on your next project! I'm experienced in building
            scalable, production-ready applications with modern technologies.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16 sm:mb-20 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
              Get In Touch
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <div className="bg-black-200/50 backdrop-blur-sm border border-white/[0.1] rounded-xl p-4 sm:p-6 hover:border-purple/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple/20 rounded-lg">
                    <FaEnvelope className="text-purple text-lg" />
                  </div>
                  <h3 className="text-white font-semibold">Email</h3>
                </div>
                <p className="text-white-200 text-sm break-all">
                  {personalInfo.email}
                </p>
              </div>

              <div className="bg-black-200/50 backdrop-blur-sm border border-white/[0.1] rounded-xl p-4 sm:p-6 hover:border-purple/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple/20 rounded-lg">
                    <FaPhone className="text-purple text-lg" />
                  </div>
                  <h3 className="text-white font-semibold">Phone</h3>
                </div>
                <p className="text-white-200 text-sm">{personalInfo.phone}</p>
              </div>

              <div className="bg-black-200/50 backdrop-blur-sm border border-white/[0.1] rounded-xl p-4 sm:p-6 hover:border-purple/50 transition-all duration-300 sm:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple/20 rounded-lg">
                    <FaMapMarkerAlt className="text-purple text-lg" />
                  </div>
                  <h3 className="text-white font-semibold">Location</h3>
                </div>
                <p className="text-white-200 text-sm">
                  {personalInfo.location}
                </p>
                <p className="text-white-200/70 text-xs mt-1">
                  Available for remote work worldwide
                </p>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <a href="mailto:karansodhi703@gmail.com">
                <MagicButton
                  title="Let's get in touch"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>

          {/* Globe Section - Positioned at Top */}
          <div className="hidden lg:flex flex-col justify-start">
            <div className="relative w-full h-[400px] flex items-start justify-center">
              <GridGlobe />
            </div>
            <div className="text-center -mt-8">
              <h3 className="text-lg font-bold text-white mb-2">
                Global <span className="text-purple">Reach</span>
              </h3>
              <p className="text-white-200 text-sm">Connecting worldwide</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/[0.1] pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm text-white-200 text-center sm:text-left">
              Copyright © 2026 {personalInfo.name}. All rights reserved.
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              {socialMedia.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 cursor-pointer flex justify-center items-center bg-black-200/50 backdrop-blur-sm border border-white/[0.1] rounded-lg hover:border-purple/50 hover:bg-purple/10 transition-all duration-300 group"
                  title={info.name}
                >
                  <img
                    src={info.img}
                    alt={info.name}
                    width={18}
                    height={18}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
