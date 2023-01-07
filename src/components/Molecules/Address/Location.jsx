import React from "react";

const Location = () => {
  return (
    <div className="flex flex-row mx-auto justify-around mb-12">
      <aside>
        <h1 className="text-[30px] font-extrabold font-serif">
          Building Address
        </h1>
        <p className="text-[14px]">
          Rasaq Onilu Plaza <br />
          Niger Motel Ilorin
          <br />
          Kwara State
          <br />
          Nigeria.
        </p>
      </aside>
      <aside>
        <h1 className="text-[30px] font-extrabold font-serif">Business Hour</h1>
        <p className="text-[14px]">
          Our support Hotline is available 24 Hours a day
          <br />
          Monday-Friday: 8am to 6pm
          <br />
          Saturday: Closed
          <br />
          Sunday: Closed
        </p>
      </aside>
      <aside>
        <h1 className="text-[30px] font-extrabold font-serif">Telephones</h1>
        <p className="text-[14px]">
          +234 (0) 1 454 7179 <br />
          +234 (0) 1 454 4914
          <br /> +234 (0) 906 000 5769
          <br /> +234 (0) 906 000 5763
        </p>
      </aside>
    </div>
  );
};

export default Location;
