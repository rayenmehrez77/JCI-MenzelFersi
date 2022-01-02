import React from "react";
import img from "../images/jci.png";

const Logo = ({ isWhite }) => {
  return (
    <div className="flex items-start flex-col">
      <img src={img} alt="logo" className="lg:h-10 h-9 object-cover" />
      <div className="ml-2">
        <h1 className="font-bold text-yellow-500 uppercase lg:-mt-0.5 text-xs">
          Menzel Fersi
        </h1>
      </div>
    </div>
  );
};

export default Logo;
