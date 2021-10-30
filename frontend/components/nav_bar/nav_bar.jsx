import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout () {
    console.log(`this.props: `, this.props);
    
    this.props.logout()
      .then((e) => this.props.history.push({ pathname: "/" }));
  }

  render() {

    const { currentUser, logout } = this.props;
    return (
      <div>
        <p>Hello, {currentUser.email}</p>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}

export default withRouter(NavBar)
