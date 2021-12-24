import React from "react";
import Member from "./Member";
import Kacem from "../images/Kacem.png";
import faten from "../images/Faten.png";
import malek from "../images/malek.png";
import hedil from "../images/hedil.png";
import mortadha from "../images/mortadha.png";
import { Title } from "../components";

const team = [
  {
    id: 1,
    name: "MABROUK Kacem",
    role: "Président",
    img: Kacem,
    LinkedInLink: "https://www.linkedin.com/in/kacem-mabrouk-316553195/",
    fbLink: "https://www.facebook.com/kacem.mabrouk.54",
    InstaLink: "https://www.instagram.com/kacem.mabrouk/",
  },
  {
    id: 2,
    name: "ABD EL RAZZAK Malèk",
    role: "VPFD",
    img: malek,
    LinkedInLink: "https://www.linkedin.com/in/kacem-mabrouk-316553195/",
    fbLink: "https://www.facebook.com/kacem.mabrouk.54",
    InstaLink: "https://www.instagram.com/kacem.mabrouk/",
    bg: "#e608c8",
  },
  {
    id: 3,
    name: "SELMENE Faten",
    role: "Secrétaire Générale",
    img: faten,
    LinkedInLink: "https://www.linkedin.com/in/kacem-mabrouk-316553195/",
    fbLink: "https://www.facebook.com/kacem.mabrouk.54",
    InstaLink: "https://www.instagram.com/kacem.mabrouk/",
  },
  {
    id: 4,
    name: "MABROUK Hedil",
    role: "VPPRE",
    img: hedil,
    LinkedInLink: "https://www.linkedin.com/in/kacem-mabrouk-316553195/",
    fbLink: "https://www.facebook.com/kacem.mabrouk.54",
    InstaLink: "https://www.instagram.com/kacem.mabrouk/",
  },
  {
    id: 5,
    name: "BETTAIEB Mortadha",
    role: "Trésorier ",
    img: mortadha,
    LinkedInLink: "https://www.linkedin.com/in/kacem-mabrouk-316553195/",
    fbLink: "https://www.facebook.com/kacem.mabrouk.54",
    InstaLink: "https://www.instagram.com/kacem.mabrouk/",
  },
];

const Team = () => {
  return (
    <div className="py-16 min-h-screen bg-gray-light" id="team">
      <Title title="Notre équipe" des1="Les membres bureaux de notre équipe" />
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-8 lg:p-20 p-12 gap-8 max-w-7xl mx-auto ">
        {team.map((member) => (
          <Member key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
