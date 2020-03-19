import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Checkbox } from "@material-ui/core";
import MuiCheckbox from "@material-ui/core/Checkbox";

const color = "#ff7100";

export default withStyles({
  root: {
    color
  }
})(props => {
  return (
    <MuiCheckbox
      color="default"
      {...props}
      onClick={() => }
      checked={!!props.value}
    />
  );
  // return <Checkbox  color1="default" {...props}/>
});
