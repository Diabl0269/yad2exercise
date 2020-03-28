import React, { useContext } from 'react'
import ListItemContext from '../../context/ListItemContext'
import { navigate } from 'hookrouter'
import AlertDialog from '../Mui/AlertDialog'
import varsObj from '../../data/deleteListingDialogVars.json'
import deleteListing from '../../communication/deleteListing'

export default () => {
  const listing = useContext(ListItemContext)

  const editListingHandler = e => {
    localStorage.setItem('listing', JSON.stringify(listing))
    navigate('/user/listings/edit')
  }
  const className = 'width-full height-half button__off-white'
  return (
    <div>
      <button onClick={editListingHandler} className={className}>
        עריכת מודעה
      </button>
      <AlertDialog varsObj={varsObj} deleteFunc={deleteListing} buttonClassName={className} id={listing._id}/>
    </div>
  )
}
