import { React } from 'react';
import { Checkbox, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    flexGrow: 1,
  },
}), { name: 'FactorCheckBox' });

const ColoredCheckbox = withStyles((theme) => ({
  root: {
    '&$checked': {
      color: theme.palette.secondary.main,
    },
    '&[data-vibe="positive"]$checked': {
      color: theme.palette.success.dark,
    },
    '&[data-vibe="negative"]$checked': {
      color: theme.palette.error.dark,
    },
  },
  checked: {},
}), { name: 'ColoredCheckbox' })((props) => <Checkbox color="default" {...props} />);

export default function FactorCheckBox(props) {
  const classes = useStyles();
  const { name, value, label, vibe, onChange, ...others } = props;

  return (
    <label className={classes.root}>
      <Typography component="span" className={classes.label}>{label}</Typography>
      <ColoredCheckbox
        name={name} data-vibe={vibe}
        checked={value === 1}
        onChange={(e) => onChange(e, name, e.target.checked ? 1 : 0)} {...others} />
    </label>
  );
};
