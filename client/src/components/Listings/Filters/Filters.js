import React, { useContext } from 'react'
import AdvancedFilters from './AdvancedFilters/AdvancedFilters'
import CitiesFilter from './CitiesFilter'
import PriceFilter from './PriceFilter'
import PropertyTypeFilter from './PropertyTypeFilter'
import RoomsFilter from './RoomsFilter'
import FiltersContext from '../../../context/FiltersContext'
import toggleDropDown from '../../../utils/toggleDropDown'
import SelectListingsType from './AdvancedFilters/SelectListingsType'
import SortBar from '../SortBar/SortBar'
import getListings from '../../../communication/getListings'

export default () => {
  const { queryObj, dispatch } = useContext(FiltersContext)
  const { listingType } = queryObj
  const handleSubmit = () => {
    getListings(queryObj, dispatch)
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

            {listingType === 'שותפים' ? (
              <div className="filters--field-container">שותפים</div>
            ) : (
              <PropertyTypeFilter />
            )}

            {listingType === 'מסחרי' ? (
              <div className="filters--field-container">בחרו עסקה</div>
            ) : (
              <RoomsFilter />
            )}
            <PriceFilter />
            <div className="align-row">
              <button
                className="filters--field-container filters--advanced-search-button"
                onClick={e => toggleDropDown(e, 'advancedFilters')}
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
        <AdvancedFilters />
      </div>
      <SortBar />
    </div>
  )
}
