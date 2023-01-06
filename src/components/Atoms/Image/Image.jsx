import React from "react";

const Image = ({ src, desc, customClass }) => {
  return <img src={src} alt={desc} className="customClass" />;
};

export default Image;
