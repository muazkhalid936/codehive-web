"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap"; // Make sure GSAP is imported
import Image from "next/image";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cities = [
  {
    key: "new-york",
    img: "/process/bg.jpg",
    city: "New York",
  },
  {
    key: "tokyo",
    img: "/process/1.jpg",
    city: "Tokyo",
  },
  {
    key: "london",
    img: "/process/bg.jpg",
    city: "London",
  },
  {
    key: "sydney",
    img: "/process/1.jpg",
    city: "Sydney",
  },
  {
    key: "paris",
    img: "/process/bg.jpg",
    city: "Paris",
  },
  {
    key: "berlin",
    img: "/process/1.jpg",
    city: "Berlin",
  },
];

const Test = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container2 = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".card:not(:first-child)", // Select all but the first card
        {
          x: 1000,
          rotate: 90,
        },
        {
          x: 0,
          rotate: 0,
          stagger: 1,
          scrollTrigger: {
            pin: container2.current,
            scrub: true,
          },
        }
      );
    }); // The dependency array is empty, so this runs only once when the component is mounted

    return () => ctx.revert(); // Cleanup the context when the component is unmounted
  }, []);

  return (
    <>
      <div
        ref={container2}
        className="h-[100vh] flex items-center justify-center"
      >
        <div className="relative w-72 h-[300px]">
          {cities.map((city) => {
            return (
              <div className="card " key={city.key}>
                <Image
                  src={city.img}
                  alt={city.city}
                  layout="fill"
                  className="rounded-3xl"
                />
                <p className="absolute bottom-0 p-4 left-0 text-white">
                  {city.city}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Test;
