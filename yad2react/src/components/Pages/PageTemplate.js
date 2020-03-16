import React from "react";
import MainNavBar from "../MainNavBar";
import Footer from "../Footer";

export default ({ Component }) => {
  return (
    <div className="page">
      <MainNavBar />
      <Component />
      <Footer />
    </div>
  );
};
