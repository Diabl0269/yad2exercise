import React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import unifiedColorTheme from '../../muiStyles/unifiedColorTheme';

export default ({ Component, color, ...props }) => {
  return (
    <ThemeProvider theme={unifiedColorTheme(color)}>
      <Component {...props} />
    </ThemeProvider>
  );
};
