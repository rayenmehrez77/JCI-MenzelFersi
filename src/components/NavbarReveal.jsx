import React from "react";
import { FiMenu } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import img from "../images/logo.png";

const NavbarReveal = () => {
  return (
    <Fade>
      <div className="bg-white h-18 py-2 w-full fixed top-0 left-0 px-4 shadow-md z-50 flex items-center justify-between">
        <Link to="/" className="flex items-center cursor-pointer">
          <img src={img} alt="logo" className="w-46 object-cover" />
        </Link>
        <FiMenu className="w-8 h-8 lg:hidden flex object-cover cursor-pointer" />
        <div className="lg:flex items-center hidden">
          <ul className="lg:flex items-center space-x-10 font-bold text-gray-600 text-md hidden">
            <li>
              <Link
                to="acceuil"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                ACCUEIL
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                PROGRAMME
              </Link>
            </li>
            <li>
              <Link
                to="event"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                EQUIPE
              </Link>
            </li>
            <li>
              <Link
                to="team"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer"
              >
                FAQ
              </Link>
            </li>
          </ul>
          <a
            href="#"
            className="ml-8 rounded-md py-1 px-8 bg-gradient-to-r transition-all delay-75 bg-blue-500 text-white font-bold"
          >
            Contact
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default NavbarReveal;
