import React from "react";
import MainNavBar from "./MainNavBar";
import SecondaryNavBar from "./SeconderyNavBar";
import Listings from "./Listings";

const MainPage = () => {
  window.onclick = function(event) {
    if (!event.target.matches("details-button")) {
      const dropdowns = Array.from(document.getElementsByClassName("details__dropdown"));
      dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
        
      });
    }
  };

  return (
    <div>
      <MainNavBar />
      <SecondaryNavBar />
      <Listings />
    </div>
  );
};

export default MainPage;
