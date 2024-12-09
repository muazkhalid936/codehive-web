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

    sections.forEach((section, index) => {
      const images = section.querySelectorAll(".image");
      const heading = section.querySelector(".heading");
      const imageCount = images.length;

      // GSAP timeline for controlling the image visibility
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: true,
          markers: true, // Optional: to see the start and end points of the scroll trigger
          onUpdate: (self) => {
            const scrollProgress = self.progress; // Progress of the scroll in percentage (0 to 1)
            const currentImageIndex = Math.floor(scrollProgress * imageCount);

            // Hide all images
            images.forEach((image, idx) => {
              gsap.set(image, { opacity: 0 });
            });

            // Show the current image based on scroll progress
            gsap.set(images[currentImageIndex], { opacity: 1 });
          },
        },
      });

      // Initially hide all images and set the first one visible
      gsap.set(images, { opacity: 0 });
      gsap.set(images[0], { opacity: 1 });

      // Animate section opacity
      gsap.set(section, { opacity: 1 }); // Set initial opacity to 0
      // gsap.set(".h11", {
      //   x: 400,
      // });
      // gsap.set(".h22", {
      //   x: 400,
      // });
      // gsap.set(".h11", {opacity:1, x: 0},".h11-=0.1");

      gsap.to(section, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: section,
          start: "top top", // Trigger when the top of the section comes 80% into the viewport
          end: "bottom top",
          scrub: true,
          markers: false, // Optional: to see the start and end points of the scroll trigger
        },
      });
      gsap.to(
        ".h11",
        {
          opacity: 1,
          x: 20,
          opacity: 0,
          scrollTrigger: {
            trigger: section,
            start: "top top", // Trigger when the top of the section comes 80% into the viewport
            end: "bottom top",
            scrub: true,
            markers: false, // Optional: to see the start and end points of the scroll trigger
          },
        },
        ".h22-=0.5"
      );
      gsap.to(".h22", {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: section,
          start: "top top", // Trigger when the top of the section comes 80% into the viewport
          end: "bottom top",
          scrub: true,
          markers: false, // Optional: to see the start and end points of the scroll trigger
        },
      });

      // Animate heading from x: 400 to x: 0 then fade up to x: -100
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="h-screen">a</div>
      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center  overflow-hidden"
      >
        {/* First Section */}
        <div
          className="section relative flex flex-row-reverse items-center justify-between gap-8 w-full px-16"
          style={{ height: "100vh" }}
        >
          <div className="w-1/2 heading h11">
            <h2 className="text-4xl font-bold text-blue-400">Car Wash</h2>
            <p className="mt-4 text-lg text-black">
              Transform your vehicle with our state-of-the-art car wash
              services, offering eco-friendly solutions that deliver a spotless
              shine.
            </p>
          </div>
          <div className="w-1/2 relative mx-auto">
            <img
              src="/Industry/1.png"
              alt="Image 1 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/2.png"
              alt="Image 2 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/3.png"
              alt="Image 3 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/4.png"
              alt="Image 1 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/5.png"
              alt="Image 2 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/6.png"
              alt="Image 3 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/7.png"
              alt="Image 1 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/8.png"
              alt="Image 2 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/9.png"
              alt="Image 3 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/10.png"
              alt="Image 1 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/11.png"
              alt="Image 2 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/12.png"
              alt="Image 3 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/13.png"
              alt="Image 1 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/14.png"
              alt="Image 2 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/15.png"
              alt="Image 3 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            {/* Add more images as needed */}
          </div>
        </div>

        {/* Second Section */}
        <div
          className="section relative flex flex-row-reverse items-center justify-between gap-8 w-full px-16"
          style={{ height: "100vh" }}
        >
          <div className="w-1/2 heading h22">
            <h2 className="text-4xl font-bold text-blue-400">Delivery</h2>
            <p className="mt-4 text-lg text-black">
              Experience seamless logistics with our reliable delivery services,
              designed to meet your personal and business needs.
            </p>
          </div>
          <div className="w-1/2 relative mx-auto">
            <img
              src="/Industry/1.png"
              alt="Image 1 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/2.png"
              alt="Image 2 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/3.png"
              alt="Image 3 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/4.png"
              alt="Image 1 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/5.png"
              alt="Image 2 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/6.png"
              alt="Image 3 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/7.png"
              alt="Image 1 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/8.png"
              alt="Image 2 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/9.png"
              alt="Image 3 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/10.png"
              alt="Image 1 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/11.png"
              alt="Image 2 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/12.png"
              alt="Image 3 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/13.png"
              alt="Image 1 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/14.png"
              alt="Image 2 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            <img
              src="/Industry/15.png"
              alt="Image 3 for Car Wash"
              className="image w-1/3 h-[60vh] mx-auto rounded-lg absolute -top-52 left-52 opacity-0"
            />
            {/* Add more images as needed */}
          </div>
        </div>

        {/* Add more sections here if needed */}
      </div>
      <div className="h-screen">a</div>
    </>
  );
};

export default ScrollAnimation;
