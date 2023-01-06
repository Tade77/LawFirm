import React from "react";
import OfferPage from "../components/Organisms/OfferPage";
import TopDesc from "../components/Organisms/TopPage/Index";
import PageLayout from "../components/Templates/Layput/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <TopDesc />
      <OfferPage />
    </PageLayout>
  );
};

export default Home;
