import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
const StackCard = ({ bg, type, heading, num, para }) => {
  return (
    <div className="h-[60vh] md:h-[400px] xl:h-[500px] flex  text-white flex-col md:flex-row gap-10 my-auto w-[90%] rounded-3xl overflow-hidden p-5 relative ">
      <div className="absolute top-0 left-0 w-full h-full ">
        <img src={bg} alt="1" className="w-full z-10 h-full " />
      </div>
      <div className="w-full z-20 md:w-1/2  gap-10 flex md:px-4 md:py-2 flex-col justify-start items-center md:items-start">
        <div className="w-full">
          <h1 className="text-yellow-400  header font-bold text-start text-6xl">
            {num}
          </h1>
        </div>
        <div>
          <h1 className="bg-gradient-to-r header from-white via-blue-500 to-blue-500 font-extrabold bg-clip-text text-transparent text-6xl">
            {heading}
          </h1>
        </div>

        <div>{para}</div>

        <div className=" flex justify-start items-start flex-1 gap-2">
          <button className=" ">Contact Us</button>
          <div className=" bg-white text-black rounded-full ">
            <FiArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="w-full flex z-20 md:w-1/2 justify-end items-center">
        {type === "AI" && (
          <div className="border-2 w-[85%] border-blue-400 h-[90%] rounded-3xl p-5">
            <h1 className="text-white font-bold text-xl">
              Why AI is great to speed up <br /> data analysis:
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default StackCard;
