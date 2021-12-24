import React from "react";
import teamImg from "../images/heroImg.png";
import { BsPlayFill } from "react-icons/bs";

const Banner = ({ setToggleModal, toggleModal }) => {
  return (
    <div className="relative bg-gray">
      <img
        src={teamImg}
        alt="banner img"
        className="w-full h-4/5 object-center object-cover"
      />
      <button
        className="flex w-10 h-10 lg:h-16 lg:w-16 items-center hover:scale-105 hover:bg-brand-light rounded-full justify-center bg-brand absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        onClick={() => setToggleModal(!toggleModal)}
      >
        <div className="animate-ping inline-flex h-full w-full rounded-full bg-sky-400 bg-brand absolute inset-0 duration-75"></div>
        <BsPlayFill className="lg:w-7 lg:h-7 w-4 h-4 text-white" />
      </button>
    </div>
  );
};

export default Banner;
