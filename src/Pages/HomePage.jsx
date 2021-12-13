import React, { useEffect, useState } from "react";
import { Actions, Event, Program, Team } from "../components";
import teamImg from "../images/heroImg.png";

import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";

const Homepage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <div className="font-neuton">
      {/* {clicked && <Dropdown />} */}
      <img
        src={teamImg}
        alt="banner img"
        className="w-full h-full object-cover"
      />
      <main className="h-screen">
        <Event />
        <Program />
        <Actions />
        <Team />
      </main>
      {showButton && (
        <div className="left-0 top-80 w-12 space-y-6 fixed rounded-md shadow-md mx-2">
          <div className="relative p-2">
            <a href="https://www.facebook.com/JCI.mf.24" target="_blank">
              <img src={facebook} alt="" className="w-full h-full" />
            </a>
            <a href="https://www.facebook.com/JCI.mf.24">
              <img
                src={instagram}
                target="_blank"
                alt=""
                className="w-full h-full mt-4"
              />
            </a>
            <span className="absolute -top-2 -right-4 bg-red-500 text-xs text-white rounded-full w-8 h-6 justify-center flex items-center">
              1.2K
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
