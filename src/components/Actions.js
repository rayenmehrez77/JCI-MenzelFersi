import React from "react";
import revoir from "../images/revoirImage.png";
import analyse from "../images/analyseImage.png";
import developer from "../images/revoirImage.png";
import executer from "../images/executerImage.png";

const Actions = () => {
  return (
    <div className="gradient flex py-8 justify-center text-center">
      <div className="w-96">
        <img src={revoir} alt="revoir" className="mb-3 mx-auto w-26 h-28" />
        <h1 className="font-bold uppercase tracking-wider text-2xl text-white">
          Revoir
        </h1>
        <p className="font-semibold mt-2 text-white tracking-wide">
          Examiner la communauté Besoins
        </p>
      </div>
      <div className="w-96">
        <img src={analyse} alt="revoir" className="mb-3 mx-auto w-26 h-28" />
        <h1 className="font-bold uppercase tracking-wider text-2xl text-white">
          ANALYSER
        </h1>
        <p className="font-semibold mt-2 text-white tracking-wide">
          Surveiller et évaluer Résultats
        </p>
      </div>
      <div className="w-96">
        <img src={developer} alt="revoir" className="mb-3 mx-auto w-26 h-28" />
        <h1 className="font-bold uppercase tracking-wider text-2xl text-white">
          DÉVELOPPER
        </h1>
        <p className="font-semibold mt-2 text-white tracking-wide">
          Formuler Durable Solutions
        </p>
      </div>
      <div className="w-96">
        <img src={executer} alt="revoir" className="mb-3 mx-auto w-26 h-28" />
        <h1 className="font-bold uppercase tracking-wider text-2xl text-white">
          EXÉCUTER
        </h1>
        <p className="font-semibold mt-2 text-white tracking-wide">
          Prendre des mesures
        </p>
      </div>
    </div>
  );
};

export default Actions;
