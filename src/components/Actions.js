import React from "react";
import img from "../images/img.png";

const Actions = () => {
  return (
    <div className="mt-12 flex mx-32 items-center justify-center">
      <img src={img} alt="" className="" />
      <div>
        <h1 className="text-4xl font-medium">About us</h1>
        <p className="font-medium max-w-2xl text-xl mt-4">
          JCI members see challenges, not as obstacles, but as opportunities. We
          have the audacity to stand up and take action for what is just. We
          create positive change, and together as one
        </p>
      </div>
    </div>
  );
};

export default Actions;
