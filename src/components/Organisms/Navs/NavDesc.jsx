import React from "react";
import Logo from "../../Molecules/Logo/Logo";
import NavBar from "../../Molecules/Nav/NavBar";

const NavDesc = () => {
  return (
    <div className="flex justify-between space-x-6 items-center p-2 bg-slate-50 shadow-xl">
      <Logo />
      <NavBar />
    </div>
  );
};

export default NavDesc;
