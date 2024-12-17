'use client';
import React, { useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const Features = ({ data }) => {
  const [itemHovered, setItemHovered] = useState('');

  return (
    <div className="bg-[#041c30] relative z-50 py-12  overflow-hidden">
      <div className="py-24 mx-8 text-white z-10 container">
        <h1 className="font-bold text-4xl md:text-6xl mb-4 font-gilroy w-full md:w-1/2">
          {/* Values Our <span className="text-[#219DD9]">Cores</span> */}
          {data.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={`${index === 1 ? 'text-[#219DD9]' : ''}`}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <p className="w-full md:w-1/2 mb-12">{data.description}</p>

        <div className="flex flex-wrap justify-center items-center">
          {data.cards.map((item, index) => (
            <div
              key={index}
              className={`w-[95%] mx-auto
              ${data.columns === 4 ? 'md:w-1/4' : 'md:w-1/3'}
              `}
            >
              <div
                className="bg-[#020b17] m-2 p-6 h-[300px]  flex flex-col justify-center items-center   rounded-[20px] gap-4  relative overflow-hidden  transition-transform duration-300 transform hover:scale-105"
                onMouseEnter={() => setItemHovered(item.title)}
                onMouseLeave={() => setItemHovered('')}
              >
                {/* Image Container */}
                <div
                  className={`transition-opacity duration-500 ${
                    itemHovered === item.title ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 mx-auto"
                  />
                  <h2 className="text-center font-black text-xl mt-4">
                    {item.title}
                  </h2>
                </div>

                {/* Description Container */}
                <div
                  className={`absolute inset-0 flex flex-col justify-center items-center 
                              bg-[#020b17] bg-opacity-90 p-4 
                              transition-opacity duration-500 
                              ${
                                itemHovered === item.title
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              }
                             `}
                >
                  <h2 className="text-center font-bold text-xl mb-2">
                    {item.title}
                  </h2>
                  <p className="text-center text-sm px-2">{item.description}</p>

                  {item.getStarted && (
                    <Link
                      className="flex items-center justify-center gap-4 px-4 py-2 sm:px-6 sm:py-3 w-fit rounded-full shadow-lg border-white border-[1px] border-solid transition mt-6 sm:mt-10"
                      href={item.path}
                    >
                      <p className="text-white text-sm sm:text-lg">
                        Get Started
                      </p>
                      <div className="bg-[#219DD9] rounded-full p-1 sm:p-2">
                        <FaArrowRight className="text-white" />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <p className="ttext-4xl md:text-5xl font-bold font-gilroy w-full md:w-1/2 mx-auto">
            {data.subheading}
          </p>
        </div>

        <div>
          <div
            className="justify-between flex items-center w-[300px] m-auto bg-[#020b17] mt-12 rounded-[50px] py-4 px-3 cursor-pointer 
            transition-transform duration-300 hover:scale-105"
          >
            <div />
            <div className="flex gap-2 items-center">
              <FiPhoneCall />
              <p className="text-lg">Let's talk</p>
            </div>
            <div className="p-2 rounded-full bg-[#219DD9]">
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="shapes">
          <img
            src="/feature/VectorWithoutBG.png"
            alt="shapes"
            className="absolute top-10 right-0 -z-10 w-[200px] md:w-[300px] rotate-90"
          />
          <img
            src="/feature/VectorWithBG.png"
            alt="shapes"
            className="absolute top-[25rem] left-20 -z-10 w-[300px]"
          />
          <img
            src="/feature/VectorWithBG.png"
            alt="shapes"
            className="absolute bottom-10 right-0 -z-10 w-[200px] md:w-[300px] rotate-[250deg] hidden lg:block"
          />
          <img
            src="/feature/VectorWithoutBG.png"
            alt="shapes"
            className="absolute -bottom-10 left-270 -z-10 w-[200px] md:w-[300px] rotate-190"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
