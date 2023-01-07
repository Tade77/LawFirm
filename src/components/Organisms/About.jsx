import React from "react";

const About = () => {
  return (
    <div className=" bg-slate-50 my-40 ">
      <article className="w-[1150px] h-[850] flex flex-row space-x-10 mx-auto py-24  ">
        <div className=" space-y-6">
          <h1 className=" text-center my-7 text-[35px] font-extrabold font-serif">
            About Us
          </h1>
          <p>
            Dignity is a law firm based in Nigeria. The firm was established in
            2001 and specializes in corporate
            <br /> and commercial law, intellectual property (IP) law, tax
            advisory services, Media-Entertainment-
            <br />
            Technology and Sports (METS), and Litigation/Dispute resolution .
          </p>
          <p>
            As a firm, it is our belief that many aspects of today’s legal
            landscape require a keen understanding as
            <br /> well as knowledge of the law; accordingly, we offer solutions
            to the often complex arrays of regulations
            <br /> and requirements that confront the business client in Nigeria
            thereby creating conducive legal environments for our
            <br /> clients to achieve their goals.
          </p>
          <p>
            Our mission is to establish a world-class, full-service Nigerian law
            firm distinguished by its
            <br /> premium service. We incorporate a rich blend of traditional
            legal practice with the dynamism
            <br /> required to satisfy the constantly evolving dynamism of
            business in our result-driven
            <br /> professional services.
          </p>
        </div>
        <div>
          <img
            src="/public/Frame4.webp"
            className=" h-[750px] w-[1500px] rounded-[10px]"
            alt=""
          />
        </div>
      </article>
    </div>
  );
};

export default About;
