import React from "react";
import img from "../images/eventImg.png";

const Event = () => {
  return (
    <div className="flex m-8 lg:m-20 h-56 items-center w-5/4 mx-auto">
      <div className="flex flex-col w-56 border-r pr-8 h-32 items-center justify-center">
        <h1 className="text-4xl">10</h1>
        <p className="text-xl border-t tracking-wider">December</p>
      </div>
      <div className="ring-2 p-4 rounded ml-32 ring-blue-500 h-full flex items-center mx-10">
        <img
          src={img}
          alt=""
          className="drop-shadow-md h-full object-cover mr-8"
        />
        <div className="border-r-2 flex flex-col space-y-4 mr-8">
          <h1 className="text-2xl font-medium">GESTION DE CONFLICTS</h1>
          <p>
            La gestion des confits est la capacité d'anticiper, de reconnaître
            et de régler les conflits de façon efficace. La communication est un
            outil essentiel à maîtriser dans la démarche de gestion des
            différends.
          </p>
        </div>
        <div className="w-96 space-y-2">
          <p>Date: 22-12-2021</p>
          <p className="text-red-500 font-medium">
            Price: <span className="underline decoration-red-800">FREE</span>
          </p>
          <button className="bg-blue-500 text-white px-8 hover:bg-blue-70">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
