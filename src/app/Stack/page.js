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
      // opacity: 1,
    });

    timeln.from(".card-2", {
      xPercent: 80,
      yPercent: 200,
      rotate: -90,
      // opacity: 1,
    });
    timeln.addLabel("card2");

    timeln.to(
      ".card-1",
      {
        // scale: 0.98,
        xPercent: 80,
        rotate: 90,
        yPercent: -200,
        // opacity: 0.5,
        duration: 0.5,
      },
      "-=0.5"
    );

    timeln.from(".card-3", {
      xPercent: 80,
      yPercent: 200,
      rotate: -90,
    });
    timeln.addLabel("card3");

    timeln.to(
      ".card-2",
      {
        // yPercent: 0,
        // opacity: 0.5,
        xPercent: 80,
        yPercent: -200,
        rotate: 90,
      },
      "-=0.5"
    );

    // timeln.to(
    //   ".card-2",
    //   {
    //     // scale: 0.98,
    //     yPercent: 0,
    //     // rotate: 90,
    //     xPercent: 0,
    //     // opacity: 0.6,
    //     duration: 0.5,
    //   },
    //   "-=0.5"
    // );

    timeln.from(".card-4", {
      xPercent: 80,
      yPercent: 200,
      rotate: -90,
    });
    timeln.addLabel("card4");
    timeln.to(
      ".card-3",
      {
        xPercent: 80,
        yPercent: -200,
        rotate: 90,
      },
      "-=0.5"
    );
    // timeln.to(
    //   ".card-3",
    //   {
    //     scale: 0.98,
    //     yPercent: -10,
    //     // opacity: 0.6,
    //     duration: 0.5,
    //   },
    //   "-=0.3"
    // );

    timeln.to(".card-4", {
      xPercent: 80,
      yPercent: -200,
      rotate: 90,
      // opacity: 1,
    });
  }, []);

  return (
    <div className="container  overflow-x-hidden mx-auto  gap-10">
      <div className="cards h-[50vh] md:h-[100vh]  mx-auto">
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
