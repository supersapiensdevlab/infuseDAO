import React from "react";

function Hero() {
  return (
    <div className=" h-screen w-fit mx-auto flex flex-col gap-4 items-start justify-center">
      <span className="text-5xl md:text-8xl font-bold text-white ">
        InfuseDAO
      </span>
      <p className="w-full md:w-[500px] text-xs md:text-md font-medium text-white ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>

      <div className="flex gap-4">
        <button className="hover:scale-105 transition-all ease-in-out py-3 px-10 infuse-gradient text-white font-semibold rounded-lg">
          Primary
        </button>
        <button className="hover:scale-105 transition-all ease-in-out py-3 px-10 border-2 border-white text-white font-semibold rounded-lg">
          Secondary
        </button>
      </div>
    </div>
  );
}

export default Hero;
