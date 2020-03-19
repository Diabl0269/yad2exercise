import React from 'react'
import OrangeCheckbox from '../../../utils/OrangeCheckbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Field } from "formik";

export default ({field}) => (
    <FormControlLabel
      key={field.type}
      control={
        <Field
          key={field.type}
          component={OrangeCheckbox}
          onClick={() => (field.value = !field.value)}
          value={field.value}
          inputProps={{ type: "checkbox" }}
          name={field.type}
        />
      }
      label={field.text}
    />
  );