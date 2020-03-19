import React from "react";
import OrangeDatePicker from '../../../utils/OrangeDatePicker';
import { Field } from "formik";

export default ({ field }) => (
  <div
    key={field.type}
    className="align-column"
    id="newListingEntranceDateContainer"
  >
    תאריך כניסה:
    <Field
      component={OrangeDatePicker}
      onClick={() => (field.value = !field.value)}
      type={field.type}
      value={field.value}
      inputProps={{ type: "checkbox" }}
      name={field.type}
    />
  </div>
);
