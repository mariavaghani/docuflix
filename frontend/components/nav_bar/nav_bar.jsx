import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { DocuflixLogo } from '../ui_elements/docuflix_logo';

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
      <nav className="browse-nav">
        <DocuflixLogo logoClass={"docuflix-logo"}/>
        <p>Hello, {currentUser.email}</p>
        <button 
          onClick={this.handleLogout}
          className="docuflix-btn"
        >
            Logout
          </button>
      </nav>
    )
  }
}

export default withRouter(NavBar)
