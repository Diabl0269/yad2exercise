import React from "react";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import "moment/locale/he";

export default ({
  inputprops: {
    field: { name },
    form: { values, setFieldValue }
  }
}) => {
  const value = values[name];

  const handleChange = e => {
    const today = new Date(e._d).toLocaleDateString();
    setFieldValue(name, today);
  };
  
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        variant="inline"
        color="primary"
        value={value}
        onChange={handleChange}
      />
    </MuiPickersUtilsProvider>
  );
};
