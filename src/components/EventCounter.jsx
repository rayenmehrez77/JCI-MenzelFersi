import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import { ReactComponent as Calender } from "../images/calender.svg";

const Event = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const starTimer = () => {
    const countDownDate = new Date("December 22, 2021 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    starTimer();

    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="p-10 lg:p20 max-w-full">
      <Calender className="w-20 h-20 lg:w-20 md:h-20 object-cover mx-auto mb-4" />
      <h1 className="text-md sm:text-xl md:text-2xl lg:text-4xl text-center font-bold space-y-2 tracking-widest">
        <span className="lg:block">L'ÉVÉNEMENT COMMENCERA DANS</span>
      </h1>
      <p className="font-bold mt-4 text-center text-base sm:text-md tracking-wider">
        {" "}
        - Samedi 18 December 2021 -{" "}
      </p>
      <div className="flex space-x-3 sm:space-x-6 mt-8 justify-center">
        <Timer type="jours" count={timerDays} />
        <Timer type="HEURES" count={timerHours} />
        <Timer type="MINUTES" count={timerMinutes} />
        <Timer type="SECONDS" count={timerSeconds} />
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/events" className="btn btn-primary animate-bounce">
          Tout les évènements
        </Link>
      </div>
    </div>
  );
};

export default Event;
