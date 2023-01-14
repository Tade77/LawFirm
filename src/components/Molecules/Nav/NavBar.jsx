import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Atoms/Button/Button";
import Icons from "../Icons/Icons";
import MenuBtn from "../../Atoms/MenuBtn";
import CancelBtn from "../../Atoms/CancelBtn";
import "./NavStyle.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  const [mobileView, setMobileView] = useState(false);
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
      path: "/what-we-offer",
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
    <div>
      <nav
        className={mobileView ? "mobileView_links" : "nav--wrapper"}
        onClick={() => setMobileView(false)}
      >
        {navItems.map((navItem, id) => (
          <AnchorLink key={id} href={navItem.path}>
            {navItem.name}
          </AnchorLink>
        ))}
        {/* <AnchorLink href="#what-we-offer">WHAT WE OFFER</AnchorLink>
        <AnchorLink href="#about">ABOUT US</AnchorLink>
        <AnchorLink href="#contact">CONTACT</AnchorLink> */}
        <Icons />
      </nav>
      <div>
        <Button
          buttonStyle="toggle--btn"
          handleClick={() => setMobileView(true)}
        >
          {mobileView ? <CancelBtn /> : <MenuBtn />}
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
