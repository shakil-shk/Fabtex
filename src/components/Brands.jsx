import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CarrefourLogo from '../assets/brandslogos/carrefour.png';
import LidlLogo from '../assets/brandslogos/lidl.png';
import PrimarkLogo from '../assets/brandslogos/primark.png';
import RelianceLogo from '../assets/brandslogos/reliance.png';
import OliverLogo from '../assets/brandslogos/oliver.png';
import WalmartLogo from '../assets/brandslogos/walmart.png';
import CAlogo from '../assets/brandslogos/c&a.jpg';
import CostcoLogo from '../assets/brandslogos/costco.jpg';
import WoolworthsLogo from '../assets/brandslogos/woolworths.jpg';

const brands = [
  { name: 'Carrefour', logo: CarrefourLogo },
  { name: 'Lidl', logo: LidlLogo },
  { name: 'Primark', logo: PrimarkLogo },
  { name: 'Reliance Industries', logo: RelianceLogo },
  { name: 'Oliver', logo: OliverLogo },
  { name: 'Walmart', logo: WalmartLogo },
  { name: 'C&A', logo: CAlogo },
  { name: 'Costco Wholesale', logo: CostcoLogo },
  { name: 'Woolworths', logo: WoolworthsLogo }
];

const duplicatedBrands = [...brands, ...brands];

const Brands = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements with motion */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className="absolute -top-24 -right-24 w-48 h-48 bg-blue-200 rounded-full opacity-10"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-200 rounded-full opacity-10"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, -180],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Trusted by <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Global Brands
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're proud to collaborate with industry leaders worldwide, delivering exceptional solutions.
          </motion.p>
        </motion.div>

        {/* Framer Motion Marquee */}
        <motion.div 
          className="relative overflow-hidden py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="flex"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ display: 'flex', whiteSpace: 'nowrap' }}
          >
            {duplicatedBrands.map((brand, index) => (
              <motion.div
                key={index}
                className="mx-6 flex flex-col items-center justify-center w-72 h-44 bg-white hover:bg-blue-50 rounded-xl p-4 border border-gray-100 shadow-sm"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  rotate: 0
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05 
                }}
                whileHover={{ 
                  scale: 1.08,
                  y: -8,
                  rotate: 1,
                  zIndex: 10,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                    mass: 0.8
                  }
                }}
                whileHoverEnd={{
                  scale: 1,
                  y: 0,
                  rotate: 0,
                  zIndex: 1,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    mass: 0.8
                  }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="h-28 w-full flex items-center justify-center"
                >
                  <motion.img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-20 max-w-48 object-contain"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 3
                    }}
                    whileHoverEnd={{
                      scale: 1,
                      rotate: 0
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 500,
                      damping: 20
                    }}
                  />
                </motion.div>
                <motion.p 
                  className="mt-3 text-sm font-medium text-gray-600"
                  whileHover={{ color: "#2563eb" }}
                  whileHoverEnd={{ color: "#4b5563" }}
                  transition={{ duration: 0.2 }}
                >
                  {brand.name}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Brands;
