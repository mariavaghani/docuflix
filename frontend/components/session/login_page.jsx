import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Footer } from '../nav_bar/footer';
import { DocuflixLogo } from '../ui_elements/docuflix_logo';
import LoginFormContainer from "./login_form_container";

export class LoginPage extends Component {
  render() {
    return (
      <div>
        <nav className="nav-login">
          <DocuflixLogo logoClass={"docuflix-logo-bg"}/>
        </nav>
        <div className="splash-card-main card div-100">
          
          <div className="login-box div-40 div-flex-column">
            <div className="div-80">
              <LoginFormContainer />
            </div>
            <div className="div-flex mt-30 align-center">
              New to Docuflix?
              <Link to="/signup" className="pad-l-10 fw-600">Sign Up Now</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
