"use client";
import React, { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const OurIndustries = () => {


  return (
    <div className="bg-[#000b17] h-[200vh] my-20">
      <div className="container mx-auto flex flex-col gap-4">
        <div className="text-5xl text-white text-center font-bold">
          Our Industries
        </div>

        <div className="flex flex-col my-5 mx-5 md:mx-0 gap-10 md:flex-row">
          <div className="w-full flex justify-center items-center md:w-[50%]">
            <img src="/iphone.png" className="w-[300px]" alt="Industries" />
          </div>

          <div className="w-full text-sm flex flex-col gap-4 text-white md:w-[50%]">
            <div className="ecommerce-container h-[60px] overflow-hidden relative">
              <h3 className="ecommerce-text-1 absolute text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent mb-6">
                E-commerce
              </h3>
              <h3 className="ecommerce-text-2 absolute text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-green-300 to-green-500 bg-clip-text text-transparent mb-6 opacity-0">
                Online Retail
              </h3>
            </div>

            <p>
              We specialize in building modern, scalable e-commerce platforms
              that cater to the dynamic needs of online retailers, delivering
              seamless shopping experiences.
            </p>
            <p>
              From custom storefront designs to advanced payment integrations,
              we ensure your business stays ahead in the competitive market.
            </p>
            <p>
              Our expertise lies in creating user-friendly interfaces,
              optimizing for mobile experiences, and ensuring top-notch
              performance and security.
            </p>
            <p>
              Partner with us to revolutionize your e-commerce strategy and
              achieve your business goals effectively.
            </p>
            <div className="flex text-sm items-center gap-2">
              <button className="hover:text-blue-300 underline">
                Contact Us
              </button>
              <div className=" bg-white text-black rounded-full">
                <FiArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurIndustries;
