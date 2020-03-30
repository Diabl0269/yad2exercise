import React, { useState } from 'react'
import fieldsObj from '../../../utils/listingObj'
import { Formik, Form } from 'formik'
import { navigate } from 'hookrouter'
import FormGroup from '@material-ui/core/FormGroup'
import addListing from '../../../communication/addListing'
import FormFields from './NewListingFormFields/FormFields'

export default () => {
  const title = 'מודעה חדשה'
  const userURI = '/user'
  const serverErrorMessage = 'תקלת שרת, אנה נסה שנית מאוחר יותר'
  const requiredFieldMessage = 'שדה חובה'
  const [displayServerErrorMessage, setDisplayServerErrorMessage] = useState(false)
  const fieldsValues = {}
  for (let field of fieldsObj) {
    fieldsValues[field.type] = field.value
  }

  const handleSubmit = async values => {
    const listingAdded = await addListing(values)
    if (listingAdded) {
      alert('המודעה נוספה בהצלחה')
      navigate(userURI)
    }
    setDisplayServerErrorMessage(true)
  }

  const validate = values => {
    const errors = {}

    //Add Errors here
    fieldsObj.forEach(({ type, name, notReuired }) => {
      const key = type
      const value = values[key]
      if (name === 'attributes' || notReuired) return //add not requierd fields here
      if (!value) errors[key] = requiredFieldMessage
    })

    return errors
  }

  return (
    <div id="newListingContainer">
      <h1>{title}</h1>
      {displayServerErrorMessage && serverErrorMessage}
      <Formik initialValues={fieldsValues} validate={validate} onSubmit={handleSubmit}>
        <Form>
          <FormGroup>
            <FormFields fields={fieldsObj} />
          </FormGroup>
          <button type="submit" id="submitButton">
            העלה מודעה
          </button>
        </Form>
      </Formik>
    </div>
  )
}
