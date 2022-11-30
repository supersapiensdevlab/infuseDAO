import React from "react";
import { useState } from "react";

function Navbar() {
  const [open, setopen] = useState(false);
  return (
    <div className="fixed top-0 z-[999] w-screen">
      <div className="flex  items-center justify-between px-6  w-full h-16 rectangle  ">
        <span className="text-2xl cursor-pointer font-bold text-white hover:bg-gradient-to-r from-[#e12cfe] to-[#1f37e4] hover:text-transparent hover:bg-clip-text">
          InfuseDAO
        </span>
        <div onClick={() => setopen(!open)} className="text-white md:hidden">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          )}
        </div>
        <div className="hidden md:flex  items-center gap-4">
          <button className="cursor-pointer font-medium text-white hover:bg-gradient-to-r from-[#e12cfe] to-[#1f37e4] hover:text-transparent hover:bg-clip-text">
            Litepaper
          </button>
          <button className="cursor-pointer font-medium text-white hover:bg-gradient-to-r from-[#e12cfe] to-[#1f37e4] hover:text-transparent hover:bg-clip-text">
            Roadmap
          </button>
          <button className="cursor-pointer font-medium text-white hover:bg-gradient-to-r from-[#e12cfe] to-[#1f37e4] hover:text-transparent hover:bg-clip-text">
            About us
          </button>
        </div>
      </div>
      <div
        className={`${
          open ? "scale-y-100" : "scale-y-0"
        } md:hidden  w-full rectangle transition-all ease-in-out origin-top`}
      >
        <div className="flex flex-col items-center gap-4 p-4">
        <button className=" font-medium text-white hover:bg-gradient-to-r from-[#e12cfe] to-[#1f37e4] hover:text-transparent hover:bg-clip-text">
            Litepaper
          </button>
          <button className=" font-medium text-white hover:bg-gradient-to-r from-[#e12cfe] to-[#1f37e4] hover:text-transparent hover:bg-clip-text">
            Roadmap
          </button>
          <button className=" font-medium text-white hover:bg-gradient-to-r from-[#e12cfe] to-[#1f37e4] hover:text-transparent hover:bg-clip-text">
            About us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
