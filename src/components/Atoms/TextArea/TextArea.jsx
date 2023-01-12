import React from "react";

const TextArea = ({ inputStyle, placeholder }) => {
  return <textarea className={inputStyle} placeholder={placeholder}></textarea>;
};

export default TextArea;
