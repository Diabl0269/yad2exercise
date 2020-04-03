import React from 'react'
import MuiCheckbox from '@material-ui/core/Checkbox'
import UnifiedThemeProvider from '../Mui/UnifiedThemeProvider'

const Checkbox = ({ item, selectedItems, setItem }) => {
  const handleCheckboxClick = () => {
    let newSelectedItems
    if (selectedItems.includes(item))
      newSelectedItems = selectedItems.filter(curItem => curItem !== item)
    else newSelectedItems = selectedItems.concat(item)
    setItem(newSelectedItems)
  }

  return (
    <li key={item} className='checkbox__list-item'>
      <UnifiedThemeProvider
        Component={MuiCheckbox}
        color="#ff7100"
        id={item}
        onClick={handleCheckboxClick}
        checked={!!selectedItems.includes(item)}
      />
      {item}
    </li>
  )
}
export default Checkbox
