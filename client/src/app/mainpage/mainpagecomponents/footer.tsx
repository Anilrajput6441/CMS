import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    // <div className="w-[100%] flex justify-center border-2 h-140 ">
    <div className="footer flex items-center  justify-center w-full h-120 mt-10 bg-gradient-to-b from-black via-[#1a2f0d] to-[#c3eb2f]">
      <div className="absolute w-[80%] h-90 border-t-2 border-[#C3EB2F] bg-[#0a0a0adc] rounded-3xl pl-10 pr-10 ">
        <h1 className="text-xl lg:text-4xl border-b-1 w-[100%] lg:w-[100%] flex justify-center roboto-mono font-extrabold p-3 ">
          About Us
        </h1>
        {/* Quick Links */}
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          <div>
            <h2 className="text-md lg:text-2xl text-center font-bold mb-4 ">
              <span className="hover:text-[#C3EB2F] transition duration-300">
                Quick Links
              </span>
            </h2>
            <ul className="flex  gap-6 space-y-0 flex-wrap lg:space-y-0">
              <li className="text-sm">
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#C3EB2F] transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-[#C3EB2F] transition duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#C3EB2F] transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-[#C3EB2F] transition duration-300"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="p-2 ">
            <h2 className="text-2xl font-bold mb-4 hover:text-[#C3EB2F]">
              Contact Us
            </h2>
            <p className="text-gray-400 hover:text-[#C3EB2F]">
              Email: contact@company.com
            </p>
            <p className="text-gray-400 hover:text-[#C3EB2F]">
              Phone: +91 98765 43210
            </p>
            <p className="text-gray-400 hover:text-[#C3EB2F]">
              Address: 123, Tech Park, India
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <Link href="https://codemap.online/">
          <div className="mt-10 text-center border-t border-gray-700 pt-4 text-gray-500 hover:text-[#C3EB2F]">
            &copy; {new Date().getFullYear()} Codemap. All rights reserved.
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
