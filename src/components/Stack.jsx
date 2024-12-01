import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackingImages = () => {
  useEffect(() => {
    // First Image (Sticky behavior with GSAP ScrollTrigger)
    gsap.to(".image1", {
      scrollTrigger: {
        trigger: ".container",
        start: "top top", // Start the animation when the container hits the top of the viewport
        end: "bottom top", // End when the container has fully scrolled up
        scrub: true,
        pin: true, // Pin the image as you scroll
      },
      y: "0vh", // Move the image vertically to 0 (it starts off-screen)
      opacity: 1, // Make the image visible
    });

    // Second Image (Appears after the first one has finished)
    gsap.to(".image2", {
      scrollTrigger: {
        trigger: ".image1", // Start the animation when the first image has fully scrolled
        start: "bottom top", // The second image starts as soon as the first one finishes
        end: "bottom top", // Finish when the first image scrolls fully out of the viewport
        scrub: true,
      },
      y: "0vh", // Slide the second image up
      opacity: 1, // Make the image visible
    });

    // Third Image (Appears after the second one has finished)
    gsap.to(".image3", {
      scrollTrigger: {
        trigger: ".image2", // Start when the second image finishes
        start: "bottom top", // Trigger the third image animation when the second image finishes scrolling
        end: "bottom top", // Finish the animation when the second image scrolls fully out
        scrub: true,
      },
      y: "0vh", // Slide the third image up
      opacity: 1, // Make the image visible
    });
  }, []);

  return (
    <div className="container my-20 h-[300vh] relative">
      {/* First Image */}
      <div className="image1 absolute h-[50vh] bg-blue-400 border-2 border-black flex items-center justify-center text-xl font-bold opacity-0 translate-y-[100vh] z-[1]">
        <img src="/3.png" className="w-full" />
      </div>

      {/* Second Image */}
      <div className="image2 absolute h-[50vh] bg-green-400 border-2 border-black flex items-center justify-center text-xl font-bold opacity-0 translate-y-[100vh] z-[2]">
        <img src="/3.png" className="w-full" />
      </div>

      {/* Third Image */}
      <div className="image3 absolute h-[50vh] bg-red-400 border-2 border-black flex items-center justify-center text-xl font-bold opacity-0 translate-y-[100vh] z-[3]">
        <img src="/3.png" className="w-full" />
      </div>
    </div>
  );
};

export default StackingImages;
