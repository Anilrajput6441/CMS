"use client";
import Image from "next/image";
import { Button } from "@/components/ui/loginbtn";
import React from "react";
import { useModal } from "@/hooks/useModal";
import LoginModal from "@/components/LoginModal";
import Link from "next/link";

const Header = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div className="w-[100vw] lg:w-[100vw] h-20    flex justify-center items-center">
      <div className="w-[100%] lg:w-[80%] h-20 rounded-b-full border-b-2 flex  items-center border-[#C3EB2F]">
        <div className="left w-[20%]">
          <Image
            src="/circle.png" // Path from the /public folder
            alt="Example Image"
            width={50} // Required
            height={30} // Required
            priority // Optional (for faster loading)
            className="rounded-lg ml-10 lg:ml-20 mt-0 shadow-md"
          />
        </div>
        <div className="center w-[45%] ml-45 hidden lg:block   ">
          <ul className="flex gap-5 ">
            <li className="hover:text-[#C3EB2F] cursor-pointer">Products</li>
            <li className="hover:text-[#C3EB2F] cursor-pointer">Company</li>
            <li className="hover:text-[#C3EB2F] cursor-pointer">Services</li>
            <li className="hover:text-[#C3EB2F] cursor-pointer">Partners</li>
            <Link href="/dashboard">
              <li className="hover:text-[#C3EB2F] cursor-pointer">Dashboard</li>
            </Link>
          </ul>
        </div>
        <div className="w-[80%] flex justify-end lg:hidden pr-10 ">
          <a href="#">
            <i className="ri-menu-fill text-[#C3EB2F] text-3xl"></i>
          </a>
        </div>
        <div className="hidden lg:block">
          {" "}
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-[#0A0A0A] text-black dark:text-white hover:text-[#c3eb2f] hover:font-bold cursor-pointer border-neutral-200 dark:border-[#0A0A0A]"
            onClick={openModal}
          >
            Login
          </Button>
          <LoginModal isOpen={isOpen} onClose={closeModal} />
        </div>

        {/* <div className="right border-1 ml-10 p-2 rounded-full hidden lg:block border-[#C3EB2F]   hover:bg-[#C3EB2F]  hover:text-black">
          <button className="cursor-pointer">Contact Us</button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
