import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { createMuiTheme } from "@material-ui/core";
import "moment/locale/he";

const color = "#ff7100";

export const customTheme = createMuiTheme({
  overrides: {
    label: {
      //   width: "50%"
      // background: 'red'
    }
  },
  palette: {
    primary: {
      main: color,
      light: color,
      dark: color
    },
    secondary: {
      main: color
    }
  }
});

export default props => {
  const [selectedDate, handleDateChange] = useState(new Date());

  const {
    field: { name },
    form: { setFieldValue, values},
  } = props;
  
  return (
    <ThemeProvider theme={customTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker
          variant="inline"
          color="secondary"
          value={values[name]}
          onChange={e => {
          
            setFieldValue(name, e._d);
          }}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};
