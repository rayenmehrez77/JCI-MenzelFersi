import React from "react";

const Timer = ({ type, count }) => {
  return (
    <div className="shadow-lg p-2 lg:p-6 rounded-2xl flex flex-col items-center w-20 h-22 sm:w-24 sm:h-24 lg:w-30 lg:h-28 lg:mx-1">
      <h2 className="text-lg sm:text-2xl md:text-5xl mb-3 font-bold">
        {count}
      </h2>
      <span className="font-semibold text-xs text-gray-700 tracking-wide uppercase">
        {type}
      </span>
    </div>
  );
};

export default Timer;
