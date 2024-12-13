"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const GoalHeading = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
    });

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // GSAP animation for the text
    gsap.fromTo(
      ".text-gr",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".text-gr",
          start: "top 80%", // Trigger when 80% of the viewport height
        },
      }
    );

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="container flex justify-center items-center mx-auto h-screen">
      <h1 className="text-gr text-2xl  md:text-4xl lg:text-5xl xl:text-7xl text-white header font-bold text-center ">
        Why Choose Us?
      </h1>
    </div>
  );
};

export default GoalHeading;
