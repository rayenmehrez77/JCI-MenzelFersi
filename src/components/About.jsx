import img from "../images/jciframework.jpg";
import React from "react";

const About = () => {
  return (
    <div
      id="#propos"
      className="p-16 font-neuton flex flex-col items-center bg-white "
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-center tracking-wider	font-bold text-gray-800	uppercase font-josefin ">
          Qui sommes-nous{" "}
        </h1>
        <p className="font-bold	max-w-2xl text-center mt-6 tracking-wider text-lg text-gray-800 ">
          Nous sommes de jeunes citoyens actifs de Menzel Fersi. Vivre,
          communiquer, agir et créer un impact dans nos communautés.
        </p>
      </div>
      <img src={img} alt="" className="w-3/4" />
    </div>
  );
};

export default About;
