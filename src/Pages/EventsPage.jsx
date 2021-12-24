import React from "react";
import eventsimg from "../images/events.png";
import { Event } from "../components";

const EventsPage = () => {
  return (
    <>
      <div className="bg-gray-200 flex items-center p-8 justify-center lg:justify-around flex-col lg:flex-row">
        <h1 className=" sm:text-2xl lg:text-left md:text-3xl lg:text-5xl space-y-6 font-bold text-gray-600 text-center w-full tracking-widest">
          Découvrez nos prochains <br className="lg:inline" /> événements
        </h1>
        <img src={eventsimg} alt="" className="w-80 object-cover" />
      </div>
      <div className="mx-auto max-w-7xl space-y-8 mt-16">
        <Event />
      </div>
    </>
  );
};

export default EventsPage;
