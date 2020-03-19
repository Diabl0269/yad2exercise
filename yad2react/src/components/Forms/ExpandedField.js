import React from "react";
import { Field, ErrorMessage } from "formik";

export default ({  className='', component, field }) => {
  const {type, text} = field
  return (
    <div key={type} className={className}>
      {text + ":"}
      <Field type={type} name={type} component={component} className='' />
      <ErrorMessage
        name={type}
        component="div"
        className="error-message-container"
      />
    </div>
  );
}
