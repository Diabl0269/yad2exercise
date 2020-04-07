import React, { useContext, useState } from 'react'
import FiltersContext from '../../../context/FiltersContext'

export default () => {
  const [open, setOpen] = useState(false)
  const {
    queryObj: {
      roomMates: [roomMates, setRoomMates]
    }
  } = useContext(FiltersContext)
  const numbersOptionsArray = [
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
  ]
  const numbersOptionsJSX = () => {
    return numbersOptionsArray.map(option => <option value={option} key={option} />)
  }
  const roomMatesDisplay =
    !roomMates.max && !roomMates.min
      ? 'שותפים'
      : roomMates.max && !roomMates.min
      ? `עד - ${roomMates.max}`
      : !roomMates.max && roomMates.min
      ? `מ - ${roomMates.min}`
      : `${roomMates.min} - ${roomMates.max}`

  const innerInputContainer = (placeholder, change) => (
    <input
      type="text"
      list="roomMates"
      className="filters__rooms-picker-container"
      placeholder={placeholder}
      key={change}
      onChange={({ target }) =>
        setRoomMates(curRoomMates => {
          const { value } = target
          return { ...curRoomMates, [change]: value }
        })
      }
    />
  )
  const dropDown = () => (
    <div id="roomsDropDown" className="filters__rooms-dropdown-container">
      {innerInputContainer('מ-', 'min')}
      {innerInputContainer('עד-', 'max')}
      <datalist id="roomMates">{numbersOptionsJSX()}</datalist>
    </div>
  )

  return (
    <div className="filters--field-container">
      שותפים
      <div>
        <button className="filters__field-box-container" onClick={() => setOpen(!open)}>
          {roomMatesDisplay}
        </button>
        {open && dropDown()}
      </div>
    </div>
  )
}
