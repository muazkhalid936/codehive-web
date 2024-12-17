"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageScrollEffect = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".why-section-container",
        start: "top TOP",
        end: "+=1800", // Total scroll length
        scrub: true,
        pin: true, // Pin the entire container
      },
    });

    timeline
      .to(".why-section-image-1", { opacity: 0, duration: 1 }) // Fade out .image-1
      .to(".why-section-image-2", { opacity: 1, duration: 1 }, "-=0.5") // Fade in .image-2
      .to(".why-section-image-2", { opacity: 0, duration: 1 }) // Fade out .image-2
      .to(".why-section-image-3", { opacity: 1, duration: 1 }, "-=0.5") // Fade in .image-3
      .to(
        ".why-section-heading-2",
        { opacity: 0, duration: 1, y: -20 },
        "-=1.5"
      )
      .to(".why-section-heading-3", { duration: 1, y: -150 }, "-=1.5");

    const headingAnimations = () => {
      const applyGradient = (selector, startYPercent = -10) => {
        gsap.to(selector, {
          opacity: 0,
          yPercent: -100,
          scrollTrigger: {
            trigger: ".why-section-container",
            start: "top top",
            end: "+=600",
            scrub: true,
          },
          onStart: () => {
            const heading = document.querySelector(selector);
            if (heading) {
              heading.style.background =
                "linear-gradient(90deg, white, white, #209dd9)";
              heading.style.webkitBackgroundClip = "text";
              heading.style.color = "transparent";
            }
          },
          onReverseComplete: () => {
            const heading = document.querySelector(selector);
            if (heading) {
              heading.style.background = "none";
              heading.style.color = "inherit";
            }
          },
        });
      };

      const yPercentValue = -300; // Set the same yPercent value for all headings

      gsap.to(".why-section-heading-2", {
        scrollTrigger: {
          trigger: ".why-section-heading-1",
          start: "top center",
          end: "+=600",
          scrub: true,
        },
        yPercent: yPercentValue, // Use consistent yPercent
      });

      gsap.to(".why-section-heading-3", {
        scrollTrigger: {
          trigger: ".why-section-heading-1",
          start: "top center",
          end: "+=600",
          scrub: true,
        },
        yPercent: yPercentValue, // Use consistent yPercent
      });

      applyGradient(".why-section-heading-1");
    };

    headingAnimations();
  }, []);

  return (
    <>
      {/* Spacer for scrolling */}
      <div className="h-screen">a</div>

      {/* Main Section */}
      <div className="why-section-container bg-[#000b17] flex flex-col mx-auto text-center text-white h-[100vh] font-bold relative overflow-hidden">
        {/* Images */}
        <div className="w-full h-screen flex justify-center items-start">
          <img
            src="/Why/1.png"
            alt="First Image"
            className="absolute top-[10vh] md:scale-[0.7] why-section-image-1 2xl:scale-100 opacity-100"
          />
          <img
            src="/Why/2.png"
            alt="Second Image"
            className="absolute top-[10vh] why-section-image-2 md:scale-[0.7] 2xl:scale-100 opacity-0"
          />
          <img
            src="/Why/3.png"
            alt="Third Image"
            className="absolute top-[10vh] why-section-image-3 opacity-0 md:scale-[0.7] 2xl:scale-100"
          />
        </div>

        {/* Headings */}
        <div className="relative why-section-heading-section flex flex-col gap-20 -mt-80">
          <h1 className="why-section-heading-1 text-5xl main-heading md:text-6xl">
            Unrivaled Expertise
          </h1>
          <h1 className="why-section-heading-2 text-2xl md:text-5xl main-heading lg:text-6xl">
            Customer-Centric Approach
          </h1>
          <h1 className="why-section-heading-3 md:text-5xl  text-2xl lg:text-6xl main-heading">
            End-to-End Support
          </h1>
        </div>
      </div>

      {/* Spacer for scrolling */}
      <div className="h-screen">a</div>
    </>
  );
};

export default ImageScrollEffect;
