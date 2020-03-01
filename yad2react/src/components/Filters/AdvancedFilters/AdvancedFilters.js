import React from "react";
import AssetAttributes from './AssetAttributes';
import AssetDetails from './AssetDetails';

const AdvancedFilters = () => {

  return (
    <div className="filters__advanced-dropdown-container">
      <AssetAttributes />
      <AssetDetails />
      {/* <div className="filters__advanced--asset-details border-bottom">ב</div> */}
      <div className="filters__advanced--free-text border-bottom">ג</div>
      <div className="filters__advanced--search">ד</div>
    </div>
  );
};

export default AdvancedFilters;
