import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useFormikContext, ErrorMessage } from "formik";
import useStyles from "../../../../muiStyles/maxWidth-40%";
import blurHandler from "../../../../utils/blurHandler";

export default ({ field: { type, text }, categories }) => {
  const { values, setFieldValue, setTouched, setErrors } = useFormikContext();
  const value = values[type];

  const handleChange = e => {
    setFieldValue(type, e.target.value);
  };

  return (
    <div key={type}>
      {text + ":"}
      <Select
        value={value}
        onBlur={e => blurHandler(e, type, setTouched, setErrors)}
        onChange={handleChange}
        className={useStyles().root}
      >
        {categories.map(category => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
      <ErrorMessage
        name={type}
        component="div"
        className="error-message-container margin-top-s"
      />
    </div>
  );
};
