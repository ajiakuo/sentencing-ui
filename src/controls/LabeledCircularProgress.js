import React from 'react';
import clsx from 'clsx';
import { CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
  },
  textFrame: {
    position: 'absolute',
    top: 0, right: 0, bottom: 0, left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}), { name: 'LabeledCircularProgress' });

export default function LabeledCircularProgress(props) {
  const classes = useStyles();
  const { value, className, ...others } = props;

  return (
    <div className={clsx([classes.root, className])}>
      <CircularProgress variant="determinate" value={value} {...others} />
      <div className={classes.textFrame}>
        <Typography variant="caption" component="div" color="textSecondary">{ `${Math.round(value)}%` }</Typography>
      </div>
    </div>
  );
};
