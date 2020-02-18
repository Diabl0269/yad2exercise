import axios from "axios";
import React, { useEffect, useReducer } from "react";
import ListItem from "./ListItem/ListItem";
import listingsReducer from "../reducers/listings";
import { PacmanLoader } from "react-spinners";


const Listings = () => {
  const [listings, dispatch] = useReducer(listingsReducer, []);
  useEffect(() => {
    axios
      .get("/listings/get")
      .then(res => dispatch({ type: "POPULATE_LISTINGS", listings: res.data }));
  }, []);

  return (
    <ul className="listing-container">
      {listings && listings.length > 0 ? (
        listings.map(record => (
          <ListItem
            key={record._id}
            record={record}
          />
        ))
      ) : (
        <PacmanLoader
          color={"#ff7100"}
        />
      )}
    </ul>
  );
};

export default Listings;
