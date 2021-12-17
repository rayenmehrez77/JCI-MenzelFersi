import React from "react";

const Newsletter = () => {
  const myRef = React.useRef();

  const focustxt = () => {
    return myRef.current.focus();
  };
  return (
    <div className="lg:py-16 py-14 px-12 lg:px-20 mt-6 gradient relative overflow-hidden">
      <div className="lg:max-w-7xl mx-auto flex space-y-6 w-full sm:space-y-12 items-center flex-col justify-center text-center text-white z-10">
        <div className="space-y-6">
          <h1 className="mb-4 font-semibold text-white text-xl md:text-3xl lg:text-5xl uppercase">
            ABONNEZ-VOUS À NOTRE NEWSLETTER
          </h1>
          <p className="font-semibold sm:text-xs text-sm md:text-lg text-gray-100 tracking-wider">
            Les dernières nouvelles, articles et ressources, envoyés sur votre
            boîte de réception.
          </p>
        </div>
        <form className="flex items-center flex-col md:flex-row md:space-x-4 xs:space-y-8 w-full sm:max-w-xl justify-center lg:space-x-6">
          <input
            ref={myRef}
            onClick={focustxt}
            type="text"
            placeholder="Enter your email"
            className="py-2 lg:py-4 z-30 w-full mb-4 md:mb-0 lg:w-96 inline-block px-4 ring-2 outline-none text-gray-800 font-semibold focus:ring-blue-600 ring-blue-400 rounded"
          />
          <div className="btn btn-primary px-16 py-2 lg:py-4 mx-auto z-30">
            <a href="/" className="w-full h-full">
              Subscribe
            </a>
          </div>
        </form>
      </div>
      <div className="absolute top-0 -left-4 w-28 h-28 lg:w-56 lg:h-56 bg-blue-300 rounded-full mix-blend-multiply filter blur-sm opacity-100 animate-spin ease-in  "></div>
      <div className="absolute top-0 -right-4  w-28 h-28 lg:w-56 lg:h-56 bg-blue-300 rounded-full mix-blend-multiply filter blur-sm opacity-50 animate-spin  ease-in    animation-delay-5000"></div>
      <div className="absolute -bottom-8 left-20 lg:w-56 lg:h-56 bg-blue-300 rounded-full mix-blend-multiply filter blur-sm opacity-100 animate-spin   ease-in   animation-delay-4000"></div>
      <div className="absolute bottom-0 -right-8 lg:bottom-8 lg:right-20 lg:w-56 w-32 h-32 lg:h-56 bg-blue-400 rounded-full mix-blend-multiply filter blur-sm opacity-100 animate-bounce  ease-in animation-delay-4000"></div>
    </div>
  );
};

export default Newsletter;
