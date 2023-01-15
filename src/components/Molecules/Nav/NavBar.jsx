import React, { useState } from "react";
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
        <div className={mobileView ? "icons" : ""}>
          <Icons />
        </div>
      </nav>
      <div className="toggle--btn">
        <Button buttonStyle="toggle" handleClick={() => setMobileView(true)}>
          {mobileView ? <CancelBtn /> : <MenuBtn />}
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
