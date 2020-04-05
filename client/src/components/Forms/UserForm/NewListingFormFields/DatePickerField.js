import React from "react";
import OrangeDatePicker from "../../../utils/OrangeDatePicker";
import { Field } from "formik";

export default ({ field: { type, value } }) => (
  <div key={type} id="newListingEntranceDateContainer">
    תאריך כניסה:
    <Field
      component={OrangeDatePicker}
      type={type}
      value={value}
      name={type}
    />
  </div>
);
