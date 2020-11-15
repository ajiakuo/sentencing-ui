import { React, useState } from 'react';
//import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}), { name: 'CrimeSelector' });

export default function CrimeSelector(props) {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0); // index of the active tab, not tab index

  return (
    <div className={classes.root}>
      <Tabs value={tabIndex} onChange={(e, newValue) => setTabIndex(newValue)}
        indicatorColor="primary" textColor="primary" variant="fullWidth"
        aria-label="罪名分類">
        <Tab label="殺人" id="crime-tab-1" aria-controls="crime-panel-1" />
        <Tab label="傷害" />
        <Tab label="其他" />
      </Tabs>
      <div>
        <Box p={4} id="crime-panel-1" aria-labelled-by="crime-tab-1">
          哈囉。
        </Box>
      </div>
    </div>
  )
};
