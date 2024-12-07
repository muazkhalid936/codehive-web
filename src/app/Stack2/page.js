"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true, // Enable smooth scrolling
      lerp: 0.1, // Adjust for smoothness (lower = smoother, higher = snappier)
    });

    // Keep GSAP ScrollTrigger updated with Lenis scroll positions
    function raf(time) {
      lenis.raf(time); // Update Lenis
      ScrollTrigger.update(); // Notify ScrollTrigger of scroll changes
      requestAnimationFrame(raf); // Continue the animation frame
    }
    requestAnimationFrame(raf);

    // GSAP animations
    const sections = containerRef.current.querySelectorAll(".section");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
        toggleActions: "play none none none",
      },
    });

    sections.forEach((section, index) => {
      const heading = section.querySelector(".heading");
      const image = section.querySelector(".image");

      // Ensure the first section is visible by default
      if (index === 0) {
        gsap.set(heading, { x: 0, opacity: 1 });
        gsap.set(image, { x: 0, opacity: 1 });
      }

      // Animate out the previous elements
      if (index > 0) {
        tl.to(
          sections[index - 1].querySelector(".heading"),
          { x: -100, opacity: 0, duration: 0.5 },
          index
        ).to(
          sections[index - 1].querySelector(".image"),
          { x: 100, opacity: 0, duration: 0.5 },
          index
        );
      }

      // Animate in the current elements
      tl.fromTo(
        heading,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        index + 0.5
      ).fromTo(
        image,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        index + 0.5
      );
    });

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const headings = ["Heading One", "Heading Two", "Heading Three"];
  const images = ["/Industry/H.png", "/Industry/E.png", "/Industry/H.png"];

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center h-screen bg-gray-100 overflow-hidden"
    >
      {headings.map((heading, index) => (
        <div
          key={index}
          className={`section absolute flex items-center justify-between gap-8 w-full px-16 ${
            index === 0 ? "z-10" : ""
          }`}
        >
          {/* Left Section */}
          <div className="w-1/2 heading text-3xl font-bold">{heading}</div>
          {/* Right Section */}
          <div className="w-1/2">
            <img
              src={images[index]}
              alt={`Image ${index + 1}`}
              className="image w-1/3 h-[60vh] mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
