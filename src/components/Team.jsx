import React from "react";
import { Title } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Scrollbar } from "swiper/core";

import "swiper/components/pagination/pagination.min.css";
import "swiper/components/pagination/pagination.min.css";

import "swiper/swiper.min.css";
import "../swiper.css";

import Member from "./Member";
import Kacem from "../images/Kacem.png";
import faten from "../images/faten.png";
import malek from "../images/malek.png";
import hedil from "../images/hedil.png";
import mortadha from "../images/mortadha.png";
import rayen from "../images/rayen.png";
import hazem from "../images/hazem.png";
import feriel from "../images/feriel.png";
import salma from "../images/salma.png";
import dhia from "../images/dhia.png";
import iheb from "../images/iheb.png";
import oumayma from "../images/oumayma.png";
import oumaymaM from "../images/oumaymaM.png";

SwiperCore.use([Pagination, Navigation, Scrollbar]);

const advisors = [
  {
    id: 1,
    img: rayen,
    name: "Rayen Mehrez",
    job: "Conseiller Media",
    role: "Conseiller Media",
    LinkedInLink:
      "https://www.linkedin.com/in/rayenmehrez/?fbclid=IwAR1lJhw5TmyHzHsESilEjJJS5i4sHTP6LKfOQMJk6B2J8yLEecRvqbTiOEA",
    fbLink: "https://www.facebook.com/rayenmehrez21",
    InstaLink:
      "https://www.instagram.com/rayen_mhz/?fbclid=IwAR3c1RHuck7AxKGxUc6JF1PNTYOW7SptJTugxkvEDiAnaMVdmiMCu7KgNKc",
  },
  {
    id: 2,
    img: oumayma,
    name: "Oumaima Abd El Razzak",
    role: "Conseillère Thème National",
    fbLink: "https://www.facebook.com/oumaima.abderrazak.0101",
  },
  {
    id: 3,
    img: iheb,
    name: "Iheb Boughraira ",
    role: "Conseiller Protocol  ",
    fbLink: "https://www.facebook.com/sahlyano.iheb",
  },

  {
    id: 4,
    img: oumaymaM,
    name: "Oumayma Mabrouk ",
    role: "Conseillère dossier de récompense    ",
    fbLink: "https://www.facebook.com/profile.php?id=100055180683772",
  },
  {
    id: 5,
    img: hazem,
    name: "Hazem Boughraira",
    role: "Conseiller dossier sponsoring",
    LinkedInLink: "https://www.linkedin.com/in/hazem-boughraira-099b7415a/",
    fbLink: "https://www.facebook.com/profile.php?id=100009239948364",
  },
  {
    id: 6,
    img: salma,
    name: "Salma Ladjimi",
    role: "Conseillère 100% Efficacité",
    fbLink: "https://www.facebook.com/salma.ld.585",
  },
  {
    id: 7,
    img: dhia,
    name: "Dhia Eddine Abdou",
    role: "Conseiller juridique",
    fbLink: "https://www.facebook.com/sahlyano.dhia",
  },
  {
    id: 8,
    img: feriel,
    name: "Feriel LADJIMI ",
    role: "Conseillère art oratoire et debating",
    fbLink: "https://www.facebook.com/feriel.lajimi.7965",
  },
];

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
    fbLink: "https://www.facebook.com/salia.mabrouk.1",
    InstaLink: "https://www.instagram.com/malek_abderrazak/",
    bg: "#e608c8",
  },
  {
    id: 3,
    name: "SELMENE Faten",
    role: "Secrétaire Générale",
    img: faten,
    fbLink: "https://www.facebook.com/profile.php?id=100009125272468",
  },
  {
    id: 4,
    name: "MABROUK Hedil",
    role: "VPPRE",
    img: hedil,
    LinkedInLink: "https://www.linkedin.com/in/hedil-m-9043b7173/",
    fbLink: "https://www.facebook.com/hedil4829",
    InstaLink: "https://www.instagram.com/_h.e.d.i.l/",
  },
  {
    id: 5,
    name: "BETTAIEB Mortadha",
    role: "Trésorier ",
    img: mortadha,
    fbLink: "https://www.facebook.com/The.TN.Miracle",
  },
];

const Team = () => {
  return (
    <div className="py-16 min-h-screen bg-gray-light" id="team">
      <Title title="Notre équipe" des1="Les membres bureaux de notre équipe" />
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-8 lg:p-20 p-12 gap-8 max-w-6xl mx-auto ">
        {team.map((member) => (
          <Member key={member.id} {...member} />
        ))}
      </div>
      <h1 className="text-center font-bold text-gray-700 mb-12">
        Les conseillères de notre équipe{" "}
      </h1>
      <Swiper
        spaceBetween={0}
        pagination
        navigation
        scrollbar
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
        }}
      >
        {advisors.map((member) => (
          <SwiperSlide>
            <Member key={member.id} {...member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
