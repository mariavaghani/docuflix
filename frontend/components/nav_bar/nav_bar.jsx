import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { DocuflixLogo } from '../ui_elements/docuflix_logo';
import ProfileDropdownContainer from '../ui_elements/profile_dropdown';
import SearchContainer from './search';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarClass: "nav-init"
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    if (window.scrollY > 50 & window.scrollY < 100) this.setState({navbarClass: "nav-window"})
    if (window.scrollY < 50 ) this.setState({navbarClass: "nav-init"})
    
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }
    
  render() {
    
    
    
    const { currentUser, logout } = this.props;
    return (
      <nav className={"browse-nav " + this.state.navbarClass}>
        <DocuflixLogo logoClass={"docuflix-logo"}/>
        <h5>Hello, {currentUser.email}</h5>
        <SearchContainer />
        <ProfileDropdownContainer
          btnClass="docuflix-btn"
          dropClass="profile-dropdown"/>
      </nav>
    )
  }
}

export default NavBar;
