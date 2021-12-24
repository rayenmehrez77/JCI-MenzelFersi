import React from "react";
import img from "../images/eventImg.png";

const Event = () => {
  return (
    <div className="flex lg:mx-8 min-h-56 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto items-center relative">
      <div className="xl:flex flex-col w-32 border-r pr-8 h-28 items-center justify-center hidden">
        <h1 className="text-4xl">10</h1>
        <p className="text-xl border-t tracking-wider">December</p>
      </div>
      <div className="absolute -top-1 right-9  border rounded  p-2 bg-brand lg:flex flex-col items-center justify-center font-medium hidden">
        <h1 className="lg:text-2xl text-xs">10</h1>
        <p className="lg:text-md tracking-wider text-xs">December</p>
      </div>
      <div className="ring-2 bg-white lg:p-4 lg:rounded xl:ml-32  h-full flex lg:flex-row flex-col items-center mx-10 overflow-hidden">
        <img
          src={img}
          alt=""
          className="lg:shadow-md h-64 object-center lg:h-full w-full lg:w-2/6 object-cover lg:mr-8"
        />
        <div className="lg:border-r-2 flex flex-col space-y-4 w-full mr-8 lg:p-0 px-10 py-2">
          <h1 className="text-2xl font-medium">GESTION DE CONFLICTS</h1>
          <p>
            La gestion des confits est la capacité d'anticiper, de reconnaître
            et de régler les conflits de façon efficace. La communication est un
            outil essentiel à maîtriser dans la démarche de gestion des
            différends.
          </p>
        </div>
        <div className="lg:w-96 w-full space-y-2 lg:p-0 px-6 py-4">
          <span>Date: 22-12-2021</span>
          <p className="text-red-500 font-medium">
            Price: <span className="underline decoration-red-800">FREE</span>
          </p>
          <button className="bg-blue-500 text-white px-8 py-2 hover:bg-blue-70 inline-block ">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
