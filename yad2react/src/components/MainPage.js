import React from "react";
import MainNavBar from "./MainNavBar";
import SecondaryNavBar from "./SeconderyNavBar";
import Listings from "./Listings";

const MainPage = () => {
  window.onclick = function(event) {
    if (!event.target.matches("phoneButton")) {
      var dropdowns = Array.from(document.getElementsByClassName("phone-dropdown"));
      console.log(dropdowns);
      dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
        
      });
      // dropdowns.forEach(dropdown => (dropdown.style.display = "none"));
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
