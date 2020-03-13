import React, { useContext } from "react";
import classNames from "classnames";
import getFilterdListings from "../../../../utils/getFilterdListings";
import FiltersContext from "../../../../context/FiltersContext";

const OnlyWithButton = ({ text, only }) => {
  const [value, dispatch] = only;
  const { queryObj, dispatch: listingsDispatch } = useContext(
    FiltersContext
  );
  const clickHandler = () => {
    dispatch(!value);    
    getFilterdListings(queryObj, listingsDispatch);
  };
  return (
    <div
      className={classNames("filters__field-box-container margin-right-m", {
        "orange-text orange-border": value
      })}
      onClick={clickHandler}
    >
      {text}
    </div>
  );
};

export default OnlyWithButton;
