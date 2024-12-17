'use client';
import React, { Fragment, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { SlArrowDown } from 'react-icons/sl';
import { services, products } from '../data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarPages = ({ isBlack }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = (link) => {
    toggleSidebar();
  };

  console.log(isServicesDropdownOpen);

  let isDark = isBlack ? false : true;

  const servicesDropdown = services?.map((service) => {
    return {
      label: service.title,
      href: `/service/${service.slug}`,
    };
  });

  const productsDropdown = products?.map((product) => {
    return {
      label: product.title,
      href: `/${product.slug}`,
    };
  });

  return (
    <div className="py-4 flex justify-center items-center w-full bg-transparent absolute top-0 z-50">
      <div className="font-lato px-10 container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img
            src="/Code hive Branding-02.png"
            className="w-40 md:w-60"
            alt="logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-6 md:gap-2 sm:gap-2 relative">
          {[
            { href: '/', label: 'Home', key: 'home' },
            { href: '/about-us', label: 'About Us', key: 'about' },
            {
              label: (
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                >
                  Services <SlArrowDown className="w-3 h-3 text-bold" />
                </div>
              ),
              key: 'services',
            },
            { href: '/products', label: 'Products', key: 'products' },
            { href: '/ourwork', label: 'Our Works', key: 'ourWorks' },
            { href: '/contact', label: 'Contact', key: 'contact' },
          ].map((item) => (
            <div key={item.key} className="relative">
              {item.key === 'services' ? (
                <div
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  className={`text-sm sm:text-sm md:text-base lg:text-lg whitespace-nowrap ${
                    isDark
                      ? 'text-[#010B17]'
                      : pathname.includes('service')
                      ? 'text-[#219DD9]'
                      : 'text-white'
                  } hover:text-[#219DD9] transition-colors
                  `}
                >
                  {item.label}
                  {isServicesDropdownOpen && (
                    <Fragment>
                      <div
                        className="absolute top-full left-0 mt-2 shadow-lg rounded-lg w-[300px] z-50 bg-[#001A36] py-4"
                        onMouseLeave={() => setIsServicesDropdownOpen(false)}
                      >
                        <Link
                          href={'/services'}
                          className={`text-sm sm:text-sm md:text-base lg:text-lg whitespace-nowrap ml-3  text-white hover:text-[#219DD9] transition-colors`}
                        >
                          Services
                        </Link>
                        {servicesDropdown?.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className={`block py-2 px-4 text-sm hover:bg-[#219DD92B] text-white transition-colors font-lato font-semibold ${
                              pathname === service.href
                                ? 'border-l-4 border-[#219DD9] text-[#219DD9]'
                                : ''
                            }`}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </Fragment>
                  )}
                </div>
              ) : item.key === 'products' ? (
                <div
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  className={`text-sm sm:text-sm md:text-base lg:text-lg whitespace-nowrap ${
                    isDark
                      ? 'text-[#010B17]'
                      : pathname.includes('product')
                      ? 'text-[#219DD9]'
                      : 'text-white'
                  } hover:text-[#219DD9] transition-colors
                  `}
                >
                  {item.label}
                  {isProductsDropdownOpen && (
                    <Fragment>
                      <div
                        className="absolute top-full left-0 mt-2 shadow-lg rounded-lg w-[300px] z-50 bg-[#001A36] py-4"
                        onMouseLeave={() => setIsProductsDropdownOpen(false)}
                      >
                        {productsDropdown?.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className={`block py-2 px-4 text-sm hover:bg-[#219DD92B] text-white transition-colors font-lato font-semibold ${
                              pathname === service.href
                                ? 'border-l-4 border-[#219DD9] text-[#219DD9]'
                                : ''
                            }`}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </Fragment>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm sm:text-sm md:text-base lg:text-lg whitespace-nowrap ${
                    pathname === item.href
                      ? 'text-[#219DD9] font-semibold'
                      : isDark
                      ? 'text-[#010B17]'
                      : 'text-white'
                  } hover:text-[#219DD9] transition-colors`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="hidden lg:flex text-sm items-center gap-10 lg:gap-10">
          <div
            className={`font-archivo text-[14px] sm:text-[16px] lg:text-[18px] font-lato ${
              isDark ? 'text-[#010B17]' : 'text-white'
            }`}
          >
            العربية
          </div>
          <button
            className={`border-[1.3px] px-4 py-2 rounded-full ${
              isDark
                ? 'text-[#010B17] border-[#010B17]'
                : 'text-white border-white'
            } hover:border-[#219DD9] hover:text-[#219DD9] transition-colors`}
          >
            Make a Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden" onClick={toggleSidebar}>
          <FiMenu className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleSidebar}
          />
          <div className="fixed top-0 left-0 w-64 h-full bg-white p-4 z-50">
            {[
              { href: '/', label: 'Home', key: 'home' },
              { href: '/about-us', label: 'About Us', key: 'about' },
              { href: '/services', label: 'Services', key: 'services' },
              { href: '/products', label: 'Products', key: 'products' },
              { href: '/industries', label: 'Industries', key: 'industries' },
              { href: '/portfolio', label: 'Portfolio', key: 'portfolio' },
            ].map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block py-2 text-[#010B17] hover:text-[#219DD9]"
                onClick={() => handleLinkClick(item.key)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarPages;
