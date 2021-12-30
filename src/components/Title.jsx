import React from "react";

const Title = ({ title, des1, des2, isWhite }) => {
  return (
    <>
      <h1
        className={`text-4xl  uppercase tracking-widest font-bold text-center  ${
          isWhite ? "text-white z-50" : "text-gray-900"
        } `}
      >
        {title}
      </h1>
      <div className="flex flex-col items-center mt-4">
        <div className="w-20 my-1.5 h-0.5 gradient"></div>
        <div className="w-20 h-0.5 ml-16 gradient"></div>
      </div>
      <p className="text-center mt-8 font-bold text-gray-700">
        <span className={`${isWhite && "text-white"} block`}>{des1}</span>
        <span className="block">{des2}</span>
      </p>
    </>
  );
};

export default Title;
