import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { AiFillFacebook } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { addEmail } from "../firebase/firebase";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const db = getFirestore();

  const colRef = collection(db, "emails");

  const addEmail = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      email: email,
    }).then(() => {
      setEmail("");
      setSuccessMessage("Merci de vous être abonné");
    });
  };
  return (
    <div className="bg-footerbg p-5 sm:p-6 md:p-8 flex items-center justify-center flex-col text-center">
      <div className="">
        <h1 className="lg:text-2xl text-xl font-bold text-gray-700 tracking-wider">
          Recevez nos dernières actualités
        </h1>
        <div className="flex flex-col items-center mt-2 mb-6">
          <div className="w-20 h-0.5 mx-auto gradient"></div>
        </div>
        <form>
          <div className="flex items-center border  border-gray-300 overflow-hidden flex-col h-10 bg-gray-100 md:flex-row rounded-full md:space-x-4 max-w-5xl justify-center my-2">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-2 lg:px-4 bg-gray-100 outline-none h-full  text-gray-900 font-semibold "
              required
            />

            <button
              disabled={!email || successMessage}
              onClick={addEmail}
              type="submit"
              className="bg-brand h-full hidden md:flex items-center justify-center  rounded-full px-5 text-white outline-none"
            >
              Subscribe
            </button>
          </div>
          <button
            disabled={!email || successMessage}
            onClick={addEmail}
            type="submit"
            className="bg-brand h-full md:hidden py-1 my-2  rounded-full px-5 text-white outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
      {successMessage && (
        <h1 className="text-green-500 text-sm font-extrabold ">
          {successMessage}
        </h1>
      )}
      <img src={Logo} className="md:w-46 w-30 mt-6" alt="" />
      <ul className="md:space-x-6 space-x-4 font-semibold text-gray-800 my-6 flex items-center text-xs md:text-base">
        <li>
          <a href="#nav-acceuil">Acceuil</a>
        </li>
        <li>
          <a href="#programme">Programme</a>
        </li>
        <li>
          <a href="#team">Equipe</a>
        </li>
        <li>
          <a href="#sponsors">FAQ</a>
        </li>
        <li>
          <a href="#sponsors">Newsletter</a>
        </li>
      </ul>
      <div className="flex space-x-3">
        <a href="#">
          <AiFillFacebook className="w-8 h-8 text-gray-800 hover:text-brand transition delay-50" />
        </a>
        <a href="#">
          <RiInstagramLine className="w-8 h-8 text-gray-800 hover:text-brand transition delay-50" />
        </a>
      </div>
      <h3 className=" text-sm sm:text-md md:text-lg font-semibold tracking-wider text-center text-gray-800 mt-4">
        Réalisé par{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://rayenmehrez.me/"
          className="text-brand font-bold"
        >
          Rayen Mehrez
        </a>
      </h3>
    </div>
  );
};

export default Footer;
