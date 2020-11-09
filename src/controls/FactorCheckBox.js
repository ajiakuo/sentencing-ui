import { React, Component } from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ColoredCheckbox = withStyles((theme) => ({
  root: {
    '&$checked': {
      color: theme.palette.secondary.main,
    },
    '&[data-vibe="positive"]$checked': {
      color: theme.palette.success.main,
    },
    '&[data-vibe="negative"]$checked': {
      color: theme.palette.error.main,
    },
  },
  checked: {},
}))((props) => <Checkbox color="default" {...props} />);

class FactorCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: (e.target.checked ? 1 : 0)})
  }

  render() {
    return (
      <FormControlLabel label={this.props.label} control={
        <ColoredCheckbox name={this.props.name} checked={this.state.value === 1} onChange={this.handleChange}
          data-vibe={this.props.vibe} />
      } />
    );
  }
}

export default FactorCheckBox;
