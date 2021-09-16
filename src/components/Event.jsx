import React from "react";
import eventImg from "../images/Event.jpg";

const Event = ({ event }) => {
  const { title, date, time, duration, status, description } = event;

  return (
    <div className="mx-20 my-12 flex ">
      <img
        src={eventImg}
        alt="event"
        className="w-40 h-40 object-cover rounded-full"
      />
      <div className="ml-6">
        <span className="font-medium">
          {date} - {time} - {status}
        </span>
        <h1 className="font-medium text-2xl">{title}</h1>
        <p className="font-medium">{duration}</p>
        <p>{description}</p>
        <p className="font-medium text-green-600">{status}</p>
        <button className="bg-blue-600 p-1 text-white text-sm px-2 mt-4">
          Attend
        </button>
      </div>
    </div>
  );
};

export default Event;
