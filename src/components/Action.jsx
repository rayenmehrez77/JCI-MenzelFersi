import React from "react";

const Action = ({ desc }) => {
  return (
    <div
      className={` md:max-w-full relative p-2 rounded-xl overflow-hidden z-10`}
    >
      <div className="text-center space-x-4">
        <p className="font-semibold text-white tracking-wider xl:text-lg">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Action;
