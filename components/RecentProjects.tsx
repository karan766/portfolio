"use client";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-10 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-3 sm:mb-4">
          Featured <span className="text-purple">Projects</span>
        </h1>
        <p className="text-white-200 text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 sm:px-0">
          Production-ready applications showcasing full-stack development, real-time features, and scalable architecture
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 mt-6 sm:mt-8 md:mt-10">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[28rem] sm:h-[30rem] md:h-[32rem] flex items-center justify-center w-[90vw] sm:w-[85vw] md:w-96"
              key={item.id}
            >
              <PinContainer 
                title="View Project" 
                githubLink={item.githubLink}
                liveLink={item.liveLink}
              >
                <div className="relative flex items-center justify-center w-[90vw] sm:w-[85vw] md:w-96 overflow-hidden h-[20vh] sm:h-[22vh] md:h-[25vh] lg:h-[30vh] mb-6 sm:mb-8 md:mb-10 rounded-2xl">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#13162D] to-[#1a1d3a]"
                  >
                    <img 
                      src="/bg.png" 
                      alt="background" 
                      className="w-full h-full object-cover opacity-50" 
                    />
                  </div>
                  <img
                    src={item.img}
                    alt={`${item.title} preview`}
                    className="z-10 absolute inset-0 w-full h-full object-contain p-4"
                  />
                </div>

                <h1 className="font-bold text-sm sm:text-base md:text-xl lg:text-2xl line-clamp-1 mb-2">
                  {item.title}
                </h1>

                <p className="text-xs sm:text-sm text-purple mb-2 font-medium">
                  {item.tech}
                </p>

                <p
                  className="text-xs sm:text-sm lg:text-base lg:font-normal font-light line-clamp-3 mb-3 sm:mb-4 leading-relaxed"
                  style={{
                    color: "#BEC1DD",
                  }}
                >
                  {item.des}
                </p>

                {/* Key Features */}
                <div className="mb-3 sm:mb-4">
                  <h4 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Key Features:</h4>
                  <ul className="text-xs text-white-200 space-y-0.5 sm:space-y-1">
                    {item.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-start gap-1">
                        <span className="text-purple mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Icons */}
                <div className="flex items-center justify-center mt-4 sm:mt-6 md:mt-7 mb-2 sm:mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${3 * index + 1}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="p-1 sm:p-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;