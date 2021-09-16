import React from "react";
import img from "../images/jci.png";

const Logo = ({ isWhite }) => {
  return (
    <div className="flex items-center">
      <img src={img} alt="logo" className="h-10 object-cover" />
      <div className="ml-2">
        <h1 className="font-medium text-yellow-500 text-sm">Menzel Fersi</h1>
        <h1
          className={`${
            isWhite ? "text-white" : "text-gray-600"
          } font-medium text-2xl -mt-2`}
        >
          Communauté
        </h1>
      </div>
    </div>
  );
};

export default Logo;
