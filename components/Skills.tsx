"use client";

import React from "react";
import { skills } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";

const SkillItem = ({ skill }: { skill: { name: string; icon: string } }) => {
  return (
    <motion.div
      initial={{ opacity: 0.8, x: -10 }} // Start with some opacity
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transition: { duration: 0.2 }
      }}
      className="flex items-center gap-3 p-3 rounded-lg bg-black-200/50 hover:bg-black-200/80 transition-smooth cursor-pointer group"
    >
      <motion.div
        whileHover={{ 
          scale: 1.1,
          rotate: 3,
          transition: { duration: 0.2 }
        }}
        className="flex-shrink-0"
      >
        <Image src={skill.icon} alt={skill.name} width={24} height={24} className="transition-smooth" />
      </motion.div>
      <span className="text-white font-medium group-hover:text-purple transition-smooth">
        {skill.name}
      </span>
    </motion.div>
  );
};

const SkillCategory = ({ title, skillList, delay = 0 }: { title: string; skillList: { name: string; icon: string }[]; delay?: number }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0.8, // Start with some opacity
        y: 30,
        scale: 0.95,
      }}
      whileInView={{ 
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{ 
        duration: 0.6,
        delay: delay * 0.1, // Reduced delay multiplier
        ease: [0.4, 0, 0.2, 1]
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -3, // Reduced hover movement
        transition: { duration: 0.2 }
      }}
      className="bg-black-100 p-6 rounded-xl border border-white/[0.1] hover:border-purple/50 transition-smooth hover:shadow-lg hover:shadow-purple/20"
    >
      <motion.h3 
        initial={{ opacity: 0.8, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: delay * 0.1 + 0.1,
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1]
        }}
        viewport={{ once: true }}
        className="text-xl font-bold text-white mb-6 text-center"
      >
        {title}
      </motion.h3>
      <div className="grid gap-3">
        {skillList.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0.7 }}
            whileInView={{ opacity: 1 }}
            transition={{ 
              delay: delay * 0.1 + 0.2 + index * 0.03, // Very small stagger
              duration: 0.3
            }}
            viewport={{ once: true }}
          >
            <SkillItem skill={skill} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0.9, y: -20 }} // Start with high opacity
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="heading mb-4"
        >
          Technical <span className="text-purple">Skills</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0.8, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-white-200 text-center mb-12 max-w-2xl mx-auto"
        >
          Comprehensive expertise across the full development stack with hands-on experience in production environments
        </motion.p>
        
        <div 
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"
          style={{ minHeight: '500px' }} // Prevent layout shift
        >
          <SkillCategory 
            title="Languages" 
            skillList={skills.languages} 
            delay={0}
          />
          <SkillCategory 
            title="Frontend" 
            skillList={skills.frontend} 
            delay={1}
          />
          <SkillCategory 
            title="Backend" 
            skillList={skills.backend} 
            delay={2}
          />
          <SkillCategory 
            title="Databases" 
            skillList={skills.databases} 
            delay={3}
          />
          <SkillCategory 
            title="Cloud & DevOps" 
            skillList={skills.cloud} 
            delay={4}
          />
          <SkillCategory 
            title="Tools" 
            skillList={skills.tools} 
            delay={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;