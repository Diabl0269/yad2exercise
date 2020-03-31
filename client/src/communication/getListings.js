import getUserListings from './getUserListings'
import getFilterdListings from './getFilterdListings'
import getFavoritesListings from './getFavoritesListings'

export default async (queryObj, listingsDispatch, type) => {
  if (type) queryObj = { ...queryObj, listingType: [type] }

  listingsDispatch([])
  let data
  try {
    const isUserListings = window.location.pathname === '/user/listings'
    const isFavoritesListings = window.location.pathname === '/user/favorites'
    data = isUserListings
      ? await getUserListings(queryObj)
      : isFavoritesListings
      ? await getFavoritesListings(queryObj)
      : await getFilterdListings(queryObj)
  } catch {
    return (document.querySelector('#loader').innerHTML = 'תקלת שרת')
  }
  const { listings, count } = data
  if (listings.length === 0)
    return (document.querySelector('#loader').innerHTML = 'לא נמצאו רשומות')
  queryObj.count[1](count)
  listingsDispatch(listings)
}
