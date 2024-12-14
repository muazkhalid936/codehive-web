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
      const image = section.querySelector(".image");

      if (index > 0) {
        // Animate outgoing elements of the previous section
        tl.to(
          sections[index - 1].querySelector(".heading"),
          { x: -50, opacity: 0, duration: 0.5 },
          index
        ).to(
          sections[index - 1].querySelector(".image"),
          { x: 0, opacity: 0, duration: 0.5 },
          index
        );

        // Animate incoming elements of the current section
        tl.fromTo(
          heading,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          index + 0.5
        ).fromTo(
          image,
          { x: 0, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          index + 0.5
        );
      } else {
        // Ensure the first section is visible by default
        gsap.set(heading, { x: 0, opacity: 1 });
        gsap.set(image, { x: 0, opacity: 1 });
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
      des1: "Transform your vehicle with state-of-the-art car wash techniques that clean every corner thoroughly. Our team uses advanced equipment to ensure even the toughest grime is removed.",
      des2: "Eco-friendly solutions protect your car’s paint while delivering a brilliant shine. We prioritize both your car’s condition and environmental sustainability.",
      des3: "Experience professional care that preserves the quality of your vehicle’s finish, ensuring longevity. Enjoy the satisfaction of driving a spotless and polished car every day.",
      des4: "From exterior cleaning to interior detailing, we provide a comprehensive service that stands out. Let us bring your car back to life with unmatched quality and care.",
      image: "/Industry/1.png",
    },
    {
      title: "Delivery",
      des1: "Experience reliable logistics with delivery services designed to handle your parcels with care. Whether it's urgent documents or large packages, we’ve got you covered.",
      des2: "Our network ensures timely deliveries while maintaining high standards of security and tracking. Same-day shipping options are available for your convenience.",
      des3: "From personal packages to business consignments, we focus on precision and punctuality. You can trust us to handle your items with professionalism and efficiency.",
      des4: "With seamless processes and excellent customer support, your delivery experience will be stress-free. Count on us for all your logistics and shipping needs.",
      image: "/Industry/2.png",
    },
    {
      title: "Health Care",
      des1: "Discover innovative healthcare services that prioritize your well-being and long-term health. We combine cutting-edge medical technology with compassionate, personalized care.",
      des2: "From preventive care to advanced diagnostics, our comprehensive services cater to all your needs. Tailored treatment plans ensure that every patient gets the attention they deserve.",
      des3: "Our team is committed to helping you achieve a healthier lifestyle and manage chronic conditions effectively. Empower yourself with expert advice and consistent support.",
      des4: "Trust us to provide the tools and knowledge necessary for better health outcomes. Together, we work towards a happier, healthier you.",
      image: "/Industry/3.png",
    },
    {
      title: "Booking",
      des1: "Simplify your reservations with a platform built for speed and convenience. Whether it's flights, hotels, or events, our system makes booking seamless and stress-free.",
      des2: "Enjoy a user-friendly interface that allows you to compare options and secure the best deals. Our intuitive design ensures a smooth experience for all users.",
      des3: "Track and manage your reservations effortlessly with just a few clicks. Stay organized and informed with notifications and updates about your bookings.",
      des4: "We prioritize your time and convenience by making the entire process simple and straightforward. Your next reservation is just a step away.",
      image: "/Industry/4.png",
    },
    {
      title: "Ecommerce",
      des1: "Take your online shopping experience to the next level with fast, secure e-commerce solutions. Explore a wide range of products designed to meet your needs.",
      des2: "Our platforms offer seamless navigation, quick checkouts, and secure transactions. We prioritize customer satisfaction with efficient, hassle-free shopping.",
      des3: "From tailored storefronts to advanced analytics, we empower businesses to grow online. Enhance your brand with tools that cater to modern consumer expectations.",
      des4: "With reliable shipping and top-notch support, we redefine convenience in the e-commerce space. Your business success starts with our innovative solutions.",
      image: "/Industry/5.png",
    },
    {
      title: "Fitness",
      des1: "Achieve your health and fitness goals with personalized solutions designed to fit your lifestyle. From strength training to yoga, we cover all aspects of your fitness journey.",
      des2: "Our virtual and in-person programs offer flexibility and accessibility for everyone. Track your progress with tools that keep you motivated and on track.",
      des3: "Receive expert guidance from professionals who prioritize your success. Whether you're a beginner or advanced, we provide plans tailored to your abilities.",
      des4: "Stay consistent and achieve measurable results with programs crafted for long-term success. Let us help you live an active, balanced, and healthy life.",
      image: "/Industry/6.png",
    },
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
          {/* Left Section: Title and Descriptions */}
          <div className="w-1/2 heading">
            <h2 className="font-bold bg-gradient-to-r from-white via-blue-500 to-blue-600 bg-clip-text text-transparent header text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
              {item.title}
            </h2>
            <p className="mt-4 text-lg text-gray-300">{item.des1}</p>
            <p className="mt-4 text-lg text-gray-300">{item.des2}</p>
            <p className="mt-4 text-lg text-gray-300">{item.des3}</p>
            <p className="mt-4 text-lg text-gray-300">{item.des4}</p>
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
