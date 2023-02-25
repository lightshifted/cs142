import React from 'react';
import { withRouter } from 'react-router-dom';
import {Typography, Card, CardContent, CardHeader } from '@mui/material';
import './userPhotos.css';


/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    const photos = window.cs142models.photoOfUserModel(userId);

    this.setState({ photos: photos });
    }

  render() {
    const userId = this.props.match.params.userId;

    return (
      <div>
        <Typography variant="h6">
          Photos of user {userId}:
        </Typography>

        {this.state.photos && this.state.photos.map((photo) => (
          <div key={photo._id}>
            <img src={"/images/" + photo.file_name} alt={photo.file_name} />

            <Typography variant="subtitle1">
              Creation date/time: {new Date(photo.date_time).toLocaleString()}
            </Typography>

            <Card>
              <CardHeader title="Comments" />

              <CardContent>
                {photo.comments && photo.comments.map((comment) => (
                  <div key={comment._id}>
                    <Typography variant="subtitle2">
                      <a href={"/photo-share.html#/users/" + comment.user._id}>
                        {comment.user.first_name} {comment.user.last_name}
                      </a>
                      <span> - {new Date(comment.date_time).toLocaleString()}</span>
                    </Typography>

                    <Typography variant="body1">
                      {comment.comment}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        ))}
        {!this.state.photos && (
          <Typography variant="body1">
            No photos found for user {userId}.
          </Typography>
        )}
      </div>
    );
  }
}

export default UserPhotos;