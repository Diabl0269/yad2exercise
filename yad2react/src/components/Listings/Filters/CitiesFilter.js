import React, { useContext } from "react";
import CitiesAutoComplete from '../../CitiesAutoComplete';
import FiltersContext from "../../../context/FiltersContext";

const CitiesFilter = () => {  
const [citySearchValue, setCitySearchValue] = useContext(FiltersContext).queryObj.citySearchValue;
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
