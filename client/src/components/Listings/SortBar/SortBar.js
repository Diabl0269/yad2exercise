import React from "react";
import SortOption from "./SortOption";
import OnlyWithFilter from "./OnlyWithFilter/OnlyWithFIlter";
import MapDisplayButton from "./MapDisplayButton";

const SortBar = () => {
  return (
    <div className='align-row'>
      <SortOption />
      <OnlyWithFilter />
      <MapDisplayButton />
    </div>
  );
};

export default SortBar;
