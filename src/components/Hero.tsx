import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import edu_hero from "../assets/images/edu_hero.jpg";
import tech_hero from "../assets/images/tech_hero.jpg";
import building_engineer from "../assets/images/building-engineer.jpg";

const slides = [
  {
    image: edu_hero,
    subtitle: "Why Education Matters",
    title: "Join Us in Making a Difference",
    description: "We invite you to be part of this exciting journey. Whether you’re looking to expand your knowledge, train your team, or inspire the next generation of thinkers, we are here to support you. Together, we can build a brighter future through the power of education.",
    insight: "Empowering the Future Through Education",
    link: "/insights/education"
  },
  {
    image: tech_hero,
    subtitle: "Embracing new technologies",
    title: "Shift your business into the digital age of tomorrow",
    description: "Uncover the groundbreaking tech trends that are reshaping industries today",
    insight: "Emerging digital transformation trends to look out for in 2025.",
    link: "/insights/digital-trends"
  },
  {
    image: building_engineer,
    subtitle: "Leveraging innovative engineering",
    title: " Digitally modernize your engineering operations to enhance productivity.",
    description: " Uncover the cutting-edge technologies and practices that are revolutionizing the engineering field.",
    insight: "Engineering trends for 2025 → shaping the future of the industry.",
    link: "/insights/engineering"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
    {/* Background layer - always visible */}
    <div className="absolute inset-0 grid md:grid-cols-2">
      <div className="relative overflow-hidden col-span-2 md:col-span-1">
        <div className="absolute inset-0">
          <img
            src={slides[currentSlide].image}
            alt="Background"
            className="w-full h-full object-cover filter md:blur-sm transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>
        </div>
      </div>
      <div className="relative overflow-hidden hidden md:block">
        <img
          src={slides[currentSlide].image}
          alt="Background"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>
    </div>

    {/* Content layer */}
    <AnimatePresence mode="wait">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-full z-10"
      >
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="grid md:grid-cols-2 gap-12 h-full items-center">
            <div className="text-white pt-4 md:pt-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-secondary font-medium mb-4"
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl mb-8"
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="group inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                <span>Learn More</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            <div className="">
              <div className="bg-primary p-6 absolute -bottom-4 w-[90%] md:w-[25%] md:right-[14vw] rounded-lg border-t-[10px] border-t-secondary">
                <h3 className="text-sm font-semibold text-secondary mb-4">FEATURED INSIGHT</h3>
                <h4 className="text-2xl font-bold text-white mb-6">
                  {slides[currentSlide].insight}
                </h4>
                <div className="flex justify-between items-center">
                  <a
                    href={slides[currentSlide].link}
                    className="group inline-flex items-center space-x-2 text-white"
                  >
                    <span>Read Article</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={prevSlide}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <ArrowLeftIcon className="w-5 h-5 text-white" />
                    </button>
                    <span className="text-white">{currentSlide + 1}/{slides.length}</span>
                    <button
                      onClick={nextSlide}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <ArrowRightIcon className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
  );
}