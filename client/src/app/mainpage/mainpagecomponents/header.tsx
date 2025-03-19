"use client";
import Image from "next/image";

import React from "react";

const Header = () => {
  return (
    <div className="w-[100vw] h-20    flex justify-center items-center">
      <div className="w-[80%] h-20 rounded-b-full border-b-2 flex  items-center border-[#C3EB2F]">
        <div className="left w-[20%]">
          <Image
            src="/circle.png" // Path from the /public folder
            alt="Example Image"
            width={50} // Required
            height={30} // Required
            priority // Optional (for faster loading)
            className="rounded-lg ml-20 mt-0 shadow-md"
          />
        </div>
        <div className="center w-[45%] ml-45    ">
          <ul className="flex gap-5 ">
            <li className="hover:text-[#C3EB2F] cursor-pointer">Products</li>
            <li className="hover:text-[#C3EB2F] cursor-pointer">Company</li>
            <li className="hover:text-[#C3EB2F] cursor-pointer">Services</li>
            <li className="hover:text-[#C3EB2F] cursor-pointer">Partners</li>
            <li className="hover:text-[#C3EB2F] cursor-pointer">Blogs</li>
          </ul>
        </div>
        <div className="right border-1 ml-10 p-2 rounded-full border-[#C3EB2F]   hover:bg-[#C3EB2F]  hover:text-black">
          <button className="cursor-pointer">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
