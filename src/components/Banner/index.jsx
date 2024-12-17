import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Banner = ({
  bgImage,
  rightImage,
  title,
  description,
  backgroundColor,
  showBottomArrow,
  
  
}) => {
  const color = rightImage ? 'text-black' : 'text-white';
  return (
    <div
      className={`container py-5 rounded-lg mt-16 mb-16 relative overflow-hidden`}
    >
      <div
        className={`bg-cover bg-center"
         h-[600px] w-full rounded-[20px] items-center md:items-center justify-between flex flex-col md:flex-row gap:4 px-6 sm:px-0`}
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundColor: backgroundColor || undefined,
        }}
      >
        <div
          className={`flex flex-col ${color} w-full sm:w-1/2 pl-4 md:pl-12 pr-2  ${
            !rightImage && 'bg-gradient-to-r from-black to-transparent'
          } h-full justify-center
        border-tl-[20px] border-bl-[20px] rounded-[20px] gap-3`}
        >
          <h2 className="text-3xl lg:text-6xl font-black">{title}</h2>
          <p>{description}</p>
          <button className="flex items-center justify-center gap-4 bg-[#219DD9] px-4 py-2 sm:px-6 sm:py-3 w-fit rounded-full shadow-lg hover:bg-[#197BB6] transition mt-6 sm:mt-10">
            <p className="text-white text-sm sm:text-lg">Get Started</p>
            <div className="bg-white rounded-full p-1 sm:p-2">
              <FaArrowRight className="text-[#219DD9]" />
            </div>
          </button>
        </div>

        {rightImage && (
          <div
            className="flex flex-col text-white w-full sm:w-1/2 h-full"
            style={{
              backgroundImage: `url(${rightImage})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '20px',
            }}
          />
        )}
      </div>
      {showBottomArrow && (
        <img
          src="/feature/VectorGrayBg.png"
          alt="bgImage"
          className="w-12 md:w-64 d-none md:d-block absolute  -bottom-20 right:0 xl:-right-20 rotate-[70deg] -z-10"
        />
      )}
    </div>
  );
};

export default Banner;
