import React, { useState, useContext } from 'react'
import RadioButton from '../../ListItem/RadioButton'
import FiltersContext from '../../../context/FiltersContext'

export default () => {
  const [open, setOpen] = useState(false)
  const sortOptions = [
    ['לפי תאריך', '-updatedAt'],
    ['מחיר - מהזול ליקר', 'saleDetails price'],
    ['מחיר, מהיקר לזול', '-saleDetails price']
  ]
  const displaySort = () => {
    return sortOptions.filter(element => element[1] === sortBy)[0][0]
  }
  const [sortBy] = useContext(FiltersContext).queryObj.sortBy
  const group = 'sortBy'
  const options = sortOptions.map(value => {
    return <RadioButton key={value} value={value} group={group} className="margin-all-large" />
  })

  return (
    <div className="align-row">
      מיין לפי
      <div>
        <button
          id="sortOption"
          className="filters__field-box-container margin-right-l"
          onClick={() => setOpen(!open)}
        >
          {displaySort()}
        </button>
        {open && (
          <div id="sortDropDown" className="filters__asset-type--dropdown">
            {options}
          </div>
        )}
      </div>
    </div>
  )
}
