import React from 'react';
import { Link } from "react-router-dom";

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { currentUser, logout } = this.props;

  

    return (
      <div>
        <p>Hello, {currentUser.email}</p>
        <button onClick={logout}>Logout</button>
      </div>
    )
  }
}