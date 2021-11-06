import React, { Component } from 'react'
import { connect } from 'react-redux'
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
          <div className="login-box div-40">
            <div className="div-80">
              <LoginFormContainer />
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
