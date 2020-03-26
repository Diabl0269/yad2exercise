import getUserListings from './getUserListings'
import getFilterdListings from './getFilterdListings'

export default async (queryObj, listingsDispatch) => {
  listingsDispatch([])
  let data
  try {
    const isUserListings = window.location.pathname === '/user/listings'
    data = isUserListings
      ? await getUserListings(queryObj)
      : await getFilterdListings(queryObj)
  } catch {
    return (document.querySelector('#loader').innerHTML = 'תקלת שרת')
  }
  const {listings, count} = data
  if (listings.length === 0)
    return (document.querySelector('#loader').innerHTML = 'לא נמצאו רשומות')
  queryObj.count[1](count)
  listingsDispatch(listings)
}
