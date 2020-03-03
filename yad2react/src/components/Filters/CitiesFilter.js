import React from "react";
import CitiesAutoComplete from "../CitiesAutoComplete";


const CitiesFilter = ({ citySearchValue, setCitySearchValue }) => {

  return (
    <div className="filters--field-container">
      חפשו עיר
      <CitiesAutoComplete
        value={citySearchValue}
        changeCitySearchValueHandler={setCitySearchValue}
      />
    </div>
  );
};

export default CitiesFilter;
