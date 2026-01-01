import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

// Import all fabric images
import ponteRoma from "../assets/galleryfabrics/ponteRoma.jpg";
import PolesterTricot from "../assets/galleryfabrics/PolesterTricot.jpg";
import microFleece from "../assets/galleryfabrics/micro_fleece.jpg";
import polySPANDEX from "../assets/galleryfabrics/polySPANDEX.jpg";
import PolyCREP from "../assets/galleryfabrics/PolyCREP.jpg";
import polyMesh from "../assets/galleryfabrics/polyMesh.jpg";
import Bengaline from "../assets/galleryfabrics/Bengaline.jpg";
import Twill from "../assets/galleryfabrics/Twill.jpg";
import SpandexTwill from "../assets/galleryfabrics/SpandexTwill.jpg";
import Viscos from "../assets/galleryfabrics/Viscos.jpg";
import MicrofiberPlain from "../assets/galleryfabrics/MicrofiberPlain-Twill.jpg";
import TaffetaTASLON from "../assets/galleryfabrics/TaffetaTASLON.jpg";
import SCpoly from "../assets/galleryfabrics/SCpoly.jpg";
import SCPFake from "../assets/galleryfabrics/SCPFake.jpg";
import SCViscos from "../assets/galleryfabrics/SCViscos.jpg";
import CPDenim from "../assets/galleryfabrics/CPDenim.jpg";

// Import other images
import Logo from "../assets/logo.jpg";
import officepic from "../assets/officepic.jpg";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, type: "spring", stiffness: 400 },
    },
  };

  // Array of fabric images with names
  const fabricImages = [
    { src: ponteRoma, name: "Ponte Roma" },
    { src: PolesterTricot, name: "Polyster Tricot" },
    { src: microFleece, name: "Micro Fleece" },
    { src: polySPANDEX, name: "Poly Spandex" },
    { src: PolyCREP, name: "Poly Crepe" },
    { src: polyMesh, name: "Poly Mesh" },
    { src: Bengaline, name: "Bengaline" },
    { src: Twill, name: "Twill" },
    { src: SpandexTwill, name: "Spandex Twill" },
    { src: Viscos, name: "Viscos" },
    { src: MicrofiberPlain, name: "Microfiber Plain" },
    { src: TaffetaTASLON, name: "Taffeta Taslon" },
    { src: SCpoly, name: "SC Poly" },
    { src: SCPFake, name: "SCP Fake" },
    { src: SCViscos, name: "SC Viscos" },
    { src: CPDenim, name: "CP Denim" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white py-12 px-4 overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        <div
          className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-3 h-3 bg-blue-600 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Brand section */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={Logo}
                alt="FABTEX Logo"
                className="h-10 w-auto mr-3 rounded shadow-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 25px rgba(0, 107, 185, 0.5)",
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.h2
                className="text-2xl font-extrabold text-[#006BB9] tracking-wide"
                whileHover={{ scale: 1.05 }}
              >
                FABTEX GALLERY
              </motion.h2>
            </motion.div>

            <motion.p
              className="text-gray-300 text-sm leading-relaxed mb-4"
              variants={itemVariants}
            >
              Your trusted partner for premium fabric sourcing from China and
              Vietnam. We deliver quality fabrics to garment factories and
              buying houses across Bangladesh.
            </motion.p>

            {/* Social Media Icons */}
            <motion.div
              className="flex space-x-4 mt-7"
              variants={containerVariants}
            >
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-blue-600 hover:shadow-2xl border border-gray-700/50 group"
                variants={socialVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaFacebookF size={18} className="group-hover:text-white" />
              </motion.a>

              <motion.a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-blue-400 hover:shadow-2xl border border-gray-700/50 group"
                variants={socialVariants}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  boxShadow: "0 15px 35px rgba(96, 165, 250, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter size={18} className="group-hover:text-white" />
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-blue-800 hover:shadow-2xl border border-gray-700/50 group"
                variants={socialVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: -10,
                  boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedinIn size={18} className="group-hover:text-white" />
              </motion.a>

              <motion.a
                href="https://wa.me/8801712608500"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-green-500 hover:shadow-2xl border border-gray-700/50 group"
                variants={socialVariants}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  boxShadow: "0 15px 35px rgba(34, 197, 94, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp size={18} className="group-hover:text-white" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col h-full" variants={itemVariants}>
            {/* Office Address with Premium Background */}
            <motion.a
              href="https://www.google.com/maps/place/Sector-7,+Road-7,+House-7,+Uttara,+Dhaka-1230"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl mb-4 flex-1 cursor-pointer group"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.95, opacity: 0 }
                }
                transition={{ duration: 0.8 }}
                style={{
                  backgroundImage: `url(${officepic})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 0.6 }}
                />
                <motion.div
                  className="relative p-6 flex flex-col justify-center h-full group-hover:scale-105 transition-all duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0 }}
                  animate={
                    isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.h3
                    className="text-xl font-bold text-white mb-3 drop-shadow-lg"
                    whileHover={{ color: "#60A5FA" }}
                  >
                    Office Address
                  </motion.h3>
                  <motion.p
                    className="text-gray-200 text-sm leading-relaxed drop-shadow-md"
                    whileHover={{ color: "white" }}
                  >
                    Sector-07, Road-07 <br /> House-07, Flat-5A (Lift 4)
                    <br />
                    Uttara, Dhaka-1230.
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.a>

            {/* Contact Details */}
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-lg font-semibold mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Contact Details
              </motion.h3>
              <motion.p
                className="text-gray-300 text-sm leading-relaxed"
                variants={itemVariants}
              >
                📧{" "}
                <motion.a
                  href="mailto:faysal@fabtexgallery.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ color: "#60A5FA", scale: 1.05 }}
                >
                  faysal@fabtexgallery.com
                </motion.a>
                <br />
                📞{" "}
                <motion.a
                  href="tel:+8801712608500"
                  className="hover:text-green-400 transition-colors duration-300"
                  whileHover={{ color: "#34D399", scale: 1.05 }}
                >
                  +8801712608500
                </motion.a>
                <br />
                🌐{" "}
                <motion.a
                  href="http://www.fabtexgallery.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ color: "#60A5FA", scale: 1.05 }}
                >
                  www.fabtexgallery.com
                </motion.a>
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Product Showcase section - SIMPLE ANIMATIONS */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Fabric Showcase
            </motion.h3>

            <motion.div
              className="grid grid-cols-4 gap-3"
              variants={containerVariants}
            >
              {fabricImages.slice(0, 8).map((fabric, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 h-20 rounded-lg overflow-hidden relative group border border-gray-700/50 hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-lg"
                  initial={{ opacity: 0, y: 15 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                  }
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                >
                  <img
                    src={fabric.src}
                    alt={fabric.name}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-400"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.span
                      className="text-white text-xs font-medium px-1"
                      initial={{ scale: 0.9 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {fabric.name}
                    </motion.span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-4 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/fabrics"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center font-medium"
              >
                View All Fabrics
                <motion.span
                  className="ml-1"
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright section */}
        <motion.div
          className="border-t border-gray-700/50 pt-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.p
            className="text-gray-400 text-sm tracking-wide"
            whileHover={{ color: "#60A5FA" }}
          >
            © {new Date().getFullYear()} FABTEX GALLERY. All rights reserved. |
            Dhaka, Bangladesh
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
