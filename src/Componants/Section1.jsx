import React from "react";
import spaceship from "../Assets/spaceship.png";
function Section1() {
  return (
    <div className="flex flex-col w-full h-fit gap-8 p-4">
      <span className="mx-auto w-fit text-6xl text-center font-bold bg-gradient-to-r from-[#BFD7EA] to-[#F7996E] bg-clip-text text-transparent">
        How would this work?
      </span>
      <div className="flex flex-wrap justify-center gap-8">
        {[1, 2, 3, 4].map(() => (
          <div className="z-50 hover:scale-105 hover:border-white  transition-all ease-in-out p-8 space-y-2 rectangle w-fit rounded-2xl  border-2 border-white/40 ">
            <img src={spaceship} alt="spaceship" />
            <p className=" text-xl font-bold text-white ">
              SBT for Each Member
            </p>
            <p className="w-48 text-sm font-medium text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section1;
