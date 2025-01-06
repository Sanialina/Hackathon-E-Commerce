"use client";
import Link from "next/link";
import { BsPersonExclamation } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";  // Import useState for handling dropdown state

const Page = () => {
  // State to handle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="w-full max-w-[1440px] h-[100px] bg-[#FBEBB5] opacity-100 mx-auto px-4">
      <nav className="absolute w-full md:w-[430px] h-[24px] top-[38px] left-[45%] transform -translate-x-1/2 flex justify-between items-center md:gap-8 gap-2">
        {/* Home Item */}
        <Link
          href="/"
          className="w-[48px] h-[24px] text-black text-sm font-medium text-left flex items-center justify-center hover:underline">
          Home
        </Link>

        {/* Shop Item */}
        <Link
          href="/shop"
          className="w-[42px] h-[24px] text-black text-sm font-medium text-left flex items-center hover:underline">
          Shop
        </Link>

        {/* About Item */}
        <Link
          href="/about"
          className="w-[49px] h-[24px] text-black text-sm font-medium text-left flex items-center hover:underline">
          About
        </Link>

        {/* Contact Item */}
        <Link
          href="/contact"
          className="w-[66px] h-[24px] text-black text-sm font-medium text-left flex items-center hover:underline">
          Contact
        </Link>
      </nav>

      {/* Right-side Icons (Desktop View) */}
      <div className="gap-6 items-center absolute right-[20px] md:right-[50px] top-[36px] md:flex hidden">
        {/* Person with Exclamation Icon */}
        <BsPersonExclamation className="text-xl text-black cursor-pointer hover:text-amber-500" />

        {/* Search Icon */}
        <CiSearch className="text-xl text-black cursor-pointer hover:text-amber-500" />

        {/* Heart Icon */}
        <GoHeart className="text-xl text-black cursor-pointer hover:text-amber-500" />

        {/* Cart Icon */}
        <BsCart3 className="text-xl text-black cursor-pointer hover:text-amber-500" />
      </div>

      {/* Dropdown Button (Mobile View) */}
      <button 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
        className="md:hidden absolute right-[20px] top-[36px] text-black text-xl"
      >
        &#9776; {/* Hamburger icon */}
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="md:hidden absolute right-[20px] top-[50px] bg-[#FBEBB5] shadow-lg rounded-md p-2">
          <div className="flex flex-col items-start gap-4">
            <BsPersonExclamation className="text-xl text-black cursor-pointer hover:text-amber-500" />
            <CiSearch className="text-xl text-black cursor-pointer hover:text-amber-500" />
            <GoHeart className="text-xl text-black cursor-pointer hover:text-amber-500" />
            <BsCart3 className="text-xl text-black cursor-pointer hover:text-amber-500" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Page;
