"use client";
import React from "react";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
const MainHero = () => {
  return (
    <div className=" container  overflow-hidden relative pl-10 flex flex-row bg-[#000B17] mx-auto pt-10 xl:pt-20">
      {/* Text Content */}
      <div className="flex w-[50%]   flex-col gap-5 text-white  xl:gap-10 ">
        <p className="text-[20px] header sm:text-3xl md:text-5xl xl:text-6xl  z-10 font-extrabold !leading-snug">
          BESPOKE{" "}
          <span className="text-[20px] header sm:text-3xl md:text-5xl xl:text-6xl  text-blue-500">
            SOLUTIONS
          </span>{" "}
          <br />
          TAILORED TO YOUR <br /> BUSINESS NEEDS
        </p>
        <p className="text-[10px] md:text-base xl:text-xl  !font-extralight">
          We are a dynamic creative agency, specializing in the design and
          development of impactful technical solutions, iconic brands, and
          immersive experiences.
        </p>
        <Link
          href="/"
          className="flex items-center md:text-base xl:text-xl gap-2"
        >
          Contact Us
          <FiArrowUpRight className="bg-white rounded-full text-[#000B17] text-xl " />
        </Link>
      </div>

      {/* Spline Component */}
      <div className="flex flex-1 scale-[0.3] sm:scale-50 lg:scale-90 xl:scale-110 absolute -top-[100px]  md:top-5 h-[400px] xl:top-10  w-[850px] -right-[21rem]  md:-right-60 xl:-right-36  justify-end text-white items-end">
        <Spline className="" scene="/Logo animation.spline" />
      </div>
    </div>
  );
};

export default MainHero;
