import React, { useContext } from 'react'
import RecordImage from './RecordImage'
import RecordAddress from './RecordAddress'
import CoreDetails from './CoreDetails'
import DetailsDropdown from './DetailsDropDown'
import Description from './Description'
import ListItemContext from '../../context/ListItemContext'
import displayPrice from '../../utils/displayPrice'
import OpenContext from '../../context/OpenContext'

export default () => {
  const { pathname } = window.location
  const isUserListings = pathname === '/user/favorites' || pathname === '/user/listings'

  const {
    saleDetails: { price }
  } = useContext(ListItemContext)
  const setOpen = useContext(OpenContext)
  const formatedPrice = displayPrice(price)

  return (
    <div>
      <div className="record-container" onClick={() => setOpen(false)}>
        <RecordImage />

        <div className="open-listing--middle-container">
          <RecordAddress className="align-column" />
          <br />
          <CoreDetails className="middle-container" />
        </div>

        <div className="push-left">
          <div className="left-container">{formatedPrice}</div>
          {!isUserListings && <DetailsDropdown />}
        </div>
      </div>

      <Description />

      <div className="open-listing--footer">
        <div>פרטי התקשרות</div>
        <div>מצאתי טעות</div>
      </div>
    </div>
  )
}
