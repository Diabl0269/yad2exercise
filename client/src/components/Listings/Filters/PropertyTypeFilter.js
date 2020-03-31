import React, { useState, useContext } from 'react'
import { assetTypes } from '../../../data/assetCategories.json'
import Checkbox from '../../utils/Checkbox'
import FiltersContext from '../../../context/FiltersContext'

export default () => {
  const [open, setOpen] = useState(false)
  const [expandedDropDown, setExpandedDropDown] = useState(false)
  const [selectedAssetTypes, setSelectedAssetType] = useContext(
    FiltersContext
  ).queryObj.selectedAssetTypes

  const buttonID = 'moreTypesFilterButton'

  const assetTypesCount =
    selectedAssetTypes.length === 0
      ? 'בחרו סוגי נכסים'
      : selectedAssetTypes.length > 1
      ? `נכסים(${selectedAssetTypes.length})`
      : selectedAssetTypes[0]
  const displayMoreText = expandedDropDown ? 'עוד' : 'פחות'

  return (
    <div className="filters--field-container">
      סוג נכס
      <div>
        <button className="filters__field-box-container" onClick={() => setOpen(!open)}>
          {assetTypesCount}
        </button>
        {open && (
          <div id="assetTypeDropDown" className="filters__asset-type--dropdown">
            <ul className="checkbox__list-col">
              {expandedDropDown
                ? assetTypes.map(type => (
                    <Checkbox
                      key={type}
                      item={type}
                      selectedItems={selectedAssetTypes}
                      setItem={setSelectedAssetType}
                    />
                  ))
                : assetTypes
                    .slice(0, 6)
                    .map(type => (
                      <Checkbox
                        key={type}
                        item={type}
                        selectedItems={selectedAssetTypes}
                        setItem={setSelectedAssetType}
                      />
                    ))}
            </ul>
            <button
              id={buttonID}
              className="background-none orange-text"
              onClick={() => {
                setExpandedDropDown(!expandedDropDown)
              }}
            >
              {displayMoreText} סוגים >
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
