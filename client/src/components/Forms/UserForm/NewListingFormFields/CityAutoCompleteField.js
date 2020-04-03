import React from 'react'
import CityAutoComplete from '../../../utils/CityAutoComplete'

import { useFormikContext, ErrorMessage } from 'formik'
import blurHandler from '../../../../utils/blurHandler'

export default ({ field: { type, text }}) => {
  const { setErrors, setFieldValue, values, setTouched } = useFormikContext()
  const value = values[type]

  return (
    <div key={type} onBlur={e => blurHandler(e, type, setTouched, setErrors)}>
      {text + ':'}
      <div id='newListingCityAutoComplete'>
        <CityAutoComplete value={value} setValue={setFieldValue} name={type} formik={true} />
      </div>
      <ErrorMessage name={type} component="div" className="error-message-container" />
    </div>
  )
}
