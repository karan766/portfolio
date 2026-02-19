import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-10 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6" id="experience">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-3 sm:mb-4">
          Professional <span className="text-purple">Experience</span>
        </h1>
        <p className="text-white-200 text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 sm:px-0">
          Hands-on internship experience building production-ready applications and optimizing system performance
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <Image
                    src={card.thumbnail}
                    alt={card.title}
                    width={64}
                    height={64}
                    className="flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h1 className="text-start text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight">
                      {card.title}
                    </h1>
                    <p className="text-start text-purple font-semibold text-xs sm:text-sm md:text-base">
                      {card.company}
                    </p>
                    <p className="text-start text-white-200 text-xs sm:text-sm">
                      {card.duration}
                    </p>
                  </div>
                </div>
                
                <p className="text-start text-white-100 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
                  {card.desc}
                </p>

                <div>
                  <h3 className="text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">Key Achievements:</h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {card.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-white-200 text-xs sm:text-sm leading-relaxed">
                        <span className="text-purple mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;