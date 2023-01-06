import React from "react";
import { GoLaw } from "react-icons/go";
const Logo = () => {
  return (
    <div className=" flex align-middle flex-row-reverse space-x-4">
      <h1 className="text-[28px] text-[#1c1b1b] ml-4 tracking-widest">
        Dignity Consultant
      </h1>
      <GoLaw className=" w-[45px] h-[45px] fill-blue-700" />
    </div>
  );
};

export default Logo;
