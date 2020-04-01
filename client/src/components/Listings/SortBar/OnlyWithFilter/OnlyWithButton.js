import React, { useContext } from 'react'
import classNames from 'classnames'
import getListings from '../../../../communication/getListings'
import FiltersContext from '../../../../context/FiltersContext'

export default ({ text, only }) => {
  const { queryObj, dispatch: listingsDispatch } = useContext(FiltersContext)
  const [onlyWith, setOnlyWith] = queryObj[only]

  const clickHandler = () => {
    queryObj[only][1](!queryObj[only][0])
    getListings(queryObj, listingsDispatch)
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
