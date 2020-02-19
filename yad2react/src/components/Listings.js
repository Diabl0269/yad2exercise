import Filters from './Filters';
import ListItem from "./ListItem/ListItem";
import React, { useEffect, useReducer } from "react";
import axios from "axios";
import listingsReducer from "../reducers/listings";
import { PacmanLoader } from "react-spinners";

const Listings = () => {
  const [listings, dispatch] = useReducer(listingsReducer, []);

  useEffect(() => {
    axios.get("/listings").then(res => {
      if (res.data.length === 0)
        document.querySelector("#loader").innerHTML = "לא נמצאו רשומות";
      dispatch({ type: "POPULATE_LISTINGS", listings: res.data });
    });
  }, []);

  return (
    <div className="list-container">
      <Filters />
      <div className="list-center">
        <div>
          <ul className="listing-container">
            {listings && listings.length > 0 ? (
              listings.map(record => (
                <ListItem key={record._id} record={record} />
              ))
            ) : (
              <div id="loader">
                <PacmanLoader color={"#ff7100"} />
              </div>
            )}
          </ul>
          <div className="page-selector"></div>
        </div>
        <div className="map"></div>
      </div>
    </div>
  );
};

export default Listings;