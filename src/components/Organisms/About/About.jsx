import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about--wrapper">
      <article className="article--wrapper">
        <div className="articles">
          <h1 className="about--header">About Us</h1>
          <p className="bt--line"></p>
          <p>
            Dignity is a law firm based in Nigeria. The firm was established in
            2001 and specializes in corporate
            <br /> and commercial law, intellectual property (IP) law, tax
            advisory services, Media-Entertainment-
            <br />
            Technology and Sports (METS), and Litigation/Dispute resolution .
          </p>
          <p>
            As a firm, it is our belief that many aspects of today’s legal
            landscape require a keen understanding as
            <br /> well as knowledge of the law; accordingly, we offer solutions
            to the often complex arrays of regulations
            <br /> and requirements that confront the business client in Nigeria
            thereby creating conducive legal environments for our
            <br /> clients to achieve their goals.
          </p>
        </div>
        <div className="lawyer--img">
          <img src="/Frame4.webp" className="law--img" alt="" />
        </div>
      </article>
    </div>
  );
};

export default About;
