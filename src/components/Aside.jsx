import React from "react";

const Aside = () => {
  return (
    <div className="w-60 shadow ">
      <div className="w-full group cursor-pointer text-gray-800 hover:bg-blue-500 bg-white py-6 px-4">
        <h1 className="font-bold group-hover:text-white tracking-wider">
          VENDREDI
        </h1>
        <p className="group-hover:text-white text-xs font-light">
          24 SEPTEMBRE
        </p>
      </div>
      <div className="w-full group cursor-pointer hover:bg-blue-500 p-6 bg-white">
        <h1 className="font-bold group-hover:text-white tracking-wider">
          VENDREDI
        </h1>
        <p className="group-hover:text-white text-xs font-light">
          24 SEPTEMBRE
        </p>
      </div>
      <div className="w-full group cursor-pointer hover:bg-blue-500 p-6 bg-white">
        <h1 className="font-bold group-hover:text-white tracking-wider">
          VENDREDI
        </h1>
        <p className="group-hover:text-white text-xs font-light">
          24 SEPTEMBRE
        </p>
      </div>
    </div>
  );
};

export default Aside;
