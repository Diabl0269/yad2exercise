import React, { useContext } from "react";
import FiltersContext from "../../../../context/FiltersContext";

const FloorFilter = () => {
  const setFloor = useContext(FiltersContext).queryObj.floor[1]
  const numbersOptionsArray = [
    "הכל",
    "מרתף",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17
  ];
  const numbersOptionsJSX = () => {
    return numbersOptionsArray.map(option => (
      <option value={option} key={option} />
    ));
  };
  const innerInputContainer = (placeholder, change) => (
    <input
      type="text"
      list="floorsNumber"
      className="filters__rooms-picker-container"
      placeholder={placeholder}
      key={change}
      onChange={({ target }) =>
        setFloor(curFloor => {
          const { value } = target;
          return { ...curFloor, [change]: value };
        })
      }
    />
  );
  return (
    <div className="filters--field-container__advanced">
      קומה
      <div className="align-row">
        {innerInputContainer("מ-", "min")}
        {innerInputContainer("עד-", "max")}
        <datalist id="floorsNumber">{numbersOptionsJSX()}</datalist>
      </div>
    </div>
  );
};

export default FloorFilter;
