import React, { useState } from 'react'
import Autosuggest from 'react-autosuggest'
import theme from '../../utils/theme'
import cityNames from '../../data/cityNames'

export default ({ formik, name, setValue, value }) => {
  const [suggestions, setSuggestions] = useState([])

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0
      ? []
      : cityNames.filter(name => name.toLowerCase().slice(0, inputLength) === inputValue)
  }

  const getSuggestionValue = city => city

  const renderSuggestion = city => <div>{city}</div>

  const onChange = (event, { newValue }) => {
    if (formik) return setValue(name, newValue)
    setValue(newValue)
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }
  const inputProps = {
    placeholder: 'לדוגמא: נתניה',
    value,
    onChange
  }

  return (
    <Autosuggest
      theme={theme}
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  )
}
