import React, { useContext, useState } from 'react'
import FiltersContext from '../../../../context/FiltersContext'
import DatePicker from 'react-datepicker'

export default () => {
  const [entranceDate, setEntranceDate] = useContext(FiltersContext).queryObj.entranceDate
  const [isTodayArray] = useState([])
  const isTodayItem = 'isToday'
  const placeholderText = 'החל מ- הזינו תאריך 📆'
  const datePickerChangeHandler = date => {
    setEntranceDate(date.getTime())
  }

  return (
    <div className='filters--field-container__advanced'>
      תאריך כניסה
      <DatePicker
      className='red-background'
        selected={entranceDate}
        onChange={date => datePickerChangeHandler(date)}
        placeholderText={placeholderText}
        value={isTodayArray.includes(isTodayItem) ? placeholderText : undefined}
      />
    </div>
  )
}
