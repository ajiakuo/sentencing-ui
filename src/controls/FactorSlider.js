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
    padding: '12px 0',
    marginBottom: 0,
    color: theme.palette.grey[50],
    transition: theme.transitions.create(['color'], {
      duration: theme.transitions.duration.shortest,
    }),
    '&[data-state="lighter"]': { color: theme.palette.success.main },
    '&[data-state="heavier"]': { color: theme.palette.error.main },
  },
  thumb: {
    width: 20,
    height: 20,
    marginTop: (14 - 20) / 2,
    marginLeft: -20 / 2,
    transition: theme.transitions.create(['left', 'box-shadow'], {
      duration: theme.transitions.duration.shortest,
    }),
    '&::before': {
      content: '""',
      position: 'absolute',
      borderRadius: '50%',
      boxShadow: theme.shadows[1],
      left: 0, top: 0, right: 0, bottom: 0,
    },
    '&::after': {
      left: -11, top: -11, right: -11, bottom: -11,
    },
    '&:hover, &$focusVisible': {
      boxShadow: `0px 0px 0px 8px rgba(0, 0, 0, 0.16)`,
    },
    '&$active': {
      boxShadow: `0px 0px 0px 14px rgba(0, 0, 0, 0.16)`,
    },
  },
  track: {
    height: 14,
    opacity: 0.5,
    width: '50% !important',
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.shortest,
    }),
    '[data-state="lighter"] &': {
      left: '0 !important',
    },
    '[data-state="neutral"] &': {
      opacity: 0,
      width: '0% !important',
    },
    '[data-state="heavier"] &': {
      left: '50% !important',
    },
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
            data-state={this.state.value === 2 ? 'neutral' : this.state.value === 1 ? 'lighter' : 'heavier'}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(FactorSlider);
