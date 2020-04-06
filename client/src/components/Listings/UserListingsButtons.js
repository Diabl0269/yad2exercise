import React, { useContext } from 'react'
import ListItemContext from '../../context/ListItemContext'
import { navigate } from 'hookrouter'
import DeleteDialog from '../Mui/DeleteDialog'
import varsObj from '../../data/deleteListingDialogVars.json'
import deleteListing from '../../communication/deleteListing'

export default () => {
  const listing = useContext(ListItemContext)

  const editListingHandler = () => {
    localStorage.setItem('listing', JSON.stringify(listing))
    navigate('/user/listings/edit')
  }
  
  return (
    <div id="userListingsButtons">
      <button onClick={editListingHandler}>עריכת מודעה</button>
      <DeleteDialog varsObj={varsObj} deleteFunc={deleteListing} id={listing._id} />
    </div>
  )
}
