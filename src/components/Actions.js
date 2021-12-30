import React from "react";
import Action from "./Action";
import { Title } from "../components";

import credo from "../images/credoo.jpg";

const steps = [
  {
    id: 0,
    desc: "Que la foi en Dieu donne à la vie son véritable sens",
  },
  {
    id: 1,
    desc: "Que la fraternité humaine transcende la souveraineté des nations",
  },
  {
    id: 2,
    desc: "Que la liberté des individus et de l’entreprise assure mieux la justice économique",
  },
  {
    id: 3,
    desc: "Que l’autorité doit s’appuyer sur la loi et non sur l’arbitraire ",
  },
  {
    id: 4,
    desc: "Que la personne humaine est la plus précieuse des richesses ",
  },
  {
    id: 5,
    desc: "Et que servir l’humanité constitue l’oeuvre la plus noble d’une vie.",
  },
];

const Actions = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-cover relative  max-h-2/4 lg:py-18 px-4 lg:px-8 py-20 credo"
      id="credo"
    >
      <Title title="Notre Credo" des1="Nous crayons" isWhite />
      <div className="max-w-6xl mx-auto">
        {steps.map((step) => (
          <Action key={step.id} {...step} />
        ))}
      </div>
    </div>
  );
};

export default Actions;
