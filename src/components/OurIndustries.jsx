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
        end: "+=600%",
        scrub: true,
        pin: true,
        toggleActions: "play none none none",
      },
    });

    sections.forEach((section, index) => {
      const heading = section.querySelector(".heading");
      const image = section.querySelector(".image");

      if (index === 0) {
        gsap.set(heading, { x: 0, opacity: 1 });
        gsap.set(image, { x: 0, opacity: 1 });
      }

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
      image: "/Industry/H.png", // Replace with actual image URL
    },
    {
      title: "Delivery",
      description:
        "Experience seamless logistics with our reliable delivery services, designed to meet your personal and business needs. From same-day delivery to meticulous handling, we ensure your packages arrive safely and on time, every time.",
      image: "/Industry/E.png", // Replace with actual image URL
    },
    {
      title: "Health Care",
      description:
        "Discover innovative healthcare solutions that prioritize your well-being. Our comprehensive services span advanced diagnostics, preventive care, and personalized treatment plans, empowering you to lead a healthier and happier life.",
      image: "/Industry/H.png", // Replace with actual image URL
    },
    {
      title: "Booking",
      description:
        "Streamline your reservations with our intuitive booking platform, crafted to offer maximum convenience. Whether it's travel, events, or appointments, enjoy an effortless booking experience with just a few clicks.",
      image: "/Industry/E.png", // Replace with actual image URL
    },
    {
      title: "Ecommerce",
      description:
        "Elevate your shopping experience with our modern e-commerce platforms, designed to deliver speed, security, and style. From tailored storefronts to seamless checkout, we redefine online retail to meet your business goals.",
      image: "/Industry/H.png", // Replace with actual image URL
    },
    {
      title: "Fitness",
      description:
        "Achieve your health goals with our cutting-edge fitness solutions. From virtual workout plans to personalized coaching, we bring innovation and accessibility to help you lead an active, balanced lifestyle.",
      image: "/Industry/E.png", // Replace with actual image URL
    },
  ];
  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center h-screen  overflow-hidden"
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="section absolute flex items-center justify-between gap-8 w-full px-16"
        >
          {/* Left Section: Heading and Description */}
          <div className="w-1/2 heading">
            <h2 className="text-4xl font-bold text-blue-400">{item.title}</h2>
            <p className="mt-4 text-lg text-gray-300">{item.description}</p>
          </div>
          {/* Right Section: Image */}
          <div className="w-1/2">
            <img
              src={item.image}
              alt={`${item.title} image`}
              className="image w-1/3 h-[60vh] mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
