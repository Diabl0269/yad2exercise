import React, { useState, useContext } from 'react'
import { assetTypes } from '../../../data/assetCategories.json'
import Checkbox from '../../utils/Checkbox'
import FiltersContext from '../../../context/FiltersContext'

export default () => {
  const dealTypes = ['מכירה', 'השכרה']
  const [open, setOpen] = useState(false)
  const {
    queryObj: {
      selectedDealTypes: [selectedDealTypes, setSelectedDealTypes]
    }
  } = useContext(FiltersContext)

  const dealsTypesCount =
    selectedDealTypes.length === 0
      ? 'בחרו סוגי עסקאות'
      : selectedDealTypes.length > 1
      ? `עסקאות(${selectedDealTypes.length})`
      : selectedDealTypes[0]

  return (
    <div className="filters--field-container">
      בחרו עסקה
      <div>
        <button className="filters__field-box-container" onClick={() => setOpen(!open)}>
          {dealsTypesCount}
        </button>
        {open && (
          <div className="filters__asset-type--dropdown">
            <ul>
              {dealTypes.map(type => (
                <Checkbox
                  key={type}
                  item={type}
                  selectedItems={selectedDealTypes}
                  setItem={setSelectedDealTypes}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
