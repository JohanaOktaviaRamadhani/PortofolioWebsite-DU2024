import React, { useState } from "react";

const Tampilan1 = ({ display, setDisplay }) => {
  return (
    <div
      className={`container mx-auto p-8 absolute inset-0 flex flex-col gap-y-2 justify-center items-start transition-opacity duration-500 ${
        display === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <h1 className="font-bold text-7xl">Welcome guys</h1>
      <p className="font-medium text-2xl md:w-1/2">
        Btw ini website yang aku buat untuk melengkapi tugas Doscom University 2024 loh
      </p>
      <button
        onClick={setDisplay}
        className="bg-rose-700 font-medium text-lg px-4 py-2 mt-5 rounded-xl"
      >
        I've something 4 u guys
      </button>
    </div>
  );
};

const Tampilan2 = ({ display, setDisplay }) => {
  return (
    <div
      className={`container mx-auto p-8 absolute inset-0 flex flex-col gap-y-2 justify-center items-start transition-opacity duration-500 ${
        display === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <h1 className="font-bold text-7xl mb-2">Hii all</h1>
      <p className="font-medium text-2xl md:w-1/2">
      Welcome to my website! Explore my projects to get a feel for my skills and passion for technology. <br></br>
      Let's connect and create something amazing!      
      </p>
      <button
        onClick={setDisplay}
        className="bg-rose-700 font-medium text-lg px-4 py-2 mt-5 rounded-xl"
      >
        Get now me more
      </button>
    </div>
  );
};

const Jumbotron = () => {
  const [display, setDisplay] = useState(0);
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('images/bg1.jpeg')" }}
    >
      <div className="h-full w-full bg-gradient-to-r from-black text-white flex items-center relative">
        {/* Tampilan 1 */}
        <Tampilan1 display={display} setDisplay={() => setDisplay(1)} />
        {/* Tampilan 2 */}
        <Tampilan2 display={display} setDisplay={() => setDisplay(0)} />
      </div>
    </div>
  );
};

export default Jumbotron;