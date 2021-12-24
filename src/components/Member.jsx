import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Member = ({ img, name, role, InstaLink, fbLink, LinkedInLink, bg }) => {
  return (
    <div className="flex flex-col w-full items-center text-center relative ">
      <div
        className={`z-10 bg-gray-light w-full h-full hover:rounded-b-xl hover:translate-x-3 hover:-translate-y-3 relative transition transform cursor-pointer shadow-lg p-4 rounded-sm`}
      >
        <img
          src={img}
          alt="name"
          className=" rounded-t-lg object-cover h-60 mx-auto"
        />
        <div className=" mt-4 flex items-center justify-between">
          <div className="text-left">
            <h1 className="lg:text-xl text-blue-800 text-md font-extrabold">
              {name}
            </h1>
            <p className="font-extrabold text-yellow-600 text-sm lg:text-xl tracking-wider">
              {role}
            </p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-800">
            {LinkedInLink ? (
              <a href={LinkedInLink} target="_blank" rel="noreferrer">
                <FaLinkedin className="lg:w-6 lg:h-6 w-4 h-4 hover:text-brand" />
              </a>
            ) : null}
            {fbLink ? (
              <a href={fbLink} target="_blank" rel="noreferrer">
                <FaFacebook className="lg:w-6 lg:h-6  w-4 h-4hover:text-brand" />
              </a>
            ) : null}
            {InstaLink ? (
              <a href={InstaLink} target="_blank" rel="noreferrer">
                <AiOutlineInstagram className="lg:w-6 lg:h-6  w-4 h-4hover:text-brand" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <div className="bg-brand absolute inset-0 w-full h-full rounded-sm"></div>
    </div>
  );
};

export default Member;
