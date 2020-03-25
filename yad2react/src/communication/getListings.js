import getUserListings from './getUserListings'
import getFilterdListings from './getFilterdListings'

export default async (queryObj, listingsDispatch) => {
  listingsDispatch([])
  let data
  try {
    const isUserPage = window.location.pathname === '/user/listings'
    data = isUserPage
      ? await getUserListings(queryObj)
      : await getFilterdListings(queryObj)
  } catch {
    return (document.querySelector('#loader').innerHTML = 'תקלת שרת')
  }
  console.log(data);
  const {listings, count} = data
  if (data.length === 0)
    return (document.querySelector('#loader').innerHTML = 'לא נמצאו רשומות')
  queryObj.count[1](count)
  listingsDispatch(listings)
}
