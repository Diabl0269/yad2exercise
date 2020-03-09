import Filters from "./Filters/Filters";
import React, { useReducer, useState, useEffect } from "react";
import Listings from "./Listings";
import SortBar from "./SortBar/SortBar";
import listingsReducer from "../../reducers/listings";
import useFiltersState from "../../hooks/useFiltersState";
import FiltersContext from "../../context/FiltersContext";
import getFilterdListings from '../../utils/getFilterdListings';

const ListingsContainer = ({ currentListingsType, changeListingsType }) => {
  // const [listings, dispatch] = useReducer(listingsReducer, []);
  const [listings, dispatch] = useState([]);
  const filterState = useFiltersState();

  useEffect(() => {getFilterdListings( filterState, dispatch )}, []);


  return (
    <div className="list-container">
      <FiltersContext.Provider value={{filterState, dispatch}}>
        <Filters dispatch={dispatch} />

        <div id="listing" className="list-center">
          <div>
            <SortBar />
            <Listings listings={listings} />
            <div className="page-selector"></div>
          </div>
          <div className="map"></div>
        </div>
      </FiltersContext.Provider>
    </div>
  );
};

export default ListingsContainer;
