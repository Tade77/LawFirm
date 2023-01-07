import React from "react";

const Button = ({ label, buttonStyle }) => {
  return (
    <button
      className={
        buttonStyle === "contact--btn"
          ? "bg-[#2b4ff1] px-6 py-2 text-[#ffffff]"
          : buttonStyle === "offer"
          ? "bg-[#2b4ff1] px-8 py-4"
          : ""
      }
    >
      {label}
    </button>
  );
};

export default Button;
// bg-[#2b4ff1] px-8 py-4 rounded
