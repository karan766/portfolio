"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  githubLink,
  liveLink,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  githubLink?: string;
  liveLink?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <motion.div
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          style={{
            transform: transform,
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition-all duration-500 overflow-hidden will-change-transform"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </motion.div>
      </div>
      <PinPerspective githubLink={githubLink} liveLink={liveLink} />
    </motion.div>
  );
};

export const PinPerspective = ({
  githubLink,
  liveLink,
}: {
  title?: string;
  href?: string;
  githubLink?: string;
  liveLink?: string;
}) => {
  return (
    <div className="pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition-all duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <div className="relative flex gap-3 items-center z-10 rounded-full bg-zinc-950/90 py-3 px-6 ring-1 ring-white/10 backdrop-blur-sm">
            {/* GitHub Link */}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto flex items-center justify-center gap-2 w-24 py-2 bg-black-200 hover:bg-purple/20 border border-white/[0.2] hover:border-purple/50 rounded-lg transition-smooth group/github"
              >
                <FaGithub className="text-white group-hover/github:text-purple transition-smooth" size={14} />
                <span className="text-xs text-white group-hover/github:text-purple transition-smooth font-medium">
                  Code
                </span>
              </a>
            )}

            {/* Live Demo Link */}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto flex items-center justify-center gap-2 w-24 py-2 bg-purple/10 hover:bg-purple/20 border border-purple/30 hover:border-purple/50 rounded-lg transition-smooth group/live"
              >
                <span className="text-xs text-purple group-hover/live:text-white transition-smooth font-medium">
                  Demo
                </span>
                <FaExternalLinkAlt className="text-purple group-hover/live:text-white transition-smooth" size={12} />
              </a>
            )}
          </div>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: [0, 0.8, 0.4, 0],
              scale: 1,
              z: 0,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: 0,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.06] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: [0, 0.8, 0.4, 0],
              scale: 1,
              z: 0,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: 4,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.06] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: [0, 0.8, 0.4, 0],
              scale: 1,
              z: 0,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: 8,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.06] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
        </div>

        <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px] transition-all duration-500" />
        <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 transition-all duration-500" />
        <motion.div 
          className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};