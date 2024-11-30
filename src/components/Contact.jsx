import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#000b17] container  py-20 ">
      <div className="p-4 md:p-8 rounded-2xl bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-[90%] md:w-[70%]  mx-auto shadow-lg">
        <h2 className="text-xl text-white font-bold text-center mb-4">
          Let's Talk
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200  to-blue-500 bg-clip-text text-transparent mb-6 text-center">
          Connect with us
        </h3>
        <form className="flex form-input flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-5 md:gap-40">
            {" "}
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
          <div className="flex flex-col md:flex-row gap-5 md:gap-40">
            {" "}
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
          <div className="flex flex-col md:flex-row gap-5 md:gap-40">
            {" "}
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
          <div className="flex flex-col md:flex-row gap-5 md:gap-40">
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
          <div className="flex flex-col md:flex-row gap-5 md:gap-40">
            {" "}
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
              className="p-2 rounded border-none outline-none bg-transparent text-white max-h-40"
              required
            ></textarea>
            <hr className="border border-slate-500" />
          </div>
          <div className="flex justify-center w-[70%] mx-auto">
            <button
              type="submit"
              className="bg-[#0c1b2c] w-full text-white py-2 text-lg rounded-full mt-4"
            >
              Get Started
            </button>
          </div>
        </form>
      <div className="absolute top-0 right-0 h-60 rounded-tr-2xl w-60 border-t-2 border-r-2 border-blue-200"></div>
      <div className="absolute bottom-0 left-0 h-60 rounded-bl-2xl w-60 border-b-2 border-l-2 border-blue-200"></div>
      </div>


    </div>
  );
};

export default ContactForm;
