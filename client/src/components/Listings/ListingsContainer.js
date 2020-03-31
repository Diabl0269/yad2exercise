import Filters from './Filters/Filters'
import FiltersContext from '../../context/FiltersContext'
import Listings from './Listings'
import Pagination from './Pagination'
import React, { useState, useEffect } from 'react'
import useQuery from '../../hooks/useQuery'
import getListings from '../../communication/getListings'

export default ({ queryObjFromParent, listingsFromParent = [] }) => {
  const [listings, listingsDispatch] = useState(listingsFromParent)

  const query = useQuery()
  const queryObj = queryObjFromParent || query

  useEffect(() => {
    getListings(queryObj, listingsDispatch)
  }, [])

  return (
    <div className="list-container">
      <FiltersContext.Provider value={{ queryObj, listings, dispatch: listingsDispatch }}>
        <Filters />

        <div id="listing">
          <Listings />
          <Pagination />
        </div>
      </FiltersContext.Provider>
    </div>
  )
}