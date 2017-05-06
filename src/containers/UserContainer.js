import React, {Component} from 'react';
import { updateList,  findById } from '../Commons';

import '../styles.css'
class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {},
      inputText: ''
    };
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      const newId = this.props.generateId();
      const newUser = {id:newId, name: e.target.value, isActive:true}

      this.props.updateState(state =>({
           users: [...state.users, newUser]
       }));


      this.setState({newUser: newUser, inputText:''});

    }
  };

  handleInputChange = e => {
    this.setState({inputText: e.target.value})
  }

  handleUserChange = e => {
    const {users} = this.props.getState();
    const userId = parseInt(e.target.value);
    const user = findById(userId, users);
    const updatedUser = ({...user, isActive: !user.isActive});
    const updatedList = updateList(users, updatedUser);

    this.props.updateState(state => ({
      users: [...updatedList]
    }));

  }

  render() {
    const state = this.props.getState('users');
    return (
      <Users

        />
    )
  }
}

export default UsersContainer;