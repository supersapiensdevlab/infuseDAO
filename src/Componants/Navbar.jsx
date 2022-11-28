import React from "react";

function Navbar() {
  return (
    <div className="flex  items-center justify-between px-6 z-50 w-full h-16 rectangle fixed top-0 ">
      <span className="text-2xl cursor-pointer font-bold text-white hover:bg-gradient-to-r from-[#e12cfe] to-[#1f37e4] hover:text-transparent hover:bg-clip-text">
        InfuseDAO
      </span>
      <div className="flex  items-center gap-4">
        <span className="cursor-pointer font-medium text-white hover:bg-gradient-to-r from-[#e12cfe] to-[#1f37e4] hover:text-transparent hover:bg-clip-text">
          Litepaper
        </span>
        <span className="cursor-pointer font-medium text-white hover:bg-gradient-to-r from-[#e12cfe] to-[#1f37e4] hover:text-transparent hover:bg-clip-text">
          Roadmap
        </span>
        <span className="cursor-pointer font-medium text-white hover:bg-gradient-to-r from-[#e12cfe] to-[#1f37e4] hover:text-transparent hover:bg-clip-text">
          About us
        </span>
      </div>
    </div>
  );
}

export default Navbar;
