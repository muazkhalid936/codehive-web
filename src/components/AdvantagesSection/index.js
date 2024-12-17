'use client';

import React from 'react';

const AdvantagesSection = ({ data }) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-center text-gray-900 mb-12 font-gilroy">
          {data.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={`${
                index === data.cards.length - 1 ? 'text-[#219DD9]' : ''
              }`}
            >
              {word}{' '}
            </span>
          ))}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="relative  rounded-lg overflow-hidden shadow-lg  bg-gradient-to-b  from-[#051e32] to-[#021322] "
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-96 object-cover object-top"
              />
              <div className="absolute inset-0 bg-black  bg-opacity-50 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2 font-gilroy">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
