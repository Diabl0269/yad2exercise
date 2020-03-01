import React, { useContext, useState } from "react";
import FiltersContext from "../../../context/FiltersContext";
import DatePicker from 'react-datepicker'

const EntranceDateFilter = () => {
  const { entranceDate, setEntranceDate } = useContext(FiltersContext);
  const [focused, setFocused] = useState(false);

  return (
    <div className='block'>
      <DatePicker selected={entranceDate} onChange={date => setEntranceDate(date)} />
    </div>
  );
};

export default EntranceDateFilter;
