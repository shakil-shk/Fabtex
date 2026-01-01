import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [controlNavbar]);

  const closeMobileMenu = () => setIsMenuOpen(false);

  // Animation variants
  const navbarVariants = {
    visible: {
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hidden: {
      y: "-100%",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const navLinkVariants = {
    initial: { opacity: 0, y: -10 },
    hover: { 
      y: -2,
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { 
      y: 0,
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  const mobileMenuVariants = {
    initial: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.2 }
    },
    animate: {
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.3, 
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 }
    }
  };

  const mobileLinkVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav
      className="bg-white/95 backdrop-blur-xl shadow-xl fixed w-full z-50"
      variants={navbarVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center">
              <motion.img
                className="h-12 w-12 rounded-lg shadow-lg"
                src={Logo}
                alt="FABTEX Logo"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="text-2xl font-black text-[#006BB9] tracking-tight ml-3 hidden sm:block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                FABTEX GALLERY
              </motion.span>
              <motion.span 
                className="text-xl font-black text-[#006BB9] tracking-tight ml-2 sm:hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                FABTEX GALLERY
              </motion.span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {[
              { to: "/home", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/fabrics", label: "Fabrics" },
              { to: "/contact", label: "Contact Us" }
            ].map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className="relative text-gray-700 px-4 py-2 rounded-xl text-base font-semibold hover:text-[#006BB9] transition-all duration-300 group"
                  variants={navLinkVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={closeMobileMenu}
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div 
                    className="absolute inset-0 bg-blue-50/50 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId="hoverBackground"
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden flex items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-2xl text-gray-600 hover:text-[#006BB9] hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-[#006BB9] shadow-lg hover:shadow-xl transition-all duration-200 bg-white/80 backdrop-blur-sm"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <motion.svg 
                className="h-6 w-6"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {!isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                )}
              </motion.svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-blue-100/50 shadow-2xl overflow-hidden"
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {[
                { to: "/home", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/fabrics", label: "Fabrics" },
                { to: "/contact", label: "Contact Us" }
              ].map((item) => (
                <motion.div
                  key={item.to}
                  variants={mobileLinkVariants}
                >
                  <Link
                    to={item.to}
                    className="group relative block px-6 py-4 rounded-2xl text-lg font-bold text-gray-800 hover:text-[#006BB9] hover:bg-blue-50 transition-all duration-400 border border-transparent hover:border-blue-100 shadow-sm hover:shadow-md mx-2"
                    onClick={closeMobileMenu}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;