import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, blue } from '@material-ui/core/colors';

// Declare the main visual theme of this app.
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blue
  }
});

export default theme;
