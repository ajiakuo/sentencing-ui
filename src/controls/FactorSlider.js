import { React, useState } from 'react';
import { Slider, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const scales = [
  { value: -1, label: '−', description: '減輕' },
  { value: 0, label: '', description: '不影響' },
  { value: 1, label: '+', description: '加重' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    flexGrow: 1,
  },
  switch: {
    minWidth: 64,
    width: 80,
    maxWidth: 96,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}), { name: 'FactorSlider' });

const SwitchLikeSlider = withStyles((theme) => ({
  root: {
    height: 14,
    padding: '14px 0',
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
      boxShadow: '0px 0px 0px 8px rgba(0, 0, 0, 0.16)',
    },
    '&$active': {
      boxShadow: '0px 0px 0px 14px rgba(0, 0, 0, 0.16)',
    },
    active: {},
    focusVisible: {},
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
    height: 14,
    backgroundColor: theme.palette.background.paper,
    opacity: 0,
    '&[data-index="1"]': { opacity: 0.8 },
  },
}), { name: 'SwitchLikeSlider' })(Slider);

export default function FactorSlider(props) {
  const classes = useStyles();
  const { name, value, label, onChange, ...others } = props;

  return (
    <div className={classes.root}>
      <Typography id={`${name}-label`} component="label" className={classes.label}>
        {label}
      </Typography>
      <SwitchLikeSlider className={classes.switch}
        name={name} value={value} onChange={(e, newValue) => onChange(e, name, newValue)}
        aria-labelledby={`${name}-label`}
        min={-1} max={1} steps={null} marks={scales}
        data-state={value === 0 ? 'neutral' : value === -1 ? 'lighter' : 'heavier'}
        {...others}
      />
    </div>
  );
};
