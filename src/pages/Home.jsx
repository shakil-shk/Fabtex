import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Overview from '../components/Overview'
import FabricGallery from '../components/FabricGallery'
import Services from '../components/Services'
import Brands from '../components/Brands'
import Footer from '../components/Footer'

const Home = () => {
  return (
    /* 1. overflow-x-clip: The modern way to stop horizontal scrolling without breaking 'sticky' elements.
      2. flex-col: Ensures all sections stack naturally, removing the blank white space issue.
      3. w-full: Forces the container to stay exactly the width of the screen.
    */
    <div className="flex flex-col min-h-screen w-full overflow-x-clip bg-white">
      <Navbar/>
      
      {/* Main content wrapper to ensure internal animations don't break the layout */}
      <main className="flex-grow w-full">
        <Hero/>
        <Overview/>
        
        {/* We wrap FabricGallery in a relative container with hidden overflow 
            to catch any 'rogue' animations before they hit the main page. */}
        <div className="relative overflow-hidden w-full">
          <FabricGallery/>
        </div>
        
        <Services/>
        <Brands/>
      </main>

      <Footer />
    </div>
  )
}

export default Home