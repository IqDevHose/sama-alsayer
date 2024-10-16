import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container flex flex-col md:flex-row justify-between items-start mx-4 space-y-6 md:space-y-0 px-6">
        {/* Left Section - Logo and Company Name */}
        <div className="flex items-center">
          {/* <img
                src="/logo.png"
                alt="sama Logo"
                className="w-20 object-cover"
              /> */}
          <div className="flex flex-col items-start mt-0 md:mt-2">
            <h3 className="text-xl font-bold text-white">
              شركة سما الساير
            </h3>
            <p className="text-sm text-gray-400">
              &copy; كل الحقوق محفوظة لشركة سما الساير 2024.
            </p>
          </div>
        </div>

        <div className="flex  flex-col">
          <div className="flex items-center gap-3 mt-3 ">
            <FaPhone />
            <a href="tel:123456789 964+">77000000000 964+ </a>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <MdEmail />
            <a href="mailto:info@sama-alsayer.iq">
              <p>info@sama-alsayer.iq</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
