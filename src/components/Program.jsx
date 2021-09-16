import React from "react";
import { Aside } from "../components";
import Programs from "./Programs";

const Program = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <h1 className="text-4xl text-center tracking-wider font-bold text-gray-800	uppercase font-josefin">
        programme
      </h1>
      <div className="max-w-6xl mx-auto mt-16 flex">
        <Aside />
        <Programs />
      </div>
    </div>
  );
};

export default Program;
