import React, { useContext } from 'react'
import ListItemContext from '../../context/ListItemContext'
import { navigate } from 'hookrouter'

export default () => {
  const listing = useContext(ListItemContext)

  const editListingHandler = e => {    
    localStorage.setItem('listing', JSON.stringify(listing))
    navigate('/user/listings/edit')
  }

  const deleteListingHandler = async e => {}

  return (
    <div>
      <button
        onClick={editListingHandler}
        className="width-full height-half button__off-white"
      >
        עריכת מודעה
      </button>
      <button onClick={deleteListingHandler} className="width-full height-half">
        מחיקת מודעה
      </button>
    </div>
  )
}
