import React, { useContext } from 'react'
import FiltersContext from '../../../../context/FiltersContext'
import Checkbox from '../../../utils/Checkbox'

export default () => {
  const [selectedAttributes, setSelectedAttributes] = useContext(
    FiltersContext
  ).queryObj.selectedAttributes

  const attributes = [
    'דלתות פנדור',
    'חניה',
    'מעלית',
    'מיזוג',
    'מרפסת',
    'ממ"ד',
    'סורגים',
    'מחסן',
    'גישה לנכים',
    'משפוצת',
    'מרוהטת',
    'בבלעדיות'
  ]

  return (
    <div className="filters__advanced--asset-attributes-container border-bottom">
      <b>מאפייני דירה</b>
      <div className="filters__advanced--asset-attributes">
        {attributes.map(attribute => (
          <Checkbox
            key={attribute}
            item={attribute}
            selectedItems={selectedAttributes}
            setItem={setSelectedAttributes}
          />
        ))}
      </div>
    </div>
  )
}
