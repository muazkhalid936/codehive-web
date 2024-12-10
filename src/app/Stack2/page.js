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

      // Scroll-linked animation
      gsap.fromTo(
        text.chars,
        { opacity: 0, scale: 0.5 }, // Starting state: faded and slightly down
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%", // Animation starts when top of element hits 90% of viewport
            end: "top 10%", // Animation completes when top of element hits 10% of viewport
            scrub: true, // Smooth link between scroll and animation
          },
        }
      );
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
    <div className="container mx-auto flex flex-col bg-[#000B17] justify-center items-center">
      <h1 className="h-screen">a</h1>
      <h1 className="text-white flex justify-center items-center h-screen text-5xl font-bold reveal-type">
        Define Your Goal
      </h1>
      <h1 className="text-white text-5xl h-screen font-bold reveal-type">
        Define Your Path
      </h1>
    </div>
  );
};

export default Page;
