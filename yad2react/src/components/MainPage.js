import React, {useReducer} from "react";
import MainNavBar from "./MainNavBar";
import SecondaryNavBar from "./SeconderyNavBar";
import ListingsContainer from "./Listings/ListingsContainer";
import listingsTypeReducer from '../reducers/listingsType';
import ListingsTypeContext from '../context/ListingsTypeContext';
import closeDropDownsHandler from '../utils/closeDropDownsHandler';
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
    </div>
  );
};

export default MainPage;
