import { React, Component } from 'react';
import { Grid, Slider, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { scales } from '../scope';

const styles = (theme) => ({
  root: {
    paddingRight: theme.spacing(4),
  },
});

const SwitchLikeSlider = withStyles((theme) => ({
  root: {
    height: 14,
    padding: '12 0',
    marginBottom: 0,
    color: ((props) => props.value === 1 ? theme.palette.success.main :
                        props.value === 3 ? theme.palette.error.main :
                        theme.palette.grey[50]),
    transition: theme.transitions.create(['color'], {
      duration: theme.transitions.duration.shortest,
    })
  },
  thumb: {
    width: 20,
    height: 20,
    marginTop: (14 - 20) / 2,
    marginLeft: -20 / 2,
    boxShadow: theme.shadows[1],
  },
  track: {
    height: 14,
    borderRadius: 14 / 2,
    width: '100% !important',
    opacity: 0.5,
  },
  rail: {
    height: 14,
    borderRadius: 14 / 2,
    backgroundColor: theme.palette.common.black,
    opacity: 0.3,
  },
  mark: {
    display: 'none',
  },
}))(Slider);

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
    const { classes } = this.props;
    return (
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={8}>
          <Typography id={`${this.props.name}Label`} gutterBottom>
            {this.props.label}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <SwitchLikeSlider
            name={this.props.name} value={this.state.value} onChange={this.handleChange}
            aria-labelledby={`${this.props.name}Label`}
            min={1} max={3} steps={null} marks={scales}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(FactorSlider);
