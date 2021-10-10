import React from "react";

const Sponsor = () => {
  return (
    <div className="py-16 flex flex-col items-center gradient " id="sponsor">
      <h1 className="text-4xl text-center tracking-wider font-bold text-white	uppercase font-josefin">
        Devenir Parrain
      </h1>
      <p className="text-center py-8 mx-auto max-w-2xl font-semibold text-white">
        Would you like to support a growing JS community in Tunisia and improve
        the visibility of your tech/employer brand?
      </p>
      <a
        href="mailto:contact@jci.menzelfersi.tn"
        className="bg-white text-blue-600 p-2 font-semibold w-56 text-center"
      >
        Devenir Parrain
      </a>
    </div>
  );
};

export default Sponsor;
