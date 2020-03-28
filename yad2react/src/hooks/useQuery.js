import { useState } from "react";

const useQuery = () => {
  const edgesObj = { min: "", max: "" };

  return {
    citySearchValue: useState(""),
    entranceDate: useState(),
    floor: useState(edgesObj),
    freeText: useState(""),
    listingType: useState("מכירה"),
    onlyWithPhotos: useState(false),
    onlyWithPrice: useState(false),
    price: useState(edgesObj),
    rooms: useState(edgesObj),
    roomsMates: useState(edgesObj),
    selectedAssetTypes: useState([]),
    selectedAttributes: useState([]),
    squareMetersTotal: useState(edgesObj),
    sortBy: useState('-updatedAt'),
    skip: useState(0),
    count: useState(0)
  };
};

export default useQuery;
