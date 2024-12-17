'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhatMakesUsDifferent = ({ data }) => {
  const stepsRef = useRef([]); // Ref for list items
  const containerRef = useRef();

  useEffect(() => {
    stepsRef.current.forEach((step) => {
      const circle = step.querySelector('.circle');
      const title = step.querySelector('.animate-title');
      const description = step.querySelector('.animate-description');

      // Create a GSAP timeline for animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: 'top center', // Animation starts when step reaches center
          end: 'top top', // Ends when step reaches the top
          scrub: true,
        },
      });

      // Animate the circle border color and width
      tl.to(circle, {
        borderColor: '#219DD9',
        borderWidth: '4px',
        duration: 0.5,
        ease: 'power1.out',
      });

      // Animate title and description opacity and slight upward movement
      tl.fromTo(
        [title, description],
        { opacity: 0.2, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '<' // Synchronize with previous animation
      );
    });

    return () => ScrollTrigger.killAll(); // Cleanup GSAP animations on unmount
  }, [data]);

  return (
    <div className="bg-white py-[8rem] sm:py-24 lg:py-32" ref={containerRef}>
      <div className="flex flex-col lg:flex-row justify-between gap-12 px-6 sm:px-12 lg:px-48 relative">
        {/* Background Image */}
        <img
          src="/feature/VectorGrayBg.png"
          alt="business"
          className="w-auto h-[200px] sm:h-[300px] object-contain absolute top-10 left-0 right-0 z-0"
        />
        {/* Title */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold font-gilroy w-full md:w-1/2">
            {data.title.split(' ').map((word, index) => (
              <span
                key={index}
                className={`${index === 1 ? 'text-[#219DD9]' : ''}`}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
        </div>
        {/* Steps */}
        <div className="w-full lg:w-1/2">
          <ol className="relative text-gray-500 flex flex-col gap-10">
            <span className="border-s border-gray-200 absolute h-full left-8"></span>
            {data.steps.map((value, index) => (
              <li
                className="mb-10 ms-6"
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
              >
                {/* Circle Animation */}
                <span className="circle absolute flex items-center justify-center w-[6rem] h-[6rem] -start-4 border-[#ccc] border-2 rounded-full text-[#219DD9] z-100 bg-white">
                  <span className="font-extrabold text-3xl font-gilroy">
                    {value.id.toString().padStart(2, '0')}
                  </span>
                </span>
                {/* Text Animation */}
                <div className="ml-24">
                  <h3 className="animate-title text-lg md:text-3xl font-extrabold text-gray-800 mb-2 font-gilroy">
                    {value.title}
                  </h3>
                  <p className="animate-description text-md md:text-xl text-gray-600 w-11/12 font-lato">
                    {value.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;
