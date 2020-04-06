import React, { useState } from 'react'
import FormFields from './NewListingFormFields/FormFields'
import FormGroup from '@material-ui/core/FormGroup'
import updateListing from '../../../communication/updateListing';
import fieldsObj from '../../../utils/listingObj'
import mapValuesToListing from '../../../utils/mapValuesToListing'
import { Formik, Form } from 'formik'
import { navigate } from 'hookrouter'

export default () => {
  //addListing-updateListing, add delete media button
  const title = 'ערוך מודעה'
  const userURI = '/user'
  const serverErrorMessage = 'תקלת שרת, אנה נסה שנית מאוחר יותר'
  const requiredFieldMessage = 'שדה חובה'
  const successMessage = 'המודעה נערכה בהצלחה!'
  const [displayServerErrorMessage, setDisplayServerErrorMessage] = useState(false)

  const listing = JSON.parse(localStorage.getItem('listing'))
  const { address, assetDetails, saleDetails, attributes, media, listingType, id } = listing
  const attributesValues = {}
  for (let [key, value] of Object.entries(attributes)) attributesValues[key] = value.exists

  const initialValues = {
    ...address,
    ...assetDetails,
    ...attributesValues,
    ...media,
    ...saleDetails,
    listingType
  }

  const handleSubmit = async values => {
    const updatedListing = mapValuesToListing(values)
    const listingUpdated = await updateListing(updatedListing, id)
    if (listingUpdated) {
      alert(successMessage)
      return navigate(userURI)
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
      <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
        <Form>
          <FormGroup>
            <FormFields fields={fieldsObj} />
          </FormGroup>
          <button type="submit" id="submitButton">
            {title}
          </button>
        </Form>
      </Formik>
    </div>
  )
}
