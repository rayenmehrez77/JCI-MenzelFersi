import React from "react";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <div className="p-20">
      <h1 className="text-4xl text-center font-bold space-y-2 tracking-widest">
        <span className="block">LA PROCHAINE ÉVÉNEMENT</span>
        <span className="block">COMMENCERA DANS</span>
      </h1>
      <div className="flex space-x-6 mt-10 justify-center">
        <div className="shadow-lg p-6 rounded-2xl flex flex-col items-center w-30 h-30 mx-1">
          <h2 className="text-5xl mb-3 font-bold">0</h2>
          <span className="font-semibold text-gray-700 tracking-wide">
            JOURS
          </span>
        </div>
        <div className="shadow-lg p-6 rounded-2xl flex flex-col items-center w-30 h-30">
          <h2 className="text-5xl mb-3 font-bold">00</h2>
          <span className="font-semibold text-gray-700 tracking-wide">
            HEURES
          </span>
        </div>
        <div className="shadow-lg p-6 rounded-2xl flex flex-col items-center w-30 h-30">
          <h2 className="text-5xl mb-3 font-bold">00</h2>
          <span className="font-semibold text-gray-700 tracking-wide">
            MINUTES
          </span>
        </div>
        <div className="shadow-lg p-6 rounded-2xl flex flex-col items-center w-30 h-30">
          <h2 className="text-5xl mb-3 font-bold">00</h2>
          <span className="font-semibold text-gray-700 tracking-wide">
            SECONDS
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to="/events"
          className="py-2 px-6 gradient text-white font-medium animate-bounce tracking-wide hover:gradient-reverse"
        >
          Tout les évènements
        </Link>
      </div>
    </div>
  );
};

export default Event;
