import React, { useContext } from 'react'
import { listingTypes } from '../../data/assetCategories.json'
import FiltersContext from '../../context/FiltersContext'

export default () => {
  const dosentExistAlert = text => alert(`כאן יהיה עמוד ${text}`)

  const {
    queryObj: {
      listingType: [, setListingType]
    }
  } = useContext(FiltersContext)

  const changeListingType = type => {
    setListingType(type)   
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
