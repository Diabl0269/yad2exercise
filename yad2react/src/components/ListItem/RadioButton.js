import React, { useContext } from "react";
import getFilterdListings from '../../communication/getFilterdListings';
import FiltersContext from "../../context/FiltersContext";

export default ({ value, group, className }) => {

  const { queryObj, dispatch: listingsDispatch } = useContext(FiltersContext);
  const sortByDispatch = queryObj.sortBy[1];

  const changeSortHandler = async () => {
    sortByDispatch(value[1]);
    getFilterdListings(queryObj, listingsDispatch);
  };

  const defaultChecked = document.querySelector(`#${value[1]}`);
  if (defaultChecked) {
    defaultChecked.setAttribute("checked", "");
  }

  return (
    <div className="checkbox__list-item">
      <input
        id={value[1]}
        type="radio"
        name={group}
        className={className}
        onChange={changeSortHandler}
      />
      <label>{value[0]}</label>
    </div>
  );
};
