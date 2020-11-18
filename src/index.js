/*! sentencing-ui: https://github.com/rschiang/sentencing-ui */

import React from 'react';
import ReactDOM from 'react-dom';
import CSSBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Page from './parts/Page';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CSSBaseline />
    <Page />
  </ThemeProvider>,
  document.getElementById('root')
);
