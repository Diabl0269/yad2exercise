import React from "react";
import ListItem from '../ListItem/ListItem';
import Loader from '../Loader';

const Listings = ({listings}) => {
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
