import React from "react";
import { infos } from "../Atoms/Offer";
const CompanyInfo = ({ id, image, title, article }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{article}</p>
    </div>
  );
};

export default CompanyInfo;
