import React from "react";
import { FaComments, FaDesktop, FaPen, FaMobileAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdRocketLaunch } from "react-icons/md";

const OurProcess = () => {
  return (
    <div className="container my-20 mx-auto w-full flex flex-col gap-10 ">
      <div>
        <h1 className="text-5xl mb-10 text-center font-extrabold text-white">
          Our Process
        </h1>
      </div>

      <div className="flex gap-10  flex-col md:flex-row">
        <div className="flex card-1 flex-col  w-full md:w-1/2 gap-10 items-start text-white">
          <div className="flex gap-5">
            {" "}
            <FaComments className="text-4xl" />
            <FaDesktop className="text-4xl" />
            <FaPen className="text-4xl" />
            <MdRocketLaunch className="text-4xl" />
          </div>

          <div>
            <p className="bg-gradient-to-r text-5xl font-extrabold from-white to-blue-500 bg-clip-text text-transparent">
              Project <br /> Vision
            </p>
          </div>
          <p className="text-base text-justify text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            minima temporibus consequatur placeat neque blanditiis rerum
            nesciunt nemo dolorem a quae consequuntur{" "}
          </p>
        </div>

        <div className="w-full card-2 md:w-1/2 flex justify-center items-center">
          <img
            src="/process/bg.jpg"
            className="h-[200px] my-auto md:h-[300px] rounded-3xl border-2 border-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
