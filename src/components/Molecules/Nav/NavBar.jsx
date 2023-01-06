import React from "react";
import { NavLink } from "react-router-dom";
import { IoShareSocialSharp, IoCallSharp, IoMailSharp } from "react-icons/io5";
const NavBar = () => {
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "black",
    };
  };
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
    <div className=" flex justify-end space-x-6 items-center p-8 text-[16px]">
      {navItems.map((navItem, id) => (
        <NavLink to={navItem.path} key={id} style={activeLink}>
          {navItem.name}
        </NavLink>
      ))}
      <IoShareSocialSharp />
      <IoMailSharp />
      <IoCallSharp />
    </div>
  );
};

export default NavBar;
