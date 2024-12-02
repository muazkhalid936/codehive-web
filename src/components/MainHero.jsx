"use client";
import React from "react";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
const MainHero = () => {
  return (
    <div className=" container md:h-[600px] overflow-hidden relative pl-10 flex flex-row bg-[#000B17] mx-auto md:pt-20">
      {/* Text Content */}
      <div className="flex w-[50%]  flex-col md:gap-5 text-white  md:pr-10">
        <p className="text-[20px] sm:text-3xl lg:text-5xl z-10 font-extrabold leading-snug">
          BESPOKE{" "}
          <span className="text-[20px] sm:text-3xl lg:text-5xl text-blue-500">
            SOLUTIONS
          </span>{" "}
          <br />
          TAILORED TO YOUR BUSINESS NEEDS
        </p>
        <p className="mt-4 text-[10px] md:text-base">
          We are a dynamic creative agency, specializing in the design and
          development of impactful technical solutions, iconic brands, and
          immersive experiences.
        </p>
        <Link href="/" className="flex items-center gap-2">
          Contact Us
          <FiArrowUpRight className="bg-white rounded-full text-[#000B17] text-xl " />
        </Link>
      </div>

      {/* Spline Component */}
      <div className="flex flex-1 scale-[0.3] sm:scale-50 lg:scale-90 absolute -top-[100px]  md:top-0 h-[400px]  w-[850px] -right-[21rem]  md:-right-60  justify-end text-white items-end">
        <Spline className="" scene="/Logo animation.spline" />
      </div>
    </div>
  );
};

export default MainHero;
