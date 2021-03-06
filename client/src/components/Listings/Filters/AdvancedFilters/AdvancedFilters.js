import React from 'react'
import AssetAttributes from './AssetAttributes'
import AssetDetails from './AssetDetails'
import FreeTextFilter from './FreeTextFilter'
import SearchAndReset from './SearchAndReset'

export default () => {
  return (
    <div id="advancedFilters" className="filters__advanced-dropdown-container">
      <AssetAttributes />
      <AssetDetails />
      <FreeTextFilter />
      <SearchAndReset />
    </div>
  )
}
