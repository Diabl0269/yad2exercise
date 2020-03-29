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
    const day = new Date(e._d).getTime();
    setFieldValue(name, day);
  };
  
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        variant="inline"
        color="primary"
        value={value}
        onChange={handleChange}
        InputProps={{
          disableUnderline: true,
         }}
      />
    </MuiPickersUtilsProvider>
  );
};
