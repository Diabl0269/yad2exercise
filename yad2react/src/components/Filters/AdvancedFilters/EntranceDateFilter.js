import React, { useContext, useState } from "react";
import FiltersContext from "../../../context/FiltersContext";
import DatePicker from "react-datepicker";

const EntranceDateFilter = () => {
  const { entranceDate, setEntranceDate } = useContext(FiltersContext);
  const [isTodayArray, setIsToday] = useState([]);
  const isTodayItem = "isToday";
  const placeholderText = "החל מ- הזינו תאריך 📆";
  const datePickerChangeHandler = date => {
    setEntranceDate(date);
  };

  return (
    <div className="align-row">
      <div>
        תאריך כניסה
        <DatePicker
          selected={entranceDate}
          onChange={date => datePickerChangeHandler(date)}
          placeholderText={placeholderText}
          value={
            isTodayArray.includes(isTodayItem) ? placeholderText : undefined
          }
        />
      </div>
      <div className="margin-right">

          {/* Should be a checkbox component
        <li className="checkbox__list-item">
          <input
            type="checkbox"
            className="checkbox"
            onClick={(e) => datePickerChangeHandler(e.target.value)}
          />
          כניסה מיידית
        </li> */}

      </div>
    </div>
  );
};

export default EntranceDateFilter;
