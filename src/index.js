import React from 'react';
import { render } from 'react-snapshot';
import CSSBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';

render(
  <ThemeProvider theme={theme}>
    <CSSBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
