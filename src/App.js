import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import { Toolbar, IconButton, Typography } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { Menu as MenuIcon, Feedback as FeedbackIcon, Help as HelpIcon, List as ListIcon, Spellcheck as FactCheckIcon } from '@material-ui/icons';

export default function App() {
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
      <main>
        <Container>
          <Typography paragraph><br/><br/><br />Hello, world!</Typography>
          <Button variant="contained">OK</Button>
        </Container>
        <Fab color="secondary" variant="extended">
          <FactCheckIcon />
          計算
        </Fab>
      </main>
    </div>
  );
}
