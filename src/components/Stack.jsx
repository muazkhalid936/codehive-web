import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackingImages = () => {
  useEffect(() => {
    // Animation for the first image (sticky)
    gsap.to(".image1", {
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true, // This will "stick" the first image in place
      },
      y: "0vh",
      opacity: 1,
    });

    // Animation for the second image (scrolls up to overlap the first)
    gsap.to(".image2", {
      scrollTrigger: {
        trigger: ".image2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: "0vh", // It will slide from bottom to top
      opacity: 1,
    });

    // Animation for the third image (scrolls up to overlap the second)
    gsap.to(".image3", {
      scrollTrigger: {
        trigger: ".image3",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: "0vh", // It will slide from bottom to top
      opacity: 1,
    });
  }, []);

  return (
    <div className="container mt-20 h-[300vh] relative">
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
