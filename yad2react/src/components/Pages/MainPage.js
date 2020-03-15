import React, {useReducer} from "react";
import Footer from '../Footer';
import ListingsContainer from "../Listings/ListingsContainer";
import ListingsTypeContext from '../../context/ListingsTypeContext';
import MainNavBar from "../MainNavBar";
import SecondaryNavBar from "../SeconderyNavBar";
import closeDropDownsHandler from '../../utils/closeDropDownsHandler';
import listingsTypeReducer from '../../reducers/listingsType';

const MainPage = () => {
  const [currentListingsType, dispatch] = useReducer(listingsTypeReducer, "מכירה");
  window.onclick = e => closeDropDownsHandler(e);

  return (
    <div className='align-column'>
      <ListingsTypeContext.Provider value={{currentListingsType, dispatch}}>
      <MainNavBar />
      <SecondaryNavBar />
      <ListingsContainer currentListingsType={currentListingsType} changeListingsType={dispatch}/>
      </ListingsTypeContext.Provider>
      <Footer />
    </div>
  );
};

export default MainPage;