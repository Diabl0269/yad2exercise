import React, { useContext } from 'react'
import CoreDetails from './CoreDetails'
import RecordImage from './RecordImage'
import RecordAddress from './RecordAddress'
import displayPrice from '../../utils/displayPrice'
import ListItemContext from '../../context/ListItemContext'
import moment from 'moment'

const ClosedListItem = () => {
  const { saleDetails: {price}, updatedAt } = useContext(ListItemContext)  
  const formatedPrice = displayPrice(price)
  const hasUpdatedToday = moment().isSame(updatedAt, 'day')
  
  const openNewTab = e => {
    e.stopPropagation()
    alert('כאן יפתח טאב חדש')
  }
  return (
    <div className="record-container">
      <RecordImage />
      <RecordAddress className="record__inside-container" />
      <CoreDetails className="record__inside-container middle-container" />

      <div className="record__inside-container">
        <div className="left-container">
          <div className="align-column">
            <span className="smaller-text" onClick={openNewTab}>
              טאב חדש
            </span>
            {formatedPrice}
            <span>{hasUpdatedToday ? 'עודכן היום' : ''}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClosedListItem
