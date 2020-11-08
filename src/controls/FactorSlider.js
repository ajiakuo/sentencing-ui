import { React, Component } from 'react';
import { Grid, Slider, Typography } from '@material-ui/core';
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
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography id={`${this.props.name}Label`} gutterBottom>
            {this.props.label}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Slider
            name={this.props.name} value={this.state.value} onChange={this.handleChange}
            valueLabelDisplay="auto" aria-labelledby={`${this.props.name}Label`}
            defaultValue={2} min={1} max={3}
            steps={null} marks={scales} track={false}
          />
        </Grid>
      </Grid>
    );
  }
}

export default FactorSlider;
