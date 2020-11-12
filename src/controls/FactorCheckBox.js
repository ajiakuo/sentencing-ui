import { React, useState } from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
  const [value, setValue] = useState(0);
  return (
    <FormControlLabel label={props.label} control={
      <ColoredCheckbox
        name={props.name} data-vibe={props.vibe}
        checked={value === 1}
        onChange={(e) => setValue(e.target.checked ? 1 : 0)} />
    } />
  );
};
