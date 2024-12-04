"use client";
import { useEffect } from "react";
import "./Stack.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import StackCard from "../../components/StackCard";
const StackingImages = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    let timeln = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+=2000",
        scrub: 1,
      },
    });

    timeln.addLabel("card1");
    timeln.to(".card-1", {
      yPercent: 0,
      opacity: 1,
    });

    timeln.from(".card-2", {
      xPercent: 80,
      yPercent: 60,
      rotate: -90,
      opacity: 0,
    });
    timeln.addLabel("card2");

    timeln.to(
      ".card-1",
      {
        // scale: 0.98,
        xPercent: 80,
        rotate: 90,
        yPercent: -100,
        // opacity: 0.5,
        duration: 0.5,
      },
      "-=0.3"
    );

    timeln.to(".card-2", {
      yPercent: 0,
      opacity: 1,
    });

    timeln.from(".card-3", {
      yPercent: 75,
      opacity: 0,
    });
    timeln.addLabel("card3");

    timeln.to(
      ".card-2",
      {
        scale: 0.98,
        yPercent: -10,
        opacity: 0.6,
        duration: 0.5,
      },
      "-=0.3"
    );

    timeln.to(".card-3", {
      yPercent: 0,
      opacity: 1,
    });

    timeln.from(".card-4", {
      yPercent: 75,
      // opacity: 0,
    });
    timeln.addLabel("card4");

    timeln.to(
      ".card-3",
      {
        scale: 0.98,
        yPercent: -10,
        opacity: 0.6,
        duration: 0.5,
      },
      "-=0.3"
    );

    timeln.to(".card-4", {
      yPercent: 0,
      opacity: 1,
    });
  }, []);

  return (
    <div className="container  mx-auto flex flex-col gap-10">
      <div className="text-center ">
        <h2 className="text-5xl font-bold text-white">Our Services</h2>
      </div>

      <div className="cards h-[50vh] md:h-[100vh] container mx-auto">
        <div className="card card-1">
          <img src="/process/1.jpg" className="rounded-3xl h-[300px] w-[400px]" alt="1" />
        </div>
        <div className="card card-2">
          <img src="/process/bg.jpg" className="rounded-3xl h-[300px] w-[400px]" alt="1" />
        </div>
        <div className="card card-3">
          <StackCard
            bg="/services/bg-digital.png"
            type="Digital"
            num="03"
            heading="Digital Transformation"
          />
        </div>
        <div className="card card-4">
          <StackCard
            bg="/services/bg-web.png"
            type="Web"
            heading="Web Development"
            num="04"
          />
        </div>
      </div>
    </div>
  );
};

export default StackingImages;
