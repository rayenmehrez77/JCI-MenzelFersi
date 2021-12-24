import React from "react";
import { Title } from ".";
import img from "../images/programme.png";
import Fade from "react-reveal/Fade";

const Program = () => {
  return (
    <div className="bg-white py-24" id="program">
      <Title
        title="Programme"
        des1="Projet de programme événementiel"
        des2="Pour l'année 2022"
      />
      <div className="relative sm:w-3/5 w-4/5 mx-auto ">
        <Fade left>
          <img src={img} alt="programme" className="mt-8 w-full h-full" />
        </Fade>
        <div className="absolute top-5 -right-2 lg:top-6 inline-flex h-3 w-3 gradient rounded-full bg-sky-400 opacity-75 animate-ping"></div>
        <div className="absolute top-5 -right-2 lg:top-6 inline-flex h-3 w-3 gradient rounded-full bg-sky-400 opacity-75"></div>
      </div>
    </div>
  );
};

export default Program;
