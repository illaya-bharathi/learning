import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleScroll = (sectionId) => {
    if (isHomePage) {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const headingLines = [
    "Designing the Future with ",
    " Intelligent Systems",
  ];

  // We explicitly extract words to map over them and apply staggering
  const words = headingLines.flatMap((line) => line.split(" "));

  return (
    <section
      className="
        w-full
        h-full
        flex-1
        min-h-[calc(60vh-60px)]
        sm:min-h-[calc(70vh-70px)]
        md:min-h-[calc(78vh-80px)]
        lg:min-h-[calc(82vh-80px)]
        flex flex-col
        overflow-x-hidden
        relative
      "
    >
      <div
        className="
          relative w-full h-full flex-1
          min-h-[calc(60vh-60px)]
          sm:min-h-[calc(70vh-70px)]
          md:min-h-[calc(78vh-80px)]
          lg:min-h-[calc(82vh-80px)]
          overflow-hidden cursor-default
          flex items-center justify-center
          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24
          py-8 sm:py-10 md:py-12 lg:py-0
        "
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <style>{`
            @keyframes crtFlicker {
              0% { opacity: 1; }
              50% { opacity: 0.98; }
              100% { opacity: 1; }
            }
            .hero-content {
              animation: crtFlicker 0.15s infinite;
            }
            /* Ultrawide screens */
            @media (min-width: 1920px) {
              .hero-heading {
                font-size: clamp(4rem, 5vw, 6rem) !important;
              }
              .hero-description {
                font-size: 1.25rem !important;
              }
            }
            /* Large desktops */
            @media (min-width: 1280px) and (max-width: 1919px) {
              .hero-heading {
                font-size: clamp(3rem, 4.5vw, 4.5rem) !important;
              }
            }
            /* Very small phones (< 360px) */
            @media (max-width: 359px) {
              .hero-heading {
                font-size: 1.5rem !important;
              }
              .hero-word {
                margin-right: 0.2rem !important;
                padding-left: 0.1rem !important;
                padding-right: 0.1rem !important;
              }
            }
          `}</style>

          <div className="w-full max-w-7xl mx-auto text-center hero-content">
            {/* The float animation starts after the text finishes appearing (approx 1.5s delay) */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ delay: 1.0, duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="inline-block transition-transform duration-500 ease-out hover:scale-105 transform-gpu cursor-default">
                <h1
                  className="text-white mb-3 sm:mb-4 md:mb-6 leading-tight hero-heading"
                  style={{
                    fontSize: "clamp(1.6rem, 5vw, 4.5rem)",
                    textShadow: "0 0 5px rgba(0,237,194,0.5)"
                  }}
                >
                  {headingLines.map((line, lineIdx) => (
                    <div key={lineIdx} className="block">
                      {line.split(" ").map((word, wordIdx) => {
                        // Calculate a unique index for staggering
                        const globalIndex = lineIdx === 0 ? wordIdx : headingLines[0].split(" ").length + wordIdx;
                        return (
                          <motion.span
                            key={globalIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: globalIndex * 0.05, ease: "easeOut" }}
                            className={`
                              inline-block hero-word
                              mr-1 sm:mr-2 px-0.5 sm:px-1 md:px-2
                              ${word.includes("Intelligent") || word.includes("Systems")
                                ? "text-[rgb(0,237,194)]"
                                : "text-white"}
                            `}
                          >
                            {word}
                          </motion.span>
                        );
                      })}
                    </div>
                  ))}
                </h1>
              </div>

              <div
                className="
                  text-gray-300 max-w-4xl mx-auto
                  mb-6 sm:mb-8 md:mb-10 lg:mb-12
                  px-2 sm:px-4
                  text-sm sm:text-base md:text-lg
                  hero-description
                "
              >
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                  className="block transform-gpu whitespace-nowrap text-sm lg:text-base"
                >
                  We design and engineer hardware and software solutions that transform ideas into intelligent, real-world products.
                </motion.span>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
                className="
                  flex flex-col sm:flex-row flex-wrap
                  items-center justify-center
                  gap-3 sm:gap-4 md:gap-6
                  transform-gpu
                  px-2 sm:px-0
                "
              >
                <button
                  onClick={() => handleScroll("expertise")}
                  className="
                    relative w-full sm:w-auto
                    px-6 sm:px-8 md:px-10
                    py-3 sm:py-3.5 md:py-4
                    rounded-full font-medium
                    text-[#00EDC2]
                    bg-transparent
                    border shadow-[0_0_25px_rgba(0,237,194,0.25)]
                    transition-all duration-300
                    hover:scale-105
                    text-sm sm:text-base
                  "
                >
                  <span className="relative z-10">Explore Solutions</span>
                  <span
                    className="
                      absolute inset-0 rounded-full
                      pointer-events-none
                      shadow-[0_0_25px_rgba(0,237,194,0.25)]
                    "
                  ></span>
                </button>

                <button
                  onClick={() => handleScroll("contact")}
                  className="
                    relative w-full sm:w-auto
                    flex items-center justify-center
                    gap-2 sm:gap-3
                    px-6 sm:px-8 md:px-10
                    py-3 sm:py-3.5 md:py-4
                    rounded-full font-medium
                    text-[#00ebc0]
                    border border-[#00EDC2]/40
                    bg-transparent
                    transition-all duration-300
                    hover:scale-105
                    hover:border-[#00EDC2]
                    hover:shadow-[0_0_25px_rgba(0,237,194,0.6)]
                    text-sm sm:text-base
                  "
                >
                  Connect with us
                  <ArrowRight className="w-4 h-4 opacity-80" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;