import React, { useState } from 'react'
import ClosedListItem from './ClosedListItem'
import OpenListItem from './OpenListItem'
import OpenContext from '../../context/OpenContext'

export default () => {
  const [open,setOpen] = useState(false)
  return (
    <OpenContext.Provider value={setOpen}>
      <li className="listing__list-item">
        {open ? <OpenListItem /> : <ClosedListItem />}
      </li>
    </OpenContext.Provider>
  )
}
