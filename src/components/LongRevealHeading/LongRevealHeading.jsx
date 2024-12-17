"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./LongRevealHeading.css";
gsap.registerPlugin(ScrollTrigger);

const LongRevealHeading = (params) => {
  const textRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Adjust for smoothness
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // GSAP Scroll Animation
    gsap
      .timeline({
        // opacity: 0,
        scale: 0.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top center", // Start when text is in the center of the viewport
          end: "+=600", // Customize based on the desired scroll length
          pin: true, // Pin the text in place
          scrub: 1, // Smoothly animate based on scroll
        },
      })
      .fromTo(
        textRef.current,
        {
          scale: 0.8,
          backgroundPosition: "-200% 0", // Move the gradient across the text
        },
        {
          scale: 1.2,
          duration: 1,
          backgroundPosition: "200% 0", // Move the gradient across the text
          ease: "none",
        }
      );

    return () => {
      lenis.destroy(); // Cleanup Lenis
    };
  }, []);

  return (
    <div className="container h-[50vh] items-center flex justify-center  mx-auto">
      <p
        ref={textRef}
        className="animated-text main-heading header text-2xl md:text-4xl xl:text-6xl text-white"
      >
        {params.text}
      </p>
    </div>
  );
};

export default LongRevealHeading;
