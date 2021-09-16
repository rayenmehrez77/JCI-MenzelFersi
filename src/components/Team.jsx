import React from "react";
import img from "../images/rayen.jpg";
import Member from "./Member";
import kacem from "../images/kacem.jpg";
import faten from "../images/faten.jpg";
import malek from "../images/malek.jpg";

const Team = () => {
  return (
    <div className="h-screen pt-16 mb-32">
      <h1 className="text-4xl text-center tracking-wider font-bold text-gray-800 uppercase font-josefin">
        NOTRE EQUIPE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl mx-auto gap-8 mt-12">
        <Member
          name="Kacem Mabrouk"
          role="Président"
          img={kacem}
          LinkedInLink="https://www.linkedin.com/in/kacem-mabrouk-316553195/"
          fbLink="https://www.facebook.com/kacem.mabrouk.54"
          InstaLink="https://www.instagram.com/kacem.mabrouk/"
        />
        <Member
          name="Malek Abderrasak"
          role="Vice President relations intérieurs"
          img={malek}
          fbLink="https://www.facebook.com/salia.mabrouk.1"
          InstaLink="https://www.instagram.com/malek_abderrazak/"
        />
        <Member
          name="FATEN SELMANE"
          role="Secrétaire Général"
          img={faten}
          LinkedInLink="https://www.linkedin.com/in/selmene-feten-012900218"
          fbLink="https://www.facebook.com/profile.php?id=100009125272468&sk=grid"
        />
        <Member
          name="Hadil Mabrouk"
          role="Vice President relations Extérieurs"
          img={img}
          fbLink="https://www.facebook.com/hedil4829"
          InstaLink="https://www.instagram.com/_h.e.d.i.l/"
        />
        <Member
          name="Mortadha Bettaieb"
          role="Trésorier"
          img={img}
          fbLink="https://www.facebook.com/The.TN.Miracle"
        />
      </div>
    </div>
  );
};

export default Team;
