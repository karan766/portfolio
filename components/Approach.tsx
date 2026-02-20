"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.section 
      className="w-full py-10 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h1 
        variants={headerVariants}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-3 sm:mb-4"
        whileInView={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        My <span className="text-purple">approach</span>
      </motion.h1>
      <motion.div 
        className="my-10 sm:my-16 md:my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 sm:gap-6 md:gap-8"
        variants={containerVariants}
      >
        <motion.div variants={cardVariants}>
          <Card
            title="Planning & Strategy"
            icon={<AceternityIcon order="Phase 1" />}
            des="We'll collaborate to map out your website's goals, target audience, 
            and key functionalities. We'll discuss things like site structure, 
            navigation, and content requirements."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
            />
          </Card>
        </motion.div>
        <motion.div variants={cardVariants}>
          <Card
            title="Development & Progress Update"
            icon={<AceternityIcon order="Phase 2" />}
            des="Once we agree on the plan, I cue my lofi playlist and dive into
            coding. From initial sketches to polished code, I keep you updated
            every step of the way."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
              colors={[
                [255, 166, 158],
                [221, 255, 247],
              ]}
              dotSize={2}
            />
          </Card>
        </motion.div>
        <motion.div variants={cardVariants}>
          <Card
            title="Development & Launch"
            icon={<AceternityIcon order="Phase 3" />}
            des="This is where the magic happens! Based on the approved design, 
            I'll translate everything into functional code, building your website
            from the ground up."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ 
        scale: 1.02,
        y: -5, // Reduced movement
        transition: { duration: 0.3 }
      }}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-3 sm:p-4 relative h-[28rem] sm:h-[32rem] lg:h-[35rem] rounded-3xl cursor-pointer overflow-hidden"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Corner Icons */}
      <Icon className="absolute h-8 w-8 -top-2 -left-2 dark:text-white text-black opacity-30 z-10" />
      <Icon className="absolute h-8 w-8 -bottom-2 -left-2 dark:text-white text-black opacity-30 z-10" />
      <Icon className="absolute h-8 w-8 -top-2 -right-2 dark:text-white text-black opacity-30 z-10" />
      <Icon className="absolute h-8 w-8 -bottom-2 -right-2 dark:text-white text-black opacity-30 z-10" />

      {/* Background Effect - Full Coverage */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 px-4 sm:px-6 md:px-8 lg:px-10 w-full h-full flex flex-col items-center justify-center">
        {/* Icon - Shows when not hovered */}
        <motion.div 
          className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
          group-hover/canvas-card:opacity-0 group-hover/canvas-card:-translate-y-4 transition-all duration-400 min-w-32 sm:min-w-40 mx-auto flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          {icon}
        </motion.div>

        {/* Title and Description - Shows on hover */}
        <motion.div
          className="opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition-all duration-400 text-center"
        >
          <h2 className="dark:text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold leading-tight mb-3 sm:mb-4">
            {title}
          </h2>
          <p 
            className="text-xs sm:text-sm text-center leading-relaxed px-2 sm:px-0"
            style={{ color: "#E4ECFF" }}
          >
            {des}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.2 }}
    >
      <motion.button 
        className="relative inline-flex overflow-hidden rounded-full p-[1px]"
        whileHover={{ boxShadow: "0 0 30px rgba(203, 172, 249, 0.5)" }}
      >
        <motion.span 
          className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.span 
          className="inline-flex h-full w-full cursor-pointer items-center 
          justify-center rounded-full bg-slate-950 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-purple backdrop-blur-3xl font-bold text-lg sm:text-xl md:text-2xl transition-smooth"
          whileHover={{ 
            backgroundColor: "rgba(15, 23, 42, 0.95)",
            scale: 1.05,
          }}
        >
          {order}
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export const Icon = ({ className, ...rest }: { className?: string; [key: string]: unknown }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      whileHover={{ rotate: 90, scale: 1.1 }}
      transition={{ duration: 0.3 }}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </motion.svg>
  );
};

export default Approach;