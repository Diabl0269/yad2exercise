import React, { useContext, useState } from 'react'
import ListItemContext from '../../context/ListItemContext'
import classNames from 'classnames'

export default () => {
  const [open, setOpen] = useState(false)

  const {
    listingUser: {
      userDetails: { firstName, phone, phone2 }
    }
  } = useContext(ListItemContext)

  return (
    <div onClick={e => e.stopPropagation()}>
      <button className="details-button" onClick={() => setOpen(!open)}>
        הצגת מספר טלפון
      </button>
      <div id="detailsDropDown" className={classNames('display-none', { details__dropdown: open })}>
        <div className="details__dropdown-tab">{firstName}</div>
        <div className="details__dropdown-tab">{phone}</div>
        {phone2 && <div className="details__dropdown-tab">{phone2}</div>}
        <div className="details__dropdown-tab" onClick={() => alert('כאן ישלח מייל למפרסם')}>
          שליחת דוא"ל למפרסם
        </div>
      </div>
    </div>
  )
}
