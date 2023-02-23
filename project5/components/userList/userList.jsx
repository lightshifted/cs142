import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@mui/material';
import './userList.css';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: cs142models.userListModel(),
      selectedUserId: null
    };
  }

  handleUserClick = (userId) => {
    this.setState({ selectedUserId: userId });
  }

  render() {
    const { userList, selectedUserId } = this.state;
    return (
      <div>
        <List component="nav">
          {userList.map(user => (
            <div key={user._id}>
              <ListItem button onClick={() => this.handleUserClick(user._id)}>
                {selectedUserId !== user._id ? (
                  <ListItemText
                    primary={
                      <Typography variant="body1">
                        {`${user.first_name} ${user.last_name}`}
                      </Typography>
                    }
                  />
                ) : (
                  <div>
                    <Typography variant="body2">{`Location: ${user.location}`}</Typography>
                    <Typography variant="body2">{`Occupation: ${user.occupation}`}</Typography>
                    <Typography variant="body2">{`Description: ${user.description}`}</Typography>
                  </div>
                )}
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    );
  }
}



export default UserList;
