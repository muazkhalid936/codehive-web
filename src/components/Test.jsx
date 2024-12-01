// src/components/Test.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis"; // Import Lenis
import Card from "./Card";
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis(); // Initialize Lenis

    // Update the scroll animation on each frame
    const update = (time) => {
      lenis.raf(time);
      ScrollTrigger.update(); // Update ScrollTrigger
    };

    // Start the Lenis animation
    requestAnimationFrame(function raf(time) {
      update(time);
      requestAnimationFrame(raf);
    });

    const container = containerRef.current;
    const cards = container.querySelector(".card-row");

    const totalScrollWidth = cards.scrollWidth - container.clientWidth;

    gsap.to(cards, {
      x: -totalScrollWidth, // Move cards left
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${cards.scrollWidth}`, // Total horizontal scroll amount
        scrub: true,
        pin: true,
      },
    });

    return () => {
      // Cleanup on component unmount
      lenis.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div
        ref={containerRef}
        className=""
        style={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          className="card-row"
          style={{
            display: "flex",
            gap: "20px",
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
          }}
        >
          {/* {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="card"
            style={{
              flex: '0 0 200px',
              height: '150px',
              background: '#ccc',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            Card {i + 1}
          </div>
        ))} */}

          <Card
            className="card"
            head="Al Abour"
            para="Your description for Al Abour."
            bgImg="url('/Homapage/carosuel/al abour.jpg')"
          />
          <Card
            className="card"
            head="Caption Gen"
            para="Your description for Caption Gen."
            bgImg="url('/Homapage/carosuel/caption gen.png')"
          />
          <Card
            className="card"
            head="Clixpox"
            para="Your description for Clixpox."
            bgImg="url('/Homapage/carosuel/clixpox.png')"
          />
          <Card
            className="card"
            head="Doctor Booking App"
            para="Your description for Doctor Booking App."
            bgImg="url('/Homapage/carosuel/doctor booking app.jpg')"
          />
          <Card
            className="card"
            head="Email App"
            para="Your description for Email App."
            bgImg="url('/Homapage/carosuel/Email App.jpg')"
          />
          <Card
            className="card"
            head="Faaolun"
            para="Your description for Faaolun."
            bgImg="url('/Homapage/carosuel/faaolun.jpg')"
          />
          <Card
            className="card"
            head="Fitverse"
            para="Your description for Fitverse."
            bgImg="url('/Homapage/carosuel/fitverse.png')"
          />
          <Card
            className="card"
            head="Food Inventory"
            para="Your description for Food Inventory."
            bgImg="url('/Homapage/carosuel/food inventory.jpg')"
          />
          <Card
            className="card"
            head="Instant Save"
            para="Your description for Instant Save."
            bgImg="url('/Homapage/carosuel/instantsave.png')"
          />
          <Card
            className="card"
            head="Laam"
            para="Your description for Laam."
            bgImg="url('/Homapage/carosuel/laam.jpg')"
          />
          <Card
            className="card"
            head="Legal Wise"
            para="Your description for Legal Wise."
            bgImg="url('/Homapage/carosuel/legal wise.jpg')"
          />
          <Card
            className="card"
            head="Saloon Booking"
            para="Your description for Saloon Booking."
            bgImg="url('/Homapage/carosuel/saloon booking.jpg')"
          />
          <Card
            className="card"
            head="Wordsmith AI"
            para="Your description for Wordsmith AI."
            bgImg="url('/Homapage/carosuel/wordsmith Al.png')"
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
