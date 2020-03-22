import { createMuiTheme } from "@material-ui/core";

export default color => createMuiTheme({
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
})