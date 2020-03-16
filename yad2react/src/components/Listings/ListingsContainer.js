import Filters from "./Filters/Filters";
import FiltersContext from "../../context/FiltersContext";
import Listings from "./Listings";
import Pagination from "./Pagination";
import React, { useState, useEffect } from "react";
import SortBar from "./SortBar/SortBar";
import getFilterdListings from '../../communication/getFilterdListings';
import useQuery from "../../hooks/useQuery";

const ListingsContainer = () => {
  const [listings, dispatch] = useState([]);
  const queryObj = useQuery();

  useEffect(() => {
    getFilterdListings(queryObj, dispatch);
  }, []);

  return (
    <div className="list-container">
      <FiltersContext.Provider value={{ queryObj, listings, dispatch }}>
        <Filters dispatch={dispatch} />

        <div id="listing" className="list-center">
          <div>
            <SortBar />
            <Listings />
            <Pagination />
          </div>
          <div className="map"></div>
        </div>
      </FiltersContext.Provider>
    </div>
  );
};

export default ListingsContainer;
