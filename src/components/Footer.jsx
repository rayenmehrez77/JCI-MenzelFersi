import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components";
import { AiFillFacebook } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-gray-800 p-16">
      <div className="grid grid-cols-3">
        <div>
          <Logo isWhite />
          <p className="w-56 mt-4 font-semibold text-white">
            Notre Vision est d’être le principal réseau mondial de jeunes
            citoyens actifs.
          </p>
        </div>
        <ul className="space-y-6 font-semibold text-white">
          <h1 className="text-xl text-white">Quik Links</h1>
          <li>
            <a href="#nav-acceuil">Acceuil</a>
          </li>
          <li>
            <a href="#propos">À Propos</a>
          </li>
          <li>
            <a href="#programme">Programme</a>
          </li>
          <li>
            <a href="#team">Equipe</a>
          </li>
          <li>
            <a href="#sponsors">Sponsors</a>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
        <div className="w-96">
          <h1 className="mb-4 font-semibold text-white uppercase">
            ABONNEZ-VOUS À NOTRE NEWSLETTER
          </h1>
          <p className="font-semibold text-white">
            Les dernières nouvelles, articles et ressources, envoyés sur votre
            boîte de réception.
          </p>
          <form className="box-border">
            <input
              type="text"
              placeholder="Enter your email"
              className="py-2 my-4 pl-2 w-full pr-16 ring-2 outline-none text-white font-semibold focus:ring-blue-600 ring-blue-400 rounded"
            />
            <div className="rounded-md shadow">
              <a
                href="/"
                className="w-full flex h-full px-8 justify-center text-center items-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Subscribe
              </a>
            </div>
          </form>{" "}
        </div>
      </div>
      <div className="flex items-center sm:justify-between mx-4 lg:mx-8 flex-wrap mt-32 border-t-2 pt-4 justify-center">
        <p className="font-bold text-gray-100 sm:text-md text-md">
          © 2021 All rights reserved.
        </p>
        <div className="flex space-x-3">
          <AiFillFacebook className="w-6 h-6 text-white" />
          <RiInstagramLine className="w-6 h-6 text-white" />
        </div>
      </div>
      <h3 className="text-md font-semibold tracking-wider text-center mt-8 text-white">
        Made By{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://rayenmehrez.me/"
          className="text-yellow-600 font-bold"
        >
          Rayen Mehrez
        </a>
      </h3>
    </div>
  );
};

export default Footer;
