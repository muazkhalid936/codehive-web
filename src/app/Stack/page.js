"use client";
import { useEffect } from "react";
import "./Stack.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

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
    });

    timeln.from(".card-2", {
      xPercent: 80,
      yPercent: 200,
      rotate: -90,
    });
    timeln.addLabel("card2");

    timeln.to(
      ".card-1",
      {
        xPercent: 80,
        rotate: 90,
        yPercent: -200,
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
        xPercent: 80,
        yPercent: -200,
        rotate: 90,
      },
      "-=0.5"
    );

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

    // timeln.to(".card-4", {
    //   xPercent: 80,
    //   yPercent: -200,
    //   rotate: 90,
    // });

    // Text animations
    timeln.from(".text-1", {
      yPercent: 0,
      opacity: 1,
      duration: 0.5,
    });

    timeln.to(
      ".text-1",
      {
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
      },
      "card2-=0.5"
    );

    timeln.from(
      ".text-2",
      {
        yPercent: 100,
        opacity: 0,
        duration: 0.5,
      },
      "card2-=0.5"
    );

    timeln.to(
      ".text-2",
      {
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
      },
      "card3-=0.5"
    );

    timeln.from(
      ".text-3",
      {
        yPercent: 100,
        opacity: 0,
        duration: 0.5,
      },
      "card3-=0.5"
    );

    timeln.to(
      ".text-3",
      {
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
      },
      "card4-=0.5"
    );


    timeln.to(
      ".text-1",
      {
        yPercent: -900,
        opacity: 0,
        duration: 0.5,
      },
      "card4-=0.5"
    );

    timeln.from(
      ".text-4",
      {
        yPercent: 100,
        opacity: 0,
        duration: 0.5,
      },
      "card4-=0.5"
    );
  }, []);

  return (
    <div className="container overflow-x-hidden mx-auto gap-10">
      <div className="cards h-[50vh] items-center md:h-[100vh] mx-auto">
        <div className="text-section text-xl  font-extrabold">
          <div className="text text-1">
            We provide bespoke software solutions powered by cutting-edge
            technologies like AI, blockchain, and cloud computing. Our team
            ensures every application is scalable, secure, and tailored to your
            specific needs. Whether it’s web or mobile, we transform your ideas
            into reality.
          </div>
          <div className="text text-2">
            Streamline your business operations with our advanced automation
            services. Utilizing RPA and intelligent workflows, we reduce manual
            tasks and optimize efficiency. Let technology handle the complexity
            while you focus on growth.
          </div>
          <div className="text text-3">
            Empower your business with data-driven insights through our
            analytics solutions. From predictive modeling to real-time
            dashboards, we help you make informed decisions. Unlock the power of
            your data for actionable outcomes.
          </div>
          <div className="text text-4">
            Our team also specializes in seamless software integrations with
            your existing systems. Whether integrating CRMs, ERPs, or
            third-party tools, we ensure compatibility and performance.
            Experience hassle-free upgrades without disrupting operations.
          </div>
        </div>

        <div>
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
    </div>
  );
};

export default StackingImages;
