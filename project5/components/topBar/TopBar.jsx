import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, MenuItem
} from '@mui/material';
import './TopBar.css';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      path: this.props.match.path,
      userId: window.cs142models.userModel(props.match.params.userId)
    };
    console.log('test', this.state.userId);
  }

  render() {
    let text = "";
    const { userId } = this.state;
    if (this.state.path === "/users/:userId") {
      text = `${userId.first_name} ${userId.last_name}`;
    } else if (this.state.path === "/photos/:userId") {
      text = `Photos of ${userId.first_name} ${userId.last_name}`;
    }

    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit" style={{ flexGrow: 1}}>
              Jason Wheeler
          </Typography>
          <Typography variant="body1" color="inherit">
            { text }
          </Typography>
          <MenuItem component={Link} to="/">Home</MenuItem>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
