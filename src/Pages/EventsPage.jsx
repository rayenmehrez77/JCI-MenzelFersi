import React from "react";
import eventsimg from "../images/events.png";
import { Event } from "../components";

const EventsPage = () => {
  return (
    <>
      <div className="bg-gray-200 flex items-center p-8 justify-around">
        <h1 className="text-6xl space-y-6 font-bold text-gray-600">
          <span className="block">Découvrez nos</span>
          <span className="block">prochains</span>
          <span className="block">événements</span>
        </h1>
        <img src={eventsimg} alt="" />
      </div>
      <Event />
      <Event />
      <Event />
    </>
  );
};

export default EventsPage;
