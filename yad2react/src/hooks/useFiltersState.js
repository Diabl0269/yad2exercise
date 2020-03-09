import React, { useState } from "react";

const useFiltersState = () => {
  const edgesObj = { min: "", max: "" };

  return {
    citySearchValue: useState(""),
    entranceDate: useState(),
    floor: useState(edgesObj),
    freeText: useState(""),
    onlyWithPhotos: useState(false),
    onlyWithPrice: useState(false),
    price: useState(edgesObj),
    rooms: useState(edgesObj),
    roomsMates: useState(edgesObj),
    selectedAssetTypes: useState([]),
    selectedAttributes: useState([]),
    squareMetersTotal: useState(edgesObj),
    sortObj: useState('')
  };
};

export default useFiltersState;
