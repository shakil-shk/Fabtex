import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/fabrics", label: "Fabrics" },
    { to: "/contact", label: "Contact Us" }
  ];

  return (
    <>
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-lg" 
            : "bg-white/80 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/home" className="flex items-center space-x-3 group">
              <img 
                src={Logo} 
                alt="FABTEX Logo" 
                className="h-10 w-10 rounded-lg shadow-md group-hover:scale-105 transition-transform duration-200"
              />
              <span className="text-xl font-bold text-[#006BB9] tracking-tight hidden sm:block">
                FABTEX GALLERY
              </span>
              <span className="text-lg font-bold text-[#006BB9] sm:hidden">
                FABTEX
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-[#006BB9] hover:bg-blue-50 transition-all duration-200 relative group"
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  <div className="absolute inset-0 bg-blue-100/50 rounded-lg -z-10 scale-0 group-hover:scale-100 origin-center transition-transform duration-200" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-xl text-gray-600 hover:text-[#006BB9] hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-[#006BB9] transition-all duration-200"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? "auto" : 0, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-4 py-3 text-lg font-semibold text-gray-800 hover:text-[#006BB9] hover:bg-blue-50 rounded-xl transition-all duration-200"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Prevent body scroll when mobile menu open */}
      <style jsx>{`
        body.menu-open {
          overflow: hidden;
        }
      `}</style>
      {isMenuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 z-40 bg-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
