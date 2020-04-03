import getUserListings from './getUserListings'
import getFilterdListings from './getFilterdListings'
import getFavoritesListings from './getFavoritesListings'
import mapStateToData from '../utils/mapStateToData'

export default async (queryObj, listingsDispatch) => {
  const queryData = mapStateToData(queryObj)
  try {
    const isUserListings = window.location.pathname === '/user/listings'
    const isFavoritesListings = window.location.pathname === '/user/favorites'

    //Data is listings and count
    const data = isUserListings
      ? await getUserListings(queryData)
      : isFavoritesListings
      ? await getFavoritesListings(queryData)
      : await getFilterdListings(queryData)

    return data
  } catch {
    return {}
  }
}
