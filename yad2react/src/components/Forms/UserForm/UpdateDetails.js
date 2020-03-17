import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import updateUser from '../../../communication/updateUser';


const UpdateDetails = ({ user }) => {
  const [userUpdateMessage, setUserUpdateMessage] = useState('');
  const requiredFieldMessage = "שדה חובה";
  const ExpandedFiled = ({ text, type }) => (
    <div className="align-row">
      {text + ":"}
      <Field type={type} name={type} />
      <ErrorMessage
        name={type}
        component="div"
        className="error-message-container"
      />
    </div>
  );
  return (
    <div id="formContainer">
      <h1>עדכון משתמש</h1>
      <Formik
        initialValues={{ password: "", ...user }}
        validate={values => {
          const errors = {};

          for (let [key, value] of Object.entries(values)) {
            if (key === "phone2" || key === "password") continue;
            if (!value) errors[key] = requiredFieldMessage;
          }
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "כתובת מייל אינה תקינה";
          }
          if (values.password.length > 0 && values.password.length < 8)
            errors.password = "הסיסמה חייבת להכיל לפחות שמונה תווים";
          return errors;
        }}
        onSubmit={async (values) => {
          const successfulUpdate = await updateUser(values);
        //   setUserUpdateMessage(successfulUpdate ? "משתמש עודכן בהצלחה!" : 'תקלת שרת')
        }}
      >
        {() => (
          <Form className="user-update-form">
            {userUpdateMessage}
            <ExpandedFiled text="שם פרטי" type="firstName" />
            <ExpandedFiled text="שם משפחה" type="lastName" />
            <ExpandedFiled text="אימייל" type="email" />
            <ExpandedFiled text="פלאפון" type="phone" />
            <ExpandedFiled text="פלאפון2" type="phone2" />
            <ExpandedFiled text="סיסמה" type="password" />
            <button type="submit">עדכן נתונים</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateDetails;
