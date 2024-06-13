// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import compLogo from "../assets/Frame.png";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed z-50 p-4 flex justify-between items-center transition-all w-[80%] duration-300 ${
        isScrolled ? "top-2 rounded-[20px] backdrop-blur-md shadow-lg" : ""
      }`}>
      <div className="flex gap-8 items-center">
        <div className="flex gap-2">
          <img src={compLogo} alt="compLogo" />
          <div>
            <span className="font-[700] text-[25px]">uifry</span> <sup>tm</sup>
          </div>
        </div>
        <div className="hidden lg:flex space-x-4 text-[25px] gap-2 font-semibold">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-[#FF5555]"
            className="hover:text-[#FF5555] cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-[#FF5555]"
            className="hover:text-[#FF5555] cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-[#FF5555]"
            className="hover:text-[#FF5555] cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-[#FF5555]"
            className="hover:text-[#FF5555] cursor-pointer"
          >
            Features
          </Link>
        </div>
      </div>
      <button className="bg-black text-white px-4 py-2 rounded-md lg:ml-4">
        Download
      </button>
      <div className="lg:hidden relative">
        <button onClick={toggleDropdown} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20">
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-[#FF5555]"
              className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={toggleDropdown}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-[#FF5555]"
              className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={toggleDropdown}
            >
              About Us
            </Link>
            <Link
              to="pricing"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-[#FF5555]"
              className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={toggleDropdown}
            >
              Pricing
            </Link>
            <Link
              to="features"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-[#FF5555]"
              className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={toggleDropdown}
            >
              Features
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
