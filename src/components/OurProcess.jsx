import React from "react";
import { FaComments, FaDesktop, FaPen, FaMobileAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdRocketLaunch } from "react-icons/md";

const OurProcess = () => {
  return (
    <div className="container my-20 mx-auto w-full flex flex-col gap-10 ">
      <div>
        <h1 className="text-5xl text-center font-extralight text-white">
          Our Process
        </h1>
      </div>

      <div className="flex md:gap-10  flex-col md:flex-row">
        <div className="flex  w-full md:w-1/2 gap-5 items-center text-white">
          <div className="flex gap-5">
            {" "}
            <FaComments className="text-4xl" />
            <FaDesktop className="text-4xl" />
            <FaPen className="text-4xl" />
            <MdRocketLaunch className="text-4xl" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/process/bg.jpg" className="h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
