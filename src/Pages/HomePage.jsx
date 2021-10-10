import React from "react";
import {
  About,
  Footer,
  FrequentQuestions,
  Sponsor,
  Team,
  Dropdown,
} from "../components";
import EventCounter from "../components/EventCounter";
import teamImg from "../images/bannerImg.jpg";

const Homepage = ({ clicked }) => {
  return (
    <div className="font-neuton">
      {clicked && <Dropdown />}
      <div className="hero-bg">
        <img
          src={teamImg}
          alt="banner img"
          className="h-screen w-full object-cover mt-8"
        />
        <div class="overlay">
          Multi-line <br />
          text
        </div>
      </div>
      <div className="bg-repeat w-full h-full text-primary-100 ">
        <About />
        <EventCounter />
        <Team />
        <FrequentQuestions />
        <Sponsor />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;

// heropattern-linesinmotion-blue-50
