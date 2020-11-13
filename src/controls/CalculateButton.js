import React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Spellcheck from '@material-ui/icons/Spellcheck';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}), { name: 'CalculateButton' });

export default function CalculateButton(props) {
  const classes = useStyles();

  return (
    <Fab color="secondary" variant="extended" {...props} className={[classes.fab, props.className]}>
      <Spellcheck className={classes.icon} />
      計算
    </Fab>
  );
}
