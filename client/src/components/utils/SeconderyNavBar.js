import React, { useEffect } from 'react'
import { listingTypes } from '../../data/assetCategories.json'
import getListings from '../../communication/getListings'

const SecondaryNavBar = ({ queryObj ,setListings }) => {
  const dosentExistAlert = text => alert(`כאן יהיה עמוד ${text}`)
  
  const {
    listingType: [listingType, listingTypeDispatch]
  } = queryObj

  const changeListingType = type => {
    listingTypeDispatch(type)
    getListings(queryObj, setListings, type)
  }

  const secondaryNavBarActions = [
    { text: 'כונס נכסים', clickHandler: dosentExistAlert },
    { text: 'מדד הנדל"ן', clickHandler: dosentExistAlert },
    { text: 'יד1 דירות חדשות', clickHandler: dosentExistAlert },
    { text: 'הערכת שווי נכס', clickHandler: dosentExistAlert }
  ]

  return (
    <div className="secondary-nav-bar--container">
      <ul className="list__nav-bar right-list">
        {listingTypes.map(type => (
          <li key={type} className="list-item__nav-bar">
            <button className="secondary-nav-bar-button" onClick={() => changeListingType(type)}>
              {type}
            </button>
          </li>
        ))}
      </ul>
      <ul className="list__nav-bar">
        {secondaryNavBarActions.map(action => (
          <li key={action.text} className="list-item__nav-bar">
            <button
              className="secondary-nav-bar-button"
              onClick={() => action.clickHandler(action.text)}
            >
              {action.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SecondaryNavBar
