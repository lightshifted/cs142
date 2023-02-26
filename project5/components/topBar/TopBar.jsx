import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, MenuItem, FormControlLabel, Checkbox
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import './TopBar.css';
import fetchModel from '../../lib/fetchModelData';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: this.props.match.path,
      version : '',
      advancedFeaturesEnabled: false,
    };
  }

  componentDidMount() {
    this.getVersion();
    this.getUserDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.getUserDetails();
    }
  }

  getVersion() {
    fetchModel('/test/info')
      .then((response) => {
        let version = response.data.__v;
        this.setState({ version: version });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  getUserDetails() {
    let userId = this.props.match.params.userId;
    fetchModel(`/user/${userId}`)
      .then((response) => {
        let userDetails = response.data;
        this.setState({ userId: userDetails });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ userId: null });
      });
  }

  handleCheckBoxChange = (event) => {
    this.setState({ advancedFeaturesEnabled: event.target.checked });
  };

  render() {
    let text = "";
    const { userId } = this.state;

    if (this.state.path === "/users/:userId") {
      text = userId ? `${userId.first_name} ${userId.last_name}` : '';
    } else if (this.state.path === "/photos/:userId") {
      text = userId ? `Photos of ${userId.first_name} ${userId.last_name}` : '';
    }

    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit" style={{ flexGrow: 1}}>
              Jason Wheeler v.{this.state.version}
          </Typography>
          <FormControlLabel
            control={
              <Checkbox 
                checked={this.state.advancedFeaturesEnabled}
                onChange={this.handleCheckBoxChange}
                name="advancedFeaturesEnabled"
                color="primary"
                icon={<CheckBoxOutlineBlankIcon style={{color: 'black'}}/>}
                checkedIcon={<CheckBoxIcon style={{color: 'white'}} />}
                style={{ color: 'black'}}
              />
            }
            label="Enable Advanced Features"
          />
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