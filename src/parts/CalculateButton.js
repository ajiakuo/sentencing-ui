import React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Spellcheck from '@material-ui/icons/Spellcheck';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export default function CalculateButton() {
  const classes = useStyles();

  return (
    <Fab color="secondary" variant="extended" className={classes.fab}>
      <Spellcheck className={classes.icon} />
      計算
    </Fab>
  );
}
