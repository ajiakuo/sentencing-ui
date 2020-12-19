import { React, Component } from 'react';
import { Avatar, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import {
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank as UncheckedBoxIcon,
  Feedback as FeedbackIcon,
  Help as HelpIcon,
  MoreVert as MoreIcon,
  Person as PersonIcon,
  } from '@material-ui/icons';


class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null, loggedIn: true };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleUserItemClick = this.handleUserItemClick.bind(this);
    this.handleFilterItemClick = this.handleFilterItemClick.bind(this);
    this.handleHelpItemClick = this.handleHelpItemClick.bind(this);
    this.handleFeedbackItemClick = this.handleFeedbackItemClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleButtonClick(e) {
    this.setState({ anchorEl: e.currentTarget });
  }

  handleUserItemClick() {
    this.setState({ loggedIn: !this.state.loggedIn });
  }

  handleFilterItemClick() {
    // Use props showFilter and onShowFilterChanged
    this.onShowFilterChanged(!this.props.showFilter);
    this.handleMenuClose();  // Should we close menu for this one?
  }

  handleHelpItemClick() {
    this.handleMenuClose();
  }

  handleFeedbackItemClick() {
    window.open("https://www.judicial.gov.tw", "_blank");
    this.handleMenuClose();
  }

  handleMenuClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const anchorOrigin = { vertical: 'top', horizontal: 'right'};
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
          anchorOrigin={anchorOrigin} transformOrigin={transformOrigin} getContentAnchorEl={null}
          open={Boolean(this.state.anchorEl)} onClose={this.handleMenuClose}>
          <MenuItem onClick={this.handleUserItemClick}>
            <ListItemIcon>
              <Avatar>{ this.state.loggedIn ? "陳" : <PersonIcon /> }</Avatar>
            </ListItemIcon>
            <ListItemText
              primary={this.state.loggedIn ? "陳小林" : "訪客使用者"}
              secondary={this.state.loggedIn ? "sl;chen@judicial;gov;tw".replace(/;/g, '.') : "按一下以登入"} />
          </MenuItem>
          <Divider />
          <MenuItem onClick={this.handleFilterItemClick} disabled>
            <ListItemIcon>
              { this.props.showFilter ? <CheckBoxIcon color="secondary" /> : <UncheckedBoxIcon /> }
            </ListItemIcon>
            <ListItemText primary="顯示修正前條文" />
          </MenuItem>
          <MenuItem onClick={this.handleHelpItemClick}>
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary="使用說明" />
          </MenuItem>
          <MenuItem onClick={this.handleFeedbackItemClick}>
            <ListItemIcon><FeedbackIcon /></ListItemIcon>
            <ListItemText primary="回報問題" />
          </MenuItem>
        </Menu>
      </>
    );
  }
}

export default AppMenu;
