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
    this.state = { anchorEl: null };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleFilterItemClick = this.handleFilterItemClick.bind(this);
    this.handleHelpItemClick = this.handleHelpItemClick.bind(this);
    this.handleFeedbackItemClick = this.handleFeedbackItemClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleButtonClick(e) {
    this.setState({ anchorEl: e.currentTarget });
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
    // Well, we’re just doing our part. Don’t nag us for model inaccuracies.
    window.open("https://github.com/rschiang/sentencing-ui/issues", "_blank");
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
          <MenuItem onClick={this.handleFilterItemClick} disabled>
            <ListItemIcon>
              { this.props.showFilter ? <CheckBoxIcon color="secondary" /> : <UncheckedBoxIcon /> }
            </ListItemIcon>
            <ListItemText primary="顯示修正前條文" />
          </MenuItem>
          <Divider />
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
