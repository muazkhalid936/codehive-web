import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const OurIndustries = () => {
  return (
    <div className="bg-[#000b17] my-20">
      <div className="container mx-auto flex flex-col gap-4">
        <div className="text-5xl text-white text-center font-bold">
          Our Industries
        </div>

        <div className="flex flex-col my-5 mx-5 md:mx-0 gap-10 md:flex-row ">
          <div className="w-full flex justify-center items-center md:w-[50%]">
            <img src="/iphone.png" className="w-[300px] " />
          </div>

          <div className="w-full text-sm flex flex-col gap-4 text-white md:w-[50%]">
            <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-300  to-blue-500 bg-clip-text text-transparent mb-6 ">
              E-commerce
            </h3>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit architecto non pariatur obcaecati quo delectus nam
              amet expedita culpa officiis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, mollitia?Lorem ipsum dolor sit amet
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eos asperiores quod, distinctio, velit alias pariatur a
              necessitatibus expedita mollitia, sed itaque.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              quas nobis optio? Ducimus, reiciendis!
            </p>
            <div className="flex text-sm items-center gap-2">
              <button className=" ">Contact Us</button>
              <div className=" bg-white text-black rounded-full ">
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
