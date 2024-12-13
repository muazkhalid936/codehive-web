"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type"; // Ensure this is installed with `npm install split-type`

const Page = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();

    // Split text into characters
    const splitTypes = document.querySelectorAll(".reveal-type");
    splitTypes.forEach((element) => {
      const text = new SplitType(element, { types: "chars" });

      const chars = text.chars; // Get all characters after splitting
      gsap.set(chars, { opacity: 0 }); // Set initial opacity to low for all characters

      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "top 10%",
        scrub: true,
        onUpdate: (self) => {
          // Calculate active character range based on scroll progress
          const activeIndex = Math.floor(self.progress * chars.length);
          chars.forEach((char, i) => {
            if (i >= activeIndex && i < activeIndex + 4) {
              // Fully visible characters
              gsap.set(char, { opacity: 1 });
            } else if (i >= activeIndex - 2 && i < activeIndex + 6) {
              // Partially visible characters before and after
              const distance = Math.abs(i - activeIndex - 2); // Distance from active range
              const reducedOpacity = 0.2 + (1 - distance * 0.2); // Scale opacity smoothly
              gsap.set(char, { opacity: Math.max(0.2, reducedOpacity) });
            } else {
              // Invisible characters
              gsap.set(char, { opacity: 0 });
            }
          });
        },
      });
    });

    // Handle Lenis scroll
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
      ScrollTrigger.kill(); // Clean up ScrollTrigger instances
    };
  }, []);

  return (
    <div className="container mx-auto flex h-screen  bg-[#000B17] justify-center items-center">
      <h1 className="text-white text-7xl !header  !font-extrabold reveal-type">
        Our Process1
      </h1>
    </div>
  );
};

export default Page;
