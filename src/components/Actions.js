import React from "react";
import revoir from "../images/revoir.svg";
import analyse from "../images/space.svg";
import developer from "../images/thought.svg";
import executer from "../images/solution.svg";
import Action from "./Action";

const steps = [
  {
    id: 1,
    title: "Revoir",
    desc: "Examiner la communauté Besoins",
    img: revoir,
  },
  {
    id: 2,
    title: "ANALYSER",
    desc: "Surveiller et évaluer Résultats",
    img: developer,
  },
  {
    id: 3,
    title: "DÉVELOPPER",
    desc: "Formuler Durable Solutions",
    img: executer,
  },
  { id: 4, title: "EXÉCUTER", desc: "Prendre des mesures", img: analyse },
];

const Actions = () => {
  return (
    <div className="gradient grid lg:grid-cols-2 grid-cols-1 gap-8 px-20 py-10 lg:p-32 justify-center">
      {steps.map((step) => (
        <Action key={step.id} {...step} />
      ))}
    </div>
  );
};

export default Actions;
