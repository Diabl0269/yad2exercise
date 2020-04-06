import React, { useState, useEffect } from 'react'
import ListingsContainer from '../../Listings/ListingsContainer'
import useQuery from '../../../hooks/useQuery'
import FiltersContext from '../../../context/FiltersContext'
import getListings from '../../../communication/getListings'

export default () => {
  const [listings, setListings] = useState()

  const queryObj = useQuery()

  const {
    onlyWithPhotos: [onlyWithPhotos],
    onlyWithPrice: [onlyWithPrice],
    listingType: [listingType],
    sortBy: [sortBy]
  } = queryObj

  useEffect(() => {
    const startGetListings = async () => {
      const listings = await getListings(queryObj)
      setListings(listings)
    }
    startGetListings()
    return setListings()
  }, [onlyWithPhotos, onlyWithPrice, listingType, sortBy])

  return (
    <FiltersContext.Provider value={{ queryObj, listings, setListings }}>
      <div className="width-full align-column">
        <ListingsContainer />
      </div>
    </FiltersContext.Provider>
  )
}
