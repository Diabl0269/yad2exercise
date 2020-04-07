import React, { useContext, useState } from 'react'
import AdvancedFilters from './AdvancedFilters/AdvancedFilters'
import CommercialDealTypeFilter from './CommercialDealTypeFilter'
import CitiesFilter from './CitiesFilter'
import PriceFilter from './PriceFilter'
import PropertyTypeFilter from './PropertyTypeFilter'
import RoomsFilter from './RoomsFilter'
import FiltersContext from '../../../context/FiltersContext'
import SelectListingsType from './AdvancedFilters/SelectListingsType'
import SortBar from '../SortBar/SortBar'
import getListings from '../../../communication/getListings'
import RoomatesFiltes from './RoomatesFiltes'

export default () => {
  const [open, setOpen] = useState(false)
  const { queryObj, setListings } = useContext(FiltersContext)
  const {
    listingType: [listingType],
    count: [, setCount]
  } = queryObj

  const handleSubmit = async () => {
    const { listings = '', count } = await getListings(queryObj)
    setListings(listings)
    setCount(count)
  }

  return (
    <div>
      <div>
        <div className="filters__basic-container">
          <b>
            איזה נכס ל
            <SelectListingsType />
            תרצו לחפש?
          </b>

          <div className="filters--fields-container smaller-text">
            <CitiesFilter />

            {listingType === 'שותפים' ? <RoomatesFiltes /> : <PropertyTypeFilter />}

            {listingType === 'מסחרי' ? <CommercialDealTypeFilter /> : <RoomsFilter />}
            <PriceFilter />
            <div className="align-row">
              <button
                className="filters--field-container filters--advanced-search-button"
                onClick={() => setOpen(!open)}
              >
                חיפוש מתקדם
              </button>
              <button
                className="filters--field-container filters--search-button"
                onClick={handleSubmit}
              >
                חיפוש
              </button>
            </div>
          </div>
        </div>
        {open && <AdvancedFilters />}
      </div>
      <SortBar />
    </div>
  )
}
