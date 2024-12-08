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
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const sections = containerRef.current.querySelectorAll(".section");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=500%",
        scrub: true,
        pin: true,
        toggleActions: "play none none none",
      },
    });

    sections.forEach((section, index) => {
      const heading = section.querySelector(".heading");
      const images = section.querySelectorAll(".image");

      if (index > 0) {
        // Animate outgoing elements of the previous section
        tl.to(
          sections[index - 1].querySelector(".heading"),
          { opacity: 0, duration: 0.5 },
          index
        ).to(
          sections[index - 1].querySelector(".image-1"),
          { opacity: 0, duration: 0.5 },
          index
        ).to(
          sections[index - 1].querySelector(".image-2"),
          { opacity: 1, duration: 0.5 },
          index
        );

        // Animate incoming elements of the current section
        tl.fromTo(
          heading,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          index + 0.5
        );
      } else {
        // Ensure the first section is visible by default
        gsap.set(heading, { x: 0, opacity: 1 });
        gsap.set(images[0], { opacity: 1 }); // First image visible
        gsap.set(images[1], { opacity: 0 }); // Second image hidden
      }
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const data = [
    {
      title: "Car Wash",
      description:
        "Transform your vehicle with our state-of-the-art car wash services, offering eco-friendly solutions that deliver a spotless shine. From advanced cleaning techniques to water conservation practices, we ensure your car looks as good as new every time.",
      images: ["/Industry/H.png", "/Industry/E.png"], // Two images for each section
    },
    {
      title: "Delivery",
      description:
        "Experience seamless logistics with our reliable delivery services, designed to meet your personal and business needs. From same-day delivery to meticulous handling, we ensure your packages arrive safely and on time, every time.",
      images: ["/Industry/E.png", "/Industry/H.png"], // Two images for each section
    },
    // Add more sections as needed
  ];

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center h-screen main22 overflow-hidden"
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="section absolute flex flex-row-reverse items-center justify-between gap-8 w-full px-16"
        >
          <div className="w-1/2 heading">
            <h2 className="text-4xl font-bold text-blue-400">{item.title}</h2>
            <p className="mt-4 text-lg text-gray-300">{item.description}</p>
          </div>
          {/* Right Section: Two Images */}
          <div className="w-1/2 flex justify-between">
            <img
              src={item.images[0]}
              alt={`${item.title} image 1`}
              className="image image-1 w-1/3 h-[60vh] mx-auto rounded-lg shadow-lg"
            />
            <img
              src={item.images[1]}
              alt={`${item.title} image 2`}
              className="image image-2 w-1/3 h-[60vh] mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
