import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, blue } from '@material-ui/core/colors';

// Declare the main visual theme of this app.
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blue
  },
  typography: {
    fontFamily: [
      'Inter', 'system-ui', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'
    ].join(','),
  },
});

export default theme;
