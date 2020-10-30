import React from 'react';
import ReactDOM from 'react-dom';
import CSSBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CSSBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
