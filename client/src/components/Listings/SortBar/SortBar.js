import React from 'react'
import SortOption from './SortOption'
import OnlyWithFilter from './OnlyWithFilter/OnlyWithFIlter'
import MapDisplayButton from './MapDisplayButton'

export default () => (
  <div id="sortBar">
    <SortOption />
    <OnlyWithFilter />
    <MapDisplayButton />
  </div>
)
