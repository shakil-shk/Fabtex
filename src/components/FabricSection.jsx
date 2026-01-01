import React, { useState, useEffect } from "react";
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

const PremiumFabricsSection = () => {
  const [activeCategory, setActiveCategory] = useState("knit");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fabricCategories = {
    knit: {
      title: "Knit Fabrics",
      items: [
        { id: 1, name: "PONTE ROMA/SCUBA", image: ponteRoma },
        { id: 2, name: "POLY, SPANDEX SINGLE JERSEY", image: polySPANDEX },
        { id: 3, name: "POLYESTER MICRO FLEECE", image: microFleece },
        { id: 4, name: "POLYESTER TRICOT", image: PolesterTricot },
        { id: 5, name: "POLYESTER CREP JERSEY", image: PolyCREP },
        { id: 6, name: "POLYESTER MESH", image: polyMesh },
        {
          id: 7,
          name: "VISCOS / POLYESTER JERSEY",
          image: "/api/placeholder/300/300",
        },
        {
          id: 8,
          name: "SOFT SHELL/SOFT SHELL WITH BONDED FLEECE",
          image: "/api/placeholder/300/300",
        },
        {
          id: 9,
          name: "100% POLYESTER SHERPA/ FAKE FUR",
          image: "/api/placeholder/300/300",
        },
      ],
    },
    woven: {
      title: "Woven Fabrics",
      items: [
        { id: 1, name: "BENGALINE", image: Bengaline },
        { id: 2, name: "TWILL/CANVAS/OXFORD/RIBSTOP", image: Twill },
        {
          id: 3,
          name: "98%CTN 2%SPANDEX ST TWILL/CANVAS/CORDUROY",
          image: SpandexTwill,
        },
        { id: 4, name: "100% VISCOS SOLID & AOP", image: Viscos },
        {
          id: 5,
          name: "100%POLY MICROFIBRE PLAIN WEAVE/TWILL WEAVE",
          image: MicrofiberPlain,
        },
        { id: 6, name: "TAFFETA/TASLON", image: TaffetaTASLON },
        {
          id: 7,
          name: "COTTON, POLYESTER, SPANDEX POPLIN",
          image: "/api/placeholder/300/300",
        },
        {
          id: 8,
          name: "COTTON, NYLON POPLIN",
          image: "/api/placeholder/300/300",
        },
        {
          id: 9,
          name: "COTTON, SPANDEX POPLIN",
          image: "/api/placeholder/300/300",
        },
      ],
    },
    hot: {
      title: "Hot Products",
      items: [
        { id: 1, name: "COTTON, POLY, SPANDEX DENIM", image: SCpoly },
        {
          id: 2,
          name: "COTTON, POLY, SPANDEX FACK KNIT DENIM",
          image: SCPFake,
        },
        {
          id: 3,
          name: "COTTON, POLY, VISCOSE ,SPANDEX DENIM",
          image: SCViscos,
        },
        { id: 4, name: "COTTON, POLY DENIM", image: CPDenim },
      ],
    },
  };

  const currentCategory = fabricCategories[activeCategory];
  const imageItems = currentCategory.items.slice(0, 6);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      {/* Floating fabric particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-200/50 rounded-full animate-float1 blur-sm"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-purple-200/40 rounded-full animate-float2 blur-sm"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-indigo-200/60 rounded-full animate-float3 blur-sm"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-pink-200/50 rounded-full animate-float4 blur-sm"></div>
      </div>

      <div
        className={`max-w-7xl mx-auto mt-10 transform transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        {/* Header with stagger animation */}
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-95"
            }`}
          >
            FABRICS COLLECTION
          </h1>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            Discover our exquisite range of high-quality fabrics, meticulously
            curated for fashion professionals and enthusiasts.
          </p>
        </div>

        {/* Animated Category Tabs - FIXED: Added gap between buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full shadow-2xl p-2 bg-gradient-to-r from-white to-gray-100 backdrop-blur-sm gap-2">
            {Object.keys(fabricCategories).map((category) => (
              <button
                key={category}
                type="button"
                className={`px-8 py-3 text-sm font-semibold rounded-full transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg flex-shrink-0 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-gray-900 to-blue-900 text-white shadow-xl scale-105"
                    : "text-gray-700 bg-white/80 hover:bg-white shadow-md"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {fabricCategories[category].title.replace(" Fabrics", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Content Grid */}
        <div
          className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50 transform transition-all duration-1000 delay-300 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          }`}
        >
          <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50/30">
            <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text">
              {currentCategory.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Enhanced Image Grid - FIXED: NO ROTATION FOR ALL, Hot gets bigger scale */}
            <div
              className={`grid grid-cols-2 p-8 ${
                activeCategory === "hot" ? "gap-8" : "gap-4"
              }`}
            >
              {imageItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative group overflow-hidden rounded-2xl aspect-square cursor-pointer transform transition-all duration-700 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 ${
                    activeCategory === "hot"
                      ? "hover:scale-110" // Hot products: bigger straight scale
                      : "hover:scale-105" // All others: normal straight scale
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleImageClick(item)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 z-20 transform transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-4">
                    <span className="text-white font-bold text-lg bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {item.id.toString().padStart(2, "0")}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Animated Product Names */}
            <div className="bg-gradient-to-b from-gray-50 to-white p-8">
              <div className="space-y-6">
                {currentCategory.items.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-start group cursor-pointer hover:translate-x-2 transition-all duration-500 transform"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-gray-400 font-bold text-xl mr-4 mt-1 w-10 flex-shrink-0 group-hover:text-blue-500 transition-colors duration-300">
                      {item.id.toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-900 hover:underline decoration-wavy transition-all duration-300 line-clamp-2">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated Footer Note */}
        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-lg font-medium text-gray-500 bg-gradient-to-r from-gray-500 to-blue-500 bg-clip-text">
            Premium quality fabrics for discerning fashion professionals
          </p>
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div
            className="bg-white/95 backdrop-blur-2xl rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform scale-95 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-white to-gray-50/50">
              <h3 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text">
                {selectedImage.name}
              </h3>
              <button
                className="text-gray-500 hover:text-red-500 text-3xl font-bold p-2 rounded-2xl hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
            <div className="p-8 flex justify-center items-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="max-h-[70vh] max-w-full object-contain animate-zoomIn"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumFabricsSection;
