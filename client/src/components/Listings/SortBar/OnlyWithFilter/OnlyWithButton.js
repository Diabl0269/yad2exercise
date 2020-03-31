import React, { useContext } from "react";
import classNames from "classnames";
import getFilterdListings from '../../../../communication/getFilterdListings';
import FiltersContext from "../../../../context/FiltersContext";

const OnlyWithButton = ({ text, only }) => {
  const [value, dispatch] = only;
  const { queryObj, dispatch: listingsDispatch } = useContext(
    FiltersContext
  );
  const clickHandler = () => {
    
    dispatch(!value);    
    
    console.log(value);
    getFilterdListings(queryObj, listingsDispatch);
  };
  return (
    <button
      className={classNames("filters__field-box-container margin-right-m", {
        "orange-text orange-border": value
      })}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default OnlyWithButton;
