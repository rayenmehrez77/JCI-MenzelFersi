import React, { useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Fade from "react-reveal/Fade";

const Question = ({ title, description }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`${
        toggle ? "border border-gray-800" : "border border-white"
      }border-gray-200 cursor-pointer px-6 rounded`}
    >
      <div
        onClick={() => setToggle(!toggle)}
        className="flex items-center justify-between h-16"
      >
        <h1
          className={`font-bold ${
            toggle ? "text-blue-600" : "text-gray-800"
          }  text-md`}
        >
          {title}
        </h1>
        {toggle ? (
          <Fade>
            <IoMdArrowDropup
              className={`w-6 h-6 ${
                toggle ? "text-blue-700" : "text-gray-800"
              }`}
            />
          </Fade>
        ) : (
          <Fade>
            <IoMdArrowDropdown className="w-6 h-6 text-gray-800" />
          </Fade>
        )}
      </div>
      {toggle ? (
        <Fade big>
          <p className="pb-3 font-semibold text-gray-800">{description}</p>
        </Fade>
      ) : null}
    </div>
  );
};

export default Question;
