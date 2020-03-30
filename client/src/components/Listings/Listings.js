import React, { useContext } from 'react'
import ListItem from '../ListItem/ListItem'
import Loader from '../utils/Loader'
import FiltersContext from '../../context/FiltersContext'
import ListItemContext from '../../context/ListItemContext'
import UserListingsButtons from './UserListingsButtons'
import classNames from "classnames";

const Listings = () => {
  const userListingsPath = '/user/listings'
  const curPath = window.location.pathname
  const isUserListings = userListingsPath === curPath
  const { listings } = useContext(FiltersContext)
  return listings && listings.length > 0 ? (
    <ul className="listing-container">
      {listings.map((record, i) => (
        <div className={classNames({'align-row': isUserListings})} key={i}>
          <ListItemContext.Provider value={record}>
            <ListItem key={record._id} record={record} />
            {isUserListings && <UserListingsButtons />}
          </ListItemContext.Provider>
        </div>
      ))}
    </ul>
  ) : (
    <Loader />
  )
}

export default Listings
