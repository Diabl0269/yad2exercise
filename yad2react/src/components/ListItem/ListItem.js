import React, { useState } from 'react'
import ClosedListItem from './ClosedListItem'
import OpenListItem from './OpenListItem'

const ListItem = () => {
  const [isOpen, setIsOpen] = useState(false)
  const clickHandler = () => setIsOpen(!isOpen)

  return (
    <li onClick={clickHandler}>
      {isOpen ? <OpenListItem /> : <ClosedListItem />}
    </li>
  )
}

export default ListItem
