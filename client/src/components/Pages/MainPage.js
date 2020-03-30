import React from "react";
import Footer from '../utils/Footer';
import ListingsContainer from "../Listings/ListingsContainer";
import MainNavBar from "../utils/MainNavBar";
import SecondaryNavBar from "../utils/SeconderyNavBar";
import closeDropDownsHandler from '../../utils/closeDropDownsHandler';

const MainPage = () => {
  window.onclick = e => closeDropDownsHandler(e);

  return (
    <div className='align-column'>
      <MainNavBar />
      <SecondaryNavBar />
      <ListingsContainer />
      <Footer />
    </div>
  );
};

export default MainPage;
