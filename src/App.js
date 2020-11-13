import { React, useState } from 'react';
import {
  AppBar, Avatar, Grid, Paper, Toolbar, Typography
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GavelIcon from '@material-ui/icons/Gavel';
import FormToolbar from './controls/FormToolbar';
import AppMenu from './parts/AppMenu';
import CaseAccordion from './parts/CaseAccordion';
import SentencingForm from './parts/SentencingForm';
import data from './mockup';
import { formatSentence } from './util';

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
    [theme.breakpoints.up('md')]: {
      height: '100vh',
    }
  },
  pane: {
    [theme.breakpoints.up('md')]: {
      height: '100%',
      overflowY: 'scroll',
    },
  },
  content: {
    margin: theme.spacing(4),
  },
  controls: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      position: 'sticky',
      bottom: theme.spacing(4),
    },
  },
  crimePanel: {
    padding: theme.spacing(2),
  }
}), { name: 'App' });

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
        <Grid item xs={12} md={6} lg={7} xl={6} component={Paper} elevation={3} className={classes.pane}>
          <div className={classes.content}>
            <SentencingForm />
            <FormToolbar className={classes.controls} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={5} xl={6} className={classes.pane}>
          <div className={classes.content}>
            <Paper elevation={1} className={classes.crimePanel}>
              <Typography variant="overline" gutterBottom>量刑預測</Typography>
              <Typography variant="h4" component="div">{ formatSentence(33) }</Typography>
            </Paper>
            { data.related_cases.map((i) => (
              <CaseAccordion {...i} />
            )) }
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
