import React, { useContext } from 'react'
import ListItem from '../ListItem/ListItem'
import Loader from '../utils/Loader'
import FiltersContext from '../../context/FiltersContext'
import ListItemContext from '../../context/ListItemContext'
import UserListingsButtons from './UserListingsButtons'
import classNames from 'classnames'

export default () => {
  const userListingsPath = '/user/listings'
  const curPath = window.location.pathname
  const isUserListings = userListingsPath === curPath
  const { listings } = useContext(FiltersContext)

  return listings === undefined ? (
    <Loader />
  ) : listings === '' ? (
    <h1 className="justify-flex-row-center">{'תקלת שרת'}</h1>
  ) : listings.length === 0 ? (
    <h1 className="justify-flex-row-center">{'לא נמצאו רשומות'}</h1>
  ) : (
    <ul className="listing-container">
      {listings.map((record, i) => (
        <div className={classNames({ 'align-row': isUserListings })} key={i}>
          <ListItemContext.Provider value={record}>
            <ListItem key={record._id} record={record} />
            {isUserListings && <UserListingsButtons />}
          </ListItemContext.Provider>
        </div>
      ))}
    </ul>
  )
}
