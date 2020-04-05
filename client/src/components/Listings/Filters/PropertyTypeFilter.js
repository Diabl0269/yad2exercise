import React, { useState, useContext } from 'react'
import { assetTypes } from '../../../data/assetCategories.json'
import Checkbox from '../../utils/Checkbox'
import FiltersContext from '../../../context/FiltersContext'
import classNames from 'classnames'

export default () => {
  const maxAssetTypesInRow = 4
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
  const displayMoreText = expandedDropDown ? 'פחות' : 'עוד'

  return (
    <div className="filters--field-container">
      סוג נכס
      <div>
        <button className="filters__field-box-container" onClick={() => setOpen(!open)}>
          {assetTypesCount}
        </button>
        {open && (
          <div
            className={classNames(
              { 'filters__asset-type--dropdown': !expandedDropDown },
              { 'filters__asset-type--dropdown-open': expandedDropDown }
            )}
          >
            <ul>
              {expandedDropDown ? (
                <div className="align-row flex-wrap">
                  {assetTypes.map(type => (
                    <div className="width-quarter">
                      <Checkbox
                        key={type}
                        item={type}
                        selectedItems={selectedAssetTypes}
                        setItem={setSelectedAssetType}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                // return <Checkbox
                //   key={type}
                //   item={type}
                //   selectedItems={selectedAssetTypes}
                //   setItem={setSelectedAssetType}
                // />

                assetTypes
                  .slice(0, 6)
                  .map(type => (
                    <Checkbox
                      key={type}
                      item={type}
                      selectedItems={selectedAssetTypes}
                      setItem={setSelectedAssetType}
                    />
                  ))
              )}
            </ul>
            <button
              id={buttonID}
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
