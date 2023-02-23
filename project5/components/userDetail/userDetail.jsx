import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography
} from '@mui/material';
import './userDetail.css';


/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: cs142models.userModel(props.match.params.userId),
    };
    console.log('userDetails Test', this.state.userDetails)
  }

  render() {
    const { userDetails } = this.state;
    return (
      <div>
      <Typography variant="h6">
        User Details:
      </Typography>
      <Typography variant="body1">
        Name: {userDetails.first_name} {userDetails.last_name}
      </Typography>
      <Typography variant="body1">
        Location: {userDetails.location}
      </Typography>
      <Typography variant="body1">
        Description: {userDetails.description}
      </Typography>
      <Typography variant="body1">
        Occupation: {userDetails.occupation}
      </Typography>
      <Link to={`/photos/${userDetails._id}`}>
        View Photos
      </Link>
      </div>
    );
  }
}

export default UserDetail;
