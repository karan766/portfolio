"use client";

import { personalInfo } from "@/data";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaCloud, FaUsers, FaRocket } from "react-icons/fa";

const Grid = () => {
  const aboutCards = [
    {
      id: 1,
      icon: <FaCode className="text-purple text-3xl" />,
      title: "Full-Stack Development",
      description: "Expert in MERN stack with hands-on experience building production-ready applications",
      stats: "50+ Users Handled"
    },
    {
      id: 2,
      icon: <FaServer className="text-purple text-3xl" />,
      title: "Backend Performance",
      description: "Optimized MongoDB collections scaling to 1,000+ records with 44% performance improvement",
      stats: "44% Performance Boost"
    },
    {
      id: 3,
      icon: <FaDatabase className="text-purple text-3xl" />,
      title: "Database Design",
      description: "Designed relational schemas with indexing and efficient querying for data integrity",
      stats: "1,000+ Records"
    },
    {
      id: 4,
      icon: <FaCloud className="text-purple text-3xl" />,
      title: "Cloud & DevOps",
      description: "Experience with AWS, Docker, CI/CD pipelines and containerized deployments",
      stats: "Production Ready"
    },
    {
      id: 5,
      icon: <FaUsers className="text-purple text-3xl" />,
      title: "Real-Time Systems",
      description: "Built real-time messaging with Socket.IO supporting 10+ concurrent users",
      stats: "10+ Concurrent Users"
    },
    {
      id: 6,
      icon: <FaRocket className="text-purple text-3xl" />,
      title: "API Development",
      description: "Designed and exposed 10+ REST APIs with validation, error handling and JWT auth",
      stats: "10+ REST APIs"
    }
  ];

  return (
    <section id="about" className="py-10 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0.9, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            About <span className="text-purple">Me</span>
          </h1>
          <div className="max-w-4xl mx-auto px-2 sm:px-0">
            <motion.p 
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="text-white-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8"
            >
              {personalInfo.summary}
            </motion.p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
              {[
                "B.Tech Computer Science Engineering",
                "MERN Stack Certified", 
                "AWS Cloud Practitioner"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0.8, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.2 + index * 0.05,
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-2 transition-smooth"
                >
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple rounded-full animate-pulse-glow" />
                  <span className="text-white-200">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          style={{ minHeight: '400px' }}
        >
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ 
                opacity: 0.8,
                y: 20,
                scale: 0.98,
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
              }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.4, 0, 0.2, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-black-100 p-4 sm:p-6 rounded-xl border border-white/[0.1] hover:border-purple/50 transition-smooth group cursor-pointer"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <motion.div 
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 2,
                  }}
                  transition={{ duration: 0.2 }}
                  className="p-2 sm:p-3 bg-purple/10 rounded-lg group-hover:bg-purple/20 transition-smooth flex-shrink-0"
                >
                  <FaCode className="text-purple text-xl sm:text-2xl md:text-3xl" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-purple transition-smooth leading-tight">
                    {card.title}
                  </h3>
                  <div className="text-purple text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                    {card.stats}
                  </div>
                </div>
              </div>
              <p className="text-white-200 text-xs sm:text-sm leading-relaxed group-hover:text-white transition-smooth">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0.8, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-8 sm:mt-12 md:mt-16"
        >
          <motion.div 
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
            className="bg-gradient-to-r from-purple/10 to-blue-500/10 p-4 sm:p-6 md:p-8 rounded-2xl border border-purple/20 hover:border-purple/40 transition-smooth"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-white-200 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2 sm:px-0">
              I&apos;m actively seeking internship and full-time opportunities where I can contribute 
              to innovative projects and continue growing as a software engineer.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="bg-purple hover:bg-purple/80 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-smooth text-sm sm:text-base"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ 
                  scale: 1.02, 
                  y: -1,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="border border-purple text-purple hover:bg-purple hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-smooth text-sm sm:text-base"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Grid;