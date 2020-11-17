import { React, useState } from 'react';
import { FormControl, Grid, ListSubheader, MenuItem, Select, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { crimes, factorGroups, factors } from '../scope';
import FactorCheckBox from '../controls/FactorCheckBox';
import FactorSlider from '../controls/FactorSlider';;
import FormAccordion from '../controls/FormAccordion';
import CrimeSelector from './CrimeSelector';

const useStyles = makeStyles((theme) => ({
  root: {},
  selectWrapper: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
  },
  select: {
    color: theme.palette.text.secondary,
    '&:before': {
      display: 'none',
    }
  },
}), { name: 'AppForm' });

export default function AppForm() {
  const classes = useStyles();
  const [crime, setCrime] = useState(-1);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={12} lg={6}>
        <FormAccordion defaultExpanded={true}
          summary={(
            <>
              <Typography variant="h6">罪名</Typography>
              <FormControl className={classes.selectWrapper}>
                <Select name="crime" displayEmpty value={crime >= 0 ? crime : ""}
                  inputProps={{ "aria-label": "罪名" }}
                  IconComponent="div" className={classes.select}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => setCrime(e.target.value)}>
                  <MenuItem value="" disabled>適用條文</MenuItem>
                  { crimes.map((crime) => (
                    <MenuItem key={crime.value} value={crime.value}>{crime.text}</MenuItem>
                  )) }
                </Select>
              </FormControl>
            </>
          )}>
          <CrimeSelector value={crime} onChange={(e, newValue) => setCrime(newValue)} />
        </FormAccordion>
      </Grid>
      <Grid item xs={12} sm={6} md={12} lg={6}>
        { factorGroups.map((group) => (
          <FormAccordion key={group.title}
            defaultExpanded={group.type !== "binary"}
            summary={(<Typography variant="h6">{group.title}</Typography>)}>
            { group.factors.map((name) => {
              let factor = factors.find(i => i.name === name);
              return (!factor.valid_before && (
                <div key={factor.name}>
                  { group.type === "binary" ?
                    <FactorCheckBox name={factor.name} label={factor.text} vibe={group.vibe} /> :
                    <FactorSlider name={factor.name} label={factor.text} />
                  }
                </div>
              ));
            })}
          </FormAccordion>
        )) }
      </Grid>
    </Grid>
  );
};
