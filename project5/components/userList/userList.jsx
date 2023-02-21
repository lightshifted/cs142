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
    console.log('cs142models.userListModel', cs142models.userListModel())
    this.state = {
      userList: cs142models.userListModel(),
      selectedUserId: null
    };
  }

  handleUserClick = (userId) => {
    this.setState({ selectedUserId: userId });
  };

  render() {
    const { userList, selectedUserId } = this.state;
    return (
      <div>
      <List component="nav">
        {userList.map(user => (
          <div key={user._id}>
            <ListItem button onClick={() => this.handleUserClick(user._id)}>
              <ListItemText primary={`${user.first_name} ${user.last_name}`}/>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      <div>
        {selectedUserId && (
          <Typography variant="body1">
            Location: {userList.find(user => user._id === selectedUserId).location}<br/>
            <br/>Occupation: {userList.find(user => user._id === selectedUserId).occupation}<br/>
            <br/>Description: {userList.find(user => user._id === selectedUserId).description}
          </Typography>
        )}
      </div>
      </div>
    );
  }
}

export default UserList;
