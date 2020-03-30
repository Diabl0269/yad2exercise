import React from "react";
import { Field, ErrorMessage } from "formik";

export default ({ component, field: { type, text } }) => {
  return (
    <div key={type}>
      {text + ":"}
      <Field type={type} name={type} component={component} />
      <ErrorMessage
        name={type}
        component="div"
        className="error-message-container"
      />
    </div>
  );
};
