import React from "react";
import openDropDown from "../../../utils/openDropDown";
import RadioButton from "../../ListItem/RadioButton";

const SortOption = () => {
  const sortOptions = ["לפי תאריך", "מחיר - מהזול ליקר", "מחיר, מהיקר לזול"];
  const group = "sortBy";
  const options = sortOptions.map(value => (
    <RadioButton value={value} group={group} className="margin-all-large" />
  ));

  return (
    <div className="align-row">
      מיין לפי
      <div>
        <div
          className="filters__field-box-container margin-right-l"
          onClick={e => openDropDown(e, "sortDropDown")}
        />
        <div id="sortDropDown" className="filters__asset-type--dropdown">
          {options}
        </div>
      </div>
    </div>
  );
};

export default SortOption;
