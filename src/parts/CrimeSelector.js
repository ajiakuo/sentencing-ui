import { React, useState, useContext } from 'react';
//import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, ButtonGroup, Button, FormControl, Typography, FormControlLabel, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from './AppContext';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    minWidth: 64,
    flexGrow: 1,
  },
  tabPage: {
    margin: theme.spacing(1),
  },
  stages: {
    display: 'flex',
    marginTop: theme.spacing(1),
  },
  stageLabel: {
    marginBottom: theme.spacing(1),
  },
  stage: {
    flexGrow: 1,
  },
}), { name: 'CrimeSelector' });

export default function CrimeSelector(props) {
  const classes = useStyles();
  const spec = useContext(AppContext);
  const value = props.value;

  const [tabIndex, setTabIndex] = useState(0); // index of the active tab, not tab index
  const [kind, setKind] = useState(0);  // the primary category of the crime

  const handleRadioChange = (e) => { setKind(e.target.value); console.log(e.target.value); };

  return (
    <div className={classes.root}>
      <Tabs value={tabIndex} onChange={(e, newValue) => setTabIndex(newValue)}
        indicatorColor="primary" textColor="primary" variant="fullWidth"
        aria-label="罪名分類">
        <Tab label="殺人" id="crime-tab-1" aria-controls="crime-panel-1" className={classes.tab} />
        <Tab label="傷害致死" className={classes.tab} />
      </Tabs>
      <div>
        <div id="crime-panel-1" className={classes.tabPage}>{ /* aria-labelled-by="crime-tab-1" --> */ }
          <FormControl component="fieldset">
            { ["普通殺人", "殺害直系血親尊親屬", "義憤殺人", "母殺嬰兒", "加工自殺"].map((name, i) =>
              <FormControlLabel key={i} value={i} checked={kind == i} control={<Radio />} label={name} onClick={handleRadioChange} />
            ) }
          </FormControl>
          <FormControl className={classes.stages}>
            <Typography variant="subtitle2" gutterBottom>階段</Typography>
            <ButtonGroup color="primary" aria-label="犯罪階段">
              { (kind == 0 || kind == 1) && <Button value="preparatory" className={classes.stage}>預備</Button> }
              <Button value="attempted" className={classes.stage}>未遂</Button>
              <Button value="accomplished" className={classes.stage}>既遂</Button>
            </ButtonGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
