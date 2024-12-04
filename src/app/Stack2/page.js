"use client";
import { useEffect } from "react";
import "./Stack.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";

const StackingImages = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

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

    // Card 1 animation (start position to curve)
    timeln.to(".card-1", {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 200, y: -100 },
          { x: 300, y: -200 },
        ],
      },
      rotation: 90,
      duration: 1,
    });

    timeln.addLabel("card2");

    // Card 2 animation (curved entry)
    timeln.from(".card-2", {
      motionPath: {
        path: [
          { x: 200, y: 0 },
          { x: 300, y: -100 },
          { x: 400, y: -50 },
        ],
      },
      rotate: -90,
      duration: 1,
    });

    timeln.to(".card-1", {
      motionPath: {
        path: [
          { x: 200, y: 0 },
          { x: 300, y: -100 },
          { x: 400, y: -200 },
        ],
      },
      duration: 1,
    });

    timeln.addLabel("card3");

    // Card 3 animation (entry with curve)
    timeln.from(".card-3", {
      motionPath: {
        path: [
          { x: 400, y: -50 },
          { x: 500, y: -150 },
          { x: 600, y: 0 },
        ],
      },
      rotate: -90,
      duration: 1,
    });

    timeln.to(".card-2", {
      motionPath: {
        path: [
          { x: 400, y: -50 },
          { x: 500, y: -150 },
          { x: 600, y: -250 },
        ],
      },
      duration: 1,
    });

    timeln.addLabel("card4");

    // Card 4 animation (entry with curve)
    timeln.from(".card-4", {
      motionPath: {
        path: [
          { x: 600, y: 0 },
          { x: 700, y: -100 },
          { x: 800, y: -50 },
        ],
      },
      rotate: -90,
      duration: 1,
    });

    timeln.to(".card-3", {
      motionPath: {
        path: [
          { x: 600, y: 0 },
          { x: 700, y: -150 },
          { x: 800, y: -250 },
        ],
      },
      duration: 1,
    });

    timeln.to(".card-4", {
      motionPath: {
        path: [
          { x: 800, y: -50 },
          { x: 900, y: -150 },
          { x: 1000, y: -250 },
        ],
      },
      duration: 1,
    });
  }, []);

  return (
    <div className="container overflow-x-hidden mx-auto flex flex-col gap-10">
      <div className="text-center ">
        <h2 className="text-5xl font-bold text-white">Our Services</h2>
      </div>

      <div className="cards h-[50vh] md:h-[100vh] container mx-auto">
        <div className="card card-1">
          <img
            src="/process/1.jpg"
            className="rounded-3xl h-[300px] w-[400px]"
            alt="1"
          />
        </div>
        <div className="card card-2">
          <img
            src="/process/bg.jpg"
            className="rounded-3xl h-[300px] w-[400px]"
            alt="1"
          />
        </div>
        <div className="card card-3">
          <img
            src="/process/1.jpg"
            className="rounded-3xl h-[300px] w-[400px]"
            alt="1"
          />
        </div>
        <div className="card card-4">
          <img
            src="/process/bg.jpg"
            className="rounded-3xl h-[300px] w-[400px]"
            alt="1"
          />
        </div>
      </div>
    </div>
  );
};

export default StackingImages;
