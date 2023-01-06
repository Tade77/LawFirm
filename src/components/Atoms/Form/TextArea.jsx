import React from "react";

const TextArea = ({ cols, rows, placeholder }) => {
  return (
    <textarea
      name=""
      id=""
      cols={cols}
      rows={rows}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
