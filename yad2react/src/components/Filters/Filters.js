import React, { useContext, useState } from "react";
import AdvancedFilters from "./AdvancedFilters/AdvancedFilters";
import CitiesFilter from "./CitiesFilter";
import ListingsTypeContext from "../../context/ListingsTypeContext";
import PriceFilter from "./PriceFilter";
import PropertyTypeFilter from "./PropertyTypeFilter";
import RoomsFilter from "./RoomsFilter";
import FiltersContext from "../../context/FiltersContext";

const Filters = ({ getFilterdListings }) => {
  const { currentListingsType, dispatch } = useContext(ListingsTypeContext);
  const [citySearchValue, setCitySearchValue] = useState();
  const [selectedAssetTypes, setSelectedAssetType] = useState([]);
  const [roomsNumber, setRooms] = useState({ min: undefined, max: undefined });
  const [price, setPrice] = useState({ min: "", max: "" });
  const [floor, setFloor] = useState({ min: "", max: "" });
  const [squareMetersTotal, setSquareMetersTotal] = useState({
    min: "",
    max: ""
  });
  const [entranceDate, setEntranceDate] = useState();
  const [selectedAttributes, setSelectedAttributes] = useState([]);

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
          <CitiesFilter />

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
            <RoomsFilter roomsNumber={roomsNumber} setRooms={setRooms} />
          )}
          <PriceFilter price={price} setPrice={setPrice} />

          <button className="filters--field-container filters--advanced-search-button">
            חיפוש מתקדם
          </button>
          <button className="filters--field-container main-nav-bar-button">
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
          setEntranceDate}
        }
      >
        <AdvancedFilters />
      </FiltersContext.Provider>
    </div>
  );
};

export default Filters;
