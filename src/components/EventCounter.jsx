import React from "react";

const EventCounter = () => {
  return (
    <div className="mx-aut py-24 bg-gradient-to-r from-blue-400 to-blue-600">
      <h1 className="text-4xl text-center tracking-wider font-bold text-white	uppercase font-neuton">
        L'ÉVÉNEMENT COMMENCERA DANS
      </h1>
      <div className="flex flex-col items-center mt-6 space-y-4">
        <p className="font-bold text-white tracking-wider">
          {" "}
          - Lundi 23 septembre 2021 -{" "}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 font-bold text-gray-800">
          <div className="bg-white p-6 flex flex-col items-center shadow rounded space-y-2">
            <h1 className="text-4xl">12</h1>
            <p>JOURS</p>
          </div>
          <div className="bg-white p-6 flex flex-col items-center shadow rounded space-y-2">
            <h1 className="text-4xl">21</h1>
            <p>HEURES</p>
          </div>
          <div className="bg-white p-6 flex flex-col items-center shadow rounded space-y-2">
            <h1 className="text-4xl">30</h1>
            <p>MINUTES</p>
          </div>
          <div className="bg-white p-6 flex flex-col items-center shadow rounded space-y-2">
            <h1 className="text-4xl">39</h1>
            <p>SECONDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCounter;
