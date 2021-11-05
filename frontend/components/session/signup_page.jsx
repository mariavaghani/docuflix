import React, { Component } from 'react'
import { connect } from 'react-redux';
import SignupFormContainer from "./signup_form_container";
import { Footer } from '../nav_bar/footer';
import { DocuflixLogo } from '../ui_elements/docuflix_logo';
import { Link } from 'react-router-dom';

export class SignupPage extends Component {
  render() {
    return (
      <div className="light-mode-signup">
        <nav className="nav-signup">
          <DocuflixLogo logoClass={"docuflix-logo-bg"}/>
          <Link to="/login" className="docuflix-lnk"><h2>Sign In</h2></Link>
        </nav>
        <div className="signup-card">
          <SignupFormContainer />
        </div>
        <div className="signup-footer">
          <Footer />
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
