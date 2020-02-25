import React, {useState} from 'react';
import { assetTypes } from "../../utils/assetCategories";
import openDropDown from "../../utils/openDropDown";

const PropertyTypeFilter = ({ selectedAssetTypes, setSelectedAssetType}) => {

    const [isAssetTypeDropDownOpen, setAssetTypeDropDownOpen] = useState(false);

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
        <li className="filters__asset-type-checkbox__list-item" key={type}>
          <input
            type="checkbox"
            className="filters__asset-type-checkbox__input"
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
        <div className="filters--field-container">
            סוג נכס
            <div>
              <button
                className="filters__field-box-container"
                onClick={e => openDropDown(e, "assetTypeDropDown")}
              >
                {assetTypesCount}
              </button>
              <div
                id="assetTypeDropDown"
                className="filters__asset-type--dropdown"
              >
                <ul className="filters__asset-type-checkbox__list">
                  {isAssetTypeDropDownOpen
                    ? assetTypes.map(type => listItem(type))
                    : assetTypes.slice(0, 6).map(type => listItem(type))}
                </ul>
              </div>
            </div>
          </div>
    )
}

export default PropertyTypeFilter;