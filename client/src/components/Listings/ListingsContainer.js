import Filters from './Filters/Filters'
import Listings from './Listings'
import Pagination from './Pagination'
import React from 'react'

export default () => {
  return (
    <div className="list-container">
      <Filters />

      <div id="listing">
        <Listings />
        <Pagination />
      </div>
    </div>
  )
}
