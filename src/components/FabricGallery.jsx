import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import PonteRoma from "../assets/galleryfabrics/ponteRoma.jpg";
import PolyesterFleece from "../assets/galleryfabrics/micro_fleece.jpg";
import Bengaline from "../assets/hotfabrics/bengaline.jpg";

const hotCollections = [
  {
    id: 1,
    name: "Bengaline",
    description: "Crosswise ribbed textile with excellent stretch and recovery.",
    image: Bengaline,
  },
  {
    id: 2,
    name: "Ponte Roma/Scuba",
    description: "Double-knit fabric with excellent recovery and structure.",
    image: PonteRoma,
  },
  {
    id: 3,
    name: "Polyester Micro Fleece",
    description: "Soft, warm fleece with excellent insulation properties.",
    image: PolyesterFleece,
  },
];

const FabricGallery = () => {
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
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="py-12 lg:py-16 px-4 lg:px-8 bg-gradient-to-br from-slate-50/30 to-blue-50/10">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-400/3 to-purple-400/3 rounded-full blur-xl"></div>
        <div className="absolute -bottom-20 -left-20 w-56 h-56 lg:w-72 lg:h-72 bg-gradient-to-tr from-emerald-400/2 to-blue-400/2 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Minimal Divider */}
        <motion.div 
          className="w-20 h-0.5 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 mx-auto mb-8 lg:mb-12 rounded-full shadow-sm"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Compact Header */}
        <motion.div className="text-center mb-12 lg:mb-16" initial={{ opacity: 0, y: -15 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }} transition={{ duration: 0.6 }}>
          <motion.div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-sm rounded-xl mb-4 shadow-md shadow-blue-500/30 border border-white/40 text-white text-xs font-bold uppercase tracking-wide" initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
            <span className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 animate-pulse"></span>
            Trending Now
          </motion.div>
          
          <motion.h1 className="text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-gray-900 via-slate-800 to-gray-700 bg-clip-text text-transparent mb-4 leading-tight" whileHover={{ y: -1 }}>
            Latest Collections
          </motion.h1>
          
          <motion.p className="text-base lg:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed font-light" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.3 }}>
            Discover our top high-value fabrics that are trending now.
          </motion.p>
        </motion.div>

        {/* Tight Grid Cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" variants={containerVariants} initial="hidden" animate={controls}>
          {hotCollections.map((fabric, index) => (
            <motion.div key={fabric.id} className="group" variants={itemVariants}>
              <motion.div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-1 border border-white/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden transition-all duration-500" whileHover={{ y: -8, scale: 1.015 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                {/* Image */}
                <div className="h-48 lg:h-56 xl:h-64 overflow-hidden rounded-2xl">
                  <motion.img
                    src={fabric.image}
                    alt={fabric.name}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Ranking Badge */}
                  <motion.div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500/95 to-indigo-500/95 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg border border-white/30 whitespace-nowrap" initial={{ scale: 0 }} whileHover={{ scale: 1.05 }}>
                    #{index + 1}
                  </motion.div>
                </div>

                {/* Compact Content */}
                <div className="p-5 lg:p-6">
                  <motion.h3 className="text-lg lg:text-xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight" whileHover={{ scale: 1.01 }}>
                    {fabric.name}
                  </motion.h3>
                  <motion.p className="text-gray-600 leading-relaxed text-sm lg:text-base font-light line-clamp-2" whileHover={{ color: "#6b7280" }}>
                    {fabric.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compact CTA */}
        <motion.div className="text-center mt-12 lg:mt-16" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.6 }}>
          <Link to="/fabrics">
            <motion.button 
              className="px-10 py-3.5 bg-gradient-to-r from-[#02226b] to-[#0b3ca8] text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-xl border-0 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                y: -3,
                boxShadow: "0 15px 30px rgba(2, 34, 107, 0.4)"
              }}
              whileTap={{ scale: 0.97 }}
            >
              Browse All Collections
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FabricGallery;
