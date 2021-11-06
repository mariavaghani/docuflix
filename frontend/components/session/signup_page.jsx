import React, { Component } from 'react'
import { connect } from 'react-redux';
import SignupFormContainer from "./signup_form_container";
import { Footer } from '../nav_bar/footer';
import { DocuflixLogo } from '../ui_elements/docuflix_logo';
import { Link } from 'react-router-dom';
import { clearSessionErrors } from '../../actions/session_actions';

class SignupPage extends Component {
  render() {
    return (
      <div className="light-mode">
        <nav className="nav-signup">
          <DocuflixLogo logoClass={"docuflix-logo-bg"}/>
          <Link className="docuflix-lnk"
                    to="/login"
                    onClick={ () => this.props.clearSessionErrors() }>
            <h2>Sign In</h2>
          </Link>
        </nav>
        <div className="signup-card div-40">
          <SignupFormContainer />
        </div>
        <div className="signup-footer">
          <Footer />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
