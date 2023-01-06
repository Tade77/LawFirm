import React from "react";
import { NavLink } from "react-router-dom";

const NavFooter = () => {
  const navItems = [
    {
      id: 1,
      name: "HOME",
      path: "/",
    },
    {
      id: 2,
      name: "WHAT WE OFFER",
      path: "/what we offer",
    },
    {
      id: 3,
      name: "ABOUT US",
      path: "/about",
    },
    {
      id: 4,
      name: "CONTACT",
      path: "/contact",
    },
  ];
  return (
    <div className="space-x-6  text-[13.44px] font-sans text-[#1c1b1b]">
      {navItems.map((navItem, id) => (
        <NavLink to={navItem.path} key={id}>
          {navItem.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavFooter;
