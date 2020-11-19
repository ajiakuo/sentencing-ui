import { React, useState } from 'react';
//import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, ButtonGroup, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Radio, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useCrimes, useCrimeCategories, alpha } from '../util';

const nameOfStages = new Map([
  ["preparatory", "預備"],
  ["attempted", "未遂"],
  ["accomplished", "既遂"],
]);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    minWidth: 64,
    flexGrow: 1,
  },
  panel: {
    margin: theme.spacing(1),
  },
  controls: {
    display: 'flex',
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    }
  },
  label: {
    color: theme.palette.text.secondary,
    ...theme.typography.subtitle2,
  },
  stage: {
    flexGrow: 1,
  },
}), { name: 'CrimeSelector' });

const TabPanel = (props) => {
  const { children, currentIndex, index, ...others } = props;
  return (
    <div role="tabpanel" hidden={currentIndex !== index} id={`crime-panel-${index}`} aria-labelledby={`crime-tab-${index}`} {...others}>
      { currentIndex === index && children }
    </div>
  );
};

const ToggleButton = (props) => {
  const classes = makeStyles((theme) => ({
    root: {
    },
    checked: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      '&:hover': {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
  }), { name: 'ToggleButton' })();
  const { checked, className, ...others } = props;
  return <Button aria-checked={checked} className={clsx(classes.root, checked ? classes.checked : null, className)} {...others} />;
};

export default function CrimeSelector(props) {
  const classes = useStyles();
  const crimes = useCrimes();
  const categories = useCrimeCategories();
  const listOfCategories = [...categories.values()];

  // Props
  const { value, onChange } = props;

  // Calculate controls’ state base on prop value
  const crime = crimes.find((c) => c.value === value);
  const category = crime ? categories.get(crime.category) : listOfCategories[0];
  const kind = crime ? category.kinds.get(crime.kind) : null;

  // Our only state; index of the active tab should be independent from prop value or you will never be able to change tabs
  const [currentIndex, setCurrentIndex] = useState(0);

  // Event handlers
  const handleTabChange = (_, newValue) => setCurrentIndex(newValue);

  const handleFiltering = (e, kind, stage, variant) => {
    let candidate = crimes.find((c) => (kind === c.kind && (!stage || stage === c.stage) && (!variant || variant === c.variant)));
    if (candidate) onChange(e, candidate.value);
  };

  return (
    <div className={classes.root}>
      <Tabs value={currentIndex} onChange={handleTabChange}
        indicatorColor="primary" textColor="primary" variant="fullWidth" aria-label="罪名分類">
        { listOfCategories.map((c, index) =>
          <Tab key={c.title} value={index} label={c.title}
            id={`crime-tab-${index}`} aria-controls={`crime-panel-${index}`} className={classes.tab} />
        )}
      </Tabs>
      { listOfCategories.map((c, index) =>
        <TabPanel key={c.title} currentIndex={currentIndex} index={index} className={classes.panel}>
          <FormControl component="fieldset">
            { Array.from(c.kinds.values(), (k) =>
              <FormControlLabel key={k.text} value={k.text} checked={k.text === kind?.text} control={<Radio />} label={k.text} onClick={(e) => handleFiltering(e, e.target.value)} />
            )}
          </FormControl>
        </TabPanel>
      )}
      <div className={classes.panel}>
        { (kind?.stages) &&
          <FormControl component="fieldset" className={classes.controls}>
            <Typography component="label" id="stages-label" className={classes.label} gutterBottom>犯罪階段</Typography>
            <ButtonGroup color="primary" variant="outlined" role="radiogroup" aria-labelledby="stages-label">
              { Array.from(nameOfStages.keys(), (s) => kind.stages.includes(s) &&
                <ToggleButton key={s} role="radio" checked={crime.stage === s} onClick={(e) => handleFiltering(e, crime.kind, s)} className={classes.stage}>{nameOfStages.get(s)}</ToggleButton>
              )}
            </ButtonGroup>
          </FormControl>
        }
        { (kind?.variants) &&
          <FormControl component="fieldset" className={classes.controls}>
            <Typography component="legend" className={classes.label}>特別規定</Typography>
            <FormGroup>
              { kind.variants.map((v) =>
                <FormControlLabel key={v} label={v} control={
                  <Checkbox checked={crime.variant === v} onChange={(e) => handleFiltering(e, crime.kind, crime.stage, e.target.checked ? v : null)} />
                } />
              )}
            </FormGroup>
          </FormControl>
        }
      </div>
    </div>
  );
};
