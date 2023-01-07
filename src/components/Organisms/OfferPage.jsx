import { info } from "autoprefixer";
import React from "react";
import { infos } from "../Atoms/Offer";

const OfferPage = () => {
  return (
    <div className="flex justify-evenly mx-auto  align-middle">
      {infos.map((info, id) => (
        <div key={id} className="flex flex-col ">
          <img
            src={info.image}
            className="w-[220px] h-[201px] rounded-[5px]"
            alt=""
          />
          <div className=" w-[350px] h-[270px] text-[#252525] ">
            <p className="text-[28px] my-[16px]">{info.title}</p>
            <p>{info.article}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferPage;
