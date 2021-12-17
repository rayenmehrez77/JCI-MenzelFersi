import React from "react";

const Action = ({ img, title, desc, id }) => {
  return (
    <div className="xl:max-w-full md:max-w-full sm:max-w-xl h-64 relative p-4 shadow-2xl cursor-pointer rounded-xl">
      <img
        src={img}
        alt="revoir"
        className="mb-3 mx-auto w-30 h-32 pl-12 pr-16 object-cover"
      />
      <div className="mt-6">
        <h1 className="font-bold uppercase tracking-wider text-lg lg:text-2xl xl:text-3xl text-white">
          {title}
        </h1>
        <p className="font-semibold text-white tracking-wider xl:text-xl">
          {desc}
        </p>
        <span className="absolute -top-2 -right-2 bg-white w-8 h-8 rounded-full font-semibold shadow-lg flex items-center justify-center">
          {id}
        </span>
      </div>
    </div>
  );
};

export default Action;
