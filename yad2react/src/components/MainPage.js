import React from "react";
import MainNavBar from "./MainNavBar";
import SecondaryNavBar from "./SeconderyNavBar";
import Listings from "./Listings";

const MainPage = () => {
  return (
    <div>
      <MainNavBar />
      <SecondaryNavBar />
      <Listings />
    </div>
  );
};

export default MainPage;
