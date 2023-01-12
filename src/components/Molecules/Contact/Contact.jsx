import React from "react";
import Button from "../../Atoms/Button/Button";
import Input from "../../Atoms/InputForm/Input";
import TextArea from "../../Atoms/TextArea/TextArea";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="mx-auto ">
      <h1 className="contact--header">Contact</h1>
      <div className="form">
        <div className="input--wrapper">
          <Input inputStyle="inputs" name="text" placeholder="Name" />
          <Input inputStyle="inputs" name="number" placeholder="Phone number" />
          <Input inputStyle="inputs" name="email" placeholder="Email" />
        </div>
        <div className="">
          <TextArea inputStyle="text--area" placeholder="Message" />
        </div>
      </div>
      <div className="btn">
        <Button buttonStyle="contact--btn" label="Contact" />
      </div>
    </div>
  );
};

export default Contact;
