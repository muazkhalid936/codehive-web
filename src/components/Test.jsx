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
            head="Wordsmith – AI"
            para="Writing and summarizing AI assistant platform."
            bgImg="url('/Homapage/carosuel/wordsmith AI.png')"
          />
          <Card
            className="card"
            head="Wordsmith – AI"
            para="Writing and summarizing AI assistant platform."
            bgImg="url('/Homapage/carosuel/wordsmith AI.png')"
          />
          <Card
            className="card"
            head="Wordsmith – AI"
            para="Writing and summarizing AI assistant platform."
            bgImg="url('/Homapage/carosuel/wordsmith AI.png')"
          />
          <Card
            className="card"
            head="Wordsmith – AI"
            para="Writing and summarizing AI assistant platform."
            bgImg="url('/Homapage/carosuel/wordsmith AI.png')"
          />
          <Card
            className="card"
            head="Wordsmith – AI"
            para="Writing and summarizing AI assistant platform."
            bgImg="url('/Homapage/carosuel/wordsmith AI.png')"
          />
          <Card
            className="card"
            head="Wordsmith – AI"
            para="Writing and summarizing AI assistant platform."
            bgImg="url('/Homapage/carosuel/wordsmith AI.png')"
          />
          <Card
            className="card"
            head="Wordsmith – AI"
            para="Writing and summarizing AI assistant platform."
            bgImg="url('/Homapage/carosuel/wordsmith AI.png')"
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
