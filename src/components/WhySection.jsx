import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhySection = () => {
  useEffect(() => {
    // Array of headings
    const headings = [".h2", ".h3", ".h4"];

    // Loop through each heading to apply the scroll animation
    headings.forEach((heading) => {
      gsap.to(heading, {
        opacity: 0, // Fade out to 0
        // duration: 1,
        // y: -10, // Move upward while fading out
        scale: 0.8, // Shrink while fading out
        scrollTrigger: {
          trigger: heading,
          start: "top 60%", // Start animation when heading is near the middle of the viewport
          end: "center center", // Finish animation earlier for a smooth transition
          scrub: 1, // Smooth scrub effect over scroll
        },
      });
    });
  }, []);

  return (
    <div className="container relative h-screen mb-20 font-extrabold mx-auto flex flex-col justify-center items-center text-2xl md:text-6xl xl:text-7xl text-white gap-20 ">
      <img src="/Why/1.png" className=" scale-90" />

      <h1 className="heading h2 header ">Customer-Centric Approach</h1>

      <h1 className="heading h3 header">Unrivaled Expertise</h1>
      <h1 className="heading h4 header">End-to-End Support</h1>
    </div>
  );
};

export default WhySection;
