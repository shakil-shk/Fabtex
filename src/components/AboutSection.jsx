import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const statVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateX: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto mt-10" ref={ref}>
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            hidden: { opacity: 0, y: -30 }
          }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            About Fabtex Gallery
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto"
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <motion.div 
          className="flex flex-col lg:flex-row gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Main Content */}
          <motion.div 
            className="lg:w-2/3"
            variants={itemVariants}
          >
            <motion.p 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              Fabtex Gallery is a well-established, renowned fabric sourcing
              company dedicated to providing quality fabrics to local garment
              factories and buying houses in Dhaka, Bangladesh. We specialize in
              importing all types of quality fabrics as per buyer specifications
              from China and Vietnam.
            </motion.p>

            <motion.p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Our skilled quality control team ensures complete service
              delivery, supplying premium fabrics at reasonable prices. We're
              committed to building stable relationships with our valued clients
              by providing high-quality products and services at competitive
              prices.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              variants={containerVariants}
            >
              {[
                { title: "Quality Assurance", desc: "Expert QC team ensures premium fabric quality", icon: "M5 13l4 4L19 7" },
                { title: "Global Sourcing", desc: "Direct imports from China and Vietnam", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                { title: "Secure Transactions", desc: "Escrow payments for financial security", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                { title: "Fast Response", desc: "Quick quotes and efficient service", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
              ].map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="flex items-start cursor-pointer group"
                  variants={featureVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-all duration-300 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={feature.icon}
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats/Features Section */}
          <motion.div 
            className="lg:w-1/3 bg-white rounded-xl shadow-lg p-8"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-xl font-semibold text-gray-800 mb-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Fabtex Gallery?
            </motion.h3>

            <div className="space-y-6">
              {[
                { value: "100%", label: "Quality Verified Factories" },
                { value: "Secure", label: "Escrow Payment Protection" },
                { value: "24h", label: "Fast Quote Response Time" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  variants={statVariants}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-blue-600 mb-2"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      color: ["#2563eb", "#1d4ed8", "#2563eb"]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-700">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-8 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/contact">
                <motion.button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg"
                  whileHover={{ 
                    boxShadow: "0 10px 25px rgba(37, 99, 235, 0.4)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Our Team
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-2xl p-8 md:p-12 text-center overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.8, delay: 0.3 }
          }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 via-transparent to-blue-900/20"></div>
          <motion.h3 
            className="text-2xl font-semibold mb-4 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Mission
          </motion.h3>
          <motion.p 
            className="text-xl max-w-3xl mx-auto relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            To give you the best value for your money by offering imported
            fabrics tailored to your needs and budgets, driven by advanced
            marketing concepts, quality products, and manufacturing methods
            focused on customer satisfaction.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
