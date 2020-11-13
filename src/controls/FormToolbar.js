import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CalculateButton from './CalculateButton';

const useStyles = makeStyles((theme) => ({
  space: {
    flexGrow: 1,
  },
  item: {
    marginLeft: theme.spacing(1),
  },
}), { name: 'FormToolbar' });

export default function FormToolbar(props) {
  const classes = useStyles();

  return (
    <div {...props}>
      <div className={classes.space} />
      <CalculateButton className={classes.item} />
      <CalculateButton className={classes.item} />
    </div>
  );
};
