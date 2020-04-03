import React, { useContext } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { listingTypes } from '../../../../data/assetCategories.json'
import FiltersContext from '../../../../context/FiltersContext'

export default () => {
  const {
    queryObj: {
      listingType: [listingType, listingTypeDispatch]
    }
  } = useContext(FiltersContext)

  const handleChange = e => {
    const { value } = e.target
    listingTypeDispatch(value)
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
