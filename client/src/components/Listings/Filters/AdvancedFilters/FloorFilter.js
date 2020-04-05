import React, { useContext } from 'react'
import FiltersContext from '../../../../context/FiltersContext'

export default () => {
  const [floor,setFloor] = useContext(FiltersContext).queryObj.floor
  const {min, max} = floor
  const numbersOptionsArray = [
    'הכל',
    'מרתף',
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
  ]
  const numbersOptionsJSX = () => {
    return numbersOptionsArray.map(option => <option value={option} key={option} />)
  }
  const innerInputContainer = (placeholder, change, value) => (
    <input
      type="text"
      list="floorsNumber"
      className="filters__rooms-picker-container"
      placeholder={placeholder}
      value={value}
      key={change}
      onChange={({ target }) =>
        setFloor(curFloor => {
          const { value } = target
          return { ...curFloor, [change]: value }
        })
      }
    />
  )
  return (
    <div className="filters--field-container__advanced">
      קומה
      <div className="align-row">
        {innerInputContainer('מ-', 'min', min)}
        {innerInputContainer('עד-', 'max', max)}
        <datalist id="floorsNumber">{numbersOptionsJSX()}</datalist>
      </div>
    </div>
  )
}
