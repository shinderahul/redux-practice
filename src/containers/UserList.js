import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class UserList extends Component {

  render() {
    return (
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    );
  }

}

export default UserList;
