import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const WhySection = () => {
  // const controls = useAnimation();
  const main = useRef();

  useGSAP(
    () => {
      const heading = gsap.utils.toArray(".heading");

      heading.forEach((head) => {
        gsap.to(head, {
          opacity: 0,
          duration: 2,
          scale: 0.5,
          color: "#000B17",
          scrollTrigger: {
            trigger: head,
            scrub: true,
            start: "top 50%",
            end: "bottom 20%",
            pin: true,
            // markers:truez
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <>
      <div
        ref={main}
        className="container h-screen mb-20 font-extrabold  mx-auto flex flex-col justify-center items-center text-2xl md:text-5xl text-white md:space-y-16"
      >
        <h1 className="heading">Why you choose us?</h1>
        <h1 className="heading">Customer-Centric Approach</h1>
        <h1 className="heading">Unrivaled Experties</h1>
        <h1 className="heading">End-to-End Support</h1>
      </div>
    </>
  );
};

export default WhySection;
