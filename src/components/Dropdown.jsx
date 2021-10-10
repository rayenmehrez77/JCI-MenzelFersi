import React from "react";
import { Link } from "react-scroll";

const Dropdown = () => {
  return (
    <ul className="h-40 flex flex-col w-full py-28 px-6 space-y-2 bg-white z-50 font-bold text-gray-700 text-lg">
      <li className="w-full border-b pb-2">
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
  );
};

export default Dropdown;
