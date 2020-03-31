import Filters from './Filters/Filters'
import FiltersContext from '../../context/FiltersContext'
import Listings from './Listings'
import Pagination from './Pagination'
import React, { useState, useEffect } from 'react'
import SortBar from './SortBar/SortBar'
import useQuery from '../../hooks/useQuery'
import getListings from '../../communication/getListings'

const ListingsContainer = ({ queryObjFromParent, listingsFromParent = [] }) => {
  const [listings, listingsDispatch] = useState(listingsFromParent)

  const query = useQuery()
  const queryObj = queryObjFromParent || query
  
  useEffect(() => {
    getListings(queryObj, listingsDispatch)
  }, [])

  return (
    <div className="list-container">
      <FiltersContext.Provider value={{ queryObj, listings, dispatch: listingsDispatch }}>
        <Filters dispatch={listingsDispatch} />

        <div id="listing">
          <SortBar />
          <Listings />
          <Pagination />
        </div>
      </FiltersContext.Provider>
    </div>
  )
}

export default ListingsContainer
