import axios from "axios";
import React, { useEffect, useReducer } from "react";
import ListItem from "./ListItem";
import listingsReducer from "../reducers/listings";

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
        <p>Loading...</p>
      )}
    </ul>
  );
};

export default Listings;
