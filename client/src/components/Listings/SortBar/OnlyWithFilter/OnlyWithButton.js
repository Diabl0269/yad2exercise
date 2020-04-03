import React, { useContext } from 'react'
import classNames from 'classnames'
import FiltersContext from '../../../../context/FiltersContext'

export default ({ text, only }) => {
  const {
    queryObj: {
      [only]: [onlyWith, setOnlyWith]
    }
  } = useContext(FiltersContext)

  const clickHandler = () => {
    setOnlyWith(!onlyWith)
  }

  return (
    <button
      className={classNames('filters__field-box-container margin-right-m', {
        'orange-text orange-border': onlyWith
      })}
      onClick={clickHandler}
    >
      {text}
    </button>
  )
}
