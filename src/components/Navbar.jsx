import React from "react";
import { Link } from "react-router-dom";
import img from "../images/logo.png";
import { FiMenu } from "react-icons/fi";
import { Link as LinkScroll } from "react-scroll";

const Navbar = ({ clicked, setClicked }) => {
  return (
    <header className="flex items-center justify-between py-3 px-2 lg:px-6 w-full">
      <Link to="/" className="flex items-center cursor-pointer">
        <img
          src={img}
          alt="logo"
          className="h-18 w-46 object-center object-cover"
        />
      </Link>
      <FiMenu
        className="w-8 h-8 lg:hidden flex object-cover cursor-pointer"
        onClick={() => setClicked(!clicked)}
      />
      <div className="lg:flex items-center hidden">
        <ul className="lg:flex items-center space-x-12 font-semibold text-gray-600 text-md hidden">
          <li>
            <LinkScroll
              to=""
              activeClass="active"
              smooth={true}
              offset={50}
              duration={50}
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
              to="event"
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              EQUIPE
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
              FAQ
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="event"
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
    </header>
  );
};

export default Navbar;
