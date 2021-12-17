import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { AiFillFacebook } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-footerbg p-5 sm:p-6 md:p-8 flex items-center justify-center flex-col text-center">
      <Link to="/">
        <img src={Logo} className="md:w-46 w-30" alt="" />
      </Link>
      <p className="md:max-w-2xl max-w-full mt-4 text-xs sm:text-base lg:text-lg font-semibold text-gray-800">
        Notre Vision est d’être le principal réseau mondial de jeunes citoyens
        actifs.
      </p>
      <ul className="md:space-x-6 space-x-4 font-semibold text-gray-800 my-6 flex items-center text-xs md:text-base">
        <li>
          <a href="#nav-acceuil">Acceuil</a>
        </li>
        <li>
          <a href="#programme">Programme</a>
        </li>
        <li>
          <a href="#team">Equipe</a>
        </li>
        <li>
          <a href="#sponsors">FAQ</a>
        </li>
        <li>
          <a href="#sponsors">Newsletter</a>
        </li>
      </ul>
      <div className="flex space-x-3">
        <a href="#">
          <AiFillFacebook className="w-6 h-6 text-gray-800 hover:text-brand delay-50" />
        </a>
        <a href="#">
          <RiInstagramLine className="w-6 h-6 text-gray-800 hover:text-brand" />
        </a>
      </div>
      <div className="flex items-center sm:justify-between mx-4 lg:mx-8 flex-wrap my-6 pt-4 justify-center">
        <p className="font-bold text-gray-800 text-xs xs:text-sm sm:text-md lg:text-lg text-center">
          © 2021 Tous les droits sont réservés.
        </p>
      </div>
      <h3 className=" text-sm sm:text-md md:text-lg font-semibold tracking-wider text-center text-gray-800">
        Réalisé par{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://rayenmehrez.me/"
          className="text-brand font-bold"
        >
          Rayen Mehrez
        </a>
      </h3>
    </div>
  );
};

export default Footer;
