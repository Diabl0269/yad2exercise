import React, { useContext, useState } from "react";
import ListingsTypeContext from "../../context/ListingsTypeContext";
import RoomsFilter from "./RoomsFilter";
import CitiesFilter from "./CitiesFilter";
import PropertyTypeFilter from "./PropertyTypeFilter";
import PriceFilter from './PriceFilter';

const Filters = () => {
  const { currentListingsType, dispatch } = useContext(ListingsTypeContext);
  const [citySearchValue, setCitySearchValue] = useState();
  const [selectedAssetTypes, setSelectedAssetType] = useState([]);
  const [roomsNumber, setRooms] = useState({ min: undefined, max: undefined });
  const [price, setPrice] = useState({min: undefined, max: undefined});

  return (
    <div className="filters-container">
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
  );
};

export default Filters;
