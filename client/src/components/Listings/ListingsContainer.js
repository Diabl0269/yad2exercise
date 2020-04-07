import Filters from './Filters/Filters'
import Listings from './Listings'
import Pagination from './Pagination'
import React from 'react'

export default () => {
  const isUserFavoritesPage = window.location.pathname === '/user/favorites'

  return (
    <div className="list-container">
      {!isUserFavoritesPage && <Filters />}

      <div id="listing">
        <Listings />
        {!isUserFavoritesPage && <Pagination />}
      </div>
    </div>
  )
}
