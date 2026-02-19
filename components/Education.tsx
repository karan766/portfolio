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
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-3 sm:mb-4">
          Education & <span className="text-purple">Certifications</span>
        </h1>
        <p className="text-white-200 text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 sm:px-0">
          Strong academic foundation in Computer Science with industry-recognized certifications
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black-100 p-4 sm:p-6 md:p-8 rounded-xl border border-white/[0.1] hover:border-purple/50 transition-all duration-300"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <FaGraduationCap className="text-purple text-lg sm:text-xl md:text-2xl flex-shrink-0" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white leading-tight">{education.degree}</h4>
              <p className="text-sm sm:text-base md:text-lg text-purple">{education.university}</p>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-white-200 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-purple flex-shrink-0" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-purple flex-shrink-0" />
                  <span>{education.duration}</span>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6">
                <h5 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Relevant Coursework:</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {education.coursework.map((course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-purple/10 text-purple px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-center"
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black-100 p-4 sm:p-6 md:p-8 rounded-xl border border-white/[0.1] hover:border-purple/50 transition-all duration-300"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <FaCertificate className="text-purple text-lg sm:text-xl md:text-2xl flex-shrink-0" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  className="border border-white/[0.1] rounded-lg p-3 sm:p-4 hover:border-purple/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Image src={cert.icon} alt={cert.name} width={32} height={32} className="mt-0.5 sm:mt-1 flex-shrink-0" />
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