import React from "react";
import "moment/locale/he";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

export default ({ Component, ...props }) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Component {...props} />
    </MuiPickersUtilsProvider>
  );
};
