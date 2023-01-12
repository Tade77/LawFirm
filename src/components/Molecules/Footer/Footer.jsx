import React from "react";
import NavFooter from "../NavFooter/NavList";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer--wrapper">
      <aside className="ack">
        <h1 className="foo">Diginty Consultant</h1>
        <span className="copy">Copyright &copy; 2023 All right reserved</span>
        <p className="site">Courtesy@SITE123</p>
      </aside>
      <aside className="nav--foo">
        <NavFooter />
      </aside>
    </div>
  );
};

export default Footer;
