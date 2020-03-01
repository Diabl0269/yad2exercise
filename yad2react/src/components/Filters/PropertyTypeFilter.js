import React, { useState } from "react";
import { assetTypes } from "../../utils/assetCategories";
import openDropDown from "../../utils/openDropDown";
import Checkbox from "../Checkbox";

const PropertyTypeFilter = ({ selectedAssetTypes, setSelectedAssetType }) => {
  const [isAssetTypeDropDownOpen, setAssetTypeDropDownOpen] = useState(false);

  const buttonID = 'moreTypesFilterButton'

  const assetTypesCount =
    selectedAssetTypes.length === 0
      ? "בחרו סוגי נכסים"
      : selectedAssetTypes.length > 1
      ? `נכסים(${selectedAssetTypes.length})`
      : selectedAssetTypes[0];
  const displayMoreText = isAssetTypeDropDownOpen ? "עוד" : "פחות";

  return (
    <div className="filters--field-container">
      סוג נכס
      <div>
        <button
          className="filters__field-box-container"
          onClick={e => openDropDown(e, "assetTypeDropDown")}
        >
          {assetTypesCount}
        </button>
        <div id="assetTypeDropDown" className="filters__asset-type--dropdown">
          <ul className="checkbox__list-col">
            {isAssetTypeDropDownOpen
              ? assetTypes.map(type => (
                  <Checkbox
                    key={type}
                    item={type}
                    selectedItems={selectedAssetTypes}
                    setItem={setSelectedAssetType}
                  />
                ))
              : assetTypes
                  .slice(0, 6)
                  .map(type => (
                    <Checkbox
                    key={type}
                      item={type}
                      selectedItems={selectedAssetTypes}
                      setItem={setSelectedAssetType}
                    />
                  ))}
          </ul>
          <button id={buttonID} className='background-none orange-text'> {displayMoreText} סוגים ></button>
        </div>
      </div>
    </div>
  );
};

export default PropertyTypeFilter;
