import React from "react";
import "moment/locale/he";
import colors from "../../data/colors.json";
import UnifiedThemeProvider from "../Mui/UnifiedThemeProvider";
import DatePicker from "../Mui/DatePicker";

export default props => {
  return (
    <UnifiedThemeProvider
      Component={DatePicker}
      color={colors.orange}
      inputprops={props}
    />
  );
};
