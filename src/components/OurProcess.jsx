"use client";
import { useEffect } from "react";
import "./In.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";

const StackingImages = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".new-cards",
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+=2000",
        scrub: 1, // Ensures animation progress is tied to scroll direction
        toggleActions: "play reverse play reverse", // Ensures reverse action
      },
    });

    timeline.addLabel("new-card1");

    // Card Animations
    timeline.to(".new-card-1", {
      yPercent: 0,
    });

    timeline.from(".new-card-2", {
      xPercent: 40,
      yPercent: 40,
      rotate: -90,
    });
    timeline.addLabel("new-card2");

    timeline.to(
      ".new-card-1",
      {
        xPercent: 40,
        rotate: 90,
        yPercent: -40,
        duration: 0.5,
      },
      ".new-card-2-=0.4"
    );

    timeline.from(".new-card-3", {
      xPercent: 40,
      yPercent: 40,
      rotate: -90,
    });
    timeline.addLabel("new-card3");

    timeline.to(
      ".new-card-2",
      {
        xPercent: 40,
        yPercent: -40,
        rotate: 90,
      },
      ".new-card-3-=0.4"
    );

    timeline.from(".new-card-4", {
      xPercent: 40,
      yPercent: 40,
      rotate: -90,
    });
    timeline.addLabel("new-card4");

    timeline.to(
      ".new-card-3",
      {
        xPercent: 40,
        yPercent: -40,
        rotate: 90,
      },
      ".new-card-4-=0.5"
    );

    // Text animations with icon border effect
    timeline.from(
      ".new-text-1",
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
      },
      "new-card1"
    );

    timeline.to(
      ".new-icon1",
      {
        backgroundColor: "grey",
        duration: 0.3,
      },
      "new-card1"
    );

    timeline.to(
      ".new-icon1",
      { backgroundColor: "transparent", duration: 0.3 },
      "new-card2-=0.5"
    );

    timeline.to(
      ".new-icon2",
      {
        backgroundColor: "grey",
        duration: 0.3,
      },
      "new-card2-=0.5"
    );

    timeline.to(
      ".new-icon3",
      {
        backgroundColor: "grey",
        duration: 0.3,
      },
      "new-card3-=0.5"
    );

    timeline.to(
      ".new-icon4",
      {
        backgroundColor: "grey",
        duration: 0.3,
      },
      "new-card4-=0.5"
    );

    timeline.to(
      ".new-icon3",
      {
        backgroundColor: "transparent",
        duration: 0.3,
      },
      "new-card4-=0.5"
    );

    timeline.to(
      ".new-icon2",
      {
        backgroundColor: "transparent",
        duration: 0.3,
      },
      "new-card3-=0.5"
    );

    timeline.to(
      ".new-text-1",
      {
        yPercent: -20,
        opacity: 0,
        duration: 0.5,
      },
      "new-card2-=0.5"
    );

    timeline.from(
      ".new-text-2",
      {
        yPercent: 20,
        opacity: 0,
        duration: 0.5,
      },
      "new-card2-=0.3"
    );

    timeline.to(
      ".new-text-2",
      {
        yPercent: -20,
        opacity: 0,
        duration: 0.5,
      },
      "new-card3-=0.5"
    );

    timeline.from(
      ".new-text-3",
      {
        yPercent: 20,
        opacity: 0,
        duration: 0.5,
      },
      "new-card3-=0.3"
    );

    timeline.to(
      ".new-text-3",
      {
        yPercent: -20,
        opacity: 0,
        duration: 0.5,
      },
      "new-card4-=0.5"
    );

    timeline.from(
      ".new-text-4",
      {
        yPercent: 20,
        opacity: 0,
        duration: 0.5,
      },
      "new-card4-=0.3"
    );
  }, []);

  return (
    <div className="bg-[#000B17]">
      <div className="container bg-[#000B17] overflow-x-hidden mx-auto gap-10">
        <div className="new-cards h-[50vh] items-center md:h-[100vh] mx-auto">
          <div className="new-icon-container">
            <FaReact className="new-icon new-icon1 new-border-active" />
            <FaNodeJs className="new-icon new-icon2" />
            <FaPython className="new-icon new-icon3" />
            <FaJava className="new-icon new-icon4" />
          </div>
          <div className="new-text-section text-white w-40">
            <div className="new-text flex flex-col gap-4 new-text-1">
              <span className="text-3xl font-bold">Home Town</span>
              We provide bespoke software solutions powered by cutting-edge
              technologies like AI, blockchain, and cloud computing. Our team
              ensures every application is scalable.
            </div>
            <div className="new-text new-text-2 flex flex-col gap-4">
              <span className="text-3xl font-bold">Home Town2</span>
              We provide bespoke software solutions powered by cutting-edge
              technologies like AI, blockchain, and cloud computing. Our team
              ensures every application is scalable.
            </div>
            <div className="new-text new-text-3 flex flex-col gap-4">
              <span className="text-3xl font-bold">Home Town3</span>
              We provide bespoke software solutions powered by cutting-edge
              technologies like AI, blockchain, and cloud computing. Our team
              ensures every application is scalable.
            </div>
            <div className="new-text new-text-4 flex flex-col gap-4">
              <span className="text-3xl font-bold">Home Town4</span>
              We provide bespoke software solutions powered by cutting-edge
              technologies like AI, blockchain, and cloud computing. Our team
              ensures every application is scalable.
            </div>
          </div>

          <div className="">
            <div className="new-card ss new-card-1">
              <img
                src="/process/1.jpg"
                className="rounded-3xl h-[300px] w-[400px]"
                alt="1"
              />
            </div>
            <div className="new-card ss new-card-2">
              <img
                src="/process/bg.jpg"
                className="rounded-3xl h-[300px] w-[400px]"
                alt="1"
              />
            </div>
            <div className="new-card ss new-card-3">
              <img
                src="/process/1.jpg"
                className="rounded-3xl h-[300px] w-[400px]"
                alt="1"
              />
            </div>
            <div className="new-card ss new-card-4">
              <img
                src="/process/bg.jpg"
                className="rounded-3xl h-[300px] w-[400px]"
                alt="1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackingImages;
