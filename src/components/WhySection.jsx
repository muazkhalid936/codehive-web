import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhySection = () => {
  useEffect(() => {
    // Array of headings
    const headings = [".h1", ".h2", ".h3", ".h4"];

    // Loop through each heading to apply the scroll animation
    headings.forEach((heading) => {
      gsap.to(heading, {
        duration: 1,
        scrollTrigger: {
          trigger: heading,
          pin: true,
          start: "top 70%", // Start fading when the heading's top is 80% down the screen
          end: "center center", // Fully faded when the heading reaches the center
          scrub: true, // Smooth fade effect during scroll
        },
        opacity: 0, // Fade out to 0
        y: -100, // Move upward while fading out
        duration: 1,
        scale:0.5 // Duration of the animation
      });
    });
  }, []);

  return (
    <div className="container h-screen mb-20 font-extrabold mx-auto flex flex-col justify-center items-center text-2xl md:text-5xl text-white gap-10 md:gap-20  md:space-y-20">
      {/* <h1 className="heading h1 ease-in-out">Why you choose us?</h1> */}
      <h1 className="heading h2">Customer-Centric Approach</h1>
      <h1 className="heading h3">Unrivaled Expertise</h1>
      <h1 className="heading h4">End-to-End Support</h1>
    </div>
  );
};

export default WhySection;
