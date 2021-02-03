// index.js - 模組進入點。
/*! sentencing-ui: https://github.com/rschiang/sentencing-ui */

import React from 'react';
import { hydrate, render } from 'react-dom';
import CSSBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Page from './parts/Page';

const rootElement = document.getElementById('root');
const App = (
  <ThemeProvider theme={theme}>
    <CSSBaseline />
    <Page />
  </ThemeProvider>
);

if (rootElement.hasChildNodes())
  hydrate(App, rootElement);
else
  render(App, rootElement);
