import React, { useContext } from "react";
import ListItem from '../ListItem/ListItem';
import Loader from '../utils/Loader';
import FiltersContext from "../../context/FiltersContext";

const Listings = () => {
  const {listings} = useContext(FiltersContext)  
  return listings && listings.length > 0 ? (
    <ul className="listing-container">
      {listings.map(record => (
        <ListItem key={record._id} record={record} />
      ))}
    </ul>
  ) : (
    <Loader />
  );
};

export default Listings;
