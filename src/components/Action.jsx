import React from "react";

const Action = ({ desc }) => {
  return (
    <div
      className={` md:max-w-full relative p-2 rounded-xl overflow-hidden z-20`}
    >
      <div className="text-center space-x-4">
        <p className="font-semibold text-white tracking-wider xl:text-lg text-xs sm:text-base">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Action;
