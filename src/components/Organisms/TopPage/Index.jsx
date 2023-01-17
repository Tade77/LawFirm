import React from "react";
import Button from "../../Atoms/Button/Button";
import "./TopDescStyle.css";
const TopDesc = () => {
  return (
    <div id="home">
      <div className="bg-img">
        <img src="/img.jpg" alt="lawyers" />
      </div>
      <div className="page--desc">
        <h1 className="header--text">A Boutique Law Firm</h1>
        <p className="txt">
          With over 15years of experience, providing
          <br /> comprehensive business advisory services
          <br /> for clients in all aspects of corporate and
          <br /> commercial matters, including corporate governance
        </p>
        <button className="offer--btn">What we offer</button>
      </div>
    </div>
  );
};

export default TopDesc;
