import React from 'react';
import {
  AppBar, Divider, Fab, Grid, IconButton, Paper, Toolbar, Typography
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  AccountCircle as AccountIcon,
  Feedback as FeedbackIcon,
  Help as HelpIcon,
  } from '@material-ui/icons';
import CalculateButton from './parts/CalculateButton';
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
    minHeight: 'calc(100vh - 64px)',
  },
  formPanel: {
  },
  form: {
    padding: theme.spacing(2),
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
          <CalculateButton />
        </Grid>
        <Grid item xs={12} md={6} className={classes.contentPanel}>
          <Paper elevation={1}>
            <Typography variant="h4">2 年 9 個月</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
