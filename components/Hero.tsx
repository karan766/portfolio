"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { personalInfo } from "@/data";
import { motion } from "framer-motion";

const Hero = () => {
  const statsData = [
    { number: "50+", label: "Users Served" },
    { number: "1000+", label: "Records Handled" },
    { number: "10+", label: "APIs Built" },
    { number: "44%", label: "Performance Boost" }
  ];

  return (
    <div className="pb-10 sm:pb-16 md:pb-20 pt-16 sm:pt-18 md:pt-20 min-h-screen relative w-screen -mx-3 sm:-mx-5 md:-mx-8 lg:-mx-10">
      {/* Enhanced Spotlight Effects - Responsive Coverage */}
      <div className="absolute inset-0">
        <Spotlight
          className="-top-20 sm:-top-40 -left-5 sm:-left-10 md:-left-32 md:-top-20 h-[120vh] sm:h-[150vh]"
          fill="white"
        />
        <Spotlight
          className="h-[100vh] sm:h-[120vh] w-[60vw] sm:w-[50vw] top-5 sm:top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-40 sm:left-80 top-14 sm:top-28 h-[100vh] sm:h-[120vh] w-[40vw] sm:w-[50vw]" fill="blue" />
        <Spotlight
          className="top-5 sm:top-10 left-5 sm:left-10 h-[80vh] sm:h-[100vh] w-[40vw] sm:w-[30vw]"
          fill="cyan"
        />
        <Spotlight
          className="bottom-0 right-5 sm:right-10 h-[60vh] sm:h-[80vh] w-[50vw] sm:w-[40vw]"
          fill="purple"
        />
      </div>

      {/* Enhanced Grid Background - Full Viewport Coverage */}
      <div className="absolute inset-0 w-screen h-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
        <div className="absolute pointer-events-none inset-0 dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Floating Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-purple/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 sm:top-40 right-10 sm:right-20 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-blue-500/10 rounded-full blur-xl"
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center relative mt-4 sm:mt-6 md:mt-8 z-10 px-3 sm:px-5 md:px-8 lg:px-10"
      >
        <div className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl flex flex-col items-center justify-center px-4 sm:px-0">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <div className="flex items-center gap-2 bg-black-200/50 backdrop-blur-sm border border-white/[0.1] rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="uppercase tracking-widest text-[10px] sm:text-xs text-center text-blue-100 leading-tight">
                <span className="hidden sm:inline">Available for Opportunities • Full-Stack Developer</span>
                <span className="sm:hidden">Available • Full-Stack Dev</span>
              </p>
            </div>
          </motion.div>
          
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TextGenerateEffect
              words={`Hi! I'm ${personalInfo.name}`}
              className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Building the Future with <span className="text-purple">Code</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white-200 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Transforming ideas into scalable, production-ready applications using modern technologies. 
              Passionate about creating seamless user experiences and robust backend systems.
            </p>
          </motion.div>

          {/* Enhanced Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12 w-full max-w-xs sm:max-w-2xl md:max-w-4xl"
          >
            {statsData.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-black-200/30 backdrop-blur-sm border border-white/[0.1] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center hover:border-purple/50 transition-all duration-300"
              >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-white-200 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <a href="/resume.pdf" download>
              <MagicButton
                title="Download Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;