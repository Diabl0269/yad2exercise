import React from 'react'
import OrangeCheckbox from '../../../utils/OrangeCheckbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Field, useFormikContext } from "formik";

export default ({field: {type, text}}) => {

  const { values, setFieldValue } = useFormikContext()
  const value =values[type]

  const clickHandler = e => {
    setFieldValue(type, e.target.value)
  }
  
  return (
    <FormControlLabel
      key={type}
      control={
        <Field
          component={OrangeCheckbox}
          onClick={clickHandler}
          value={value}
          inputProps={{ type: "checkbox" }}
          name={type}
        />
      }
      label={text}
    />
  );
}