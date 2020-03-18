import React from "react";
import MainNavBar from "../utils/MainNavBar";
import Footer from "../utils/Footer";

export default ({ Component }) => {
  return (
    <div className="page">
      <MainNavBar />
      <Component />
      <Footer />
    </div>
  );
};
