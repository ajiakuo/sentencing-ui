import { React, Component } from 'react';
import { Slider, Typography } from '@material-ui/core';
import { scales } from '../scope';

class FactorSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 2};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, newValue) {
    this.setState({value: newValue});
  }

  render() {
    return (
      <>
        <Typography id={`${this.props.name}Label`} gutterBottom>
          {this.props.label}
        </Typography>
        <Slider
          name={this.props.name} value={this.state.value} onChange={this.handleChange}
          defaultValue={2} valueLabelDisplay="auto"
          min={1} max={3}
          steps={null} marks={scales} track={false}
        />
      </>
    );
  }
}

export default FactorSlider;
