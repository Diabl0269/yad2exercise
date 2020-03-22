import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiCheckbox from "@material-ui/core/Checkbox";

const color = "#ff7100";

const style = withStyles({
  root: {
    color,
    display: "flex",
    "flex-direction": "row",
    width: "50%",
    flexWrap: "wrap"
  }
});

export default style(props => {
  const {
    form: { setFieldValue },
    field: { name }
  } = props;
  const clickHandler = e => {
    setFieldValue(name, e.target.checked);
  };

  return (
    <MuiCheckbox
      color="default"
      id={name}
      onClick={clickHandler}
      value="true"
      {...props}
    />
  );
});
