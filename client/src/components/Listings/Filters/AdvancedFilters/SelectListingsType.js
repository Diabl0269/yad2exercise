import React, { useContext } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { listingTypes } from '../../../../data/assetCategories.json'
import FiltersContext from '../../../../context/FiltersContext'
import getListings from '../../../../communication/getListings'

export default () => {
  const { queryObj, dispatch } = useContext(FiltersContext)

  const {
    listingType: [listingType, listingTypeDispatch]
  } = queryObj

  const handleChange = e => {
    const { value } = e.target
    listingTypeDispatch(value)
    getListings(queryObj, dispatch, value)
  }

  return (
    <div id="listingsTypeSelect">
      <Select value={listingType} onChange={handleChange}>
        {listingTypes.map(type => (
          <MenuItem value={type} key={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}
