import { info } from "autoprefixer";
import React from "react";
import { infos } from "../../Atoms/Offer";
import "./OfferStyle.css";
const OfferPage = () => {
  return (
    <div id="what-we-offer" className="offer--wrapper">
      {infos.map((info, id) => (
        <div key={id} className="offer--info">
          <img src={info.image} className="imgs" alt="" />
          <div className="article">
            <p className="title">{info.title}</p>
            <p>{info.article}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferPage;
