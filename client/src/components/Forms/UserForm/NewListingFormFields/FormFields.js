import React from 'react'
import AttributesField from './AttributesField'
import DatePickerField from './DatePickerField'
import CityAutoCompleteField from './CityAutoCompleteField'
import MediaUploadField from './MediaUploadField'
import ExpandedField from '../../ExpandedField'
import SelectField from './SelectField'
import {
  assetTypes,
  assetStates,
  listingTypes
} from '../../../../data/assetCategories.json'

export default ({ fields }) => {
  return fields.map((field, i) => {
    switch (field.name) {
      case 'attributes':
        return <AttributesField key={i} field={field} />
      case 'date':
        return <DatePickerField key={i} field={field} />
      default:
        break
    }

    switch (field.type) {
      case 'city':
        return <CityAutoCompleteField key={i} field={field} />
      case 'images':
      case 'videos':
        return <MediaUploadField key={i} field={field} />
      case 'furnitureDescription':
        return <ExpandedField field={field} key={i} component="textarea" className='new-listings-select-field'/>
      case 'assetType':
        return <SelectField field={field} key={i} categories={assetTypes} />
      case 'assetState':
        return <SelectField field={field} key={i} categories={assetStates} />
      case 'listingType':
        return <SelectField field={field} key={i} categories={listingTypes} />
      default:
        break
    }
    return <ExpandedField field={field} key={i} categories={listingTypes} className='new-listings-select-field'/>
  })
}
