import React from "react";
import Footer from "../../Molecules/Footer/Footer";
import NavDesc from "../../Organisms/Navs/NavDesc";

const PageLayout = ({ children }) => {
  return (
    <div>
      <NavDesc />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
