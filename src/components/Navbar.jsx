import React from "react";
import { Link } from "react-router-dom";
import img from "../images/jci.png";

import { GrMail } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="bg-blue-500 p-1 text-gray">
        <div className="flex items-center space-x-2">
          <GrMail />
          <p>rayenmehrez28@gmail.com</p>
        </div>
      </div>
      <header className="flex items-center justify-between px-8 py-4 shadow bg-white">
        <Link to="/" className="flex items-center">
          <img src={img} alt="logo" className="h-10 object-cover" />
          <div className="ml-2">
            <h1 className="font-medium text-yellow-500 text-sm">
              Menzel Fersi
            </h1>
            <h1 className="text-gray-600 font-medium text-2xl -mt-2">
              Community
            </h1>
          </div>
        </Link>
        <ul className="flex items-center space-x-8 font-medium text-gray-700">
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#events">EVENTS</a>
          </li>
          <li>
            <a href="#team">TEAM</a>
          </li>
          <li>
            <a href="#sponsors">SPONSORS</a>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <button className="bg-blue-400 p-2 font-medium text-gray-900 rounded-sm">
          Contact Us
        </button>
      </header>
    </div>
  );
};

export default Navbar;
