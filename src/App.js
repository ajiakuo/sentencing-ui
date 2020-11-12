import React from 'react';
import {
  Accordion, AccordionSummary, AccordionDetails, AppBar, Avatar, Grid, Paper, Toolbar, Typography
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GavelIcon from '@material-ui/icons/Gavel';
import CalculateButton from './controls/CalculateButton';
import AppMenu from './parts/AppMenu';
import CaseAccordion from './parts/CaseAccordion';
import SentencingForm from './parts/SentencingForm';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  logo: {
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.secondary[400],
  },
  title: {
    flexGrow: 1,
  },
  main: {
    width: '100vw',
    minHeight: '100vh',
    overflowX: 'hidden',
    /* ToolBar mixin, but with padding */
    paddingTop: 56,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      paddingTop: 48,
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
  },
  formPanel: {
  },
  form: {
    padding: theme.spacing(4),
  },
  content: {
    padding: theme.spacing(4),
  },
  crimePanel: {
    padding: theme.spacing(2),
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Avatar className={classes.logo}>
            <GavelIcon />
          </Avatar>
          <Typography variant="h6" noWrap className={classes.title}>
            司法院量刑系統
          </Typography>
          <AppMenu />
        </Toolbar>
      </AppBar>
      <Grid container component="main" className={classes.main}>
        <Grid item xs={12} md={7} xl={6} className={classes.formPanel}>
          <Paper elevation={3} className={classes.form}>
            <SentencingForm />
            <CalculateButton />
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} xl={6} className={classes.content}>
          <Paper elevation={1} className={classes.crimePanel}>
            <Typography variant="h4">2 年 9 個月</Typography>
          </Paper>
          { ['TPS,101,台上,900', 'TCD,101,台上,901', 'TPS,101,台上,902', 'TPS,101,台上,903'].map((i) => (
            <CaseAccordion id={i} />
          )) }
        </Grid>
      </Grid>
    </div>
  );
}
