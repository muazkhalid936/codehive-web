import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const WhySection = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Observe scroll events to trigger animations
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };
  }, [controls]);

  // Animation variants for headings
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container md:h-[600px]  my-20 md:mb-20 font-extrabold  mx-auto flex flex-col justify-center items-center text-2xl md:text-5xl text-white md:space-y-16">
      <motion.h1
        className="heading1"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Why you choose us?
      </motion.h1>
      {[
        "Unrivaled Expertise",
        "Customer-Centric Approach",
        "End-to-End Support",
      ].map((text, index) => (
        <motion.div
          key={index}
          className="my-5 heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
        >
          <motion.h1
            className="bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent"
            initial={{ backgroundPosition: "100% 100%" }}
            animate={{ backgroundPosition: "0% 0%" }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: index * 0.2,
            }}
          >
            {text}
          </motion.h1>
        </motion.div>
      ))}
    </div>
  );
};

export default WhySection;
