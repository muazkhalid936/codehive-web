import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Hero = ({
  bgImage,
  title,
  description,
  rightImage,
  transparent,
  topArrow,
}) => {
  const colors = rightImage ? 'text-black' : 'text-white';
  return (
    <div
      className={`relative ${
        transparent ? 'bg-transparent' : ''
      } pt-32 overflow-hidden`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {topArrow && (
        <img
          src={'/feature/VectorGrayBg.png'}
          alt="Top Arrow"
          className={`absolute top-20 -right-12 w-[200px] h-[200px]  md:w-[300px] md:h-[300px] object-contain 
        `}
        />
      )}
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-8
      ${!rightImage ? 'h-[65vh]' : 'py-0'}
      `}
      >
        {/* Text Content */}
        <div className="flex flex-col gap-4 sm:mt-10 text-center md:text-left pb-4 md:pb-32 w-full md:w-1/2">
          <h1 className="font-black text-4xl sm:text-6xl md:text-[72px]">
            <span className={colors}>{title.split(' ')[0]} </span>
            <span className="text-[#219DD9]">{title.split(' ')[1]}</span>
          </h1>

          <p className={`sm:text-lg md:text-xl font-lato ${colors}`}>
            {description}
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="flex items-center justify-center gap-4 bg-[#219DD9] px-4 py-2 sm:px-6 sm:py-3 w-fit rounded-full shadow-lg hover:bg-[#197BB6] transition mt-6 sm:mt-10">
              <p className="text-white text-sm sm:text-lg">Get Started</p>
              <div className="bg-white rounded-full p-1 sm:p-2">
                <FaArrowRight className="text-[#219DD9]" />
              </div>
            </button>
          </div>
        </div>

        {/* Right Image */}
        {rightImage && (
          <div className="w-full md:w-1/2">
            <img
              src={rightImage}
              alt="Right Hero Image"
              className="w-full object-contain h-[400px] md:h-full rounded-[20px] sm:w-[400px] md:w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
