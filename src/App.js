import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles';
import { Toolbar, IconButton, Typography } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { Menu as MenuIcon, Feedback as FeedbackIcon, Help as HelpIcon, List as ListIcon, Spellcheck as FactCheckIcon } from '@material-ui/icons';
import SentencingForm from 'parts/SentencingForm';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton aria-label="開啟功能表" edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>量刑系統</Typography>
          <IconButton aria-label="問題回報" color="inherit">
            <FeedbackIcon />
          </IconButton>
          <IconButton aria-label="使用說明" color="inherit">
            <HelpIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" anchor="right">
        <List>
          {['Lorem', 'Ipsum', 'Dolor', 'Amet'].map((text, _index) => (
            <ListItem button key={text}>
              <ListItemIcon><ListIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <Divider />
        </List>
      </Drawer>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12} md={6} component={SentencingForm} />
        <Grid item xs={12} md={6}>
          <Fab color="secondary" variant="extended">
            <FactCheckIcon />
            計算
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}
