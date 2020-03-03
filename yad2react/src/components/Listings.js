import Filters from "./Filters/Filters";
import ListItem from "./ListItem/ListItem";
import React, { useEffect, useReducer } from "react";
import axios from "axios";
import listingsReducer from "../reducers/listings";
import Loader from './Loader';

const Listings = ({currentListingsType, changeListingsType}) => {
  const [listings, dispatch] = useReducer(listingsReducer, []);

//  const getFilterdListings = (body = {}) => useEffect(() => {
//     axios.get("/listings", body).then(res => {
//       if (res.data.length === 0)
//         document.querySelector("#loader").innerHTML = "לא נמצאו רשומות";
//         dispatch({ type: "POPULATE_LISTINGS", listings: res.data });
//     });
//   }, []);

  return (
    <div className="list-container">


      <Filters dispatchPopulateListing={dispatch}/>


      <div id='listing' className="list-center">
        <div>

          {listings && listings.length > 0 ? (
            <ul className="listing-container">
              {listings.map(record => (
                <ListItem key={record._id} record={record} />
              ))}
            </ul>

          ) : (
            <Loader />
          )}

          <div className="page-selector"></div>
        </div>
        <div className="map"></div>
      </div>
    </div>
  );
};




export default Listings;
