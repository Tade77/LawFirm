import React from "react";

const Button = ({ label, handleClick, buttonStyle }) => {
  return (
    <button
      onClick={handleClick}
      className={
        buttonStyle === "contact--btn"
          ? "bg-[#2b4ff1] px-6 py-2 text-[#ffffff]"
          : buttonStyle === "offer"
          ? "bg-[#2b4ff1] px-8 py-4"
          : buttonStyle === "toggle"
          ? "border w-8 h-8 cursor-pointer"
          : ""
      }
    >
      {label}
    </button>
  );
};

export default Button;
