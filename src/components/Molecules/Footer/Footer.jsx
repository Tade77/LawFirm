import React from "react";
import NavFooter from "../Nav/NavList";

const Footer = () => {
  return (
    <div className="flex justify-between bg-slate-50 align-middle p-8">
      <aside className="text-[#1c1b1b] text-[13.44px] ">
        <h1 className="text-[17.64px] text-[#1c1b1b] font-serif">
          Diginty Consultant
        </h1>
        <span className="">Copyright &copy; 2023 All right reserved</span>
        <p>Courtesy@SITE123</p>
      </aside>
      <aside>
        <NavFooter />
      </aside>
    </div>
  );
};

export default Footer;
