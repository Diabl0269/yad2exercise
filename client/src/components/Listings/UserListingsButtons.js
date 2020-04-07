import React, { useEffect, useContext, useState } from 'react'
import ListItemContext from '../../context/ListItemContext'
import { navigate } from 'hookrouter'
import DeleteDialog from '../Mui/DeleteDialog'
import varsObj from '../../data/deleteListingDialogVars.json'
import deleteListing from '../../communication/deleteListing'
import FiltersContext from '../../context/FiltersContext'
import getListings from '../../communication/getListings'

export default () => {
  const listing = useContext(ListItemContext)
  const { queryObj, setListings } = useContext(FiltersContext)
  const [deleted, setDeleted] = useState(false)
  const {
    count: [, setCount]
  } = queryObj

  useEffect(() => {
    const getAndSetListings = async () => {
      const { listings = '', count } = await getListings(queryObj)
      setListings(listings)
      setCount(count)
    }
    if (deleted) getAndSetListings()
  })

  const editListingHandler = () => {
    localStorage.setItem('listing', JSON.stringify(listing))
    navigate('/user/listings/edit')
  }

  return (
    <div id="userListingsButtons">
      <button onClick={editListingHandler}>עריכת מודעה</button>
      <DeleteDialog
        varsObj={varsObj}
        deleteFunc={deleteListing}
        id={listing._id}
        setDeleted={setDeleted}
      />
    </div>
  )
}
