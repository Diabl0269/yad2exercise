import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import AdvancedFilters from "./AdvancedFilters/AdvancedFilters";
import CitiesFilter from "./CitiesFilter";
import ListingsTypeContext from "../../context/ListingsTypeContext";
import PriceFilter from "./PriceFilter";
import PropertyTypeFilter from "./PropertyTypeFilter";
import RoomsFilter from "./RoomsFilter";
import FiltersContext from "../../context/FiltersContext";
import Loader from "../Loader";

const Filters = ({ dispatchPopulateListing }) => {
  const { currentListingsType, dispatch } = useContext(ListingsTypeContext);
  const [citySearchValue, setCitySearchValue] = useState("");
  const [selectedAssetTypes, setSelectedAssetType] = useState([]);
  const [rooms, setRooms] = useState({ min: "", max: "" });
  const [price, setPrice] = useState({ min: undefined, max: undefined });
  const [floor, setFloor] = useState({ min: "", max: "" });
  const [squareMetersTotal, setSquareMetersTotal] = useState({
    min: "",
    max: ""
  });
  const [entranceDate, setEntranceDate] = useState();
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [freeText, setFreeText] = useState("");
  const [roomsMates, setRoomMates] = useState({ min: "", max: "" });

  const params = {
    price,
    rooms,
    selectedAssetTypes,
    roomsMates,
    totalSquareMeters: squareMetersTotal,
    floor
  };

  useEffect(() => getFilterdListings(params), []);

  // const resetValues = () => {
  //   for (let [key, value] of Object.entries(params)) {
  //     console.log(`${key}: ${value}`);
  //     if (typeof value === "object")
  //       for (let [key, value] of Object.entries(params)) {
  //         if (value === "") value = undefined;
  //       }
  //   }
  // };

  const getFilterdListings = params => {
    dispatchPopulateListing({
      type: "POPULATE_LISTINGS",
      listings: []
    });
    axios({ method: "get", url: "/listings", params }).then(res => {
      if (res.data.length === 0)
        document.querySelector("#loader").innerHTML = "לא נמצאו רשומות";
      else
        dispatchPopulateListing({
          type: "POPULATE_LISTINGS",
          listings: res.data
        });
    });
  };

  return (
    <div>
      <div className="filters__basic-container">
        <b>
          איזה נכס ל
          <span onClick={() => alert("כאן יפתח חלון בחירת קטגוריה סחר")}>
            {currentListingsType}
          </span>{" "}
          תרצו לחפש?
        </b>

        <div className="filters--fields-container smaller-text">
          <CitiesFilter
            citySearchValue={citySearchValue}
            setCitySearchValue={setCitySearchValue}
          />

          {currentListingsType === "שותפים" ? (
            <div className="filters--field-container">שותפים</div>
          ) : (
            <PropertyTypeFilter
              selectedAssetTypes={selectedAssetTypes}
              setSelectedAssetType={setSelectedAssetType}
            />
          )}

          {currentListingsType === "מסחרי" ? (
            <div className="filters--field-container">בחרו עסקה</div>
          ) : (
            <RoomsFilter roomsNumber={rooms} setRooms={setRooms} />
          )}
          <PriceFilter price={price} setPrice={setPrice} />

          <button className="filters--field-container filters--advanced-search-button">
            חיפוש מתקדם
          </button>
          <button
            className="filters--field-container main-nav-bar-button"
            onClick={() => getFilterdListings(params)}
          >
            חיפוש
          </button>
        </div>
      </div>

      <FiltersContext.Provider
        value={{
          selectedAttributes,
          setSelectedAttributes,
          floor,
          setFloor,
          squareMetersTotal,
          setSquareMetersTotal,
          entranceDate,
          setEntranceDate,
          freeText,
          setFreeText,
          getFilterdListings
        }}
      >
        <AdvancedFilters />
      </FiltersContext.Provider>
    </div>
  );
};

export default Filters;
