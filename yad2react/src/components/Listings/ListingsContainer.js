import Filters from './Filters/Filters'
import FiltersContext from '../../context/FiltersContext'
import Listings from './Listings'
import ListingsTypeContext from '../../context/ListingsTypeContext'
import Pagination from './Pagination'
import React, { useState, useEffect, useReducer } from 'react'
import SortBar from './SortBar/SortBar'
import getFilterdListings from '../../communication/getFilterdListings'
import listingsTypeReducer from '../../reducers/listingsType'
import useQuery from '../../hooks/useQuery'
import getListings from '../../communication/getListings'

const ListingsContainer = () => {
  const [currentListingsType, dispatchListingsType] = useReducer(
    listingsTypeReducer,
    'מכירה'
  )

  const [listings, listingsDispatch] = useState([])
  const queryObj = useQuery()

  useEffect(() => {
    getListings(queryObj, listingsDispatch)
  }, [])

  return (
    <div className="list-container">
      <FiltersContext.Provider
        value={{ queryObj, listings, dispatch: listingsDispatch }}
      >
        <ListingsTypeContext.Provider
          value={{ currentListingsType, dispatchListingsType }}
        >
          <Filters dispatch={listingsDispatch} />

          <div id="listing" className="list-center">
            <div>
              <SortBar />
              <Listings />
              <Pagination />
            </div>
            <div className="map"></div>
          </div>
        </ListingsTypeContext.Provider>
      </FiltersContext.Provider>
    </div>
  )
}

export default ListingsContainer
