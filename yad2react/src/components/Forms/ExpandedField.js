import React from 'react';
import {Field, ErrorMessage} from 'formik';

export default ({ text, type }) => (
    <div>
      {text + ":"}
      <Field type={type} name={type} />
      <ErrorMessage
        name={type}
        component="div"
        className="error-message-container"
      />
    </div>
  );