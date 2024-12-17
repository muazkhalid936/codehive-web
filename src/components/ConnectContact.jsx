import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import FeatureSlider from './FeatureSlider';

const Connect = ({ sliderData }) => {
  return (
    <div className="overflow-y-hidden bg-[#000B17]">
      {sliderData && <FeatureSlider data={sliderData} from="contact" />}
      <div className="relative">
        <div className="absolute right-[5%] -bottom-10">
          <img
            src="/feature/VectorWithBG.png "
            alt=""
            className="origin-center -rotate-[145deg] w-[100px] lg:w-[300px]"
          />
        </div>
        <div className="absolute left-[12%] top-0">
          <img
            src="/feature/VectorWithoutBG.png"
            alt=""
            className="origin-center w-[100px] lg:w-[300px]"
          />
        </div>
        <div className="container py-40 mx-auto">
          <div className="">
            <form className=" mx-auto py-32 flex-col px-2 xl:px-32 rounded-[25px]  w-[95%] md:w-[80%] bg-gradient-to-br p-2 md:p-5   from-[#051e32] to-[#021322]">
              <div className="flex flex-col gap-2 pt-12 md:pt-32">
                <p className="text-white mx-auto text-[35px] font-extrabold font-gilroy">
                  Let's Talk
                </p>
                <div className="flex mx-auto text-white gap-2 text-[65px] xl:gap-5 ">
                  {' '}
                  <h1 className="header text-blue-400 text-2xl md:text-4xl lg:text-6xl xl:text-[65px] font-gilroy">
                    {' '}
                    Connect{' '}
                  </h1>
                  <h1 className="header text-2xl md:text-4xl lg:text-6xl xl:text-[65px] font-gilroy">
                    with us
                  </h1>
                </div>
              </div>

              <div className="mt-10 !text-[27px] pb-12 md:pb-32">
                <div className="flex flex-col md:flex-row gap-0 md:gap-10 flex-1">
                  <input
                    type="text"
                    placeholder="Name"
                    className=" w-full outline-none  focus:text-[#1d8bc2] px-10 py-5 text-2xl bg-[#081c2c]  rounded-full text-white p-2  mx-auto my-5"
                  />
                  <input
                    type="text"
                    placeholder="Email Address*"
                    className=" w-full outline-none focus:text-[#1d8bc2] px-10 py-2 text-2xl bg-[#081c2c]  rounded-full text-white p-2  mx-auto my-5"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-0 md:gap-10 flex-1">
                  <input
                    type="text"
                    placeholder="Phone*"
                    className=" w-full outline-none  focus:text-[#1d8bc2] px-10 py-5 text-2xl bg-[#081c2c]  rounded-full text-white p-2  mx-auto my-5"
                  />
                  <input
                    type="text"
                    placeholder="Current Website*"
                    className=" w-full outline-none focus:text-[#1d8bc2] px-10 py-2 text-2xl bg-[#081c2c]  rounded-full text-white p-2  mx-auto my-5"
                  />
                </div>
                <div className="flex gap-10 flex-1">
                  <input
                    type="text"
                    placeholder="I'm intrested in (i.g, Website Design)*"
                    className=" w-full outline-none  focus:text-[#1d8bc2] px-10 py-5 text-2xl bg-[#081c2c]  rounded-full text-white p-2  mx-auto my-5"
                  />
                </div>
                <div className="flex gap-10 flex-1">
                  <input
                    type="text"
                    placeholder="Message*"
                    className=" w-full outline-none  focus:text-[#1d8bc2] px-10 py-5 text-2xl bg-[#081c2c]  rounded-full text-white p-2  mx-auto my-5"
                  />
                </div>

                <div className="text-white flex items-center relative justify-around bg-[#219dd9] rounded-full py-4 px-5 mt-10 ">
                  <span className="text-2xl font-gilroy">Submit</span>

                  <FaArrowRight className="bg-white rounded-full p-2  absolute right-4 text-4xl text-[#219dd9] " />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
