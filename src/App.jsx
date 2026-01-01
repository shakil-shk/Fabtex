import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";



import Home from "./pages/Home";

import About from "./pages/About";

import Fabrics from "./pages/Fabrics";

import Contact from "./pages/Contact";



const PageWrapper = ({ children }) => {

  const pageVariants = {

    initial: { opacity: 0, x: 50 }, // Reduced X to 50 for a subtler, cleaner mobile feel

    animate: { opacity: 1, x: 0 },

    exit: { opacity: 0, x: -50 },

  };



  return (

    <motion.div

      variants={pageVariants}

      initial="initial"

      animate="animate"

      exit="exit"

      transition={{ duration: 0.4, ease: "easeInOut" }}

      className="w-full min-h-screen"

      /* 'absolute' prevents the exiting page from pushing the 

         entering page down (which causes the vertical scroll jump).

      */

      style={{ position: "absolute", top: 0, left: 0 }}

    >

      {children}

    </motion.div>

  );

};



const App = () => {

  const location = useLocation();



  return (

    /* 1. overflow-x-hidden: prevents side-scroll

       2. min-h-screen + relative: allows absolute children to stay within bounds 

    */

    <div className="overflow-x-hidden w-full relative min-h-screen">

      <AnimatePresence mode="wait">

        <Routes location={location} key={location.pathname}>

          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />

          <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />

          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />

          <Route path="/fabrics" element={<PageWrapper><Fabrics /></PageWrapper>} />

          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />

        </Routes>

      </AnimatePresence>

    </div>

  );

};



export default App;