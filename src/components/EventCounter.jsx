import React from "react";
import img from "../images/animatedShape.svg";

const EventCounter = () => {
  return (
    <div
      id="event"
      className="bg-no-repeat w-full bg-cover py-56 gradient"
      style={{ backgroundImage: `url(${img})` }}
    >
      <h1 className="text-4xl text-center tracking-wider font-bold text-white	uppercase font-neuton">
        L'ÉVÉNEMENT COMMENCERA DANS
      </h1>
      <div className="flex flex-col items-center mt-6 space-y-4">
        <p className="font-bold text-white tracking-wider">
          {" "}
          - Lundi 23 Octobre 2021 -{" "}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 font-medium text-gray-800">
          <div className="text-black bg-gray-100 p-6 flex flex-col items-center shadow-md rounded-md space-y-2 ">
            <h1 className="text-4xl">00</h1>
            <p>JOURS</p>
          </div>
          <div className="text-black p-6 bg-gray-100 flex flex-col items-center shadow rounded-md space-y-2">
            <h1 className="text-4xl">00</h1>
            <p>HEURES</p>
          </div>
          <div className="text-black p-6 bg-gray-100 flex flex-col items-center shadow rounded-md space-y-2">
            <h1 className="text-4xl">00</h1>
            <p>MINUTES</p>
          </div>
          <div className="text-black p-6 bg-gray-100 flex flex-col items-center shadow rounded-md space-y-2">
            <h1 className="text-4xl">00</h1>
            <p>SECONDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCounter;
