import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Member = ({ img, name, role, InstaLink, fbLink, LinkedInLink }) => {
  return (
    <div className="">
      <img
        src={img}
        alt="name"
        className="w-30 rounded-t-lg object-cover h-46 "
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
