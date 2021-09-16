import React from "react";
import { Link } from "react-router-dom";
import img from "../images/jci.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <header className="flex items-center justify-between p-4 shadow bg-white">
        <Link to="/" className="flex items-center">
          <img src={img} alt="logo" className="h-10 object-cover" />
          <div className="ml-2">
            <h1 className="font-medium text-yellow-500 text-sm">
              Menzel Fersi
            </h1>
            <h1 className="text-gray-600 font-medium text-2xl -mt-2">
              Communauté
            </h1>
          </div>
        </Link>
        <ul className="flex items-center space-x-6 font-bold text-gray-600">
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
        </ul>
        <button className="bg-blue-600 p-2 text-white font-semibold w-40 text-center">
          Contactez-nous
        </button>
      </header>
    </div>
  );
};

export default Navbar;
