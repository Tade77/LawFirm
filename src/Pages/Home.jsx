import React from "react";
import Location from "../components/Molecules/Address/Location";
import Contact from "../components/Molecules/Contact";
import About from "../components/Organisms/About";
import OfferPage from "../components/Organisms/OfferPage";
import TopDesc from "../components/Organisms/TopPage/Index";
import PageLayout from "../components/Templates/Layput/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <TopDesc />
      <OfferPage />
      <About />
      <Contact />
      <Location />
    </PageLayout>
  );
};

export default Home;
