"use client";

import React from "react";
import { education, certifications } from "@/data";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";

const Education = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6" id="education">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0.9, y: -20 }} // Start with high opacity
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-3 sm:mb-4"
        >
          Education & <span className="text-purple">Certifications</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0.8, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-white-200 text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 sm:px-0"
        >
          Strong academic foundation in Computer Science with industry-recognized certifications
        </motion.p>
        
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          style={{ minHeight: '400px' }} // Prevent layout shift
        >
          {/* Education */}
          <motion.div
            initial={{ opacity: 0.8, x: -20 }} // Reduced movement and higher opacity
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
            className="bg-black-100 p-4 sm:p-6 md:p-8 rounded-xl border border-white/[0.1] hover:border-purple/50 transition-smooth"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <FaGraduationCap className="text-purple text-lg sm:text-xl md:text-2xl flex-shrink-0" />
              </motion.div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <motion.h4 
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg md:text-xl font-semibold text-white leading-tight"
              >
                {education.degree}
              </motion.h4>
              <motion.p 
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base md:text-lg text-purple"
              >
                {education.university}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-white-200 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-purple flex-shrink-0" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-purple flex-shrink-0" />
                  <span>{education.duration}</span>
                </div>
              </motion.div>
              
              <div className="mt-4 sm:mt-6">
                <motion.h5 
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
                >
                  Relevant Coursework:
                </motion.h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {education.coursework.map((course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0.7, scale: 0.95 }} // Higher initial opacity
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.3 + index * 0.03, // Reduced stagger
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      className="bg-purple/10 text-purple px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-center transition-smooth cursor-pointer"
                    >
                      {course}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0.8, x: 20 }} // Reduced movement and higher opacity
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
            className="bg-black-100 p-4 sm:p-6 md:p-8 rounded-xl border border-white/[0.1] hover:border-purple/50 transition-smooth"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <FaCertificate className="text-purple text-lg sm:text-xl md:text-2xl flex-shrink-0" />
              </motion.div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0.8, y: 10 }} // Reduced movement and higher opacity
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.2 + index * 0.05, // Reduced stagger
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="border border-white/[0.1] rounded-lg p-3 sm:p-4 hover:border-purple/30 transition-smooth cursor-pointer"
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Image src={cert.icon} alt={cert.name} width={32} height={32} className="mt-0.5 sm:mt-1 flex-shrink-0" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold mb-1 text-sm sm:text-base leading-tight">{cert.name}</h4>
                      <p className="text-purple text-xs sm:text-sm mb-1">{cert.issuer}</p>
                      <p className="text-white-200 text-xs sm:text-sm">{cert.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;