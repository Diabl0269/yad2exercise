import React, { useContext } from 'react'
import FiltersContext from '../../context/FiltersContext'

export default ({ value, group, className }) => {
  const {
    queryObj: {
      sortBy: [, setSortBy]
    }
  } = useContext(FiltersContext)

  const changeSortHandler = async () => {
    setSortBy(value[1])
  }

  const defaultChecked = document.querySelector(`#${value[1]}`)
  if (defaultChecked) {
    defaultChecked.setAttribute('checked', '')
  }

  return (
    <div className="checkbox__list-item">
      <input
        id={value[1]}
        type="radio"
        name={group}
        className={className}
        onChange={changeSortHandler}
      />
      <label>{value[0]}</label>
    </div>
  )
}
