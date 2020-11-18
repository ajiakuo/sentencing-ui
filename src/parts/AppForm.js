import { React, useState } from 'react';
import { FormControl, Grid, MenuItem, Select, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FactorCheckBox from '../controls/FactorCheckBox';
import FactorSlider from '../controls/FactorSlider';;
import FormAccordion from '../controls/FormAccordion';
import CrimeSelector from './CrimeSelector';
import { useCrimes, useFactorGroups } from '../util';

const useStyles = makeStyles((theme) => ({
  root: {},
  selectTitle: {
    flexShrink: 0,
  },
  selectControl: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
    flexShrink: 1,
  },
}), { name: 'AppForm' });

const CrimeSelect = withStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:before': {
      display: 'none',
    }
  },
}), { name: 'CrimeSelect' })((props) => {
  const {value, ...others} = props;
  const crimes = useCrimes();
  crimes.sort((a, b) => a.value - b.value);

  return (
    <Select displayEmpty value={value >= 0 ? value : ""}
      inputProps={{ "aria-label": "罪名" }} IconComponent="div" {...others}>
      <MenuItem value="" disabled>適用條文</MenuItem>
      { crimes.map((crime) => (
        <MenuItem key={crime.value} value={crime.value}>{crime.text}</MenuItem>
      )) }
    </Select>
  );
});

export default function AppForm() {
  const classes = useStyles();
  const factorGroups = useFactorGroups();
  const [crime, setCrime] = useState(-1);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={12} lg={6}>
        <FormAccordion defaultExpanded={true}
          summary={(
            <>
              <Typography variant="h6" className={classes.selectTitle}>罪名</Typography>
              <FormControl className={classes.selectControl}>
                <CrimeSelect name="crime" value={crime}
                  onChange={(e) => setCrime(e.target.value)}
                  onClick={(e) => e.stopPropagation()} />
              </FormControl>
            </>
          )}>
          <CrimeSelector value={crime} onChange={(_, newValue) => setCrime(newValue)} />
        </FormAccordion>
      </Grid>
      <Grid item xs={12} sm={6} md={12} lg={6}>
        { factorGroups.map((group) => (
          <FormAccordion key={group.title}
            defaultExpanded={group.type !== "binary"}
            summary={(<Typography variant="h6">{group.title}</Typography>)}>
            { group.factors.map((factor) => (
              <div key={factor.name}>
                { group.type === "binary" ?
                  <FactorCheckBox name={factor.name} label={factor.text} vibe={group.vibe} /> :
                  <FactorSlider name={factor.name} label={factor.text} />
                }
              </div>
              ))}
          </FormAccordion>
        )) }
      </Grid>
    </Grid>
  );
};
