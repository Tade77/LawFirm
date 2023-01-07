import React from "react";
import Button from "../../Atoms/Button/Button";

const TopDesc = () => {
  return (
    <div>
      <img src="/img.jpg" alt="law" className="w-full h-[50%]" />
      <div className="text-white text-[280x] absolute h-fit m-auto top-0 bottom-0 left-0 right-0 p-40 space-y-4 mt-20 ">
        <h1 className=" text-[52px] font-extrabold">A Boutique Law Firm</h1>
        <p className="text-[18px]">
          With over 15years of experience, providing
          <br /> comprehensive business advisory services
          <br /> for clients in all aspects of corporate and
          <br /> commercial matters, including corporate governance
        </p>
        <Button buttonStyle="offer" label="What we offer" />
      </div>

      <h1 className=" text-[#252525] text-center text-[35px] my-7 font-serif font-extrabold">
        What we offer
      </h1>
    </div>
  );
};

export default TopDesc;
