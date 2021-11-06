import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { DocuflixLogo } from '../ui_elements/docuflix_logo';
import ProfileDropdownContainer from '../ui_elements/profile_dropdown';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

 

  render() {

    const { currentUser, logout } = this.props;
    return (
      <nav className="browse-nav">
        <DocuflixLogo logoClass={"docuflix-logo"}/>
        <p>Hello, {currentUser.email}</p>
        <ProfileDropdownContainer
          btnClass="docuflix-btn"
          dropClass="contact-drpdwn"/>
      </nav>
    )
  }
}

export default NavBar;
