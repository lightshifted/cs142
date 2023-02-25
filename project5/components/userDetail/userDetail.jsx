import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography, Card, CardContent, CardHeader
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
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.setState({
        userDetails: cs142models.userModel(this.props.match.params.userId)
      });
    }
  }

  render() {
    const { userDetails } = this.state;
    return (
      <div>
      <Card>
        <CardHeader title="User Details" />
          <CardContent>
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
            <Typography variant="body1">
              <Link to={`/photos/${userDetails._id}`}>
                View Photos
              </Link>
            </Typography>
        </CardContent>
      </Card>
      </div>
    );
  }
}

export default UserDetail;
