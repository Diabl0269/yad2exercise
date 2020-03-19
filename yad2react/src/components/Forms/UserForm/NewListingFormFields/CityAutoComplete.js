import React, { useState } from "react";
import CitiesAutoComplete from "../../../utils/CitiesAutoComplete";
import classNames from "classnames";

export default ({ field, value, setFieldValue }) => {
  const [hideError, setHideError] = useState(true);
  
  return (
    <div onBlur={() => setHideError(false)}>
      {field.text + ":"}
      <CitiesAutoComplete
        value={value}
        setValue={setFieldValue}
        name={field.type}
        formik={true}
      />
      <div
        className={classNames("error-message-container", {
          "visibility-hidden": hideError
        })}
      >
        שדה חובה
      </div>
    </div>
  );
};
