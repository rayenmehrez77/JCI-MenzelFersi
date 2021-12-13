import React from "react";
import { Link } from "react-scroll";
import img from "../images/logo.png";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ clicked, setClicked }) => {
  return (
    <header
      className="flex items-center justify-between py-4 w-full  bg-white"
      id="acceuil"
    >
      <Link to="/" className="flex items-center cursor-pointer">
        <img src={img} alt="logo" className="h-18 object-cover" />
      </Link>
      <FiMenu
        className="w-8 h-8 lg:hidden flex object-cover cursor-pointer"
        onClick={() => setClicked(!clicked)}
      />
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
    </header>
  );
};

export default Navbar;
