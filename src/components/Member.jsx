import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Member = ({ img, name, role, InstaLink, fbLink, LinkedInLink }) => {
  return (
    <div className="w-80  hover:transform hover:scale-y-75 cursor-pointer py-2 rounded-md shadow-lg bg-white border-b-4 border-blue-500">
      <img
        src={img}
        alt="name"
        className="w-full rounded-t-lg h-56 object-cover"
      />
      <div className="flex items-center mx-4 justify-between mt-4 py-2">
        <div>
          <h1 className="text-xl text-gray-900 font-extrabold">{name}</h1>
          <p className="font-bold text-blue-600 text-sm ">{role}</p>
        </div>
        <div className="flex items-center space-x-2 text-gray-800">
          {LinkedInLink ? (
            <a href={LinkedInLink} target="_blank" rel="noreferrer">
              <FaLinkedin className="w-6 h-6" />
            </a>
          ) : null}
          {fbLink ? (
            <a href={fbLink} target="_blank" rel="noreferrer">
              <FaFacebook className="w-6 h-6" />
            </a>
          ) : null}
          {InstaLink ? (
            <a href={InstaLink} target="_blank" rel="noreferrer">
              <AiOutlineInstagram className="w-6 h-6" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Member;
