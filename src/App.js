import React from 'react';
import {
  AppBar, Divider, Fab, Grid, IconButton, Paper, Toolbar, Typography
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  AccountCircle as AccountIcon,
  Feedback as FeedbackIcon,
  Help as HelpIcon,
  Spellcheck as FactCheckIcon,
  } from '@material-ui/icons';
import SentencingForm from './parts/SentencingForm';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  title: {
    flexGrow: 1,
  },
  main: {
    overflowX: 'hidden',
  },
  formPanel: {
  },
  form: {
    padding: theme.spacing(2),
  },
  fab: {
    margin: theme.spacing(2),
  },
  fabIcon: {
    marginRight: theme.spacing(1),
  },
  contentPanel: {
    padding: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            司法院量刑系統
          </Typography>
          <IconButton aria-label="問題回報" color="inherit">
            <FeedbackIcon />
          </IconButton>
          <IconButton aria-label="使用說明" color="inherit">
            <HelpIcon />
          </IconButton>
          <Divider />
          <IconButton aria-label="開啟功能表" color="inherit">
            <AccountIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container component="main" className={classes.main}>
        <Grid item xs={12} md={6} className={classes.formPanel}>
          <Paper elevation={3} className={classes.form}>
            <SentencingForm />
          </Paper>
          <Fab color="secondary" variant="extended" className={classes.fab}>
            <FactCheckIcon className={classes.fabIcon} />
            計算
          </Fab>
        </Grid>
        <Grid item xs={12} md={6} className={classes.contentPanel}>
          Content
        </Grid>
      </Grid>
    </div>
  );
}
