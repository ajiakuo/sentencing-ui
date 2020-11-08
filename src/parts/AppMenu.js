import { React, Component } from 'react';
import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import {
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank as UncheckedBoxIcon,
  Feedback as FeedbackIcon,
  Help as HelpIcon,
  MoreVert as MoreIcon,
  } from '@material-ui/icons';


class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null, showFilter: false };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleFilterItemClick = this.handleFilterItemClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleButtonClick(e) {
    this.setState({ anchorEl: e.currentTarget });
  }

  handleFilterItemClick() {
    this.setState({ showFilter: !this.state.showFilter });
    this.handleMenuClose();  // Should we close menu for this one?
  }

  handleMenuClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const anchorOrigin = { vertical: 'bottom', horizontal: 'right'};
    const transformOrigin = { vertical: 'top', horizontal: 'right'};

    return (
      <>
        <IconButton
          aria-controls="menu" aria-haspopup="true"
          aria-label="開啟功能表" color="inherit" onClick={this.handleButtonClick}>
          <MoreIcon />
        </IconButton>
        <Menu
          id="menu" keepMounted anchorEl={this.state.anchorEl}
          anchorOrigin={anchorOrigin} transformOrigin={transformOrigin}
          open={Boolean(this.state.anchorEl)} onClose={this.handleMenuClose}>
          <MenuItem onClick={this.handleFilterItemClick}>
            <ListItemIcon>
              { this.state.showFilter ? <CheckBoxIcon /> : <UncheckedBoxIcon /> }
            </ListItemIcon>
            <ListItemText primary="顯示修正前條文" />
          </MenuItem>
          <Divider />
          <MenuItem onClick={this.handleMenuClose}>
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary="使用說明" />
          </MenuItem>
          <MenuItem onClick={this.handleMenuClose}>
            <ListItemIcon><FeedbackIcon /></ListItemIcon>
            <ListItemText primary="回報問題" />
          </MenuItem>
        </Menu>
      </>
    );
  }
}

export default AppMenu;
