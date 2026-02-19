"use client";

import React from "react";
import { skills } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";

// Animation variants for smoother transitions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const categoryVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
      duration: 0.8,
    },
  },
};

const skillItemVariants = {
  hidden: { 
    opacity: 0, 
    x: -30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
    },
  },
};

const SkillItem = ({ skill }: { skill: { name: string; icon: string } }) => {
  return (
    <motion.div
      variants={skillItemVariants}
      whileHover={{ 
        scale: 1.02,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transition: { duration: 0.2 }
      }}
      className="flex items-center gap-3 p-3 rounded-lg bg-black-200/50 hover:bg-black-200/80 transition-all duration-300 cursor-pointer group"
    >
      <motion.div
        variants={iconVariants}
        whileHover="hover"
        className="flex-shrink-0"
      >
        <Image src={skill.icon} alt={skill.name} width={24} height={24} className="transition-all duration-300" />
      </motion.div>
      <span className="text-white font-medium group-hover:text-purple transition-colors duration-300">
        {skill.name}
      </span>
    </motion.div>
  );
};

const SkillCategory = ({ title, skillList, delay = 0 }: { title: string; skillList: { name: string; icon: string }[]; delay?: number }) => {
  const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={categoryVariants}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="bg-black-100 p-6 rounded-xl border border-white/[0.1] hover:border-purple/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple/20"
    >
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: delay + 0.2,
          duration: 0.6,
          ease: "easeOut"
        }}
        className="text-xl font-bold text-white mb-6 text-center"
      >
        {title}
      </motion.h3>
      <motion.div 
        variants={skillsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-3"
      >
        {skillList.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="heading mb-4"
        >
          Technical <span className="text-purple">Skills</span>
        </motion.h1>
        <motion.p 
          variants={descriptionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white-200 text-center mb-12 max-w-2xl mx-auto"
        >
          Comprehensive expertise across the full development stack with hands-on experience in production environments
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"
        >
          <SkillCategory 
            title="Languages" 
            skillList={skills.languages} 
            delay={0.1}
          />
          <SkillCategory 
            title="Frontend" 
            skillList={skills.frontend} 
            delay={0.2}
          />
          <SkillCategory 
            title="Backend" 
            skillList={skills.backend} 
            delay={0.3}
          />
          <SkillCategory 
            title="Databases" 
            skillList={skills.databases} 
            delay={0.4}
          />
          <SkillCategory 
            title="Cloud & DevOps" 
            skillList={skills.cloud} 
            delay={0.5}
          />
          <SkillCategory 
            title="Tools" 
            skillList={skills.tools} 
            delay={0.6}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;