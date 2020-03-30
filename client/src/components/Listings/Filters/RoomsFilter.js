import React, { useContext } from "react";
import openDropDown from '../../../utils/openDropDown';
import FiltersContext from "../../../context/FiltersContext";

const RoomsFilterBox = () => {
  const [roomsNumber, setRooms] = useContext(FiltersContext).queryObj.rooms;
  const numbersOptionsArray = [
    "הכל",
    1,
    1.5,
    2,
    2.5,
    3,
    3.5,
    4,
    4.5,
    5,
    5.5,
    6,
    6.5,
    7,
    7.5,
    8,
    8.5,
    9,
    9.5,
    10,
    10.5,
    11,
    11.5,
    12
  ];
  const numbersOptionsJSX = () => {
    return numbersOptionsArray.map(option => <option value={option} key={option}/>);
  };
  const roomsNumberDisplay =
    !roomsNumber.max && !roomsNumber.min
      ? "חדרים"
      : roomsNumber.max && !roomsNumber.min
      ? `עד - ${roomsNumber.max}`
      : !roomsNumber.max && roomsNumber.min
      ? `מ - ${roomsNumber.min}`
      : `${roomsNumber.min} - ${roomsNumber.max}`;

  const innerInputContainer = (placeholder, change) => (
    <input
      type="text"
      list="roomsNumber"
      className="filters__rooms-picker-container"
      placeholder={placeholder}
      key={change}
      onChange={({ target }) =>
        setRooms(curRooms => {
          const { value } = target;
          return { ...curRooms, [change]: value };
        })
      }
    />
  );
  const dropDown = () => (
    <div id="roomsDropDown" className="filters__rooms-dropdown-container">
      {innerInputContainer("מ-", "min")}
      {innerInputContainer("עד-", "max")}
      <datalist id="roomsNumber">{numbersOptionsJSX()}</datalist>
    </div>
  );

  return (
    <div className="filters--field-container">
      חדרים
      <div>
        <button
          className="filters__field-box-container"
          onClick={e => openDropDown(e, "roomsDropDown")}
        >
          {roomsNumberDisplay}
        </button>
        {dropDown()}
      </div>
    </div>
  );
};

export default RoomsFilterBox;
