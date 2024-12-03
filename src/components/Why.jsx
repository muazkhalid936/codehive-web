import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const Why = () => {
  const headingsRef = useRef([]);

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

    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Link Lenis with GSAP ScrollTrigger
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return lenis.scroll !== undefined ? lenis.scroll : value;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType:
        document.body.style.overflowY === "scroll" ? "fixed" : "transform",
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP animations with ScrollTrigger
    headingsRef.current.forEach((heading, index) => {
      gsap.fromTo(
        heading,
        { y: 100, opacity: 0, backgroundPosition: "100% 100%" }, // Start state
        {
          y: 0,
          opacity: 1,
          backgroundPosition: "0% 0%", // Final background position
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 90%", // Animation starts as the element enters the viewport
            end: "top 50%", // Animation ends halfway into the viewport
            toggleActions: "play reverse play reverse", // Play and reverse on scroll
            scrub: true, // Smooth scroll-linked animation
            pin: true,
          },
        }
      );

      // Animate gradient color change using GSAP
      gsap.fromTo(
        heading.querySelector("h1"),
        {
          backgroundPosition: "100% 100%", // Start with the gradient off-screen
        },
        {
          backgroundPosition: "0% 0%", // Final state of the gradient
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 90%",
            end: "top 50%",
            toggleActions: "play reverse play reverse",
            scrub: true,
            // pin: true,
          },
        }
      );
    });

    // Clean up Lenis and ScrollTrigger
    return () => {
      lenis.destroy();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div className="container h-screen mx-auto flex flex-col justify-center items-center text-2xl md:text-5xl text-white space-y-16">
      <h1 className="heading1">Why you choose us?</h1>
      <div
        className="h-[50vh] heading"
        ref={(el) => (headingsRef.current[0] = el)}
      >
        <h1 className="bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
          Unrivaled Expertise
        </h1>
      </div>
      <div
        className="h-[50vh] heading"
        ref={(el) => (headingsRef.current[1] = el)}
      >
        <h1 className="bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
          Customer-Centric Approach
        </h1>
      </div>
      <div
        className="h-[50vh] heading"
        ref={(el) => (headingsRef.current[2] = el)}
      >
        <h1 className="bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
          End-to-End Support
        </h1>
      </div>
    </div>
  );
};

export default Why;
