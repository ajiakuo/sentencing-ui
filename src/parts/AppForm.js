import React from 'react';
import { FormControl, Grid, MenuItem, Select, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FactorCheckBox from '../controls/FactorCheckBox';
import FactorSlider from '../controls/FactorSlider';;
import FormAccordion from '../controls/FormAccordion';
import { useCrimes, useFactorGroups } from '../util';

const useStyles = makeStyles((theme) => ({
  root: {
    // Dynamic grid spacing (2 -> 4)
    margin: `-${theme.spacing(1)}px`,
    width: `calc(100% + ${theme.spacing(2)}px)`,
    '& > div': { padding: theme.spacing(1) },
    [theme.breakpoints.up('md')]: {
      margin: `-${theme.spacing(2)}px`,
      width: `calc(100% + ${theme.spacing(4)}px)`,
      '& > div': { padding: theme.spacing(2) },
    }
  },
  select: {
    margin: '12px 0',
    display: 'flex',
    flexDirection: 'row',
  },
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
  select: {
    color: theme.palette.text.secondary,
    '&:focus': {
      color: theme.palette.text.primary,
    },
  },
}), { name: 'CrimeSelect' })((props) => {
  const {value, ...others} = props;
  const crimes = useCrimes();
  crimes.sort((a, b) => a.value - b.value);

  return (
    <Select displayEmpty value={value >= 0 ? value : ""}
      inputProps={{ "aria-label": "罪名" }} {...others}>
      <MenuItem value="" disabled>適用條文</MenuItem>
      { crimes.map((crime) => (
        <MenuItem key={crime.value} value={crime.value} disabled={crime.disabled}>{crime.text}</MenuItem>
      )) }
    </Select>
  );
});

export default function AppForm(props) {
  const classes = useStyles();
  const factorGroups = useFactorGroups();
  const { crime, factors, onCrimeChanged, onFactorChanged, ...others } = props;

  const handleCrimeSelectChanged = (e) => {
    onCrimeChanged(e.target.value);
  };

  return (
    <Grid container component="form" className={classes.root} {...others}>
      <Grid item xs={12} sm={6} md={12} lg={6} className={classes.select}>
        <Typography variant="h6" className={classes.selectTitle}>罪名</Typography>
        <FormControl className={classes.selectControl}>
          <CrimeSelect name="crime" value={crime} onChange={handleCrimeSelectChanged} />
        </FormControl>
      </Grid>
      { factorGroups.map((group) => (
        <Grid item xs={12} sm={6} md={12} lg={6}>
          <FormAccordion key={group.title}
            defaultExpanded={group.type !== "binary"}
            summary={(<Typography variant="h6">{group.title}</Typography>)}>
            { group.factors.map((factor) => (
              <div key={factor.name}>
                { group.type === "binary" ?
                  <FactorCheckBox name={factor.name} value={factors[factor.name] !== undefined ? factors[factor.name] : 0} label={factor.text} vibe={group.vibe} disabled={factor.disabled} onChange={onFactorChanged} /> :
                  <FactorSlider name={factor.name} value={factors[factor.name] !== undefined ? factors[factor.name] : 0} label={factor.text} onChange={onFactorChanged} disabled={factor.disabled} />
                }
              </div>
              ))}
          </FormAccordion>
        </Grid>
      )) }
    </Grid>
  );
};
