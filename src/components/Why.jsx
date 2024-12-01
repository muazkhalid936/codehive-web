import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const Why = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    const headings = containerRef.current.querySelectorAll(".heading");

    // Initial animation for individual headings
    headings.forEach((heading) => {
      gsap.fromTo(
        heading,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: heading,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // Animation to stack all headings in a column at the end
    gsap.to(headings, {
      y: (index) => index * 100, // Adjust spacing between headings
      opacity: 1,
      duration: 1,
      stagger: 0.2, // Stagger animation for smoother transition
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom bottom", // Trigger when the container bottom hits viewport bottom
        end: "+=500", // Scroll distance to complete the animation
        pin: true, // Pin the container during this animation
        scrub: true, // Smooth transition tied to scroll position
      },
    });

    return () => {
      lenis.destroy(); // Cleanup Lenis instance
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="container mx-auto flex flex-col justify-center items-center text-5xl text-white space-y-16"
    >
      <h1 className="heading">Why</h1>
      <div className="h-[50vh] heading">
        <h1>Unrivaled Expertise</h1>
      </div>
      <div className="h-[50vh] heading">
        <h1>Customer-Centric Approach</h1>
      </div>
      <div className="h-[50vh] heading">
        <h1>End-to-End Support</h1>
      </div>
    </div>
  );
};

export default Why;
