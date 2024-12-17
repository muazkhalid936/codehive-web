'use client';
import React from 'react';

const FeatureSlider = ({ data, from }) => {
  return (
    <div
      className={` text-white ml-2 md:ml-24 z-50 pt-32 ${from!=="contact" && "pb-32"}`}
    >
      <h2 className="text-5xl font-extrabold font-gilroy w-full">
        {/* Partnered with Most of the Top <br /> People at Each{' '}
        <span className="text-[#219DD9]">Industry</span> */}
        {data?.title?.split(' ').map((word, index) => (
          <span
            key={index}
            className={`${
              index === data.title.split(' ').length - 1 ? 'text-[#219DD9]' : ''
            }`}
          >
            {word}{' '}
          </span>
        ))}
      </h2>

      {/* Snap Scroll Container */}
      <div className="mt-12 overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 px-6 sm:px-12">
        {data.cards.map((item, index) => (
          <div
            key={index}
            className="snap-center shrink-0 flex flex-col text-center bg-gradient-to-b from-[#010B1770] to-[#2093CA70] rounded-xl h-[550px] w-[90%] md:w-[26%] overflow-hidden relative"
          >
            <img
              src={item.picture}
              alt={item.name}
              className="w-full h-full object-cover opacity-50"
            />
            <div className="p-4 absolute bottom-0">
              <h3 className="text-2xl font-bold text-center font-gilroy">
                {item.name}
              </h3>
              <p className="text-white text-lg text-center font-light font-lato">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSlider;
