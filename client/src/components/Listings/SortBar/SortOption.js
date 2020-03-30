import React, { useContext } from "react";
import openDropDown from "../../../utils/openDropDown";
import RadioButton from "../../ListItem/RadioButton";
import FiltersContext from "../../../context/FiltersContext";

const SortOption = () => {
  const sortOptions = [
    ["לפי תאריך", "-updatedAt"],
    ["מחיר - מהזול ליקר", "saleDetails price"],
    ["מחיר, מהיקר לזול", "-saleDetails price"]
  ];
  const displaySort = () => {
    return sortOptions.filter(element => element[1] === sortBy)[0][0];
  };
  const [sortBy] = useContext(FiltersContext).queryObj.sortBy;
  const group = "sortBy";
  const options = sortOptions.map(value => {    
    return <RadioButton key={value} value={value} group={group} className="margin-all-large"/>;
  });

  return (
    <div className="align-row">
      מיין לפי
      <div>
        <div
          className="filters__field-box-container margin-right-l"
          onClick={e => openDropDown(e, "sortDropDown")}
        >
          {" "}
          {displaySort()}
        </div>
        <div id="sortDropDown" className="filters__asset-type--dropdown">
          {options}
        </div>
      </div>
    </div>
  );
};

export default SortOption;
