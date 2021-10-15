import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdVisibility } from "react-icons/md";
import { Card } from "../components";
import teamImg from "../images/team.jpg";

const About = () => {
  return (
    <div id="about" className="font-neuton text-black py-24">
      <div className="flex justify-center space-x-28">
        <Card
          title="Mission"
          description="Offrir des opportunités de développement au jeunes citoyens actifs
            pour créer des changements positifs"
          Icon={IoCheckmarkCircle}
        />
        <Card
          title="Vision"
          description="Être le principal réseau de jeunes citoyens actifs"
          Icon={MdVisibility}
        />
      </div>
      <div className="flex items-center space-x-16 justify-center mt-16 px-32">
        <img
          src={teamImg}
          alt="banner img"
          className="object-cover w-1/2 h-80 rounded-md"
        />
        <div className="font-bold w-1/2">
          <h1 className="mb-4 text-2xl">JCI MENZEL FERSI !</h1>
          <div className="w-32 h-1  bg-yellow-500 mb-2"></div>
          <p className="font-medium text-md text-gray-800 tracking-wider">
            Crée le 30 Août 1983 et adoptée officiellement le 08/04/1984, lors
            de la 1ère réunion trimestrielle à Sfax. Dès la nomination du
            président fondateur de l’OLM d’Hammam Sousse Mr Mohamed DJEGHAM, la
            Jeune Chambre Internationale de Hammam Sousse n’a cessé de servir la
            communauté locale, nationale et internationale en se basant sur les
            six points du crédo et les quatre opportunités de la Jeune Chambre
            (Individu, Communauté, Internationalisme, Affaires).
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
