import React from "react";
import CitiesAutoComplete from "../../../utils/CitiesAutoComplete";
import { useFormikContext, ErrorMessage } from "formik";
import blurHandler from "../../../../utils/blurHandler";

export default ({ field: { type, text } }) => {
  const { setErrors, setFieldValue, values, setTouched } = useFormikContext();
  const value = values[type];

  return (
    <div key={type} onBlur={e => blurHandler(e, type, setTouched, setErrors)}>
      {text + ":"}
      <CitiesAutoComplete
        value={value}
        setValue={setFieldValue}
        name={type}
        formik={true}
      />
      <ErrorMessage
        name={type}
        component="div"
        className="error-message-container"
      />
    </div>
  );
};
