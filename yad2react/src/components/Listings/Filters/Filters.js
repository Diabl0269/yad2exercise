import React, { useContext, useState, useEffect } from "react";
import AdvancedFilters from "./AdvancedFilters/AdvancedFilters";
import CitiesFilter from "./CitiesFilter";
import ListingsTypeContext from "../../../context/ListingsTypeContext";
import PriceFilter from "./PriceFilter";
import PropertyTypeFilter from "./PropertyTypeFilter";
import RoomsFilter from "./RoomsFilter";
import FiltersContext from "../../../context/FiltersContext";
import toggleDropDown from "../../../utils/toggleDropDown";
import getFilterdListings from "../../../utils/getFilterdListings";

const Filters = ({ dispatch: dispatchPopulateListing }) => {
  const { currentListingsType } = useContext(ListingsTypeContext);
  const { filterState, dispatch } = useContext(FiltersContext);

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
            <PropertyTypeFilter />
          )}

          {currentListingsType === "מסחרי" ? (
            <div className="filters--field-container">בחרו עסקה</div>
          ) : (
            <RoomsFilter />
          )}
          <PriceFilter />

          <button
            className="filters--field-container filters--advanced-search-button"
            onClick={e => toggleDropDown(e, "advancedFilters")}
          >
            חיפוש מתקדם
          </button>
          <button
            className="filters--field-container main-nav-bar-button"
            onClick={() => {
              console.log(filterState);
              getFilterdListings( filterState, dispatch );
            }}
          >
            חיפוש
          </button>
        </div>
      </div>
      <AdvancedFilters />
    </div>
  );
};

export default Filters;
