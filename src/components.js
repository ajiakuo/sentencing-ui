import { React, Component } from 'react';
import { FormControlLabel, Checkbox, Slider } from '@material-ui/core';
import { scales as factorScales } from './scope';

class FactorControl extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <Slider
        name={this.props.name} value={this.state.value} onChange={this.handleChange}
        defaultValue={2} steps={null} marks={factorScales} track={false}
      />
    );
  }
}

class BinaryFactorControl extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
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

export { FactorControl, BinaryFactorControl };
