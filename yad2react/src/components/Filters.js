import React, { useContext, useState } from "react";
import ListingsTypeContext from "../context/ListingsTypeContext";
import CitiesAutoComplete from "./CitiesAutoComplete";
import openDropDown from "../utils/openDropDown";
import { assetTypes } from "../utils/assetCategories";

const Filters = () => {
  const { currentListingsType, dispatch } = useContext(ListingsTypeContext);
  const [citySearchValue, setCitySearchValue] = useState();
  const [selectedAssetTypes, setSelectedAssetType] = useState([]);
  const [isAssetTypeDropDownOpen, setAssetTypeDropDownOpen] = useState(false);
  const [roomsNumber, setRooms] = useState({ min: undefined, max: undefined });
  const roomsNumberDisplay =
    !roomsNumber.max && !roomsNumber.min
      ? "חדרים"
      : roomsNumber.max && !roomsNumber.min
      ? `עד - ${roomsNumber.max}`
      : !roomsNumber.max && roomsNumber.min
      ? `מ - ${roomsNumber.min}`
      : `${roomsNumber.min} - ${roomsNumber.max}`;
  const handleCheckboxClick = type => {
    let newSelectedAssetType;
    if (selectedAssetTypes.includes(type))
      newSelectedAssetType = selectedAssetTypes.filter(
        curType => curType != type
      );
    else newSelectedAssetType = selectedAssetTypes.concat(type);
    setSelectedAssetType(newSelectedAssetType);
  };
  const listItem = type => (
    <li className="checkbox__list-item">
      <input
        type="checkbox"
        className="checkbox__input"
        onClick={() => handleCheckboxClick(type)}
      />
      {type}
    </li>
  );

  const assetTypesCount =
    selectedAssetTypes.length === 0
      ? "בחרו סוגי נכסים"
      : selectedAssetTypes.length > 1
      ? `נכסים(${selectedAssetTypes.length})`
      : selectedAssetTypes[0];

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
        <div className="filters--field-container">
          חפשו עיר
          <CitiesAutoComplete />
        </div>

        {currentListingsType === "שותפים" ? (
          <div className="filters--field-container">שותפים</div>
        ) : (
          <div className="filters--field-container">
            סוג נכס
            <div>
              <button
                className="filters__filed-box-container"
                onClick={e => openDropDown(e, "assetTypeDropDown")}
              >
                {assetTypesCount}
              </button>
              <div
                id="assetTypeDropDown"
                className="filters__asset-type--dropdown"
              >
                <ul className="checkbox__list">
                  {isAssetTypeDropDownOpen
                    ? assetTypes.map(type => listItem(type))
                    : assetTypes.slice(0, 6).map(type => listItem(type))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {currentListingsType === "מסחרי" ? (
          <div className="filters--field-container">בחרו עסקה</div>
        ) : (
          <div className="filters--field-container">
            חדרים
            <div className="filters__filed-box-container">{roomsNumberDisplay}</div>
          </div>
        )}

        <div className="filters--field-container">מחיר בש"ח</div>

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
