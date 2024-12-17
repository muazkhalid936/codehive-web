import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="container py-24 rounded-lg">
      <div className="bg-[url('/whoweare/bgImage.png')] bg-cover bg-center h-[600px] w-full rounded-[20px] items-center md:items-center justify-start sm:justify-center flex flex-row sm:gap-32 gap:4 px-6 sm:px-0">
        <div className="flex flex-col text-white w-full sm:w-1/2">
          <h2 className="text-5xl font-bold flex-1 font-gilroy">
            Who are <span className="  text-[#219DD9] "> we? </span>
          </h2>
          <p>
            Code Hive is driven by dynamism, client focus, and technological
            strength. Since inception, it has been dedicated to building
            cutting-edge iOS and Android applications, helping emerging
            businesses bring products to market efficiently, even with tight
            time and budget constraints.
          </p>
        </div>
        <img
          src="/whoweare/play-button.png"
          alt="bgImage"
          className="w-12 md:w-24 d-none md:d-block"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
