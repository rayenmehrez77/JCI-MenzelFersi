import img from "../images/jciframework.jpg";
import React from "react";
import bg from "../images/meteor.svg";

const About = () => {
  return (
    <div
      id="about"
      className="font-neuton flex flex-col items-center text-black py-24"
    >
      <div className="flex flex-col py-8 items-center w-full">
        <h1 className="text-4xl text-center tracking-wider	font-bold  ">
          Qui sommes-nous{" "}
        </h1>
        <p className="font-bold	max-w-2xl text-center mt-6 tracking-wider text-lg  ">
          Nous sommes de jeunes citoyens actifs de Menzel Fersi. Vivre,
          communiquer, agir et créer un impact dans nos communautés.
        </p>
      </div>
      <h1 className="text-center mb-8 text-4xl font-medium">
        A Better World begins{" "}
      </h1>
      <div className="flex items-center space-x-4">
        <div className="border h-28 p-4 flex items-center flex-col">
          <h1>Review</h1>
          <p>Monitor and Evaluate Results</p>
        </div>
        <div className="border h-28 p-4 flex items-center flex-col">
          <h1>Review</h1>
          <p>Monitor and Evaluate Results</p>
        </div>
        <div className="border h-28 p-4 flex items-center flex-col">
          <h1>Review</h1>
          <p>Monitor and Evaluate Results</p>
        </div>
        <div className="border h-28 p-4 flex items-center flex-col">
          <h1>Review</h1>
          <p>Monitor and Evaluate Results</p>
        </div>
      </div>
    </div>
  );
};

export default About;
