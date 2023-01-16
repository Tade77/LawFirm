import { info } from "autoprefixer";
import React from "react";
import { infos } from "../../Atoms/Offer";
import "./OfferStyle.css";
const OfferPage = () => {
  return (
    <div>
      <div className="offer-line">
        <h1 className="offer--title">What We Offer</h1>
        <p className="bt--line2"></p>
      </div>
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
    </div>
  );
};

export default OfferPage;
