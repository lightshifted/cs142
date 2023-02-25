import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
}
from '@mui/material';
import './userList.css';
import fetchModel from '../../lib/fetchModelData';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList() {
    fetchModel('/user/list')
      .then((response) => {
        let userList = response.data;
        this.setState({ userList : userList });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handleClick = (userId) => {
    this.props.history.replace(`/users/${userId}`);
  };

  render() {
    const { userList } = this.state;
    return (
      <div>
        <List component="nav">
          {userList.map(user => (
            <div key={user._id}>
                <ListItem button onClick={() => this.handleClick(user._id)}>
                  <ListItemText primary={`${user.first_name} ${user.last_name}`} />
                </ListItem>
                <Divider />
            </div>
          ))}
        </List>
      </div>
    );
  }
}

export default withRouter(UserList);
