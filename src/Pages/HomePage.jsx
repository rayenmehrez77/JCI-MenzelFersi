import React from "react";
import { About, Banner, Navbar } from "../components";
import teamImg from "../images/bannerImg.jpg";

const Homepage = () => {
  return (
    <div className="">
      <img
        src={teamImg}
        alt=""
        className="h-screen w-full object-cover mt-32"
      />
      <About />
    </div>
  );
};

export default Homepage;
