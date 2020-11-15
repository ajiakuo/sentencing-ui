import { React, useState } from 'react';
//import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, Typography, Box, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    minWidth: 64,
    flexGrow: 1,
  },
}), { name: 'CrimeSelector' });

export default function CrimeSelector(props) {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0); // index of the active tab, not tab index
  const [kind, setKind] = useState(0);  // the primary category of the crime

  const handleRadioChange = (e) => { setKind(e.target.value); console.log(e.target.value); };

  return (
    <div className={classes.root}>
      <Tabs value={tabIndex} onChange={(e, newValue) => setTabIndex(newValue)}
        indicatorColor="primary" textColor="primary" variant="fullWidth"
        aria-label="罪名分類">
        <Tab label="殺人" id="crime-tab-1" aria-controls="crime-panel-1" className={classes.tab} />
        <Tab label="傷害" className={classes.tab} />
        <Tab label="其他" className={classes.tab} />
      </Tabs>
      <div>
        <div id="crime-panel-1">{ /* aria-labelled-by="crime-tab-1" --> */ }
          <FormControl component="fieldset">
            <FormLabel component="legend">罪名</FormLabel>
            <RadioGroup aria-label="罪名" onChange={handleRadioChange}>
              { ["普通殺人", "殺害直系血親尊親屬", "義憤殺人", "母殺嬰兒", "加工自殺"].map((name, i) =>
                <FormControlLabel key={i} value={i} control={<Radio />} label={name} />
              ) }
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
