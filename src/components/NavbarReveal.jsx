import React from "react";
import { FiMenu } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import img from "../images/logo.png";

const NavbarReveal = () => {
  return (
    <Fade>
      <div className="lg:px-6 h-18 py-3 w-full fixed top-0 left-0 px-2 shadow-md z-50 flex items-center justify-between bg-white">
        <Link to="/" className="flex items-center cursor-pointer">
          <img src={img} alt="logo" className="w-46 object-cover" />
        </Link>
        <FiMenu className="w-8 h-8 lg:hidden flex object-cover cursor-pointer" />
        <div className="lg:flex items-center hidden">
          <ul className="lg:flex items-center space-x-10 font-bold text-gray-600 text-md hidden">
            <li>
              <LinkScroll
                to="acceuil"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                ACCUEIL
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="program"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                PROGRAMME
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="team"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                EQUIPE
              </LinkScroll>
            </li>
            <li>
              <Link
                to="faq"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                FAQ
              </Link>
            </li>
            <li>
              <LinkScroll
                to="newsletter"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                Newsletter
              </LinkScroll>
            </li>
          </ul>
        </div>
        <div className="lg:inline-block hidden">
          <a href="#" className="btn btn-primary">
            Contact
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default NavbarReveal;
