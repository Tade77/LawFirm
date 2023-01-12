import React from "react";
import Button from "../../Atoms/Button/Button";
import "./TopDescStyle.css";
const TopDesc = () => {
  return (
    <div id="home">
      <img src="/img.jpg" alt="law" className="bg-img" />
      <div className="page--desc">
        <h1 className="header--text">A Boutique Law Firm</h1>
        <p className="txt">
          With over 15years of experience, providing
          <br /> comprehensive business advisory services
          <br /> for clients in all aspects of corporate and
          <br /> commercial matters, including corporate governance
        </p>
        <Button buttonStyle="offer" label="What we offer" />
      </div>

      <h1 className="offer--title">
        What we offer
      </h1>
    </div>
  );
};

export default TopDesc;
