import React, { useState, useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import updateUser from '../../../communication/updateUser'
import UserContext from '../../../context/UserContext'
import Loader from '../../utils/Loader'

export default () => {
  const mailErrorMessage = 'כתובת מייל אינה תקינה'
  const passwordErrorMessage = 'הסיסמה חייבת להכיל לפחות שמונה תווים'
  const requiredFieldMessage = 'שדה חובה'

  const [user] = useContext(UserContext)
  const { userDetails, agencyName } = user
  const [userUpdateMessage, setUserUpdateMessage] = useState('')

  const handleSubmit = async values => {
    const updatedUser = await updateUser(values)
    const message = updatedUser ? 'משתמש עודכן בהצלחה!' : 'תקלת שרת'
    setUserUpdateMessage(message)
  }

  const validate = values => {
    const errors = {}

    for (let [key, value] of Object.entries(values)) {
      if (key === 'phone2' || key === 'password') continue
      if (!value) errors[key] = requiredFieldMessage
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = mailErrorMessage
    }
    if (values.password.length > 0 && values.password.length < 8)
      errors.password = passwordErrorMessage
    return errors
  }

  const ExpandedField = ({ text, type }) => (
    <div>
      {text + ':'}
      <Field type={type} name={type} />
      <ErrorMessage name={type} component="div" className="error-message-container" />
    </div>
  )
  return (
    <div id="updateFormContainer">
      <h1>עדכון משתמש</h1>
      {userDetails ? (
        <Formik
          initialValues={{ agencyName, password: '', ...userDetails }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          <Form>
            {userUpdateMessage}
            <ExpandedField text="שם פרטי" type="firstName" />
            <ExpandedField text="שם משפחה" type="lastName" />
            <ExpandedField text="אימייל" type="email" />
            <ExpandedField text="פלאפון" type="phone" />
            <ExpandedField text="פלאפון2" type="phone2" />
            <ExpandedField text="סיסמה" type="password" />
            <ExpandedField text="שם סוכנות" type="agencyName" />
            <button type="submit">עדכן נתונים</button>
          </Form>
        </Formik>
      ) : (
        <Loader />
      )}
    </div>
  )
}
