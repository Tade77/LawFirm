import React from "react";
import { IoShareSocialSharp, IoCallSharp, IoMailSharp } from "react-icons/io5";
const Icons = () => {
  return (
    <div className="flex space-x-6 cursor-pointer">
      <IoShareSocialSharp />
      <IoMailSharp />
      <IoCallSharp />
    </div>
  );
};

export default Icons;
