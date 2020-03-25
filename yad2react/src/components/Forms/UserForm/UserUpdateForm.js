import React, { useState, useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import updateUser from '../../../communication/updateUser'
import UserContext from '../../../context/UserContext'
import Loader from '../../utils/Loader'

const UserUpdateForm = () => {
  const user = useContext(UserContext)
  const [userUpdateMessage, setUserUpdateMessage] = useState('')
  const requiredFieldMessage = 'שדה חובה'

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
      errors.email = 'כתובת מייל אינה תקינה'
    }
    if (values.password.length > 0 && values.password.length < 8)
      errors.password = 'הסיסמה חייבת להכיל לפחות שמונה תווים'
    return errors
  }

  const ExpandedFiled = ({ text, type }) => (
    <div>
      {text + ':'}
      <Field type={type} name={type} />
      <ErrorMessage
        name={type}
        component="div"
        className="error-message-container"
      />
    </div>
  )

  return (
    <div id="updateFormContainer">
      <h1>עדכון משתמש</h1>
      {user[0].userDetails ? (
        <Formik
          initialValues={{ password: '', ...user[0].userDetails }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          <Form>
            {userUpdateMessage}
            <ExpandedFiled text="שם פרטי" type="firstName" />
            <ExpandedFiled text="שם משפחה" type="lastName" />
            <ExpandedFiled text="אימייל" type="email" />
            <ExpandedFiled text="פלאפון" type="phone" />
            <ExpandedFiled text="פלאפון2" type="phone2" />
            <ExpandedFiled text="סיסמה" type="password" />
            <button type="submit">עדכן נתונים</button>
          </Form>
        </Formik>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default UserUpdateForm
