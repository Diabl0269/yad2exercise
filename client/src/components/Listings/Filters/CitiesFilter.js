import React, { useContext } from 'react'
import CityAutoComplete from '../../utils/CityAutoComplete';
import FiltersContext from '../../../context/FiltersContext'

export default () => {
  const {
    queryObj: {
      citySearchValue: [citySearchValue, setCitySearchValue]
    }
  } = useContext(FiltersContext)

  return (
    <div className="filters--field-container">
      חפשו עיר
      <CityAutoComplete value={citySearchValue} setValue={setCitySearchValue} />
    </div>
  )
}
