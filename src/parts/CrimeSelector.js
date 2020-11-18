import { React, useState } from 'react';
//import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, ButtonGroup, Button, FormControl, Typography, FormControlLabel, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCrimeCategories } from '../util';

const stages = [
  { value: "preparatory", label: "預備" },
  { value: "attempted", label: "未遂" },
  { value: "accomplished", label: "既遂" },
];

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

function TabPanel(props) {
  const { children, value, index, ...others } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`crime-panel-${index}`} aria-labelled-by={`crime-tab-${index}`} {...others}>
      { value === index && children }
    </div>
  );
};

export default function CrimeSelector(props) {
  const classes = useStyles();
  const value = props.value;
  const categories = useCrimeCategories();

  const [category, setCategory] = useState(""); // index of the active tab
  const [kind, setKind] = useState("");  // the primary category of the crime

  const handleRadioChange = (e) => { setKind(e.target.value); };

  return (
    <div className={classes.root}>
      <Tabs value={category} onChange={(_, newValue) => setCategory(newValue)}
        indicatorColor="primary" textColor="primary" variant="fullWidth" aria-label="罪名分類">
        { categories.map((category, index) =>
          <Tab key={category.title} value={category.title} label={category.title}
            id={`crime-tab-${index}`} aria-controls={`crime-panel-${index}`} className={classes.tab} />
        )}
      </Tabs>
      { categories.map((category, index) =>
        <TabPanel key={category.title} value={category} index={index} className={classes.panel}>
          <FormControl component="fieldset">
            { category.kinds.map((kind, i) =>
              <FormControlLabel key={i} value={i} checked={kind === i} control={<Radio />} label={kind.text} onClick={handleRadioChange} />
            ) }
          </FormControl>
          <FormControl className={classes.stages}>
            <Typography variant="subtitle2" gutterBottom>階段</Typography>
            <ButtonGroup color="primary" aria-label="犯罪階段">
              <Button value="preparatory" className={classes.stage}>預備</Button>
              <Button value="attempted" className={classes.stage}>未遂</Button>
              <Button value="accomplished" className={classes.stage}>既遂</Button>
            </ButtonGroup>
          </FormControl>
        </TabPanel>
      )}
    </div>
  );
};
