import { React, Component } from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

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
        <Checkbox name={this.props.name} checked={this.state.value === 1} onChange={this.handleChange} />
      } />
    );
  }
}

export default FactorCheckBox;
