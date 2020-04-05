import React, { useState, useContext } from 'react'
import RadioButton from '../../ListItem/RadioButton'
import FiltersContext from '../../../context/FiltersContext'

export default () => {
  const [open, setOpen] = useState(false)
  const sortOptions = [
    ['תאריך', '-updatedAt'],
    ['מחיר - מהזול ליקר', 'saleDetails price'],
    ['מחיר, מהיקר לזול', '-saleDetails price']
  ]
  const displaySort = () => {
    return sortOptions.filter(element => element[1] === sortBy)[0][0]
  }
  const {
    queryObj: {
      sortBy: [sortBy]
    }
  } = useContext(FiltersContext)

  const group = 'sortBy'
  const options = sortOptions.map(value => {
    const checked = sortBy === value[1]
    return <RadioButton key={value} value={value} group={group} checked={checked} />
  })

  return (
    <div className="align-row">
      מיין לפי
      <div id="sortOptionContainer">
        <button
          id="sortOption"
          className="filters__field-box-container"
          onClick={() => setOpen(!open)}
        >
          {displaySort()}
        </button>
        {open && <div id="sortDropDown">{options}</div>}
      </div>
    </div>
  )
}
