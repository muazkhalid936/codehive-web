import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-[#000b17] flex justify-center items-center mx-auto container h-screen  py-32 relative z-10 mb-24">
      <div className="absolute right-2 -bottom-10">
        <img
          src="/feature/VectorWithBG.png "
          alt=""
          className="origin-center -rotate-[145deg] w-[200px] md:w-[300px]"
        />
      </div>
      <div className="absolute left-3 -top-10">
        <img
          src="/feature/VectorWithoutBG.png"
          alt=""
          className="origin-center w-[200px] md:w-[300px] rotate-[-20deg]"
        />
      </div>
      <div class="w-[90%] mx-auto bg-gradient-to-r from-[#010B1770] to-[#2093CA70] p-1 rounded-2xl">
        <div className="p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg">
          <h2 className="text-lg text-white xl:text-xl font-bold text-center font-gilroy">
            Let's Talk
          </h2>
          <h3 className="font-gilroy text-3xl header md:text-3xl lg:text-5xl xl:text-7xl font-bold bg-gradient-to-r from-white via-blue-200  to-blue-500 bg-clip-text text-transparent mb-6 text-center">
            Connect with us
          </h3>
          <form className="flex form-input flex-col gap-2 md:gap-5 xl:gap-10">
            <div className="flex flex-col md:flex-row gap-5 md:gap-20 xl:gap-40">
              {' '}
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Name*"
                  className="p-2 border-b-2 border-white rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="tel"
                  placeholder="Phone*"
                  className="p-2 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-20 xl:gap-40">
              {' '}
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Years in Business*"
                  className="p-2 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="url"
                  placeholder="Current Website*"
                  className="p-2 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-20 xl:gap-40">
              {' '}
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Business Size*"
                  className="p-2 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Email*"
                  className="p-2 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-20 xl:gap-40">
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Business name*"
                  className="p-2 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Business Category*"
                  className="p-2 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-20 xl:gap-40">
              {' '}
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="I'm interested in (e.g. Website Design)*"
                  className="p-2 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Budget*"
                  className="p-2 rounded"
                  required
                />
                <hr className="border border-slate-500" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <textarea
                placeholder="Message*"
                className="p-2 rounded border-none outline-none bg-transparent text-white"
                required
              ></textarea>
              <hr className="border border-slate-500" />
            </div>
            <div className="flex justify-center w-[70%] mx-auto">
              <button
                type="submit"
                className="bg-[#0c1b2c] w-full text-white py-4 text-lg rounded-xl mt-4 font-gilroy"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
