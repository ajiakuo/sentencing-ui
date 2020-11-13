import React from 'react';
import clsx from 'clsx';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  space: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  iconSmall: {
    marginRight: theme.spacing(1) / 2,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}), { name: 'FormToolbar' });

export default function FormToolbar(props) {
  const classes = useStyles();

  return (
    <div {...props} className={clsx([classes.root, props.className])}>
      <div className={classes.space} />
      <Fab className={classes.button} size="medium" variant="extended" onClick={props.onClear}>
        <ClearAllIcon className={classes.iconSmall} />
        清除
      </Fab>
      <Fab className={classes.button} color="secondary" variant="extended" onClick={props.onSubmit}>
        <SpellcheckIcon className={classes.icon} />
        計算
      </Fab>
    </div>
  );
};
