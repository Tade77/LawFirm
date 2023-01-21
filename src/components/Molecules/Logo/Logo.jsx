import React from "react";
import { GoLaw } from "react-icons/go";
import "./LogoStyle.css";
const Logo = () => {
  return (
    <div className="logo--wrapper">
      <h1 className="logo--desc">Dignity Consultant</h1>
      <GoLaw className="logo" />
    </div>
  );
};

export default Logo;
