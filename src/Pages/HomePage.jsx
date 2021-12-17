import React, { useEffect, useState } from "react";
import {
  Actions,
  Event,
  EventCounter,
  Footer,
  FrequentQuestions,
  Newsletter,
  Program,
  Team,
} from "../components";
import teamImg from "../images/heroImg.png";

import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";

const Homepage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <div className="font-neuton">
      {/* {clicked && <Dropdown />} */}
      <main className="min-h-screen">
        <img
          src={teamImg}
          alt="banner img"
          className="w-full h-4/5	 object-cover"
        />
        <EventCounter />
        <Program />
        <Actions />
        <Team />
        <FrequentQuestions />
        <Newsletter />
      </main>
      {showButton && (
        <div className="-left-1 top-96 w-10 lg:w-12 space-y-3 lg:space-y-6 fixed rounded-md">
          <div className="relative p-2 z-20">
            <a
              href="https://www.facebook.com/JCI.mf.24"
              target="_blank"
              rel="_blank"
            >
              <img src={facebook} alt="" className="w-full h-full" />
            </a>
            <a href="https://www.facebook.com/JCI.mf.24">
              <img
                src={instagram}
                target="_blank"
                alt=""
                className="w-full h-full mt-2 lg:mt-4"
              />
            </a>
            <span className="absolute p-2 -top-0 -right-2 lg:-top-2 lg:-right-4 bg-red-500 text-xs text-white rounded-full w-6 h-4 lg:w-8 lg:h-6 justify-center flex items-center">
              1.2K
            </span>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Homepage;
