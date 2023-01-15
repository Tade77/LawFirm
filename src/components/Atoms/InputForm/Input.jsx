import React from "react";

const Input = ({ name, inputStyle, placeholder }) => {
  return (
    <input
      name={name}
      className={
        inputStyle === "inputs"
          ? "w-[337px] h-[45px] pl-4 bg-[#ffffff] border border-gray-400"
          : ""
      }
      placeholder={placeholder}
    />
  );
};

export default Input;
