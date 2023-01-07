import React from "react";

const TextArea = ({ inputStyle }) => {
  return (
    <textarea
      className={
        inputStyle === "textArea"
          ? "w-[1090.31px] h-[94.75px] bg-[#F2F2F2]"
          : ""
      }
    ></textarea>
  );
};

export default TextArea;
