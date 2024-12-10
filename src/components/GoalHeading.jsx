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
      gsap.set(chars, { opacity: 0 }); // Initially set all characters to invisible

      ScrollTrigger.create({
        trigger: element,
        start: "top top",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress; // Scroll progress (0 to 1)
          const activeIndex = Math.floor(progress * chars.length);

          chars.forEach((char, i) => {
            if (i <= activeIndex) {
              // Reveal characters based on scroll progress
              gsap.to(char, { opacity: 1, duration: 0.2, ease: "power1.out" });
            } else {
              // Keep characters invisible if not in the active range
              gsap.to(char, { opacity: 0, duration: 0.2, ease: "power1.out" });
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
    <div className="container mx-auto flex h-screen bg-[#000B17] justify-center items-center">
      <h1 className="text-white text-5xl font-bold reveal-type">
        Why You Choose Us?
      </h1>
    </div>
  );
};

export default Page;
