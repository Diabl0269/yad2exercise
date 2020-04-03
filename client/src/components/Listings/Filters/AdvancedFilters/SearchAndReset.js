import React, { useContext } from 'react'
import FiltersContext from '../../../../context/FiltersContext'
import getListings from '../../../../communication/getListings'
import resetQuery from '../../../../utils/resetQuery'

export default () => {
  const { queryObj, setListings } = useContext(FiltersContext)
  const {
    count: [, setCount]
  } = queryObj

  const handleSearch = async () => {
    const { listings = '', count } = await getListings(queryObj)
    setListings(listings)
    setCount(count)
  }

  const hadnleReset = () => {
    resetQuery(queryObj)
  }

  return (
    <div className="align-row">
      <button className="main-nav-bar-button margin-right-half" onClick={handleSearch}>
        חיפוש
      </button>
      <button className="button-size margin-left " onClick={hadnleReset}>
        ניקוי
      </button>
    </div>
  )
}
