import React, { useContext } from 'react'
import RecordImage from './RecordImage'
import RecordAddress from './RecordAddress'
import CoreDetails from './CoreDetails'
import DetailsDropdown from './DetailsDropDown'
import Description from './Description'
import ListItemContext from '../../context/ListItemContext'
import displayPrice from '../../utils/displayPrice'

const OpenListItem = () => {
  const {
    saleDetails: { price }
  } = useContext(ListItemContext)
  const formatedPrice = displayPrice(price)

  return (
    <div>
      <div className="record-container">
        <RecordImage />

        <div className="open-listing--middle-container">
          <RecordAddress className="align-column" />
          <br />
          <CoreDetails className="middle-container" />
        </div>

        <div className="push-left">
          <div className="left-container">
            {formatedPrice}
          </div>
          <DetailsDropdown />
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

export default OpenListItem
