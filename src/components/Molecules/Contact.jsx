import React from "react";
import Button from "../Atoms/Button/Button";
import Input from "../Atoms/InputForm/Input";
import TextArea from "../Atoms/TextArea/TextArea";
const Contact = () => {
  return (
    <div className="mx-auto ">
      <h1 className=" text-[#252525] text-[35px] font-extrabold font-serif text-center">
        Contact
      </h1>
      <div className="flex justify-center align-middle gap-10">
        <Input inputStyle="inputs" name="text" placeholder="Name" />
        <Input inputStyle="inputs" name="number" placeholder="Phone number" />
        <Input inputStyle="inputs" name="email" placeholder="Email" />
      </div>
      <div className="flex justify-center my-6">
        <TextArea inputStyle="textArea" placeholder="Message" />
      </div>
      <div className=" flex justify-center mb-10">
        <Button buttonStyle="contact--btn" label="Contact" />
      </div>
    </div>
  );
};

export default Contact;
