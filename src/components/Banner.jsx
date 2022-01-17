import React from "react";
import teamImg from "../images/heroImage.png";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";

const Banner = ({ setToggleModal, toggleModal }) => {
  return (
    <div className="relative bg-gray z-20">
      <img
        src={teamImg}
        alt="banner img"
        className="w-full h-5/6 -mt-4	 object-center object-cover"
      />
      <button
        className="flex w-10 h-10 lg:h-16 lg:w-16 items-center hover:scale-105 hover:bg-brand-light rounded-full justify-center bg-brand absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        onClick={() => setToggleModal(!toggleModal)}
      >
        <div className="animate-ping inline-flex h-full w-full rounded-full bg-sky-400 bg-brand absolute inset-0 duration-75"></div>
        <BsPlayFill className="lg:w-7 lg:h-7 w-4 h-4 text-white" />
      </button>

      <div className="flex flex-col items-center animate-bounce cursor-pointer center lg:-mt-20 -mt-12">
        <span className="text-gold text-xs font-bold lg:text-sm">
          Découvrir{" "}
        </span>
        <AiOutlineArrowDown className="lg:w-8 lg:h-8 w-5 h-5 text-gold" />
      </div>
    </div>
  );
};

export default Banner;
