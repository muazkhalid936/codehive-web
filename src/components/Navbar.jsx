'use client';
import React, { useState } from 'react';
import { FiArrowUpRight, FiMenu } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';

import Link from 'next/link';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" bg-[#000b17] py-4 flex justify-center items-center">
      <div className=" text-white px-10  container mx-auto flex justify-between items-center">
        <div>
          <img
            src="/Code hive Branding-01.png"
            className=" w-40 md:w-60"
            alt="logo"
          />
        </div>
        <div className=" hidden lg:flex gap-4 text-sm lg:text-base  xl:text-xl lg:gap-3 xl:gap-5">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link
            className="flex  justify-center gap-1 items-center"
            href="/services"
          >
            Services <FaChevronDown className="text-blue-600 text-base" />{' '}
          </Link>
          <Link className="flex  justify-center gap-1 items-center" href="/">
            Products
            <FaChevronDown className="text-blue-600 text-base" />
          </Link>
          <Link className="flex  justify-center gap-1 items-center" href="/">
            Industries
            <FaChevronDown className="text-blue-600  text-xs lg:text-base" />
          </Link>
          <Link href="/">Portfolio</Link>
        </div>

        <div className="hidden lg:flex text-sm lg:text-base xl:text-xl items-center gap-2">
          <button className=" ">Contact Us</button>
          <div className=" bg-white text-black rounded-full ">
            <FiArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        <div className="lg:hidden" onClick={toggleSidebar}>
          <FiMenu
            className={`w-6 h-6 cursor-pointer duration-300 ease-in-out ${
              isSidebarOpen ? 'rotate-90' : ''
            }`}
          />
        </div>
      </div>

      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleSidebar}
          />
          <div
            className={`fixed top-0 left-0 w-64 h-full bg-[#00011b] text-white p-4 z-50 transition-transform transform ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* <h2 className="text-lg font-bold">Menu</h2> */}
            <Link href="/" className="block py-2">
              Home
            </Link>
            <Link href="/about-us" className="block py-2">
              About Us
            </Link>
            <Link href="/services" className="block py-2">
              Services
            </Link>
            <Link href="/" className="block py-2">
              Products
            </Link>
            <Link href="/" className="block py-2">
              Industries
            </Link>
            <Link href="/" className="block py-2">
              Portfolio
            </Link>
            <button onClick={toggleSidebar} className="mt-4">
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
