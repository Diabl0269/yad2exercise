import React, { useContext } from 'react'
import FiltersContext from '../../context/FiltersContext'

export default ({ value, group, className, checked }) => {
  const {
    queryObj: {
      sortBy: [, setSortBy]
    }
  } = useContext(FiltersContext)

  const changeSortHandler = async () => {
    setSortBy(value[1])
  }

  return (
    <div className="checkbox__list-item">
      <input
        type="radio"
        name={group}
        className={className}
        onChange={changeSortHandler}
        checked={checked}
      />
      <label>{value[0]}</label>
    </div>
  )
}
