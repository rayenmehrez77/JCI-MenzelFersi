import React from "react";
import { Link } from "react-scroll";
import img from "../images/jci.png";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ clicked, setClicked }) => {
  return (
    <header
      className="flex items-center justify-between w-full pt-6 lg:px-14 px-8 bg-white"
      id="acceuil"
    >
      <Link to="/" className="flex items-center">
        <img src={img} alt="logo" className="h-10 object-cover" />
        <div className="ml-2">
          <h1 className="font-medium text-yellow-500 text-sm">Menzel Fersi</h1>
          <h1 className="text-gray-600 font-medium text-2xl -mt-2">
            Communauté
          </h1>
        </div>
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
              Acceuil
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
              À Propos
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
              Event
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
              Equipe
            </Link>
          </li>
          <li>
            <Link
              to="sponsor"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              Sponsors
            </Link>
          </li>
        </ul>
        <a
          href="#"
          className="ml-4 border border-gray-400 rounded-full py-1 px-6 bg-gradient-to-r hover:bg-blue-600 hover:text-white transition-all delay-75"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
