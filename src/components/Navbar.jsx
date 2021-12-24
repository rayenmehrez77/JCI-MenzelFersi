import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import img from "../images/logo.png";
import { FiMenu } from "react-icons/fi";
import { Link as LinkScroll } from "react-scroll";
import { RiPhoneFill } from "react-icons/ri";

const Navbar = ({ clicked, setClicked, showNav, scrollToTop }) => {
  return (
    <header
      className={`flex items-center h-18 py-3 shadow-md 
      } fixed top-0 left-0 z-50  justify-between px-4 lg:px-6 w-full bg-white`}
    >
      <Link to="/" className="flex items-center cursor-pointer">
        <img
          src={img}
          alt="logo"
          className="h-full w-46 object-center object-cover"
        />
      </Link>
      <FiMenu
        className="w-8 h-8 lg:hidden flex object-cover cursor-pointer"
        onClick={() => setClicked(!clicked)}
      />
      <div className="lg:flex items-center hidden">
        <ul className="lg:flex items-center space-x-12 font-semibold text-gray-600 text-md hidden">
          <li onClick={scrollToTop} className="cursor-pointer">
            Acceuil
          </li>
          <li>
            <LinkScroll
              to="event"
              smooth={true}
              offset={50}
              duration={700}
              className="cursor-pointer"
            >
              Evenement
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="credo"
              smooth={true}
              offset={50}
              duration={700}
              className="cursor-pointer"
            >
              Credo
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="team"
              smooth={true}
              offset={50}
              duration={700}
              className="cursor-pointer"
            >
              EQUIPE
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="faq"
              smooth={true}
              offset={50}
              duration={700}
              className="cursor-pointer"
            >
              FAQ
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="suggestion"
              smooth={true}
              offset={50}
              duration={700}
              className="cursor-pointer"
            >
              Suggestion
            </LinkScroll>
          </li>
        </ul>
      </div>
      <div className="lg:inline-block hidden">
        <div className="flex items-center border px-4 py-2 rounded-full bg-brand text-white font-bold shadow-lg">
          <RiPhoneFill className="w-5 h-5" />
          <span> +216 92 481 518</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
