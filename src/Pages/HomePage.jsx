import React from "react";
import {
  About,
  Footer,
  FrequentQuestions,
  Program,
  Sponsor,
  Team,
} from "../components";
import EventCounter from "../components/EventCounter";
import teamImg from "../images/bannerImg.jpg";

const Homepage = () => {
  return (
    <div className="font-neuton">
      <img
        src={teamImg}
        alt="banner img"
        className="h-screen w-full object-cover mt-16"
      />
      <div className="bg-repeat w-full h-full text-primary-100 heropattern-linesinmotion-blue-50">
        <About />
        <EventCounter />
        <Program />
        <Team />
        <FrequentQuestions />
        <Sponsor />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
